/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import React from 'react'
import nookies from 'nookies'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Router,useRouter} from 'next/router'
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

export default function editprofil() {
    const cookie = nookies.get('token');
    const cookies = cookie.token;
    const role = nookies.get('role');  
    const job = role.role
    const router = useRouter();
    const {
      query:{id,nama},
    } = router
    const props = {
        nama,
        id
    }
    const idacc = parseInt(props.id)

    const [data2,setdata2] = useState([]);
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
      const {
          query:{id,nama},
      } = router
      const props = {
          nama,
          id
      }
      const idacc = parseInt(props.id)
      async function GetPegawai (){
        const pegawai = await axios.post("/api/getpegawai",
          {"id":idacc},
          {headers: {
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json',
          }}
        )
        const data = await pegawai.data
        setdata2(data)
      }
      GetPegawai()
        
    }, [router]);

    const [name,setName] = useState('')
    const [no,setNo] = useState('')
    const [alamat,setAlamat] = useState('')
    const [pesan,setPesan] = useState('')
    const updatemitra = async (e) => {
        e.preventDefault(); // prevent form from submitting normally
        const phoneNumberRegex = /^(\+62|62|0)[2-9][0-9]{9,10}$/;
        const isValidPhoneNumber = phoneNumberRegex.test(final_no);
        if(isValidPhoneNumber){ 
          async function update(){
            const response = await axios.put("/api/editpegawai",
            {name:final_name,no:final_no,id:idacc},
            {headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            }}
            )
            const dat = await response.data
            console.log(dat)
            setPesan(dat.message)
            setTampil(true)
            console.log(idacc)
          }
        update()
        }
        else if (!isValidPhoneNumber){
          alert("format nomor telepon anda tidak sesuai")
        }
    
    }

      function handleInputFocus(event) {
        event.target.setSelectionRange(0, event.target.value.length);
      }
    const final_name = name !== ''? name : data2?.name || ''
    const final_no = no !== ''? no : data2?.no || ''


    function batal(){
        router.back()
    }
    function logout(){
          nookies.destroy(null,'token');
          nookies.destroy(null,'role');
          Router.replace('/');
    }
    const [tampil,setTampil] = useState(false)
    const [tampil2,setTampil2] = useState(false)
    const success = () => {
      setTampil(false)
      router.replace('/mitra/tambahpegawai');
    }
    const pop = () => {
      setTampil2(true)
    } 
    const notpop = () => {
      setTampil2(false)
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
          <Link href='/mitra/profil'><div className="circle mt-4"/></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <Link href='tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins text-warning rounded-pill shadow  btn-lg">Pegawai</button></Link>
            <Link href='konfirmasi-pendistribusian'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
            <Link href='/mitra'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Tracking</button></Link>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Keluar</button>
          </div>
        </div>
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <div className="circle mx-auto "><img src='/images/worker.png'/></div>
          <div className="content mt-4">
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>Nama Lengkap</label>
              <input className="rounded-pill border-0 p-1 ps-2" type="text" value={final_name} onChange={(e) => setName(e.target.value)} onFocus={handleInputFocus}/>
            </div>
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>No.Telp</label>
              <input className="rounded-pill border-0 p-1 ps-2" type="text" value={final_no} onChange={(e) => setNo(e.target.value)} onFocus={handleInputFocus}/>
            </div>
          </div>
          <div className="tombol d-flex justify-content-end gap-4 mt-4 me-5">
            <button onClick={batal} className="btn btn-lg rounded-pill poppins bg-color-red shadow text-white tombol-profil">batal</button>
            <button onClick={updatemitra} className="btn btn-lg rounded-pill poppins bg-color-green shadow text-white tombol-profil">simpan</button>
          </div>
          {tampil &&( pesan == "Data berhasil disimpan" ?(
            <div className='status'>
            <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
              <img src="/images/centang.png" alt="" />
              <h1 className="poppins fw-bold text-dark text-center">{pesan}</h1>
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
          {tampil2 &&(  
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/centang.png" alt="" />
                <h1 className="poppins fw-bold text-dark">Apakah Anda Ingin Keluar?</h1>
                <div className='d-flex gap-3 pb-2'>
                <button className="btn  set bg-color-green rounded-pill shadow text-white" onClick={logout}>IYA</button>
                <button className="btn  set bg-color-red rounded-pill shadow text-white" onClick={notpop}>TIDAK</button>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  </div>
  )
}
