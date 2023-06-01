/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import axios from 'axios';import Router from 'next/router'
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


export default function informasi_pembayaran() {

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

      async function GetPremiInfo(){
        const response = await fetch("/api/premiumcondition",{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        if(data.status == true && data.tolak == true ){
          setpesan("Pengajuan Anda Ditolak Coba Lagi!")
          setTampil(true)
        }
        else if(data.status == true && data.tolak == false){
          setpesan("Pengajuan belum diproses admin")
          setTampil(true)
        }
        else{
          //
        }
      }
      GetPremiInfo()
    }, []);
  

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
    const [pesan,setpesan] = useState('')
    const [tampil,setTampil] = useState(false)
    const close = () =>{
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
          <Link href='/mitra/pencatatan'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Pencatatan</button></Link>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left content1 bg-color-yellow col-md-4  d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra/profil'><div className="circle mt-4" /></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <Link href='/mitra'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Home</button></Link>
            <Link href='/mitra/tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Pegawai</button></Link>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button>
            <Link href='tracking'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Tracking</button></Link>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
          </div>
        </div> 
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          {/* isinya data nanti tapi */}
          <h1 className='poppins fw-bold text-center'>Informasi Pembayaran</h1>

        <div className='container bg-color-yellow p-5 border-pembayaran shadow'>
            <p className='poppins'>No Rekening Admin:</p>
            <h3 className='poppins fw-bold'>5487-4562-3698-2587</h3>
            <p className='poppins'>harga:</p>
            <h3 className='poppins fw-bold'>Rp 350.000,00</h3>
        </div>
        <div className="button-left d-flex justify-content-end mt-5 gap-4 mb-4">
            <button onClick={(e)=>{e.stopPropagation(),Router.back()}} type="button"  className="btn btn-admin bg-color-red poppins text-white shadow rounded-pill  btn-lg">Kembali</button>
            <Link href='halaman-pembayaran'><button type="button"  className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Daftar Premium</button></Link>
        </div>

        </div>
        {/* pop up status */}
        {tampil &&(  
            <div className='status'>
            <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
              <img src="/images/alert.png" alt="" />
              <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
              <button className="btn btn-lg btn-warning rounded-pill shadow text-white" onClick={close}>OK</button>
            </div>
          </div>
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
    </div>
  </div>
  )
}
