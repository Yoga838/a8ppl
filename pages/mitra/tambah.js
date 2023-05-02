/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import nookies from 'nookies'
import axios from 'axios';
import Router from 'next/router';

export default function tambah() {
    function logout(){
        nookies.destroy(null,'token');
        nookies.destroy(null,'role');
        Router.replace('/');
    }
    const [tampil2,setTampil2] = useState(false)
    const pop = () => {
      setTampil2(true)
    } 
    const notpop = () => {
      setTampil2(false)
    } 

    const [data,setdata] = useState([]);
  useEffect(() => {
    const cookie = nookies.get('token');
    const cookies = cookie.token;
  
    const headers ={
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    };
    axios.get('/api/getmitralog' ,{headers} )
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  const [name,setName] = useState('')
  const [no,setNo] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [pesan,setPesan] = useState('')
  const tambah = async (e) => {
    e.preventDefault(); // prevent form from submitting normally
    const cookie = nookies.get('token');
    const cookies = cookie.token;

    const send = {
      name,
      no,
      email,
      password
    }
  
    const config = {
      method : "POST",
        headers :{
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(send)
};
      const res = await fetch('/api/addpegawai' ,config )
      const data = await res.json()
      setPesan(data.message)
      setTampil(true)

      // router.replace('/mitra/tambahpegawai') 
  }
  const [tampil,setTampil] = useState(false)
  const success = () => {
      setTampil(false)
      Router.replace('/mitra/tambahpegawai');
    }
  const notsuccess = () => {
      setTampil(false)
    }

  return (
    <div>
    <title>Tem.u</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className="d-flex justify-content-between navbar fixed-top navbar-light bg-light">
    <div class="container-fluid">
        <h2 className="ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
        <div className="tombol d-flex gap-4 align-items-center">
          <Link href='/mitra/cuaca'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Cuaca</button></Link>
          <button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Pencatatan</button>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left bg-color-yellow col-md-4  pb-5 d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra'><div className="circle mt-4" /></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Home</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow text-warning btn-lg">Pegawai</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Konfirmasi Pendistribusian</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Tracking</button>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Log Out</button>
          </div>
        </div>
        </div>
        <div className="col-md-8 px-5 sidebar-right color-brown pt-5">
          <h4 className="poppins fw-bold">Memuat akun pegawai</h4>
          <h1 className="poppins fw-bold">Ayo daftarkan pegawai anda</h1>
          <div className="inputan-pegawai pe-5 pt-4 ">
            <div className="input d-flex flex-column mb-4">
              <label className="ms-3  pb-1 poppins">Nama Lengkap</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan nama lengkap pegawai baru anda" id />
            </div>
            <div className="input d-flex flex-column mb-4">
              <label className="ms-3  pb-1 poppins">No.Telp</label>
              <input value={no} onChange={(e) => setNo(e.target.value)} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan no.telp baru anda" id />
            </div>
            <div className="input d-flex flex-column mb-4">
              <label className="ms-3  pb-1 poppins">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-pill p-1 ps-3" type="email" placeholder="Masukkan email baru anda" id />
            </div>
            <div className="input d-flex flex-column mb-4">
              <label className="ms-3  pb-1 poppins">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-pill p-1 ps-3" type="password" placeholder="Masukkan password baru anda" id />
            </div>
          </div>
          <div className="button-left d-flex justify-content-end gap-4 mb-4">
            <button type="button" className="btn btn-admin bg-color-red poppins text-white shadow rounded-pill  btn-lg">Batal</button>
            <button type="button" onClick={tambah} className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Buat</button>
          </div>
        </div>
      </div>
    </div>
    {tampil &&( pesan == "Dokumen berhasil dibuat" ?(
            <div className='status'>
            <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
              <img src="/images/centang.png" alt="" />
              <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
              <button className="btn btn-lg btn-warning rounded-pill shadow text-white" onClick={success}>OK</button>
            </div>
        </div>
          )
          :(
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/alert.png" alt="" />
                <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
                <button className="btn btn-lg btn-warning rounded-pill shadow text-white" onClick={notsuccess}>OK</button>
              </div>
            </div>
          )      
          )}
    {/* pop up logout */}
    {tampil2 &&(  
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/centang.png" alt="" />
                <h1 className="poppins fw-bold text-dark">Apakah Anda Ingin Keluar?</h1>
                <div className='d-flex gap-3 pb-2'>
                <button className="btn  set bg-color-green shadow rounded-pill text-white" onClick={logout}>IYA</button>
                <button className="btn  set bg-color-red shadow rounded-pill text-white" onClick={notpop}>TIDAK</button>
                </div>
              </div>
            </div>
          )}
  </div>
  )
}
