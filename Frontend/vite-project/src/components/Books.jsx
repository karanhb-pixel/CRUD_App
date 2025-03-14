import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  //function for deleting the book
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
      //window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  //this will run one time to fetch all the books from the books table when books component is mounted
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/books");
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          console.error("Fetched data is not an array");
          //console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div className="main">
      <div className="head">
        <h1>Book Shop</h1>
        <div className="addButton">
          <Link className="button formbutton buttonHover" to="/add">
            Add Book
          </Link>
        </div>
      </div>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <div className="data">
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <span>{book.price}</span>
            </div>
            <Link
              className="button update buttonHover"
              to={`./update/${book.id}`}
            >
              Update
            </Link>
            <button
              className="button delete buttonHover"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
