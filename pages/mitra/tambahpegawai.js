/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function tambahpegawai() {
  return (
    <div>
    <title>Tem.u</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className="d-flex justify-content-between navbar fixed-top navbar-light bg-light">
    <div class="container-fluid">
        <h2 className="ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
        <div className="tombol d-flex gap-4 align-items-center">
          <Link href='/mitra/cuaca'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Cuaca</button></Link>
          <button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Pencatatan</button>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left content1 bg-color-yellow col-md-4 pb-5 d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra'><div className="circle mt-4" /></Link>
          <h4>Eren Yeager</h4>
          <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Home</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow text-warning btn-lg">Pegawai</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Konfirmasi Pendistribusian</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Tracking</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Log Out</button>
          </div>
        </div>
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <div className="d-flex justify-content-end me-4">
            <button className="btn btn-lg bg-color-green shadow rounded-pill ">Pegawai &nbsp;<img src="/images/plus.png" alt="" /></button>
          </div>
          <h1 className="poppins fw-bold text-center">Daftar Pegawai</h1>
          <div className="d-flex flex-column gap-4 align-items-center">
            {/* content for loop entar     */}
            <div className=" column-name-pgw d-flex justify-content-between shadow align-items-center  bg-color-yellow rounded-pill poppins fw-bold">
              <p>Eren Yeager</p>
              <img src="/images/worker.png" alt="" />
            </div>
            {/* end content for loop entar*/}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
