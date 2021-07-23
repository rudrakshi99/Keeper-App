import {useState, useEffect} from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Notes } from './Notes'
import axios from 'axios'



export const App = () => {
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

    return (
        <div>
            <Header />
            <Notes notes={notes}/>
            <Footer />
        </div>
    )
}
