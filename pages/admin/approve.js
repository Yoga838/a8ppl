/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import nookies from 'nookies'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { useRouter } from 'next/router'
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
  


export default function approve({}) {

    const router = useRouter()
    const {
        query:{id,name},
    } = router
    const props = {
        name,
        id
    }
    const acc = props.id
    const accid = parseInt(acc)
    
    
    
    const [data,setdata] = useState([]);
    const [data2,setdata2] = useState([]);
    console.log(data2)

  useEffect(() => {
    const {
        query:{id,name},
    } = router
    const props = {
        name,
        id
    }

    const cookie = nookies.get('token');
    const cookies = cookie.token;
    const acc = props.id
    const accid = parseInt(acc)

    const send = {
        id:accid
    }
  
    const config = {
        headers :{
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    }
};
    axios.get('/api/getadmin' ,config )
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axios.post('/api/getmitra' ,send,config )
      .then(response => {
        setdata2(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, [router]);
  function logout(){
    nookies.destroy(null,'token');
    nookies.destroy(null,'role');
    alert("berhasil logout")
    Router.replace('/');
  }
  const approve = async (e) => {
    e.preventDefault(); // prevent form from submitting normally
    const cookie = nookies.get('token');
    const cookies = cookie.token;

    const send = {
        id:accid
    }
  
    const config = {
        headers :{
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    }
};
    let setuju = confirm("apakah anda yakin?");
    if(!setuju){
      //do nothing
    }
    else{
      const res = await axios.post('/api/approval' ,send,config )
      const data = await res.data
      alert(data.message)
      router.replace('/admin/pengajuan')
    }
  }
  function logout(){
    let yakin = confirm("apakah anda yakin untuk logout??")
    if(!yakin){
      //do nothing
    }
    else{
      nookies.destroy(null,'token');
      nookies.destroy(null,'role');
      alert("berhasil logout")
      Router.replace('/');
    }
}

  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tem.u</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <nav className='navbar fixed-top navbar-light bg-light'>
      <div class="container-fluid">
        <h2 className="navbar-brand ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left bg-color-yellow col-md-4 pt-5 d-flex flex-column align-items-center gap-2">
        <div className='content2  d-flex flex-column align-items-center gap-2'>
          <Link href='/admin'><div className="circle mt-5" /></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill text-warning  btn-lg">Pengajuan
              Akun</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Pengajuan
              Premium</button>
            <button onClick={logout} type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Log Out</button>
          </div>
          </div>
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <h1 className="poppins fw-bold  text-center">Persetujuan Pembuatan Akun Mitra</h1>
          <div className="d-flex justify-content-center flex-column gap-4">
            {/* content      */}
            <div className=" column-acc  bg-color-yellow  poppins fw-bold">
              <p>Nama Lengkap:</p>
              <p>{data2.name}</p>
              <p>No Telp:</p>
              <p>{data2.no}</p>  
              <p>Alamat Lengkap:</p>
              <p>{data2.alamat}</p>
              <p>Email</p>
              <p>{data2.email}</p>
              <p>Password</p>
              <p>{data2.password}</p>
              <p>Link Foto Peruasahaan</p>
              <p>{data2.usaha}</p>
              <p>Link Foto Pribadi</p>
              <p>{data2.pribadi}</p>
            </div>
            {/* end content*/}
            <div className="tombol mb-5 mt-3  justify-content center">
              <button type="button" className="btn tombol-approve btn-danger poppins rounded-pill text-white  btn-lg">Tolak</button>
              <button type="button" onClick={approve} className="btn ms-2 tombol-approve btn-success poppins rounded-pill text-white  btn-lg">Setuju</button>
            </div>
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/centang.png" alt="" />
                <h1 className="poppins fw-bold text-dark">{pesan}</h1>
                <button className="btn btn-lg btn-warning rounded-pill text-white" onClick={success}>OK</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
