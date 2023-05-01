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

    
      const res = await axios.post('/api/approval' ,send,config )
      const data = await res.data
      router.replace('/admin')
    
  }

  const reject = async (e) => {
    e.preventDefault(); // prevent form from submitting normally
    const cookie = nookies.get('token');
    const cookies = cookie.token;
    const send = {
        name:data2.name,
        email:data2.email,
        password:data2.password,
        id:accid
      }
      console.log(send)
  
    const config = {
        headers :{
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    }
};

    
      const res = await axios.post('/api/reject' ,send,config )
      const data = await res.data
      router.replace('/admin')
    
  }

  function logout(){
    nookies.destroy(null,'token');
    nookies.destroy(null,'role');
    Router.replace('/');
}
const [tampil,setTampil] = useState(false)
const [tampil2,setTampil2] = useState(false)
const [tampil3,setTampil3] = useState(false)
const pop = () => {
  setTampil2(true)
} 
const notpop = () => {
  setTampil2(false)
} 
const pop2 = () => {
  setTampil3(true)
} 
const notpop2 = () => {
  setTampil3(false)
} 
const success = () => {
  setTampil(true)
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
    <nav className='navbar fixed-top navbar-light bg-light'>
      <div class="container-fluid">
        <h2 className="navbar-brand ms-3 mt-3 fw-bold poppins text-color-yellow">Tem.u</h2>
      </div>
    </nav>
    <div className="content">
      <div className="row">
        <div className="sidebar-left bg-color-yellow col-md-4 pt-5 d-flex flex-column align-items-center gap-2">
        <div className='content2  d-flex flex-column align-items-center gap-2'>
          <Link href='/admin/profil'><div className="circle mt-5" /></Link>
          <h4>{data.name}</h4>
          <div className="button-item d-flex flex-column align-items-center gap-4">
            <Link href='/admin'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow text-warning  btn-lg">Pengajuan
              Akun</button></Link>
            <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Pengajuan
              Premium</button>
            <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Keluar</button>
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
              <button type="button" onClick={success} className="btn tombol-approve bg-color-red poppins rounded-pill text-white shadow  btn-lg">Tolak</button>
              <button type="button" onClick={pop2} className="btn ms-2 tombol-approve bg-color-green poppins rounded-pill text-white shadow  btn-lg">Setuju</button>
            </div>


            {/*pop up setuju */}
            {tampil3 &&(  
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/centang.png" alt="" />
                <h1 className="poppins fw-bold text-dark">Pengajuan Berhasil Disetujui</h1>
                <button className="btn  set btn-warning rounded-pill shadow text-white" onClick={approve}>OK</button>
              </div>
            </div>
          )}
            {/*pop up setuju */}
            {tampil &&(  
            <div className='status'>
              <div className="d-flex pop-up flex-column py-2  align-items-center container bg-white position-fixed top-50 start-50 translate-middle ">
                <img src="/images/alert.png" alt="" />
                <h1 className="poppins fw-bold text-dark">Pengajuan Berhasil Ditolak</h1>
                <button className="btn  set btn-warning rounded-pill shadow text-white" onClick={reject}>OK</button>
              </div>
            </div>
          )}
            {/*pop up logout */}
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
  </div>
  )
}
