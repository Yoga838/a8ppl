/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import axios from 'axios';import Router from 'next/router'
import profil from '@/controller/profil';
import { useRouter } from 'next/router';

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


export default function edit_konfirmasi() {

    const router = useRouter()
    const {
        query:{id},
    } = router
    const props = {
        id
    }

    const cookie = nookies.get('token');
    const cookies = cookie.token;
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
        const dat = await fetch("/api/getallkonfirmasi",{
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(idacc)
        })
        const data = await dat.json()
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
    //data setter
    const [dat1,setdat1]=useState()
    const [dat2,setdat2]=useState()
    const [dat3,setdat3]=useState()
    //manipulate or

    const nama_pembeli = dat1  || data2.nama_pembeli 
    const alamat_pembeli = dat2 || data2.alamat_pembeli
    const keterangan =  dat3 || data2.keterangan 

    const send = {
      "id":Number(props.id),
      "nama_pembeli":nama_pembeli,
      "alamat_pembeli":alamat_pembeli,
      "keterangan":keterangan
    }

    //function save
    async function simpan(){
      const response = await fetch("/api/addkonfirmasi",{
        method:"PATCH",
        headers:{
          'Authorization': `Bearer ${cookies}`,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(send)
      })
      const data = await response.json()
      setpesan(data.message)
      settampil(true)
    }
    //pop up
    const [pesan,setpesan] = useState()
    const [tampil,settampil] = useState(false)
    function success(){
      Router.back()
    }
    function notsuccess(){
      settampil(false)
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
                <Link href='/pegawai/konfirmasi'><button type="button" className="btn btn-admin btn-light poppins rounded-pill text-warning shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
                <Link href='/pegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Tracking</button></Link>
                <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
        </div>
        </div> 
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          {/* isinya data nanti tapi */}
          <h1 className="poppins fw-bold text-center">Edit Konfirmasi Pendistribusian</h1>
          <div className="input d-flex flex-column mb-2">
              <label className="ms-3  pb-1 poppins">Nama Pembeli</label>
              <input value={nama_pembeli} onChange={(e)=>{setdat1(e.target.value)}}  className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan nama pembeli anda"  />
          </div>
          <div className="input d-flex flex-column mb-2">
              <label className="ms-3  pb-1 poppins">Alamat Pembeli</label>
              <input value={alamat_pembeli} onChange={(e)=>{setdat2(e.target.value)}} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan nama pembeli anda"  />
          </div>
          <div className="input d-flex flex-column mb-2">
              <label className="ms-3  pb-1 poppins">Keterangan</label>
              <input value={keterangan} onChange={(e)=>{setdat3(e.target.value)}} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan nama pembeli anda"  />
          </div>
          {/* button */}
          <div className="button-left d-flex justify-content-end gap-4 mt-4">
            <button onClick={(e)=>{e.stopPropagation,router.back()}} type="button" className="btn btn-admin bg-color-red poppins text-white shadow rounded-pill  btn-lg">Batal</button>
            <button onClick={(e)=>{e.stopPropagation,simpan()}} type="button" className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Simpan</button>
          </div>
        </div>
        {/* pop up simpan */}
        {tampil &&( pesan == "Data Berhasil Diinputkan" ?(
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
