import React from 'react';
import Note from '../Note/Note';

import AddNote from '../AddNote/AddNote';

const Noteslist = ({ notes, handleAddNote, handleDeleteNote, handleUpdateNote }) => {
  return (
    <div className="grid gap-4 grid-cols-auto mb-4">
      <AddNote handleAddNote={handleAddNote} />
      {
        notes.map(note => <Note
          note={note}
          key={note.id}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
        />)
      }

    </div>
  );
};

export default Noteslist;