import React , {useState, useEffect} from 'react'
import { Footer } from './pages/Footer'
import { Header } from './pages/Header'
import { Notes } from './pages/Notes'
import axios from 'axios'
import { CreateArea } from './pages/CreateArea'
import { useHistory } from 'react-router-dom'
import  FormDialog  from './pages/Popup'
import { Loading } from './pages/Loading'

export const Main = () => {
    const history = useHistory()
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const getNotes = () => {
          setIsLoading(false)
          const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access')
          }

            axios.get(`http://127.0.0.1:8000/api/notes/` , {headers} )
            .then((res)=>{ 
              setNotes(res.data)
              setIsLoading(true)
            })
            .catch(err=>console.log(err))
          }
          getNotes()
        
    },[])

    axios.interceptors.response.use(undefined,         
      function axiosRetryInspector(err)  {
          const refreshToken = localStorage.getItem('refresh')
          console.log(refreshToken)
          if (err.response.status === 401 && refreshToken) {
            console.log("ooo")
            axios.post(`http://localhost:8000/api/accounts/token/refresh/`, {
              refresh: refreshToken
            })
              .then((res) => res.data)
              .then((res) => {
                
                // console.log(err.config)
                err.config.headers['Authorization'] = 'Bearer ' + res.access;
                localStorage.setItem('access', res.access)
                return axios.request(err.config);

              })
              
          } else if(err.response.status === 400) {    
              history.push("/")
          }
    
          return Promise.reject(err)
        }            
      );
      
    
      const addNote = (note) => {
        // console.log("fffffff")    
        setIsLoading(false)    
        const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access')
        }
        console.log(headers)
        axios.post(`http://127.0.0.1:8000/api/notes/create/`, note, { headers } )
        .then(()=> {
        window.location.reload()})
        .catch(err=>console.log(err))
        
        // setNotes([...notes, note])
        

    }
    
    const deleteNote = (id) => {
      const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access')
        }
        axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`, { headers })
        .then(res=> res.data)
        .catch(err=>console.log(err))

        setNotes(notes.filter(note=>note.id !== id))

    }
    
    const updateNote = (note) => {
      console.log(updateId, 'updateId')
      setOpen(false);
      setIsLoading(false) 

       const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access')
        }
        axios.put(`http://127.0.0.1:8000/api/notes/${updateId}/`, note , { headers })
        .then((res) => {
          // setIsLoading(true) 
          console.log(note, 'note') 
          window.location.reload();
          
        })
        .catch(err=>console.log(err))
      
        // setNotes(notes.map(note=>note.id === updateId ? note = note : note))
        // setNotes(notes.filter(note=>note.id !== updateId))
        console.log("kk")
        

      
    }

    const [open, setOpen] = useState(false);
    const [updateId, setUpdateId] = useState('');

    const handleClickOpen = () => {
      console.log(open, 'open')
      
      setOpen(true);
    };

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            { !isLoading ? <Loading /> : <Notes notes={notes} onDelete={deleteNote} OpenPopup={handleClickOpen} 
                setUpdateId={setUpdateId}
            />}
            <FormDialog open={open} setOpen={setOpen} updateNote={updateNote} />
            <Footer />
        </div>
    )
}
