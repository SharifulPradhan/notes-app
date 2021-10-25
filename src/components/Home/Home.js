import React, { useEffect, useState } from 'react';
import Noteslist from '../Noteslist/Noteslist';
import { nanoid } from 'nanoid';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';

const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'sample note',
      category: 'Daily Notes',
      date: '10/10/21'
    }
  ])
  

  // getting and saving data in Local Storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes])


  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  }

  // CRUD Operation Functionlity
  // Create Note 
  const addNote = (text, category) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      category: category,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // Delete Note 
  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }


  // Update Note
  const updateNote = (id, text, category) => {
    const date = new Date();
    let noteToUpdate = notes.find(note => note.id === id)

    if (noteToUpdate && text) {
      console.log('before', noteToUpdate.text);
      noteToUpdate.text = text;

      console.log('after', noteToUpdate.text);

      console.log('before', noteToUpdate.category);
      noteToUpdate.category = category;

      console.log('after', noteToUpdate.category);


      noteToUpdate.date = date.toLocaleDateString();
      setNotes(notes);
      console.log(notes);
    }
  };

  return (
    <div className="container pl-4 pr-4 mx-auto">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <Noteslist
        notes={notes.filter(note => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleUpdateNote={updateNote}
      />
    </div>
  );
};

export default Home;