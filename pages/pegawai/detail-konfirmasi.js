/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import axios from 'axios';import Router from 'next/router'
import profil from '@/controller/profil';
import { useRouter } from 'next/router';
import Konfirmasi from '@/controller/Konfirmasi';

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
    else if(cookies.role == 'mitra'){
      return{
        redirect:{
          destination : '/mitra'
        }
      }
    }
  
  return{
    props: {}
  }
}


export default function Tracking() {

    const router = useRouter()
    const [data,setdata] = useState([]);
    const [data2,setdata2] = useState([]);
    useEffect(() => {
      const cookie = nookies.get('token');
      const cookies = cookie.token;
      const role = nookies.get('role');
      const job = role.role

        const {
            query:{id,nama_pembeli},
        } = router
        const props = {
            nama_pembeli,
            id
        }
        const convertid = parseInt(props.id)
        const idacc = {id:convertid}

      async function getdata(){
        const Get_Profile = new profil()
        const dat = await Get_Profile.getDataAkun(job,cookies)
        setdata(dat)
      }
      async function gettracking(){
        const dat = new Konfirmasi()
        const data = await dat.KonfirmasiPendistribusianDipilih(cookies,idacc)
        setdata2(data)
        console.log(data)
      }
      gettracking()
      getdata()
    }, [router]);
  

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
    
    const handleButtonClick = () => {
      senddata(data2.id,data2.nama_pembeli)
    };
    function senddata(setId,setName){
      Router.push({
        pathname : "/pegawai/edit-konfirmasi",
        query: {
          id:setId,
          name:setName
        }
      })
    }

  return (
    <div>
    <title>Tem.u</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className="d-flex justify-content-between navbar fixed-top navbar-light bg-light">
    <div class="container-fluid">
        <h2 className="ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
    </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left content1 bg-color-yellow col-md-4  d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
                <Link href='/pegawai/profil'><div className="circle mt-5 profil"><img src='/images/profil.png'/></div></Link>
                <h4>{data.name}</h4>
                <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
                <Link href='/pegawai/konfirmasi'><button type="button" className="btn btn-admin btn-light poppins text-warning rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
                <Link href='/pegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Tracking</button></Link>
                <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
        </div>
        </div> 
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          {/* isinya data nanti tapi */}
          <h1 className="poppins fw-bold text-center">Konfirmasi Pendistribusian</h1>
          <div className='data bg-color-yellow pt-4 pb-4'>
            <div className='bg-color-green success-logo mx-auto'>
                <p className='poppins fw-bold text-white'>Barang Sudah Diterima</p>
            </div>
            <div className='isi ps-5'>
                <p>Nama Pembeli: <br/> <strong> {data2.nama_pembeli} </strong></p>
                <p>Alamat Pembeli: <br/> <strong> {data2.alamat_pembeli} </strong></p>
                <p>Keterangan: <br/> <strong> {data2.keterangan} </strong></p>
            </div>
          </div>
        </div>
        {/* button fixed */}
        <button onClick={(e) => {e.stopPropagation,handleButtonClick()}} className="confirbtn poppins fw-bold button-edit bg-color-yellow btn btn-lg  shadow rounded-pill">Edit Konfirmasi&nbsp;<img src="/images/button_icon_edit.png" alt="" /></button>
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
