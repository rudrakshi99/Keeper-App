import { Login } from './pages/Login'
import { Main } from './pages/Main'
import { Register } from './pages/Register'
import { Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from './Route/ProtectedRoute'

export const App = () => {
    
    
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/main" >
                <ProtectedRoute Component={Main} />
            </Route>
            <Route exact path="/register" component={Register} />
            <Route path="*" component={Login} />
        </Switch>
    )
}
