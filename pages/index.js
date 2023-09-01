import React, { useEffect } from "react";
import Router from "next/router";
import { useAuth } from "@contexts/auth";
const Index = () => {
const auth = useAuth();
useEffect(()=>{
  if(auth.isAuthenticated){
    Router.push('/home')
  } else{
    Router.push('/signin')
  }
},[auth.isAuthenticated])

  return <></>
};
export default Index;
