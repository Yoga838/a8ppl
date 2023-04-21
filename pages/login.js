/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Link from 'next/link'
import nookies from 'nookies'
import Router from 'next/router'
import { useState } from 'react'


export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

 if(cookies.role){
    if(cookies.role == 'admin'){
      return{
        redirect:{
          destination : '/admin'
        }
      }
    }
    if(cookies.role == 'visitor'){
      return{
        redirect:{
          destination : '/visitor'
        }
      }
    }
    if(cookies.role == 'mitra'){
      return{
        redirect:{
          destination : '/mitra'
        }
      }
    }
  }
  return{
    props: {}
  }
}


export default function login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [progress, setProgress]= useState(false);

  const dologin = async (e) => {
    e.preventDefault(); // prevent form from submitting normally

    setProgress(true);
    const res = await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email,  password })
    });
    
    const data = await res.json();

    if(data.token){
      nookies.set(null,'token',data.token);
      nookies.set(null,'role',data.user)
      if(data.user == "admin"){
        Router.push('/admin')
      }
      else if(data.user == "visitor"){
        Router.push('/visitor')
      }
      else if(data.user == "mitra"){
        Router.push('/mitra')
      }
      // Router.replace('/dashboard');
    }

    setProgress(false);

  };

  return (
    <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <title>Log In</title>
        <div className='bg-color-yellow body'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="rounded1 width-form mx-auto bg-light mt-login mb-login pt-5 ">    
                <h1 className="poppins fw-bold text-color-yellow text-center">Tem.U</h1>
                <form className="margin-input center  set-width" onSubmit={dologin} >
                  <div className="input-email ">
                    <label htmlFor="inputEmail" className="poppins form-label">Email</label>
                    <input type="text" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}  className="rounded1 form-control" />
                  </div>
                  <div className="input-password ">
                    <label htmlFor="inputPassword5" className="poppins form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  id="inputPassword5" className="rounded1 form-control" />
                  </div>
                  <button className="poppins mt-4 center-button btn bg-color-yellow rounded-pill ps-5 pe-5 mb-5 shadow text-white" tipe="submit"  role="button">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
