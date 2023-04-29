/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import React from 'react'
import nookies from 'nookies'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'

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

export default function editprofil() {
    const cookie = nookies.get('token');
    const cookies = cookie.token;

    const [data,setdata] = useState([]);
    useEffect(() => {
      const cookie = nookies.get('token');
      const cookies = cookie.token;
    
      const headers ={
        'Authorization': `Bearer ${cookies}`,
        'Content-Type': 'application/json',
      };
      axios.get('/api/getmitralog' ,{headers} )
        .then(response => {
          setdata(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    // const name_api = data.name
    // const no_api = data.no
    // const alamat_api = data.alamat
    // const email_api = data.email
    // const password_api = data.password


    const [name,setName] = useState('')
    const [no,setNo] = useState('')
    const [alamat,setAlamat] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
    const updatemitra = async (e) => {
        
        // if (!name||!email||!password||!no||!alamat){
        // setAlamat(data.alamat)
        // setEmail(data.email)
        // setName(data.name)
        // setNo(data.no)
        // setPassword(data.password)
        // }
        e.preventDefault(); // prevent form from submitting normally
        const res = await fetch('/api/editmitra', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${cookies}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email:final_email, name:final_name, password,no:final_no ,alamat:final_alamat})
        });
        
        const data = await res.json();
        console.log(data);
        
        alert (data.message)
        if (data.message == "berhasil diupdate"){
          Router.push('/mitra');
        }
        
      }

      function handleInputFocus(event) {
        event.target.setSelectionRange(0, event.target.value.length);
      }
    const final_name = name !== ''? name : data?.name || ''
    const final_no = no !== ''? no : data?.no || ''
    const final_alamat = alamat !== ''? alamat : data?.alamat || ''
    const final_email = email !== ''? email : data?.email || ''


    function batal(){
        Router.replace('/mitra')
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
        <div className="sidebar-left content1 bg-color-yellow col-md-4 pt-5 d-flex flex-column align-items-center gap-2">
        <div className='content2 d-flex flex-column align-items-center gap-2'>
          <Link href='/mitra'><div className="circle mt-5"/></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Home</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Pegawai</button>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Tracking</button>
            <button onClick={logout} type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Log Out</button>
          </div>
        </div>
        </div>
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <div className="circle mx-auto " />
          <div className="content mt-4">
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>Nama Lengkap</label>
              <input className="rounded-pill border-0 p-1 ps-2" type="text" value={final_name} onChange={(e) => setName(e.target.value)} onFocus={handleInputFocus}/>
            </div>
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>No.Telp</label>
              <input className="rounded-pill border-0 p-1 ps-2" type="text" value={final_no} onChange={(e) => setNo(e.target.value)} onFocus={handleInputFocus}/>
            </div>
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>Alamat Lengkap</label>
              <input className="rounded-pill border-0 p-1 ps-2" type="text" value={final_alamat} onChange={(e) => setAlamat(e.target.value)} onFocus={handleInputFocus}/>
            </div>
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>Email</label>
              <input className="rounded-pill border-0 p-1 ps-2" type="text" value={final_email} onChange={(e) => setEmail(e.target.value)} onFocus={handleInputFocus}/>
            </div>
            <div className="inp d-flex flex-column gap-1">
              <label className="poppins" htmlFor>Password</label>
              <input className="rounded-pill border-0 p-1 ps-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={handleInputFocus}/>
            </div>
          </div>
          <div className="tombol d-flex justify-content-end gap-4 mt-4 me-5">
            <button onClick={batal} className="btn btn-lg rounded-pill poppins btn-danger tombol-profil">batal</button>
            <button onClick={updatemitra} className="btn btn-lg rounded-pill poppins btn-success tombol-profil">simpan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
