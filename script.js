function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read;
}

function addNewBook(Book) {
    myLibrary.push(Book);
}

function displayBooks(books) {
    // [{}] -> [[]]
    const rows = books.map(book => [...Object.values(book)]);

    //[[]] -> [] ; rows
    for (let index = 0; index < rows.length; index++) {
        const row = rows[index]
        //[] -> '' ; row cells
        appendRow(row);
    }

}

function removeBook() {

}

function toggleReadStatus() {

}

let myLibrary = [];

function addSampleBooks() {
    const sample_book1 = new Book("sample1", "author", 255, false);
    const sample_book2 = new Book("sample2", "author", 255, false);
    const sample_book3 = new Book("sample3", "author", 255, false);

    addNewBook(sample_book1);
    addNewBook(sample_book2);
    addNewBook(sample_book3);
}

const booksTable = document.querySelector('[data-table-body]');

function appendRow(rowCellsData) {
    const rowElement = document.createElement('tr')
    for (let index = 0; index < rowCellsData.length; index++) {
        const cellData = rowCellsData[index];

        const cellElement = document.createElement('td');
        cellElement.textContent = cellData;

        rowElement.appendChild(cellElement)
    }
    booksTable.appendChild(rowElement);
}

addSampleBooks();
displayBooks(myLibrary);
