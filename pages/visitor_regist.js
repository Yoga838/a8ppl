/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import Router from 'next/router';


export default function visitor_regist() {



const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const doregister = async (e) => {
  e.preventDefault(); // prevent form from submitting normally
try {
  const res = await fetch('/api/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, name, password })
  });
  
  const data = await res.json();
  console.log(data);
  
  alert (data.message)
  if (data.message == "berhasil dibuat"){
    Router.push('/login');
  }
  
} catch (error) {
  console.log("error mas")

  };
}


  return (
    <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <title>Sign Up</title>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 side bg-color-yellow">
              <img className="image2 m-left-2 center-image" src="/images/SignUp.png" alt="" />
            </div>
            <div className="my-5  col-md-6 ms-5 screen">
              <h4 className="poppins mt-4">
                Selamat Datang
              </h4>
              <h1 className="poppins fw-bold">Segera Daftarkan Diri Anda</h1>
              <form onSubmit={doregister} >
                <div className="input-Name mt-4 ">
                  <label htmlFor="inputName" className="poppins form-label">Nama Lengkap</label>
                  <input type="Text"  id="inputName" className="width-form-2 rounded1 form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-Email mt-2">
                  <label htmlFor="inputEmail" className="poppins form-label">Email</label>
                  <input type="email" id="inputEmail"  className="width-form-2 rounded1 form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div> 
                <div className="input-Password mt-2">
                  <label htmlFor="inputPassword" className="poppins form-label">Password</label>
                  <input type="password" id="inputPassword"  className="width-form-2 rounded1 form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className="text-white poppins btn ms-2 bg-color-yellow mt-4  rounded-pill width-button-2 heigth-button shadow " role="button">Sign Up</button>
              </form>
              </div>
          </div>
        </div>
        {/* Bootstrap Bundle with Popper */}
      </div>
  )
}
