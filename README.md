# project-latihan

Project ini diinisiasi pada tanggal 23/05/2024
Semoga project ini dapat saya selesaikan :D

folder BE/
npm init
npm install express
npm i cors
npm i nodemon --save-dev
npm install pg
//konfigurasi postgresql pada server
ubuntu -> vim /etc/postgresql/16/main/postgresql.conf {
    //ubah line 60
    listen_addreses = "*"
}
Ubuntu -> vim /etc/postgresql/16/main/pg_hba.conf {
    //tambah line
    host    contohbe    fallmoonproject 192.168.1.8/32  md5
}


folder FE/
npm create vite@latest
cd latihanfe
npm init
// Penambahan Tailwinds css
npm install -D tailwindcss
npx tailwindcss init
// Instalasi Font Awesome--
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-
// Instalasi type animation
npm i react-type-animation
//headlessui react
npm install @headlessui/react @heroicons/react
