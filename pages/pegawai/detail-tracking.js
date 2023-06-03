/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import nookies from 'nookies'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {Router,useRouter} from 'next/router'
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

export default function detail_tracking() {


  const router = useRouter()
  const [data,setdata] = useState([]);
  const [data2,setdata2] = useState([]);
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
      const {
        query:{id,nama_pembeli},
    } = router
    const props = {
        nama_pembeli,
        id
    }
    const convertid = parseInt(props.id)
    const idacc = {id:convertid}
    async function gettracking (){
        const pegawai = await fetch("/api/getalltracking",{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${cookies}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(idacc)
        })
        const data = await pegawai.json()
        setdata2(data)
    }
    gettracking()
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
    router.push({
      pathname : "/pegawai/edit-tracking",
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
                <Link  href='/pegawai/konfirmasi'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Konfirmasi Pendistribusian</button></Link>
                <Link href='/pegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill text-warning shadow btn-lg">Tracking</button></Link>
                <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
              </div>
            </div>
            </div>
            <div className="col-md-8 pe-5 content1 sidebar-right color-brown pt-5">
                <h1 className='poppins fw-bold text-center pb-3'>Tracking Produk</h1>
                <div className='bg-color-yellow p-4 data mt-5'>
                    <p className="poppins">Nama Pembeli:<strong> {data2.nama_pembeli} </strong></p>
                    <p className="poppins">Alamat: <strong> {data2.alamat_pembeli} </strong></p>
                    <p className="poppins">Kondisi Barang: <strong> {data2.kondisi_barang} </strong></p>
                </div>
            </div>
          </div>
        </div>
        <button onClick={(e)=>{e.stopPropagation,handleButtonClick()}} className="poppins fw-bold button-edit bg-color-yellow btn btn-lg shadow rounded-pill">Edit Tracking&nbsp;<img src="/images/button_icon_edit.png" alt="" /></button>

        {tampil2 &&(  
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/centang.png" alt="" />
                <h1 className="poppins fw-bold text-dark">Apakah Anda Ingin Keluar?</h1>
                <div className='d-flex gap-3 pb-2'>
                <button className="btn shadow set bg-color-green rounded-pill text-white" onClick={logout}>IYA</button>
                <button className="btn shadow set bg-color-red rounded-pill text-white" onClick={notpop}>TIDAK</button>
                </div>
              </div>
            </div>
          )}
        </div>
  )
}
