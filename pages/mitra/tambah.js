/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import nookies from 'nookies'
import axios from 'axios';
import Router from 'next/router';
import MenuPegawai from '@/controller/MenuPegawai';
import profil from '@/controller/profil';

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

  if(!cookies.role){
    return{
      redirect:{
        destination : '/'
    }
    }
  }
    else if(cookies.role == 'admin'){
      return{
        redirect:{
          destination : '/admin'
        }
      }
    }
    else if(cookies.role == 'visitor'){
      return{
        redirect:{
          destination : '/visitor'
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
  
  return{
    props: {}
  }
}

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
    const role = nookies.get('role');
    const job = role.role
    async function getdata(){
      const Get_Profile = new profil()
      const dat = await Get_Profile.getDataAkun(job,cookies)
      setdata(dat)
    }
    getdata()
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

    const phoneNumberRegex = /^(\+62|62|0)[2-9][0-9]{9,10}$/;
    const isValidPhoneNumber = phoneNumberRegex.test(no);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    if(isValidPhoneNumber && isValidEmail){
      const Daftar = new MenuPegawai()
      const data = await Daftar.sendData({name,no,email,password},cookies)
      setPesan(data.message)
      setTampil(true)
    }
    else if (!isValidPhoneNumber){
      alert("format nomor anda tidak sesuai")
    }
    else{
      alert("format email anda tidak sesuai")
    }

     

  
  }
  const [tampil,setTampil] = useState(false)
  const success = () => {
      setTampil(false)
      Router.replace('/mitra/tambahpegawai');
    }
  const notsuccess = () => {
      setTampil(false)
    }
  const batal = () => {
    Router.push('/mitra/tambahpegawai')
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
          <Link href='/mitra'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Pencatatan</button></Link>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left bg-color-yellow col-md-4  pb-5 d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra/profil'><div className="circle mt-4 profil"><img src='/images/profil.png'/></div></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
            <Link href='/mitra/tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow text-warning btn-lg">Pegawai</button></Link>
            <Link href='konfirmasi-pendistribusian'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Konfirmasi Pendistribusian</button></Link>
            <Link href='/mitra/tracking'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Tracking</button></Link>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Keluar</button>
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
            <button type="button" onClick={batal} className="btn btn-admin bg-color-red poppins text-white shadow rounded-pill  btn-lg">Batal</button>
            <button type="button" onClick={tambah} className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Buat</button>
          </div>
        </div>
      </div>
    </div>
    {tampil &&( pesan == "Data berhasil dibuat" ?(
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
