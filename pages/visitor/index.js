import React from 'react'

export default function visitor_page() {
  function logout(){
    nookies.destroy(null,'token');
    nookies.destroy(null,'role');
    Router.replace('/');
}
  return (
    <div>visitor_page
      <button onClick={logout}>logout</button>
    </div>
    
  )
}
