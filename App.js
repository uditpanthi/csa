import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import ApiService from './Components/ApiService';

function App() {
  const [books,setBooks]=useState([]);
  const [isloading,setIsLoading]=useState(true)

  useEffect(()=>{
    fetchBooks();
  },[]);

  const fetchBooks=async()=>{
    try{
      const booksData =await ApiService.getAllBooks();
      setBooks(booksData);
      setIsLoading(false);
    }catch(error){
      console.error('Error Fetching',error);
    }
  };

  const addBook=async(newBook)=>{
    try{
      const addedBook =await ApiService.addBook(newBook);
      setBooks([...books,addedBook]);
      setIsLoading(false);
    }catch(error){
      console.error('Error adding Book',error);
    }
  };

  const updateBook=async(updatedBook)=>{
    try{
      const updatedBookData =await ApiService.updateBook(updatedBook);
      const updatedBooks=books.map(book=>book.id===updatedBookData.id?updatedBookData:book);
      setBooks(updatedBooks);
    }catch(error){
      console.error('Error Updating Book',error);
    }
  };

  const deleteBook=async(bookId)=>{
    try{
      await ApiService.deleteBook(bookId);
      const updatedBooks=books.filter(book=>book.id!==bookId);
      setBooks(updatedBooks)
    }catch(error){
      console.error('Error Deleting Book',error);
    }
  }


  return (
    <div className='App'>
      <h1>Library Management System</h1>
      <BookForm addBook={addBook}/>
      {isloading ? (
        <p>Loading...</p>
      ):(
        <BookList books={books} updateBook={updateBook} deleteBook={deleteBook}/>
      )}
    </div>
  );
}

export default App;
