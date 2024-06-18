import React, { useState } from "react";

const BookForm = ({ addBook }) => {
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newBook);
    setNewBook({ title: "", author: "", isbn: "" });
    setShowForm(false);
  };

  return (
    <div className="book-form-container">
      {!showForm && <button className="submitBtn" onClick={() => setShowForm(true)}>Add Book</button>}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={newBook.isbn}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={newBook.genre}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="publicationYear"
            placeholder="Publication Year"
            value={newBook.publicationYear}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="publisher"
            placeholder="Publisher"
            value={newBook.publisher}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="totalCopies"
            placeholder="Total Copies"
            value={newBook.totalCopies}
            onChange={handleChange}
            required
          />
          <button className="submitBtn" type="submit">Add Book</button>
        </form>
      )}
    </div>
  );
};

export default BookForm;
