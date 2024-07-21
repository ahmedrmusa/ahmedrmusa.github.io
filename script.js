document.addEventListener("DOMContentLoaded", function() {
    fetch('notes/index.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            const notes = extractNoteLinksFromHTML(text);
            const notesContainer = document.getElementById("notes");

            notes.forEach(link => {
                fetch(`notes/${link}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok ' + response.statusText);
                        }
                        return response.text();
                    })
                    .then(text => {
                        const note = parseMarkdown(text);
                        const noteElement = document.createElement("div");
                        noteElement.className = "note";

                        const noteTitle = document.createElement("h2");
                        noteTitle.className = "note-title";
                        noteTitle.textContent = note.title;

                        const noteDate = document.createElement("p");
                        noteDate.className = "note-date";
                        noteDate.textContent = note.date;

                        const noteContent = document.createElement("div");
                        noteContent.innerHTML = marked(note.content);

                        noteElement.appendChild(noteTitle);
                        noteElement.appendChild(noteDate);
                        noteElement.appendChild(noteContent);

                        notesContainer.appendChild(noteElement);
                    })
                    .catch(error => console.error('Error fetching note:', error));
            });
        })
        .catch(error => console.error('Error fetching index:', error));
});

function extractNoteLinksFromHTML(text) {
    const regex = /href="([^"]*\.md)"/g; // Extract links in HTML
    const links = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        links.push(match[1]);
    }
    return links;
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
