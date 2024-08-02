import React from "react";

const Book = ({ index, book, toggleStatus }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.status === "Checked Out" ? book.dueDate : "N/A"}</td>
      <td>{book.status}</td>
      <td>
        <button onClick={toggleStatus}>Toggle Status</button>
      </td>
    </tr>
  );
};

export default Book;