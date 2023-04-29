/* eslint-disable @next/next/no-img-element */
import React from "react";

const popup = () => {
    return(
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <div className="d-flex pop-up flex-column py-2  align-items-center container bg-dark position-absolute top-50 start-50 translate-middle ">
          <img src="/images/centang.png" alt="" />
          <h1 className="poppins fw-bold text-white">Data Berhasil Disimpan</h1>
          <button className="btn btn-lg btn-warning rounded-pill text-white">OK</button>
        </div>
      </div>
    )
}

export default popup