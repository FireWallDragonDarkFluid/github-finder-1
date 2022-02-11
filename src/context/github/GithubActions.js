import axios from 'axios'
const GITHUB_URL = "https://api.github.com"

const github = axios.create({
    baseURL:"https://api.github.com",
    headers:{ Authorization: `token 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` }
})

//Get search results
export const searchUsers = async (text) =>{

    // const config = {
    //     headers: {
    //         Authorization: `token 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`
    //     }
    // }
    // const response = await fetch(`${GITHUB_URL}/search/users?${params}`,config)
    // const { items } = await response.json()

    const params = new URLSearchParams({
        q:text
    })

    const response = await github.get(`/search/users?${params}`)
    
    return response.data.items
}

//Get single user
export const getUserAndRepos = async (login) =>{

    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return { user: user.data, repos:repos.data }
}
