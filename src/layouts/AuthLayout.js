import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from "../layouts/Footer";
import Frame from './Frame';
function AuthLayout() {
  return (
    <>
    <Frame/>
    <Outlet />
    <Footer />
    </>
  )
}

export default AuthLayout