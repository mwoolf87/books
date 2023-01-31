import React from "react";
import BookCreate from "./components/BookCreate";
import { useState } from "react";
const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = title => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title
      }
    ];
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };
  const editBook = () => {};
  const deleteBook = () => {};
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
