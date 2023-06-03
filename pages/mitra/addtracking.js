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


export default function addtracking() {

    const cookie = nookies.get('token');
    const cookies = cookie.token;
    const [data,setdata] = useState([]);
    const [data2, setdata2] = useState([]);
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
      async function getpremium(){
        const response = await fetch("/api/ispremium",{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json'
          }
        })
        const dat2 = await response.json();
        if (dat2.status){
          setdata2(dat2)
        }
        else{
          Router.replace('/mitra/informasi-pembayaran')
        }
      }
      getpremium()
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



    //data input 
    const [id_pembeli,setid] = useState('')
    const [nama_pembeli,setnama] = useState('')
    const [alamat_pembeli,setalamat] = useState('')
    const [kondisi_barang,setkondisi]  = useState('')
    
    const datahandleID = (e)=>{
      setid(e.target.value),
      setnama('');
    }
    const datahandleName = (e)=>{
      setnama(e.target.value),
      setid('');
    }
    //data to json
    const dat = {
      "nama_pembeli":nama_pembeli,
      "alamat_pembeli":alamat_pembeli,
      "kondisi_barang":kondisi_barang,
      "id_pembeli":Number(id_pembeli)}
    //function to api
    async function tambah(){
      const response = await fetch("/api/addtracking",{
        method:"POST",
        headers: {
          'Authorization': `Bearer ${cookies}`,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(dat)
      })
      const data = await response.json()
      setpesan(data.message)
      setpopup(true)
    }
    // set pop up 
    const[pesan,setpesan]= useState()
    const [pop_up,setpopup] = useState(false)
    const notsuccess = () => {
      setpopup(false)
    }
    const success = () => {
      Router.replace("/mitra/tracking")
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
        <div className="sidebar-left content1 bg-color-yellow col-md-4  d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra/profil'><div className="circle mt-4" /></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <Link href='/mitra/tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Pegawai</button></Link>
            <Link href='/mitra/konfirmasi-pendistribusian'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
            <Link href='/mitra/tracking'><button type="button" className="btn btn-admin btn-light poppins rounded-pill text-warning shadow btn-lg">Tracking</button></Link>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
          </div>
        </div> 
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          {/* isinya data nanti tapi */}
          <h1 className='poppins fw-bold text-center'>Tambah Tracking Produk</h1>

          <div className='input-tracking ms-5 me-5'>
          <div className="input d-flex flex-column mb-2">
              <label className="ms-3  pb-1 poppins">ID Pembeli</label>
              <input value={id_pembeli} onChange={datahandleID} disabled={nama_pembeli !== ''} className="rounded-pill p-1 ps-3" type="number" placeholder="Masukkan ID pembeli anda(jika ada)"  />
          </div>
          <div className="input d-flex flex-column mb-2">
              <label className="ms-3  pb-1 poppins">Nama Pembeli</label>
              <input value={nama_pembeli} onChange={datahandleName} disabled={id_pembeli !== ''} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan nama pembeli anda"  />
          </div>
          <div className="input d-flex flex-column mb-2">
              <label className="ms-3  pb-1 poppins">Alamat Pembeli</label>
              <input value={alamat_pembeli} onChange={(e)=>setalamat(e.target.value)} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan alamat pembeli produk anda"  />
          </div>
          <div className="input d-flex flex-column mb-2">
              <label className="ms-3  pb-1 poppins">Kondisi Barang</label>
              <select value={kondisi_barang} onChange={(e)=>setkondisi(e.target.value)}  className="rounded-pill p-1 ps-3">
                <option value="">Select an option</option>
                <option value="Sedang Dikemas">Sedang Di kemas</option>
                <option value="Sedang Dalam Perjalanan">Sedang Dalam Perjalanan</option>
                <option value="Barang Sudah Diterima">Barang Sudah Diterima</option>
              </select>
          </div>
          </div>
        {/* button */}
          <div className="button-left d-flex justify-content-end gap-4 mt-4">
            <button onClick={(e) => {e.stopPropagation(),Router.back()}} type="button" className="btn btn-admin bg-color-red poppins text-white shadow rounded-pill  btn-lg">Batal</button>
            <button onClick={(e)=>{e.stopPropagation,tambah()}} type="button" className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Buat</button>
          </div>

        </div>
        {/* pop up success atau gagal */}
        {pop_up &&( pesan == "Data berhasil dibuat" ?(
            <div className='status'>
            <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
              <img src="/images/centang.png" alt="" />
              <h1 className="poppins fw-bold text-dark">{pesan}</h1>
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
    </div>
  </div>
  )
}
