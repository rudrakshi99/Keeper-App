import { Note } from "./Note";

export const Notes = ({notes , onDelete}) => {
    return (<>
        {notes.map(note => <Note key={note.id}
        onDelete={onDelete}
         note={note} />)}
       
    </>)
}

 