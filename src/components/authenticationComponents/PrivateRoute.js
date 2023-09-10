import {React} from 'react'
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux"
import ErrorPage from '../../pages/ErrorPage'

export default function PrivateRoute() {
  const isAuthenticated = useSelector((state)=>{
    return state.authReducer
  })
  
  return (
    isAuthenticated ? <Outlet /> : <ErrorPage status_code="403" />
  )
}
