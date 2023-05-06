/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import Router from 'next/router';
import SignUpUser from './controller/SignUpUser';


export default function visitor_regist() {



const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [alamat, setAlamat] = useState('');
const [no, setNo] = useState('');
const [pesan, setPesan] = useState('')
const doregister = async (e) => {
  e.preventDefault(); // prevent form from submitting normally
try {
  const phoneNumberRegex = /^(\+62|62|0)[2-9][0-9]{9,10}$/;
  const isValidPhoneNumber = phoneNumberRegex.test(no);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email); 
  if(isValidEmail && isValidPhoneNumber ){
    const Daftar = new SignUpUser({ email, name, password,alamat,no });
    const data = await Daftar.CekEmail()
    setPesan(data.message)
    pop()
  }
  else if(!isValidEmail){
    alert("format email anda tidak sesuai")
  }
  else if(!isValidLink){
    alert("format link tidak sesuai")
  }
  else{
    alert("format nomor telepon tidak sesuai")
  }

} catch (error) {
  console.log("error mas")

  };
}
function pindah (){
  Router.replace('login')
}

const [tampil2,setTampil2] = useState(false)
const pop = () => {
  setTampil2(true)
} 
const notpop = () => {
  setTampil2(false)
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
                <div className="input-alamat mt-2">
                  <label htmlFor="inputalamat" className="poppins form-label">Alamat Lengkap</label>
                  <input type="text" id="inputalamat"  className="width-form-2 rounded1 form-control" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                </div>
                <div className="input-no mt-2">
                  <label htmlFor="inputno" className="poppins form-label">No.Telp</label>
                  <input type="text" id="inputno"  className="width-form-2 rounded1 form-control" value={no} onChange={(e) => setNo(e.target.value)} />
                </div>
                <button type='submit' className="text-white poppins btn ms-2 bg-color-yellow mt-4  rounded-pill width-button-2 heigth-button shadow " role="button">Daftar</button>
              </form>
              </div>
          </div>
          {tampil2 &&(pesan != 'Registrasi berhasil' ?(
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/alert.png" alt="" />
                <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
                <button className="btn  set btn-warning rounded-pill text-white" onClick={notpop}>OK</button>
              </div>
            </div>
          ):( 
          <div className='status'>
            <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
              <img src="/images/centang.png" alt="" />
              <h1 className="poppins fw-bold text-dark">{pesan}</h1>
              <button className="btn  set btn-warning rounded-pill text-white" onClick={pindah}>OK</button>
            </div>
          </div>)
          )}
        </div>
        {/* Bootstrap Bundle with Popper */}
      </div>
  )
}
