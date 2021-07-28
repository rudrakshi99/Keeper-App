import { useState, useEffect } from 'react'
import { LoginForm } from './LoginForm'
import { Main } from './Main'
import { RegisterForm } from './RegisterForm'
import { Switch, Route } from 'react-router-dom'

export const App = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    const [error, setError] = useState("")

    const Login = (user) => { 
        console.log(user)
    }
    const Logout = () => {
        console.log("Logout")
    }
    
    return (
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/main" component={Main}/>
            <Route exact path="/register" component={RegisterForm}/>

        </Switch>
    )
}
