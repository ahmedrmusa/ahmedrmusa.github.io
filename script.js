document.addEventListener("DOMContentLoaded", function() {
    fetch('notes/')
        .then(response => response.text())
        .then(text => {
            const files = extractMarkdownFileNames(text);
            const postsContainer = document.getElementById("posts");
            
            files.forEach(file => {
                fetch(`posts/${file}`)
                    .then(response => response.text())
                    .then(text => {
                        const post = parseMarkdown(text);
                        const postElement = document.createElement("div");
                        postElement.className = "post";

                        const postTitle = document.createElement("h2");
                        postTitle.className = "post-title";
                        postTitle.textContent = post.title;

                        const postDate = document.createElement("p");
                        postDate.className = "post-date";
                        postDate.textContent = post.date;

                        const postContent = document.createElement("div");
                        postContent.innerHTML = marked(post.content);

                        postElement.appendChild(postTitle);
                        postElement.appendChild(postDate);
                        postElement.appendChild(postContent);

                        postsContainer.appendChild(postElement);
                    });
            });
        });
});

function extractMarkdownFileNames(text) {
    // Simple example: Extract Markdown filenames from a directory listing
    const regex = /href="([^"]*\.md)"/g;
    const files = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        files.push(match[1]);
    }
    return files;
}

function parseMarkdown(text) {
    const lines = text.split('\n');
    let metadata = {};
    let content = [];
    let inMetadata = false;

    lines.forEach(line => {
        if (line.trim() === '---') {
            inMetadata = !inMetadata;
        } else if (inMetadata) {
            const [key, value] = line.split(':').map(part => part.trim());
            metadata[key] = value;
        } else {
            content.push(line);
        }
    });

    return {
        title: metadata.title || 'Untitled',
        date: metadata.date || 'Unknown date',
        content: content.join('\n')
    };
}