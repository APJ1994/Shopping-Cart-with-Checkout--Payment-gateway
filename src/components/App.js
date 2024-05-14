'use client'
import { useEffect } from "react";
import Header from "./Header";
import { hideLoading } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import CartSidebar from "./CartSidebar";



export default function App({ children }) {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(hideLoading)
  },[dispatch])
    return (
      <div>
        <Header/>
         <main>{children}</main>
         <CartSidebar/>
      </div>
    );
  }
  