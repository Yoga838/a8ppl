/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import axios from 'axios';import Router from 'next/router'
import profil from '@/controller/profil';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import pencatatan from '@/controller/pencatatan';

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


export default function grafik() {

    const [data,setdata] = useState([]);
    const[data2,setData2] = useState([]);
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
      async function get_grafik(){
        const get = new pencatatan()
        const data = await get.GrafikPencatatan(cookies)
        setData2(data)
      }
      get_grafik()
     
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
  return (
    <div>
    <title>Tem.u</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className="d-flex justify-content-between navbar fixed-top navbar-light bg-light">
    <div class="container-fluid">
        <h2 className="ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
        <div className="tombol d-flex gap-4 align-items-center">
          <Link href='/mitra/cuaca'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Cuaca</button></Link>
          <Link href='/mitra'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill text-white shadow text-dark"  role="button">Pencatatan</button></Link>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left content1 bg-color-yellow col-md-4  d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra/profil'><div className="circle mt-4 profil"><img src='/images/profil.png'/></div></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <Link href='tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Pegawai</button></Link>
            <Link href='konfirmasi-pendistribusian'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
            <Link href='/mitra/tracking'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Tracking</button></Link>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
          </div>
        </div> 
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          {/* isinya data nanti tapi */}
          <div className='d-flex mt-5 pt-2 justify-content-center'>
              <BarChart width={800} height={400} data={data2}>
                <CartesianGrid strokeDasharray="1 1"/>
                <XAxis dataKey="nama_pencatatan"  />
                <YAxis width={80}/>
                <Tooltip/>
                <Legend />
                <Bar dataKey='total_pemasukan' fill='green'/>
                <Bar dataKey='total_pengeluaran' fill='red'/>
                <Bar dataKey='total_saldo' fill='blue'/>
              </BarChart>
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
    </div>
  </div>
  )
}
