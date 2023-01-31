import React from "react";
import BookCreate from "./components/BookCreate";
import { useState } from "react";
const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = title => {
    const updatedBooks = [...books, { title: title }];
    setBooks(updatedBooks);
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
