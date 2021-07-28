import React , {useState, useEffect} from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Notes } from './Notes'
import axios from 'axios'
import { CreateArea } from './CreateArea'


export const Main = () => {
    const [showAddNote, setShowAddNote] = useState(false)
    const [notes, setNotes] = useState([])
    
    useEffect(()=>{
        const getNotes = () => {
            axios.get(`https://notes-app-rudrakshi.herokuapp.com/api/notes/`)
            .then((res)=>{ setNotes(res.data)})
            .catch(err=>console.log(err))
        }
        
        getNotes()
    },[])
    
    function addNote(){}
    
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            <Notes notes={notes} />
            <Footer />
        </div>
    )
}
