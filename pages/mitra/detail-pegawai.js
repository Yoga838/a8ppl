/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-css-tags */
import Link from 'next/link'
import React from 'react'
import nookies from 'nookies'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Router,useRouter} from 'next/router'
import profil from '../../controller/profil'
import MenuPegawai from '@/controller/MenuPegawai'

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

export default function mitra_page() {

    const router = useRouter()
    const {
        query:{id,name},
    } = router
    const props = {
        name,
        id
    }
    const date_catat = props.name;

  const [data,setdata] = useState([]);
  const [data2,setdata2] =  useState([]);
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
    const {
        query:{id,name},
    } = router
    const props = {
        name,
        id
    }
    const convertid = parseInt(props.id)
    const idacc = {id:convertid}
    async function getpegawai (){
      const show = new MenuPegawai()
      const data = await show.PegawaiDipilih(idacc,cookies)
      setdata2(data)
    }
    getpegawai()
  }, [router]);

  function logout(){
      nookies.destroy(null,'token');
      nookies.destroy(null,'role');
      router.replace('/');
  }
  const [tampil2,setTampil2] = useState(false)
  const pop = () => {
    setTampil2(true)
  } 
  const notpop = () => {
    setTampil2(false)
  } 
  const handleButtonClick = () => {
    router.push({
        pathname : "/mitra/editpegawai",
        query: {
          id:props.id,
          nama:props.name
        }
      })
  };
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tem.u</title>
    <link rel="stylesheet" href="/style.css" />
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
        <div className="sidebar-left content1 bg-color-yellow col-md-4  d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra/profil'><div className="circle mt-4 profil"><img src='/images/profil.png'/></div></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <Link href='/mitra/tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins text-warning rounded-pill shadow btn-lg">Pegawai</button></Link>
            <Link href='konfirmasi-pendistribusian'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
            <Link href='/mitra/tracking'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Tracking</button></Link>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
          </div>
        </div> 
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <div className="circle mx-auto "><img src='/images/worker.png'></img></div>
          <p className="poppins">Nama Lengkap:</p>
          <p className="poppins fw-bold">{data2.name}</p>
          <p className="poppins">No Telp:</p>
          <p className="poppins fw-bold">{data2.no}</p>
          <p className="poppins">Email:</p>
          <p className="poppins fw-bold">{data2.email}</p>
          <p className="poppins">password:</p>
          <p className="poppins fw-bold">********************</p>
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
        <button onClick={(e)=>{e.stopPropagation(),handleButtonClick()}} className="poppins shadow fw-bold button-edit bg-color-yellow btn btn-lg rounded-pill">Edit Data&nbsp;<img src="/images/button_icon_edit.png" alt="" /></button>
      </div>
    </div>
  </div>
  )
}
