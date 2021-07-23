import { Note } from "./Note";

export const Notes = ({notes}) => {
    return (<>
        {notes.map(note => <Note key={note.id} note={note} />)}
       
    </>)
}

 