import {authReducer,authTypes} from "./../"
import {useReducer} from 'react'
import {AuthContext} from './AuthContext'



const AuthProvider = ({children}) => {


    const init = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        return {
            isLogged : !!user,
            user
        }
    }
    const [authState,dispatch] = useReducer(authReducer,{},init)

    const login = (user) =>{

        sessionStorage.setItem('user',JSON.stringify(user))

        dispatch({
            type: authTypes.login,
            payload:user
        })
    }
    const logout = () => {
        sessionStorage.removeItem('user')
        dispatch({type :authTypes.logout})

    }
    return (
        <AuthContext.Provider value ={{...authState,login,logout}}>
            {children}
        </AuthContext.Provider>
        )
}

export default AuthProvider