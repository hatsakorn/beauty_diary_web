import useAuth from '../hooks/useAuth'
import {useState} from 'react'
import line from '../assets/Line.png'

export default function LoginPage() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {login} = useAuth()

    const handleSubmitForm = async e => {
        e.preventDefault()
        try{
            await login(email,password) 
        }catch(err){
            console.log(err.response?.data.message)
        }
    }
    return(
        <>
        <div className="bg-rose-400 pt-8 pb-8">
            <div className='bg-white'>
                <form onSubmit={handleSubmitForm}>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 text-center">
                    <h1 className='text-3xl'>Login</h1>
                    <input 
                    type="email"
                    className="mb-2 block" 
                    placeholder="your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                    type="password"
                    className="mb-2 block" 
                    placeholder="your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <button type="submit" className="p-4 rounded-lg bg-rose-300 text-white">
                    Sign in
                </button>
                <div>
                    <hr className="border-stone-400 mt-3"/>
                </div>
                </div>
                </form>
                <div className="text-center px-6 pb-4">
                    <h1 className='text-blue-600'>Not a member <strong>Sign Up</strong></h1>
                    <hr className="border-stone-400 mt-3"/>
                </div>
                <div className="text-center px-6 pb-4">
                    <h1 className='text-blue-600'>Forget Password</h1>
                    <hr className="border-stone-400 mt-3"/>
                </div>
                    <div className="text-center px-6 pb-4">
                        <h1 className='text-blue-600'><strong>or sign in with</strong></h1>
                        <img src={line} className="ml-auto mr-auto mt-3"/>
                    </div> 
            </div>
        </div>
        </>
    )
}