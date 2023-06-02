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

export default function visitor_page() {

  const [data,setdata] = useState([]);
  const [data2,setdata2] = useState([]);
  useEffect(() => {
    const cookie = nookies.get('token');
    const cookies = cookie.token;
  
    const headers ={
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    };
    axios.get('/api/getuser' ,{headers} )
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get('/api/visitorgetdat',{headers})
      .then(response => {
        setdata2(response.data);
      })
      .catch(error => {
        console.log(error);
      });
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

  const handleButtonClick = (item) => {
    senddata(item.id,item.nama_pembeli)
  };
  function senddata(setId,setName){
    Router.push({
      pathname : "/visitor/detail-tracking",
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
              <Link href='/visitor/profil'><div className="circle mt-5" /></Link>
              <h4>{data.name}</h4>
              <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
                <button type="button" className="btn btn-admin btn-light poppins rounded-pill text-warning shadow btn-lg">Tracking</button>
                <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow btn-lg">Keluar</button>
              </div>
            </div>
            </div>
            <div className="col-md-8 pe-5 content1 sidebar-right color-brown pt-5">
            <h1 className="poppins fw-bold text-center mt-4">Tracking Pendistribusian</h1>
            <div className="d-flex flex-column gap-4 align-items-center">
                {/* content for loop entar     */}
                {data2.map((dat,index) =>(
                <div key={dat.id} className=" column-name-pgw d-flex justify-content-between shadow align-items-center  bg-color-yellow rounded-pill poppins fw-bold" onClick={(e) => {
                e.stopPropagation();
                handleButtonClick(dat)
                }}>
                    <p>{dat.nama_pembeli}</p>
                    <img src="/images/man.png" alt="" />
                </div>
                ))}

                {/* <div  className=" column-name-pgw d-flex justify-content-between shadow align-items-center  bg-color-yellow rounded-pill poppins fw-bold">
                    <p>Thanos</p>
                    <img src="/images/man.png" alt="" />
                </div> */}
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
                <button className="btn shadow set bg-color-red rounded-pill text-white" onClick={notpop}>TIDAK</button>
                </div>
              </div>
            </div>
          )}
        </div>
  )
}
