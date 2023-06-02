/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import Link from 'next/link'
import { useState,useEffect } from 'react';
import nookies from 'nookies'
import axios from 'axios'
import profil from '../../controller/profil';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { format } from 'date-fns';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import pencatatan from '@/controller/pencatatan';



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





export default function Pencatatan() {

    const router = useRouter()
    const {
        query:{id,name},
    } = router
    const props = {
        name,
        id
    }
    const date_catat = props.name;
    const id_catat = props.id;

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

const [data,setdata] = useState([]);
const [data2,setdata2] = useState([]);

  useEffect(() => {
    const {
        query:{id,name},
    } = router
    const props = {
        name,
        id
    }
    const id_data = parseInt(props.id)
    const cookie = nookies.get('token');
    const cookies = cookie.token;
    const role = nookies.get('role');
    const job = role.role
    const send = {id:id_data}
    
    async function getdata(){
      const Get_Profile = new profil()
      const dat = await Get_Profile.getDataAkun(job,cookies)
      setdata(dat)
    }
    async function getpilih(){
      const pilih = new pencatatan()
      const data = await pilih.PencatatanDipilih(cookies,send)
      setdata2(data)
    }
    getpilih()
    getdata()
    }, [router]);

    const divRef = useRef(null)

    console.log(data2)
    
    const senddata = () =>{
      Router.push({
        pathname : "/mitra/edit_pencatatan",
        query: {
          id:id_catat,
          name:date_catat
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
        <div className="tombol d-flex gap-4 align-items-center">
          <Link href='/mitra/cuaca'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Cuaca</button></Link>
          <Link href='/mitra'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill text-warning shadow text-white"  role="button">Pencatatan</button></Link>
        </div>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left content1 bg-color-yellow col-md-4 pb-5 d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra/profil'><div className="circle mt-4" /></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
          <Link href='tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Pegawai</button></Link>
          <Link href='konfirmasi-pendistribusian'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Konfirmasi Pendistribusian</button></Link>
          <Link href='/mitra/tracking'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Tracking</button></Link>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Keluar</button>
          </div>
        </div>
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5" >
            {/* data tabel */}
        <div className='data' ref={divRef}>
        <h1 className="poppins fw-bold text-center">Pencatatan {date_catat}</h1>
        <div className="tabel table-responsive">
          <table id='table-to-xls' className="table table-bordered border-dark">
            <thead className="table-kuning">
              <tr>
                <td>No</td>
                <td>Tanggal</td>
                <td>Keterangan</td>
                <td>Pemasukan</td>
                <td>Pengeluaran</td>
                <td>Saldo</td>
              </tr>
            </thead>
            <tbody className="text-center">
            {data2.map((item,index) => (
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{format(new Date(item.tanggal), 'dd-MM-yyyy')}</td>
                  <td>{item.keterangan}</td>
                  <td>{item.pemasukan}</td>
                  <td>{item.pengeluaran}</td>
                  <td>{item.saldo}</td>
                </tr>
            )
            )}
            </tbody>
          </table>
        </div>
        </div>
        {/* end data tabel */}
        <div className="d-flex justify-content-end gap-4 mt-2">
          <button type="button" className="btn bg-color-yellow rounded-pill poppins   shadow">
          <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className ='btn fw-bold'
                    table="table-to-xls"
                    filename="Rekapan"
                    sheet="tablexls"
                    buttonText="Ekspor Pencatatan "
                    /> &nbsp; 
            <img src="/images/save.png" alt="" />
            </button>
          <button type="button" onClick={(e) => {e.stopPropagation();senddata() }} className="btn bg-color-yellow rounded-pill poppins fw-bold edit-btn wrap shadow">Edit Pencatatan &nbsp; <img src="/images/button_icon_edit.png" alt="" /></button>
        </div>
        </div>
      </div>
    </div>
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
  )
}


