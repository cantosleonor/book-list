import React, { useState, useEffect } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";
import "./App.css";

const Books = () => {
  const [books, setBooks] = useState([
    {
      title: "Book 1",
      author: "John",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Book 2",
      author: "Jane",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Book 3",
      author: "Mike",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Book 4",
      author: "Lisa",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Book 5",
      author: "John",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Book 6",
      author: "Jane",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    { title: "Book 7", author: "Mike", dueDate: "", status: "Available" },
    { title: "Book 8", author: "Lisa", dueDate: "", status: "Available" },
    { title: "Book 9", author: "John", dueDate: "", status: "Available" },
    { title: "Book 10", author: "Jane", dueDate: "", status: "Available" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  function getRandomDueDate() {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + randomDays);
    return dueDate.toISOString().split("T")[0];
  }

  useEffect(() => {
    filterBooks(searchQuery);
  }, [searchQuery, books]);

  const filterBooks = (query) => {
    if (!query) {
      setFilteredBooks(books);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(lowercasedQuery) ||
          book.author.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredBooks(filtered);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleStatus = (index) => {
    const updatedBooks = [...filteredBooks];
    updatedBooks[index].status =
      updatedBooks[index].status === "Checked Out"
        ? "Available"
        : "Checked Out";
    updatedBooks[index].dueDate =
      updatedBooks[index].status === "Checked Out" ? getRandomDueDate() : "";
    setBooks((prevBooks) =>
      prevBooks.map((book, i) =>
        i === books.findIndex((b) => b.title === updatedBooks[index].title)
          ? updatedBooks[index]
          : book
      )
    );
  };

  return (
    <div className="container">
      <h1>Books List</h1>
      <SearchFilter searchQuery={searchQuery} handleSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index + 1}
              book={book}
              toggleStatus={() => toggleStatus(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;