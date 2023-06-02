/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import nookies from 'nookies'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
import profil from '../../controller/profil'

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx)

  if(!cookies.role){
    return{
      redirect:{
        destination : '/'
    }
    }
  }
    else if(cookies.role == 'mitra'){
      return{
        redirect:{
          destination : '/mitra'
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
  
  return{
    props: {}
  }
}

export default function profil_page() {

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
        <nav className='navbar fixed-top navbar-light bg-light'>
          <h2 className="ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
        </nav>
        <div className="content">
          <div className="row">
            <div className="sidebar-left content1 bg-color-yellow col-md-4 pt-5 pb-5 d-flex flex-column align-items-center gap-2">
            <div className='content2  d-flex flex-column align-items-center gap-2'>
              <div className="circle mt-5" />
              <h4>{data.name}</h4>
              <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
                <Link href='/pegawai/konfirmasi'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
                <Link href='/pegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Tracking</button></Link>
                <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
              </div>
            </div>
            </div>
            <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
              <div className="circle mx-auto" />
              <div className="data-wrap ms-5">
                <p className="poppins">Nama Lengkap:</p>
                <p className="poppins fw-bold">{data.name}</p>
                <p className="poppins">No Telp:</p>
                <p className="poppins fw-bold">{data.no}</p>
                <p className="poppins">Email:</p>
                <p className="poppins fw-bold">{data.email}</p>
                <p className="poppins">password:</p>
                <p className="poppins fw-bold">********************</p>
              </div>
            </div>
            <Link href='/pegawai/editprofil'><button className="poppins fw-bold button-edit bg-color-yellow btn btn-lg shadow rounded-pill">Edit Profil&nbsp;<img src="/images/button_icon_edit.png" alt="" /></button></Link>
          </div>
        </div>
        {tampil2 &&(  
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/centang.png" alt="" />
                <h1 className="poppins fw-bold text-dark">Apakah Anda Ingin Keluar?</h1>
                <div className='d-flex gap-3 pb-2'>
                <button className="btn shadow set bg-color-green rounded-pill text-white" onClick={logout}>IYA</button>
                <button className="btn shadow set bg-color-red rounded-pill text-white" onClick={notpop}>TIDAk</button>
                </div>
              </div>
            </div>
          )}
        </div>
  )
}
