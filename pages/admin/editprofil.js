/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
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


export default function Profil() {
  
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

  const [pesan,setPesan] = useState('')
  const updateadmin = async (e) => {
    e.preventDefault(); // prevent form from submitting normally
    
    const cookie = nookies.get('token');
    const cookies = cookie.token;
    const role = nookies.get('role');
    const job = role.role
    const edit = new profil();
    const dat = await edit.UpdateDataAkun(cookies,{deskripsi},job)
    setPesan(dat.message)
    setTampil(true)
    
  }
  const [deskripsi,setDeskripsi] = useState('')
  const [tampil,setTampil] = useState(false)
  
  function batal(){
    Router.replace('/admin/profil')
  }
  const success = () => {
    setTampil(false)
    Router.replace('/admin/profil');
  }
  const notsuccess = () => {
    setTampil(false)
  }
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tem.u</title>
    <link rel="stylesheet" href="style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className='navbar fixed-top navbar-light bg-light'>
      <div class="container-fluid">
        <h2 className="navbar-brand ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left bg-color-yellow col-md-4 pt-5 d-flex flex-column align-items-center gap-2">
          <div className='content2 d-flex flex-column align-items-center gap-2'>
            <div className="circle mt-5" />
            <h4 >{data.name}</h4>
            <div className="button-item d-flex flex-column align-items-center gap-4">
              <Link href='/admin'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Pengajuan
                Akun</button></Link>
              <Link href='/admin/premium'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Pengajuan
                Premium</button></Link>
              <button type="button" onClick={pop} className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
            </div>
          </div>
        </div>
        <div className="col-md-8 pe-5 content1 sidebar-right color-brown pt-5">
          <div className="circle mx-auto " />
          <h4 className="text-center">{data.name}</h4>
          <div className="content mt-4 ms-5">
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>Deskripsi baru</label>
              <textarea rows='10' className='deskripsi p-3' col='30' value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
            </div>
          </div>
          <div className="tombol d-flex justify-content-end gap-4 mt-4 me-5">
            <button onClick={batal} className="btn btn-lg rounded-pill poppins bg-color-red shadow text-white tombol-profil">Batal</button>
            <button onClick={updateadmin} className="btn btn-lg rounded-pill poppins bg-color-green shadow text-white tombol-profil">Simpan</button>
          </div>
        </div>
      </div>
    </div>
    {tampil &&( pesan == "Data berhasil disimpan" ?(
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
                <h1 className="poppins fw-bold text-dark">{pesan}</h1>
                <button className="btn btn-lg btn-warning rounded-pill shadow text-white" onClick={notsuccess}>OK</button>
              </div>
            </div>
          )      
          )}
    {/* logout */}
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
