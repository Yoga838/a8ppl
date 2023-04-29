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

export default function cuaca() {
  const [data,setdata] = useState([]);
    React.useEffect(() => {
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


            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position)=>{
                    let lon= position.coords.longitude;
                    let lat= position.coords.latitude;
                    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${apikey}`;
                    
        
                    fetch(url).then((res)=>{
                        return res.json();
                    }).then((data)=>{
                        console.log(data);
                        console.log(new Date().getTime())
                        var dat= new Date(data.dt)
                        console.log(dat.toLocaleString(undefined,'Asia/Kolkata'))
                        console.log(new Date().getMinutes())
                        weatherReport(data);
                    })
                })
            }   
    },[])

    const apikey="0b65ccf66ad2b73d7d1bf772a558702d";
    
    
    function searchByCity(){
        var place= document.getElementById('input').value;
        var urlsearch= `https://api.openweathermap.org/data/2.5/weather?q=${place}&` + `appid=${apikey}`;
    
        fetch(urlsearch).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            weatherReport(data);
        })
        document.getElementById('input').value='';
    }
    
    function weatherReport(data){
    
        var urlcast= `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&` + `appid=${apikey}`;
    
        fetch(urlcast).then((res)=>{
            return res.json();
        }).then((forecast)=>{
            console.log(forecast.city);
            hourForecast(forecast);
            dayForecast(forecast)
    
            console.log(data);
            document.getElementById('city').innerText= data.name + ', '+data.sys.country;
            console.log(data.name,data.sys.country);
        
            console.log(Math.floor(data.main.temp-273));
            document.getElementById('temperature').innerText= Math.floor(data.main.temp-273)+ ' °C';
        
            document.getElementById('clouds').innerText= data.weather[0].description;
            console.log(data.weather[0].description)
            
            let icon1= data.weather[0].icon;
            let iconurl= "https://api.openweathermap.org/img/w/"+ icon1 +".png";
            document.getElementById('img').src=iconurl
        })
    
    }
    
    function hourForecast(forecast){
        document.querySelector('.templist').innerHTML=''
        for (let i = 0; i < 5; i++) {
    
            var date= new Date(forecast.list[i].dt*1000)
            console.log((date.toLocaleTimeString(undefined,'Asia/Kolkata')).replace(':00',''))
    
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
            console.log(forecast.list[i]);
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
                  <button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Cuaca</button>
                  <button className="poppins tombol-nav btn bg-color-yellow rounded-pill  shadow text-dark"  role="button">Pencatatan</button>
                </div>
              </div>
          </nav>
        <div className="content">
          <div className="row">
            <div className="sidebar-left bg-color-yellow col-md-4 pt-5 pb-5 d-flex flex-column align-items-center gap-2">
            <div className='content2 d-flex flex-column align-items-center gap-2'>
              <Link href='/mitra'><div className="circle mt-5" /></Link>
              <h4>{data.name}</h4>
              <div className="button-item d-flex pb-2 flex-column align-items-center gap-4">
                <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Home</button>
                <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Pegawai</button>
                <button type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Tracking</button>
                <button onClick={logout} type="button" className="btn btn-admin btn-light poppins rounded-pill  btn-lg">Log Out</button>
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
            </div>
          </div>
        </div>
      </div>
</>
  )
}
