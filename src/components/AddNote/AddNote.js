import React, { useState } from 'react';

const AddNote = ({ handleAddNote, editNote, setEdit, handleUpdateNote }) => {
  const [noteText, setNoteText] = useState('');
  const [category, setCategory] = useState('');
  const highestCharacter = 200;

  const handleChange = (e) => {
    if (highestCharacter - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }

  const saveCategory = (e) => {
    if (20 - e.target.value.length >= 0) {
      setCategory(e.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0 && handleAddNote) {
      handleAddNote(noteText, category);
      setNoteText('');
      setCategory('');
    }
    else if (handleUpdateNote) {
      handleUpdateNote(editNote.id, noteText, category);
      setEdit(false)
    }
  }
  return (
    <div className="bg-green-200 border rounded-lg p-4 min-h-note min-w-note flex flex-col justify-between">
      <textarea
        name="text"
        cols="10"
        rows="8"
        placeholder="Write a new note..."
        value={noteText || editNote?.text}
        onChange={handleChange}
        className="bg-green-200 outline-none resize-none placeholder-gray-400 focus:placeholder-green-200"
      />
      <label className="text-blue-500 font-bold uppercase">Category:</label>
      <input
        type="text"
        placeholder='write a category'
        className="p-1 w-full outline-none bg-green-100 text-black placeholder-gray-400 focus:placeholder-opacity-0 rounded-lg"
        value={category || editNote?.category}
        onChange={saveCategory}
      />
      <div className="w-full mt-4 flex items-center justify-between">
        <small>{highestCharacter - noteText.length} words remaining</small>

        <button className="bg-gray-400 hover:bg-gray-600 text-white border rounded-md pl-4 pr-4" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;