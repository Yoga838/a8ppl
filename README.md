<img src='https://i.ibb.co/nmhbnsf/Logo-Tem-U.png' width=100px tittle='Tem.u'>
<a href="https://tem-u.vercel.app">Link Tester Web</a>
<p>username : admin@tem-u.com</p>
<p>password : admin</p>
<h1>Teknologi Yang digunakan</h1>
<div style="display":flex>
  - NextJs   
  <img src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" width='15px'>
</div>
<div style="display":flex>
  - PostgreSql   
  <img src="https://i.ibb.co/VLXdkXM/icons8-postgresql-48.png" width='15px'>
</div>
<div style="display":flex>
  - Vercel (Jika ingin Di deploy Secara gratis)   
  <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" width='15px'>
</div>
<div style="display":flex>
  - Railway (Jika ingin DB postgreSql gratis)   
  <img src="https://camo.githubusercontent.com/df61f4b2e2cc40922b5290ed53040485ab7167836872ce1aa88d88462e9816ce/68747470733a2f2f7261696c7761792e6170702f6272616e642f6c6f676f2d6c696768742e706e67" width='15px'>
</div>
<h1>Cara Clone Web ini untuk di Local Kalian</h1>
- pertama clone menggunakan command ini
<pre>
  https://github.com/Yoga838/a8ppl.git
</pre>
- setelah itu jika kalian menggunakan npm silahkan download semua package libnrari yang dibutuhkan 
<pre>
  npm install
</pre>
- edit database dengan posgresql database mu sendiri di .env sesuain port dan nama databasenya
<pre>
  DATABASE_URL="postgresql://localhost:5432/nama_database"
</pre>
- setelah itu lakukan migrate database terlebih dahulu menggunakan command:
<pre>
  npx prisma migrate dev
</pre>
- program bisa di run dengan command
<pre>
  npm run dev
</pre>
- web berjalan pada url
<pre>
  https://localhost:3000
</pre>
<h1>Enjoy your day 😄</h1>
