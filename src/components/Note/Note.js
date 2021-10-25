import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { useState } from 'react/cjs/react.development';
import AddNote from '../AddNote/AddNote';

const Note = ({ note, handleDeleteNote, handleUpdateNote }) => {
  const { id, text, category, date } = note;
  const [edit, setEdit] = useState(false);
  return (
    <>
      {edit
        ? <AddNote 
        editNote={note} 
        setEdit={setEdit}
        handleUpdateNote={handleUpdateNote}
        />
        : <div className="bg-yellow-200 border rounded-lg p-4 min-h-note min-w-note flex flex-col justify-between whitespace-pre-wrap">

          {/* note body */}
          <div>
            <button className="w-full flex justify-end">
              <BiEdit size='1.3em' onClick={() => setEdit(true)} />
            </button>
            <span>{text}</span>
          </div>

          {/* note footer */}
          <div className="w-full flex items-center justify-between">
            <small>{date}</small>
            <small><span className="text-blue-500 font-bold uppercase">Category:</span> {category}</small>
            <button onClick={() => handleDeleteNote(id)}><MdDeleteForever size='1.5em' /></button>
          </div>
        </div>
      }
    </>
  );
};

export default Note;