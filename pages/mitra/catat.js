/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import nookies from 'nookies'
import Router from 'next/router';
import axios from 'axios'
import profil from '../controller/profil';

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




export default function Pencatatan() {
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
const [data2,setdata2] = useState([]);

  useEffect(() => {
    const cookie = nookies.get('token');
    const cookies = cookie.token;
    const role = nookies.get('role');
    const job = role.role
    async function getdata(){
      const Get_Profile = new profil(job,cookies)
      const dat = await Get_Profile.getDataAkun()
      setdata(dat)
    }
    getdata()
  }, []);

  return (
    <div>
    <title>Tem.u</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className="d-flex justify-content-between navbar fixed-top navbar-light bg-light">
    <div class="container-fluid">
        <h2 className="ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
        <div className="tombol d-flex gap-4 align-items-center">
          <Link href='/mitra/cuaca'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Cuaca</button></Link>
          <Link href='/mitra/pencatatan'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-white"  role="button">Pencatatan</button></Link>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left content1 bg-color-yellow col-md-4 pb-5 d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra/profil'><div className="circle mt-4" /></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
          <Link href='/mitra'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Home</button></Link>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow text-warning btn-lg">Pegawai</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Konfirmasi Pendistribusian</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Tracking</button>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Keluar</button>
          </div>
        </div>
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <h1 className="poppins fw-bold text-center">Tambah Data Pencatatan</h1>
          <div className="inputan-pencatatan pe-5 pt-4 ">
            <div className="input d-flex flex-column">
              <label className="ms-3  pb-1 poppins">Nama Pencatatan</label>
              <input className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan nama pencatatan anda, contoh: Januari 2023"  />
            </div>
            <div className="input d-flex flex-column">
              <label className="ms-3  pb-1 poppins">Tanggal</label>
              <input className="rounded-pill p-1 ps-3" type="date" placeholder="Masukkan nama lengkap pegawai baru anda" id />
            </div>
            <div className="input d-flex flex-column">
              <label className="ms-3  pb-1 poppins">Keterangan</label>
              <input className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan keterangan pencatatan anda, contoh: biaya listrik"  />
            </div>
            <div className="input d-flex flex-column">
              <label className="ms-3  pb-1 poppins">Pemasukan</label>
              <input className="rounded-pill p-1 ps-3" type="number" placeholder="Masukkan pemasukan anda, contoh: 500000000"  />
            </div>
            <div className="input d-flex flex-column">
              <label className="ms-3  pb-1 poppins">Pengeluaran</label>
              <input className="rounded-pill p-1 ps-3" type="number" placeholder="Masukkan Pengeluaran anda, contoh: 30000000"  />
            </div>
            <div className="input d-flex flex-column">
              <label className="ms-3  pb-1 poppins">Saldo</label>
              <input className="rounded-pill p-1 ps-3" type="number" placeholder="Masukkan saldo anda, contoh: 1500000000"  />
            </div>
          </div>
          <div className="button-left d-flex justify-content-end gap-4 mb-4">
            <button type="button"  className="btn btn-admin bg-color-red poppins text-white shadow rounded-pill  btn-lg">Batal</button>
            <button type="button"  className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Buat</button>
          </div>
          
          
        </div>
      </div>
    </div>
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
