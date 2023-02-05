import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from "../layouts/Footer";
function AuthLayout() {
  return (
    <>
    <Outlet />
    <Footer />
    </>
  )
}

export default AuthLayout