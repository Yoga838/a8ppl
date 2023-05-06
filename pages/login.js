/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Link from 'next/link'
import nookies from 'nookies'
import Router from 'next/router'
import { useState } from 'react'
import Login from './controller/login'


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
    else if(cookies.role == 'pegawai'){
      return{
        redirect:{
          destination : '/pegawai'
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
  const [pesan, setPesan] = useState('');

  const dologin = async (e) => {
    e.preventDefault(); // prevent form from submitting normally
    //take method from controller
    const login = new Login({
      email,
      password
    });
    const data = await login.cekEmailPassword()
    //set cookies to save data and set the route and set pop up 
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
      else if(data.user == "pegawai"){
        Router.push('/pegawai')
      }
    }
    else{
      setPesan(data.message)
      pop()
    }

  };  
  const [tampil2,setTampil2] = useState(false)
  const pop = () => {
    setTampil2(true)
  } 
  const notpop = () => {
    setTampil2(false)
  } 
  const route = () => {
    Router.push("mitra_regist")
  }

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
                {/* handle on submit if submit or button masuk was click the function dologin will running */}
                <form className="margin-input center  set-width" onSubmit={dologin} >
                  <div className="input-email ">
                    <label htmlFor="inputEmail" className="poppins form-label">Email</label>
                    <input type="text" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}  className="rounded1 form-control" />
                  </div>
                  <div className="input-password ">
                    <label htmlFor="inputPassword5" className="poppins form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  id="inputPassword5" className="rounded1 form-control" />
                  </div>
                  <button className="poppins fw-bold mt-4 center-button btn bg-color-yellow rounded-pill ps-5 pe-5 mb-5 shadow text-white" tipe="submit"  role="button">Masuk</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* this is pop up condition (just run if input wrong or the account not approved) */}
        {tampil2 &&(pesan != 'Pengajuan anda di tolak, coba lagi!'?(
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/alert.png" alt="" />
                <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
                <button className="btn shadow set btn-warning rounded-pill text-white" onClick={notpop}>OK</button>
              </div>
            </div>
        ):
        (
          <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/alert.png" alt="" />
                <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
                <button className="btn shadow set btn-warning rounded-pill text-white" onClick={route}>OK</button>
              </div>
            </div>
        )
          )}
        </div>
    </div>
  )
}
