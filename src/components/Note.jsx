import React from 'react'
import { FaTrash, FaPen } from 'react-icons/fa';

export const Note = ({note}) => {
    console.log(note)
    return (
    
        <div className="note">
            <p className="note-date"> {note.created_at}</p>

            <h1>{note.title}</h1>
            <p>{note.text}</p>
            <div className="note-foot">
                <p>Updated at: {note.updated_at}</p>
                <div className="note-icon">
                    <FaPen />
                    <FaTrash />
                </div>

            </div>
        </div>
    )
}
