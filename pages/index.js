/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'





export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <title>Tem.U</title>
      </Head>
      <div>
        <nav className="navbar navbar-expand-lg shadow navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand poppins ms-3 text-color-yellow fw-bold" href="#">Tem.U</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                <li className="nav-item">
                  <a className="nav-link poppins text-color-yellow " href="#">Home</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link poppins text-color-yellow hover wrap " onClick={() => {document.getElementById('AboutUs').scrollIntoView()}}>Tentang Kami</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="home">
          <div className="container">
            <div className="row mt-section">
              <div className="col-md-7 mb-5">
                <h1 className="poppins fw-bold text-space-h1">Kembangkan sayap <br />bisnis anda bersama kami</h1>
                <p className="poppins ">Membantu dalam pengelolaan manajemen keuangan, meningkatkan <br /> kualitas produk, dan melebarkan sayap pemasaran bisnis anda.</p>
                <div className="d-flex">
                <Link href="login"><button className="poppins fw-bold btn bg-color-yellow rounded-pill ps-4 pe-4 shadow text-white"  role="button">Masuk</button></Link>
                  <Link href="choose_regist"><button className="poppins fw-bold btn ms-2 rounded-pill ps-4 pe-4 shadow text-color-yellow"  role="button">Daftar</button></Link>
                </div>
              </div>
              <div className="col-md-5">
                <img className="image" src="/images/index.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="AboutUs" className="mt-section mb-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 ">
                <img className="image" src="/images/index2.png" alt="" />
              </div>
              <div className="col-md-5 mt-8">
                <h1 className="poppins fw-bold text-color-yellow">Tentang Kami</h1>
                <p className="poppins text-space-p word-space-p"><strong>Tem.U</strong> Merupakan suatu sistem berbasis website<br /> guna membantu pelaku usaha agroindustri tahu dan<br /> tempe dalam memanajemen keuangan serta<br /> mengolah produk dengan memanfaatkan fitur<br /> perkiraan cuaca suhu.</p>
              </div>
            </div>
          </div>
        </section>
        {/*  Bootstrap Bundle with Popper */}
      </div>
    </>
  )
}
