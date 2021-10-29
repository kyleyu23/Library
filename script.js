function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read;
}

function getInput() {
    if (titleElement.value === '' || authorElement.value === '' || pagesElement.value === '' || readElement.value === '') {
        return;
    }

    return [titleElement.value, authorElement.value, pagesElement.value, readElement.value]

}

function updateTable(bookValues) {
    const rowElement = document.createElement('tr')

    //set index of this book relative to myLibrary
    const bookIndexInLibrary = myLibrary.length - 1;
    rowElement.dataset.index = bookIndexInLibrary;

    //create row, but not including readStatus
    for (let index = 0; index < bookValues.length - 1; index++) {
        const cellElement = document.createElement('td');
        cellElement.textContent = bookValues[index];
        rowElement.appendChild(cellElement);
    }
    booksTable.appendChild(rowElement);

    //create readButton
    const readButton = document.createElement('button');
    readButton.innerText = bookValues[bookValues.length - 1];
    rowElement.appendChild(readButton);
    readButton.addEventListener('click', () => {
        if (readButton.innerText === 'Read') {
            readButton.innerText = 'Not Read';
        } else {
            readButton.innerText = 'Read';
        }
    })

    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    rowElement.appendChild(deleteButton);
    deleteButton.addEventListener('click', bookIndexInLibrary => {
        removeBook(bookIndexInLibrary);
        deleteButton.parentNode.innerHTML = '';
    })

}

function addBookToLibrary(bookValues) {
    myLibrary.push(new Book(bookValues));
}

function removeBook(index) {
    myLibrary.splice(index, 1)
}

function clearInput() {
    titleElement.value = '';
    authorElement.value = '';
    pagesElement.value = '';
}





let myLibrary = [];

const booksTable = document.querySelector('[data-table-body]');

const addBookButton = document.querySelector('#add-book');

const titleElement = document.querySelector('[data-title]')
const authorElement = document.querySelector('[data-author]')
const pagesElement = document.querySelector('[data-pages]')
const readElement = document.querySelector('[data-read]')

addBookButton.addEventListener('click', () => {
    const bookValues = getInput();
    clearInput();
    if (!bookValues) {
        alert("Please enter all fields")
        return;
    }
    addBookToLibrary(bookValues);
    updateTable(bookValues);
})
