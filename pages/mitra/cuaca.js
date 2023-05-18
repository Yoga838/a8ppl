/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Script from 'next/script'
import nookies from 'nookies'
import Router from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import profil from '@/controller/profil'

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

export default function cuaca() {
  const [data,setdata] = useState([]);
  const [data2,setdata2] = useState([])
    React.useEffect(() => {
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
    async function getpremium(){
      const response = await fetch("/api/ispremium",{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${cookies}`,
          'Content-Type': 'application/json'
        }
      })
      const dat2 = await response.json();
      setdata2(dat2)
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lon= position.coords.longitude;
            let lat= position.coords.latitude;
            const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${apikey}`;
            

            fetch(url).then((res)=>{
                return res.json();
            }).then((data)=>{
                var dat= new Date(data.dt)
                
                weatherReport(data);
            })
        })
    }   
    }
    getpremium()


           
    },[])

    const apikey="0b65ccf66ad2b73d7d1bf772a558702d";
    
    
    function searchByCity(){
        var place= document.getElementById('input').value;
        var urlsearch= `https://api.openweathermap.org/data/2.5/weather?q=${place}&` + `appid=${apikey}`;
    
        fetch(urlsearch).then((res)=>{
            return res.json();
        }).then((data)=>{
            weatherReport(data);
        })
        document.getElementById('input').value='';
    }
    
    function weatherReport(data){
    
        var urlcast= `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&` + `appid=${apikey}`;
    
        fetch(urlcast).then((res)=>{
            return res.json();
        }).then((forecast)=>{
            hourForecast(forecast);
            dayForecast(forecast)
            document.getElementById('city').innerText= data.name + ', '+data.sys.country;
        
            document.getElementById('temperature').innerText= Math.floor(data.main.temp-273)+ ' °C';
        
            document.getElementById('clouds').innerText= data.weather[0].description;
            
            let icon1= data.weather[0].icon;
            let iconurl= "https://api.openweathermap.org/img/w/"+ icon1 +".png";
            document.getElementById('img').src=iconurl
        })
    
    }
    
    function hourForecast(forecast){
        document.querySelector('.templist').innerHTML=''
        for (let i = 0; i < 5; i++) {
    
            var date= new Date(forecast.list[i].dt*1000)
    
            let hourR=document.createElement('div');
            hourR.setAttribute('class','next');
    
            let div= document.createElement('div');
            let time= document.createElement('p');
            time.setAttribute('class','time')
            time.innerText= (date.toLocaleTimeString(undefined,'Asia/Kolkata')).replace(':00','');
    
            let temp= document.createElement('p');
            temp.innerText= Math.floor((forecast.list[i].main.temp_max - 273))+ ' °C' + ' / ' + Math.floor((forecast.list[i].main.temp_min - 273))+ ' °C';
    
            div.appendChild(time)
            div.appendChild(temp)
    
            let desc= document.createElement('p');
            desc.setAttribute('class','desc')
            desc.innerText= forecast.list[i].weather[0].description;
    
            hourR.appendChild(div);
            hourR.appendChild(desc)
            document.querySelector('.templist').appendChild(hourR);
    }
    }
    
    function dayForecast(forecast){
        document.querySelector('.weekF').innerHTML=''
        for (let i = 8; i < forecast.list.length; i+=8) {
            let div= document.createElement('div');
            div.setAttribute('class','dayF');
            
            let day= document.createElement('p');
            day.setAttribute('class','date')
            day.innerText= new Date(forecast.list[i].dt*1000).toDateString(undefined,'Asia/Kolkata');
            div.appendChild(day);
    
            let temp= document.createElement('p');
            temp.innerText= Math.floor((forecast.list[i].main.temp_max - 273))+ ' °C' + ' / ' + Math.floor((forecast.list[i].main.temp_min - 273))+ ' °C';
            div.appendChild(temp)
    
            let description= document.createElement('p');
            description.setAttribute('class','desc')
            description.innerText= forecast.list[i].weather[0].description;
            div.appendChild(description);
    
            document.querySelector('.weekF').appendChild(div)
        }
    } 
    
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

  console.log(data2.status)
  return (
    <>
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
                  <button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-white"  role="button">Cuaca</button>
                  <Link href='/mitra/pencatatan'><button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Pencatatan</button></Link>
                </div>
              </div>
          </nav>
        <div className="content">
          <div className="row">
            <div className="sidebar-left bg-color-yellow col-md-4  d-flex flex-column align-items-center gap-2">
            <div className='content2 d-flex flex-column align-items-center gap-2'>
              <Link href='/mitra/profil'><div className="circle mt-4" /></Link>
              <h4>{data.name}</h4>
              <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
                <Link href='/mitra'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Home</button></Link>
                <Link href='/mitra/tambahpegawai'><button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Pegawai</button></Link>
                <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Konfirmasi Pendistribusian</button>
                <button type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Tracking</button>
                <button onClick={pop} type="button" className="btn btn-admin btn-light poppins rounded-pill shadow  btn-lg">Keluar</button>
              </div>
            </div>
            </div>
            <div className="col-md-8 pe-5 sidebar-right color-brown pt-5">
              <div>
                <input className="rounded-pill border border-warning ps-3 p-1" type="text" name id="input" placeholder="cari kota" />
                <button className="poppins ms-2 px-3 py-1 rounded-pill border bg-color-yellow" id="search" onClick={searchByCity}>Cari</button>
              </div>
              <div className="bg-color-black kota rounded-pill text-white pt-3 px-4 mt-4">
                <h5 className="poppins" id="city">Bondowoso</h5>
              </div>
              {/*forecast dan suhu sekarng*/}
              <div className="row">
                <div className="col-md-6 pt-5">
                  <div className="templist">
                    <div className="next ">
                      <div>
                        <p className="time">8:30 PM</p>
                        <p>29 °C / 29 °C</p>
                      </div>
                      <p className="desc">Light Rain</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 cuaca d-flex justify-content-center align-items-center">
                  <div className="temp-box d-flex flex-wrap align-items-center">
                    <img src="/images/weathericon.png" alt="" id="img" />
                    <div className="text">
                      <p className="poppins fw-bold fs-2" id="temperature">26 °C</p>
                      <span className="poppins fw-bold" id="clouds">Broken Clouds</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*end forecast dan suhu sekarang*/}
              {data2.status ? (
                <div className="row">
                <div className="contain border border-warning m-5">
                  <div className="prediksi text-white rounded-pill px-4">
                    <h5 className="text-warning poppins fw-bold">Prediksi cuaca 4 hari kedepan</h5>
                  </div>
                  <div className="weekF">
                    <div className="dayF">
                      <p className="date">Sun Jul 03 2022</p>
                      <p>31 °C / 31 °C</p>
                      <p className="desc">Overcast Clouds</p>
                    </div>
                    <div className="dayF">
                      <p className="date">Sun Jul 03 2022</p>
                      <p>31 °C / 31 °C</p>
                      <p className="desc">Overcast Clouds</p>
                    </div>
                  </div>
                </div>
              </div>
               ):
               (
                <div className="row">
                <div className="contain border border-warning m-5 bg-color-yellow">
                  <div className="prediksi text-white rounded-pill px-4">
                    <h5 className="text-warning poppins fw-bold">Prediksi cuaca 4 hari kedepan</h5>
                  </div>
                  <div className='premium d-flex flex-column align-items-center'>
                    <Link href='informasi-pembayaran'><button className='btn btn-lg'><img src='/images/lock.png'/></button></Link>
                    <Link href='informasi-pembayaran'><button className='btn btn-lg'><h2 className='poppins fw-bold'>DAFTAR MEMBER PREMIUM</h2></button></Link>
                  </div>
                  <div className="weekF visually-hidden">
                    <div className="dayF">
                      <p className="date">Sun Jul 03 2022</p>
                      <p>31 °C / 31 °C</p>
                      <p className="desc">Overcast Clouds</p>
                    </div>
                    <div className="dayF">
                      <p className="date">Sun Jul 03 2022</p>
                      <p>31 °C / 31 °C</p>
                      <p className="desc">Overcast Clouds</p>
                    </div>
                  </div>
                </div>
              </div>
               )} 
              
              {/*  */}
            </div>
          </div>
        </div>
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
</>
  )
}
