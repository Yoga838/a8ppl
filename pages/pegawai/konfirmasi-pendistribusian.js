/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import nookies from 'nookies'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'

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

export default function user_page() {

  const [data,setdata] = useState([]);
  useEffect(() => {
    const cookie = nookies.get('token');
    const cookies = cookie.token;
  
    const headers ={
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    };
    axios.get('/api/getpegawai' ,{headers} )
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const cookie = nookies.get('token');
  const cookies = cookie.token;

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

  //data
  const [nama_pembeli,setnama] = useState()
  const [alamat_pembeli,setalamat] = useState()
  const [keterangan,setketrangan] = useState()
  
  //set data
  const send = {
    "nama_pembeli":nama_pembeli,
    "alamat_pembeli":alamat_pembeli,
    "keterangan":keterangan
  }
  // operasi tambah
  async function tambah (){
    const response = await fetch("/api/addkonfirmasi",{
      method:"POST",
      headers:{
        'Authorization': `Bearer ${cookies}`,
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(send)
    })
    const data = await response.json()
    setpesan(data.message)
    settampil(true)
  }

  //set pop up
  const [pesan,setpesan] = useState()
  const [tampil,settampil] = useState(false)
  function success(){
    Router.replace("/pegawai")
  }
  function notsuccess(){
    settampil(false)
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
            <div className="sidebar-left bg-color-yellow col-md-4 pt-5 pb-5 d-flex flex-column align-items-center gap-2">
            <div className='content2  d-flex flex-column align-items-center gap-2'>
              <Link href='/pegawai/profil'><div className="circle mt-5" /></Link>
              <h4>{data.name}</h4>
              <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
                <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button>
                <Link href='/pegawai/tracking'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Tracking</button></Link>
                <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
              </div>
            </div>
            </div>
            <div className="col-md-8 pe-5 content1 sidebar-right color-brown pt-5">
                <h1  className='poppins fw-bold text-center'>Konfirmasi Pendistribusian</h1>
                <div className="input d-flex flex-column mb-2">
                    <label className="ms-3  pb-1 poppins">Nama Pembeli</label>
                    <input value={nama_pembeli} onChange={(e) => setnama(e.target.value)} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan nama pembeli anda"  />
                </div>
                <div className="input d-flex flex-column mb-2">
                    <label className="ms-3  pb-1 poppins">Alamat Pembeli</label>
                    <input value={alamat_pembeli} onChange={(e) => setalamat(e.target.value)} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan alamat lengkap pembeli anda"  />
                </div>
                <div className="input d-flex flex-column mb-2">
                    <label className="ms-3  pb-1 poppins">Keterangan</label>
                    <input value={keterangan} onChange={(e) => setketrangan(e.target.value)} className="rounded-pill p-1 ps-3" type="text" placeholder="Masukkan keterangan pembeli anda"  />
                </div>
                {/* button */}
                <div className="button-left d-flex justify-content-end gap-4 mt-4">
                    <button type="button" className="btn btn-admin bg-color-red poppins text-white shadow rounded-pill  btn-lg">Batal</button>
                    <button onClick={(e)=>{e.stopPropagation,tambah()}} type="button" className="btn btn-admin bg-color-green poppins text-white shadow rounded-pill  btn-lg">Buat</button>
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
                <button className="btn shadow set bg-color-green rounded-pill text-white" onClick={logout}>IYA</button>
                <button className="btn shadow set bg-color-red rounded-pill text-white" onClick={notpop}>TIDAk</button>
                </div>
              </div>
            </div>
          )}
          {/* pop up simpan */}
          {tampil &&( pesan == "Data Berhasil Dibuat" ?(
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
        </div>
  )
}
