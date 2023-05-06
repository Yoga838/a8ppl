/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import Router from 'next/router';
import SignUpMitra from './controller/SignUpMitra'


export default function mitra_regist() {

  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [no,setNo] = useState('');
const [alamat,setAlamat] = useState('');
const [usaha,setUsaha] = useState('');
const [pribadi,setPribadi] = useState('');
const [pesan, setPesan] = useState('');


const doregister = async (e) => {
  e.preventDefault(); // prevent form from submitting normally
try {
  const phoneNumberRegex = /^(\+62|62|0)[2-9][0-9]{9,10}$/;
  const isValidPhoneNumber = phoneNumberRegex.test(no);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email); 
  const urlRegex = new RegExp(/^((http|https):\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
  const isValidLink = urlRegex.test(usaha,pribadi)
  if(isValidEmail && isValidPhoneNumber && isValidLink){
    const Daftar = new SignUpMitra();
    const data = await Daftar.CekEmail({ email, name, password,no ,alamat,usaha,pribadi})
    setPesan(data.message)
    pop()
}
else if(isValidEmail){
  alert("format email anda tidak sesuai")
}
else if(!isValidLink){
  alert("format link tidak sesuai")
}
else{
  alert("format nomor telepon anda tidak sesuai")
}
  
  
} catch (error) {
  console.log("error mas")

  };
}
function pindah (){
  Router.replace('/')
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
    <title>Sign Up</title>
    {/* Bootstrap CSS */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <title>Sign Up</title>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-3 side bg-color-yellow">
          <img className="m-left image my-center" src="/images/sign_up1.png" alt="" />
        </div>
        <div className="col-md-8 ms-5 pb-5 screen2">
          <h4 className="poppins mt-4">
            Selamat Datang
          </h4>
          <h1 className="poppins fw-bold">Segera Daftarkan Diri Anda</h1>
          
          <form onSubmit={doregister}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-Name mt-4 ">
                    <label htmlFor="inputName" className="poppins form-label">Nama Lengkap</label>
                    <input type="Text" id="inputName" value={name} onChange={(e) => setName(e.target.value)}  className="width-form-1 rounded1 form-control" />
                  </div>
                  <div className="input-NoTelp mt-2">
                    <label htmlFor="inputNoTelp" className="poppins form-label">No. Telp</label>
                    <input type="Text" id="inputNoTelp" value={no} onChange={(e) => setNo(e.target.value)}  className="width-form-1 rounded1 form-control" />
                  </div>
                  <div className="input-Alamat mt-2">
                    <label htmlFor="inputAlamat" className="poppins form-label">Alamat Lengkap</label>
                    <input type="Text" id="inputAlamat" value={alamat} onChange={(e) => setAlamat(e.target.value)}  className="width-form-1 rounded1 form-control" />
                  </div>
                  <div className="input-Email mt-2">
                    <label htmlFor="inputEmail" className="poppins form-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="inputEmail"  className="width-form-1 rounded1 form-control" />
                  </div> 
                  <div className="input-Password mt-2">
                    <label htmlFor="inputPassword" className="poppins form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="inputPassword"  className="width-form-1 rounded1 form-control" />
                  </div>    
                </div>
                <div className="col-md-6">
                  <div className="input-image1 mt-4 ">
                    <div className="mb-3">
                      <label  className="form-label">Link Foto Usaha</label>
                      <input value={usaha} onChange={(e) => setUsaha(e.target.value)} className="form-control  rounded1 form-control-sm"  type="text" />
                    </div>
                  </div>
                  <div className="input-image1 mt-2 ">
                    <div className="mb-3">
                      <label  className="form-label">Link Foto Pribadi</label>
                      <input value={pribadi} onChange={(e) => setPribadi(e.target.value)} className="form-control  rounded1  form-control-sm" type="text" />
                    </div>
                  </div>
                  <button type="submit" className="poppins mt-4 center-button btn bg-color-yellow rounded-pill width-button margin-end height-button  shadow text-white" href="#" role="button">Kirim</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {tampil2 &&(pesan != 'Data berhasil dikirim.Mohon tunggu 1x24 jam untuk pengajuan anda' ?(
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
              <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
              <button className="btn  set btn-warning rounded-pill text-white" onClick={pindah}>OK</button>
            </div>
          </div>)
          )}
    </div>
    {/* Bootstrap Bundle with Popper */}
  </div>
  )
}
