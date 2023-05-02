/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
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


export default function profil() {
  
  const [data,setdata] = useState([]);
  useEffect(() => {
    const cookie = nookies.get('token');
    const cookies = cookie.token;
  
    const headers ={
      'Authorization': `Bearer ${cookies}`,
      'Content-Type': 'application/json',
    };
    axios.get('/api/getadmin' ,{headers} )
      .then(response => {
        setdata(response.data);
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
        <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
          <div className="circle mx-auto " />
          <h4 className="text-center">{data.name}</h4>
          <p>    Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce tristique ligula eu massa dapibus, sed fermentum orci iaculis. Proin malesuada, leo ac
            gravida facilisis, dui magna sagittis augue, vitae eleifend magna ex non mi. Vestibulum at dolor vel
            nisi ullamcorper facilisis in ac nisl. Maecenas vulputate vestibulum semper. Duis tincidunt bibendum
            est, at varius ex elementum vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Donec vel nunc lectus. Maecenas vehicula luctus enim, eu gravida tellus
            bibendum quis. Nam at lobortis leo. Sed ut nisi id ipsum lobortis blandit. Etiam ac odio eu magna
            pellentesque pellentesque. Maecenas fermentum vel sapien id suscipit.</p>
          <p>   Praesent finibus varius turpis, eget dignissim lorem sagittis sed. Nullam laoreet ipsum in metus
            consequat consequat. Donec eget metus eget nisi semper molestie eu eu dui. Fusce luctus mauris sed
            dolor faucibus sagittis. Suspendisse consectetur sapien sed ligula placerat rhoncus. Sed bibendum
            nisl at ex faucibus, eu accumsan urna convallis. Aenean sit amet elit arcu. Sed consectetur
            convallis bibendum. In auctor diam a massa lacinia, vitae convallis purus bibendum. Sed efficitur
            mauris mauris, ac convallis lorem euismod non. Donec viverra libero a mauris convallis sagittis.
            Duis imperdiet tellus a augue vehicula maximus. Aenean a urna dolor. Aliquam vel purus id nulla
            congue rutrum. Sed sit amet felis urna.
          </p>
          <p>   Praesent finibus varius turpis, eget dignissim lorem sagittis sed. Nullam laoreet ipsum in metus
            consequat consequat. Donec eget metus eget nisi semper molestie eu eu dui. Fusce luctus mauris sed
            dolor faucibus sagittis. Suspendisse consectetur sapien sed ligula placerat rhoncus. Sed bibendum
            nisl at ex faucibus, eu accumsan urna convallis. Aenean sit amet elit arcu. Sed consectetur
            convallis bibendum. In auctor diam a massa lacinia, vitae convallis purus bibendum. Sed efficitur
            mauris mauris, ac convallis lorem euismod non. Donec viverra libero a mauris convallis sagittis.
            Duis imperdiet tellus a augue vehicula maximus. Aenean a urna dolor. Aliquam vel purus id nulla
            congue rutrum. Sed sit amet felis urna.
          </p>
          <p>   Praesent finibus varius turpis, eget dignissim lorem sagittis sed. Nullam laoreet ipsum in metus
            consequat consequat. Donec eget metus eget nisi semper molestie eu eu dui. Fusce luctus mauris sed
            dolor faucibus sagittis. Suspendisse consectetur sapien sed ligula placerat rhoncus. Sed bibendum
            nisl at ex faucibus, eu accumsan urna convallis. Aenean sit amet elit arcu. Sed consectetur
            convallis bibendum. In auctor diam a massa lacinia, vitae convallis purus bibendum. Sed efficitur
            mauris mauris, ac convallis lorem euismod non. Donec viverra libero a mauris convallis sagittis.
            Duis imperdiet tellus a augue vehicula maximus. Aenean a urna dolor. Aliquam vel purus id nulla
            congue rutrum. Sed sit amet felis urna.
          </p>
        </div>
        <button className="poppins fw-bold button-edit bg-color-yellow btn btn-lg rounded-pill">Edit Profil&nbsp;<img src="/images/button_icon_edit.png" alt="" /></button>
      </div>
    </div>
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
