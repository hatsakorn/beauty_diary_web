import React, { createContext, useEffect, useState } from 'react'
import * as authApi from '../apis/auth-api'
import {getAccessToken, removeAccessToken, setAccessToken} from '../utils/local-storage'
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  
  const [authenticatedUser,setAuthenticatedUser] = useState(null)
  
  useEffect( ()=>{
    const accessToken = getAccessToken()
    const initialData = async() =>{
      const data = await jwtDecode(accessToken)
      setAuthenticatedUser(data)
      }
      // console.log(accessToken)
      if(accessToken){
        initialData()
      }
  },[])

  const login = async (email,password) => {
    const res = await authApi.login({email,password})
    setAccessToken(res.data.accessToken)
    setAuthenticatedUser(jwtDecode(res.data.accessToken))
  }

  const logout = () => {
    removeAccessToken()
    setAuthenticatedUser(null)
  }
//  console.log(authenticatedUser)
  return (
    <AuthContext.Provider value={{login,logout,authenticatedUser}}>{children}</AuthContext.Provider>
  )
}
