import React from "react";
import BookCreate from "./components/BookCreate";
import { useState } from "react";
const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = title => {
    console.log("Need to add book with:", title);
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
