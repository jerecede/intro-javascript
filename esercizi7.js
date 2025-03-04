// gestione biblioteca
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toStringBook() {
        const bookStr = `Titolo: ${this.title}
Autore: ${this.author}
Codice ISBN: ${this.isbn}`
        return bookStr;
    }
}

class PhysicalBook extends Book {
    constructor(title, author, isbn, shelfLocation = 0) {
        super(title, author, isbn);
        this.shelfLocation = shelfLocation;
        this.lastShelfLocation = 0;
    }

    toString() {
        const physBookStr = `${super.toString()}
Scaffale: ${this.shelfLocation}`
        return physBookStr;
    }
}

class EBook extends Book {
    constructor(title, author, isbn, fileExtension) {
        super(title, author, isbn);
        this.fileExtension = fileExtension;
    }

    toString() {
        const eBookStr = `${super.toString()}
Formato: ${this.fileExtension}`
        return eBookStr;
    }
}

class User {
    static maxBorrowLimit = 3;
    constructor(name, id, borrowedBooks = []) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

    toStringUser() {
        const userStr = `Nome: ${this.name}
Id: ${this.id}
Libri in prestito: ${this.borrowedBooksNumber}`
        return userStr;
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= User.maxBorrowLimit) {
            return "Hai raggiunto il limite massimo di libri in prestito";
        }

        if (book instanceof PhysicalBook && book.shelfLocation === 0) {
            return "Il libro non è disponibile";
        }

        book.lastShelfLocation = book.shelfLocation;
        book.shelfLocation = 0;
        this.borrowedBooks.push(book);
        return "Hai ritirato il libro";
        
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index >= 0) {
            book.shelfLocation = book.lastShelfLocation;
            this.borrowedBooks.splice(index, 1);
            return "Hai restituito il libro" ;
        }
        return "Il libro non è stato trovato tra i libri in prestito";
    }

    get borrowedBooksNumber() {
        return this.borrowedBooks.length;
    }
}

class PremiumUser extends User {
    constructor(name, id, borrowedBooks) {
        super(name, id, borrowedBooks);
    }

    extendsMaxBorrowLimit(newLimit) {
        if (newLimit > 3){
            User.maxBorrowLimit = newLimit;
        }
    }
}

class Library {
    constructor(books=[], users=[]){
        this.books = books;
        this.users = users;
        this.#assignShelfLocation(this.books);
    }

    #assignShelfLocation(books){
        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            book.shelfLocation = i + 1;
        }
    }

    addBook(book){
        book.shelfLocation = this.books.length;
        this.books.push(book);
    }

    removeBook(book){
        const index = this.books.indexOf(book);
        if (index >= 0) {
            this.books.splice(index, 1);
            this.#assignShelfLocation(this.books);
            console.log(`Hai rimosso il libro ${book.title} dalla libreria`);
        } else {
            console.log("Non hai trovato il libro, scemo!");
        }
    }

    isBookAvailable(isbn) {
        return this.books.some(book => book.isbn === isbn);
    }

    addUser(user){
        this.users.push(user);
    }

    removeUser(user){
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
            console.log(`Hai rimosso l'utente ${user.name} dalla lista`);
        } else {
            console.log("L'utente richiesto non esiste!");
        }
    }

    listBooks() {
        let listBooksString = "Elenco dei libri in biblioteca:\n";
        this.books.forEach((book, index) => {
            listBooksString += `${index + 1}) ${book.toStringBook()}\n`;
        });
        console.log(listBooksString);
    }

    listUsers() {
        let listUsersString = "Elenco degli utenti registrati:\n";
        this.users.forEach((user, index) => {
            listUsersString += `${index + 1}) ${user.toStringUser()}\n`;
        });
        console.log(listUsersString);
    }

    borrowBook(user, book){
        if(this.isBookAvailable(book.isbn)){
            user.borrowBook(book);
        } else {
            console.log('il libro non è disponibile!');
        }
    }

    returnBook(user, book){
        const index = user.borrowedBooks.indexOf(book);
        if(index >= 0){
            user.returnBook(book);
        } else {
            console.log("l'utente non ha il libro");
        }
    }
}