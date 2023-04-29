/* eslint-disable @next/next/no-css-tags */
import Link from 'next/link'
import React from 'react'

export default function choose_regist() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tem.u</title>
    <link rel="stylesheet" href="style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <div className="bg-color-yellow body">
      <div className="card p-5 ">
        <div className="wrap mx-auto">
          <h4 className="poppins text-center">Daftar sebagai?</h4>
          <div className="d-flex ">
            <Link href="mitra_regist"><button className=" text-dark poppins fw-bold btn bg-color-yellow rounded-pill button shadow"  role="button">Mitra</button> </Link>
           <Link href="visitor_regist"> <button className="poppins btn ms-2 fw-bold rounded-pill bg-color-yellow button shadow text-dark" role="button">User</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
