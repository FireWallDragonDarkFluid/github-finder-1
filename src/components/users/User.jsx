import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import RepoList from '../repos/RepoList'
import {getUserAndRepos} from '../../context/github/GithubActions' 

const User = () => {
    const { user, loading, repos, dispatch } = useContext(GithubContext) 

    const params = useParams()
    useEffect(()=>{
        dispatch({type:'SET_LOADING'})
        const getUserData = async () => {
            const userData = await getUserAndRepos(params.login)
            dispatch({type:'GET_USER_AND_REPOS',payload:userData})
        }

        getUserData()
    },[dispatch,params.login])



    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if(loading){
        return <h3>Loading...</h3>
    }
    
    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to='/' className='btn btn-ghost'>Back to Search</Link>
                </div>

                <div className="grid grid-cols-3 gap-x-3">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={avatar_url} alt='avatar' />
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className='card-title mb-0'>{name}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">
                                {name}
                                <div className="ml-2 mr-1 badge badge-success">
                                    {type}
                                </div>
                                {hireable && (
                                    <div className='mx-1 badge badge-info'>Hireable</div>
                                )}
                            </h1>
                            <p>{bio}</p>
                            <div className='mt-4 card-actions'
                            className='btn btn-outline'>
                                <a href={html_url} target='_blank'>Visit Github Profile</a>
                            </div>
                        </div>
                    </div>
                </div>

                <RepoList repos={repos} />
            </div>             
        </>
    )
}

export default User