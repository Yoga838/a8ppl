/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import axios from 'axios';import Router from 'next/router'
import profil from '@/controller/profil';
import { el } from 'date-fns/locale';

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

    const cookie = nookies.get('token');
    const cookies = cookie.token;

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

    const [bukti,setBukti] = useState()
    const isValidLink = (link) => {
        const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return linkRegex.test(link);
    };
    const [pesan,setPesan] = useState('')
    async function bayar (){
        // const isvalid = isValidLink(bukti)
        if (bukti){
            const isvalid = isValidLink(bukti)
            if (!isvalid){
              alert("link salah harap masukkan link yang benar!")
            }
            else{
              const response = await fetch("/api/premium",{
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${cookies}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(bukti)
              })
            const data = await response.json();
            setPesan(data.message)
            pop1()
            }
        }
        else{
          const response = await fetch("/api/premium",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(null)
          })
        const data = await response.json();
        setPesan(data.message)
        pop1()
        }
    }
    function pindah (){
        Router.replace('/mitra')
      }
    const [tampil,setTampil] = useState(false)
    const pop1 = () => {
        setTampil(true)
    } 
    const notpop1 = () => {
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
            <h1 className='poppins fw-bold text-center'>Halaman Pembayaran</h1>
            <div className="input-bayar d-flex flex-column mb-4 ms-5 ps-5">
                <label className="ms-3  pb-1 poppins">Link Bukti Bayar</label>
                <input value={bukti} onChange={(e) => setBukti(e.target.value)} className="rounded-pill p-2 ps-3" type="text" placeholder="Masukkan Link Bukti sudah membayar menjadi member premium" id />
            </div>
            <div className="button-left d-flex justify-content-end mt-5 gap-4 mb-4 me-5 pe-3">
                <button type="button" onClick={(e)=>{e.stopPropagation(),bayar()}} className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Kirim</button>
            </div>
        {/* pop up send */}
        {tampil &&(pesan != 'Data berhasil dikirim. Mohon tunggu 1x24 jam untuk pengajuan anda' ?(
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/alert.png" alt="" />
                <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
                <button className="btn  set btn-warning rounded-pill text-white" onClick={notpop1}>OK</button>
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
        {/* pop up logout */}
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