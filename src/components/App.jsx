import { LoginForm } from './LoginForm'
import { Main } from './Main'
import { RegisterForm } from './RegisterForm'
import { Switch, Route } from 'react-router-dom'

export const App = () => {
    
    
    return (
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/main" component={Main}/>
            <Route exact path="/register" component={RegisterForm}/>
            <Route path="*" component={LoginForm}/>
        </Switch>
    )
}
