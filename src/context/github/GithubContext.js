import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    // const [users,setUsers] =useState([])
    // const [loading,setLoading] = useState(true)
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)

    //Get search results
    // const searchUsers = async (text) =>{
    //     setLoading()

    //     const config = {
    //         headers: {
    //             Authorization: `token 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`
    //         }
    //     }

    //     const params = new URLSearchParams({
    //         q:text
    //     })
    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`,config)
        
    //     const { items } = await response.json()
        
    //     dispatch({
    //         type:'GET_USERS',
    //         payload:items
    //     })
    // }

    //Get single user
    // const getUser = async (login) =>{
    //     setLoading()

    //     const config = {
    //         headers: {
    //             Authorization: `token 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`
    //         }
    //     }

    //     const response = await fetch(`${GITHUB_URL}/users/${login}`,config)
        
    //     if(response.stats===404){
    //         window.location = '/notfound'
    //     }else{
    //         const data = await response.json()
            
    //         dispatch({
    //             type:'GET_USER',
    //             payload:data
    //         })
    //     }
    // }

    //Get user repos
    // const getUserRepos = async (login) =>{
    //     setLoading()

    //     const config = {
    //         headers: {
    //             Authorization: `token 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`
    //         }
    //     }

    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos`,config)
        
    //     if(response.stats===404){
    //         window.location = '/notfound'
    //     }else{
    //         const data = await response.json()
            
    //         dispatch({
    //             type:'GET_REPOS',
    //             payload:data
    //         })
    //     }
    // }

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext


