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
            axios.get(`http://127.0.0.1:8000/api/notes/`)
            .then((res)=>{ setNotes(res.data)})
            .catch(err=>console.log(err))
        }
        
        getNotes()
    },[])

    axios.interceptors.response.use(undefined,         
      function axiosRetryInspector(err)  {
          const refreshToken = localStorage.getItem('refresh')
          if (err.response.status === 401 && err.response.data.detail === 'Authentication credentials were not provided.') {
            console.log("ooo")
            axios.post(`http://localhost:8000/api/accounts/token/refresh/`, {
              refresh: refreshToken
            })
              .then((res) => res.data)
              .then((res) => {
                console.log(err.config)
                err.config.headers['Authorization'] = 'Bearer ' + res.access;
                localStorage.setItem('access', res.access)
                // return axios.request(err.config);

                //  return axios(originalRequest)
              })
            // resolve(response)
          }
    
          return Promise.reject(err)
        }            
      );
      
    
      const addNote = (note) => {
        console.log("fffffff")        
        const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access')
        }
        console.log(headers)
        axios.post(`http://127.0.0.1:8000/api/notes/create/`, note, { headers } )
        .then(res=> res.json())
        .catch(err=>console.log(err))
        
        setNotes([...notes, note])
    }
    
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            <Notes notes={notes} />
            <Footer />
        </div>
    )
}
