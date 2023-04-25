/* eslint-disable @next/next/no-css-tags */
import Link from 'next/link'
import React from 'react'
import nookies from 'nookies'

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
  
  return{
    props: {}
  }
}

export default function mitra_page() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tem.u</title>
    <link rel="stylesheet" href="/style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className="d-flex justify-content-between">
      <h2 className="ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
      <div className="tombol d-flex gap-4 align-items-center">
        <Link href='/mitra/cuaca'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Cuaca</button></Link>
        <button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Pencatatan</button>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left bg-color-yellow col-md-4 pt-5 d-flex flex-column align-items-center gap-2">
          <div className="circle mt-5" />
          <h4>Eren Yeager</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Home</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Pegawai</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Tracking</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Log Out</button>
          </div>
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <div className="circle mx-auto " />
          <h4 className="text-center">Eren Yeager</h4>
          <p className="poppins">Nama Lengkap:</p>
          <p className="poppins fw-bold">Eren Yeager</p>
          <p className="poppins">No Telp:</p>
          <p className="poppins fw-bold">034569521348</p>
          <p className="poppins">Alamat Lengkap:</p>
          <p className="poppins fw-bold">RT.001 RW.999 Districk Shiganshina, Wall Maria, Pulau Paradise</p>
          <p className="poppins">Email:</p>
          <p className="poppins fw-bold">sasageyosarangheyodattebayo@gmail.com</p>
          <p className="poppins">password:</p>
          <p className="poppins fw-bold">********************</p>
        </div>
        <button className="poppins fw-bold button-edit bg-color-yellow btn btn-lg rounded-pill">Edit Profil&nbsp;<img src="/images/button_icon_edit.png" alt="" /></button>
      </div>
    </div>
  </div>
  )
}
