
type Book ={
    title: string;
    author: string;
    published: number;
}


let library: Book[] = [

    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        published: 1937

    },
    {
        title: "BOOk1",
        author: "Author2",
        published: 2021

    },
    {
        title: "BOOk3",
        author: "Author3",
        published: 2023

    },


]

console.log("My library: ");
library.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.published}`);
});