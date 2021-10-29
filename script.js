function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read;
}

function addNewBook() {
    //get user input
    const titleElementValue = document.querySelector('[data-title]').value;
    const authorElementValue = document.querySelector('[data-author]').value;
    const pagesElementValue = document.querySelector('[data-pages]').value;
    const readElementValue = document.querySelector('[data-read]').value;
    const bookValues = [titleElementValue, authorElementValue, pagesElementValue, readElementValue]

    updateTable();
    updateLibrary();


    function updateTable() {
        const rowElement = document.createElement('tr')

        for (let index = 0; index < bookValues.length; index++) {
            const cellElement = document.createElement('td');
            cellElement.textContent = bookValues[index];
            rowElement.appendChild(cellElement);
        }
        booksTable.appendChild(rowElement);
    }

    function updateLibrary() {
        myLibrary.push(new Book(bookValues));
    }

}

function removeBook() {

}

function toggleReadStatus() {

}

let myLibrary = [];
const booksTable = document.querySelector('[data-table-body]');
const addBookButton = document.querySelector('[data-add-book]');
addBookButton.addEventListener('click', () => {
    addNewBook();
})
