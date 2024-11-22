import foto from "../assets/pasfoto.jpg";
import upi from "../assets/upi1.png";

function Profil(){
    const birthdate = new Date('2002-02-24');
    const sekarang = new Date();
    const umur = sekarang.getFullYear() - birthdate.getFullYear();

    return(
        <div className="container mx-auto">
            <div className="flex place-content-center">
              <img src={foto} className="rounded-full h-40 select-none" alt="foto" />
            </div>
            <h1 className="text-center">Muhammad Ihsan Naufal Muniif</h1>
            <div className="mx-10">
                <hr />
                <p className="text-center">
                    Merupakan fresh graduate dari program studi Teknik Komputer di Universitas Pendidikan Indonesia. Saya berusia {umur}. Saya dikenal sebagai individu yang pekerja keras dan menjunjung tinggi sikap tanggung jawab dan memiliki semangat tinggi untuk terus belajar dan berkembang. Saya sangat suka dan menikmati membuat dan mengembangkan sebuah web atau aplikasi. Berbekal pengetahuan akademik serta pengalaman mengikuti berbagai kursus dan kegiatan online, saya selalu berusaha mengasah keterampilan teknologi yang saya miliki. Dengan komitmen yang kuat terhadap kualitas dan hasil, saya siap berkontribusi dalam dunia teknologi dan terus mengeksplorasi inovasi baru.
                </p>
                <br />
                <h2>Pendidikan</h2>
                <div className="flex flex-wrap">
                        <img src={upi} className="bg-white rounded-full size-40" alt="Logo Universitas Pendidikan Indonesia" />
                    <div className="place-content-center ml-10">
                        <b><p>Universitas Pendidikan Indonesia</p></b>
                        <p>1 September 2020 - 30 November 2024</p>
                        <p>IPK: 3.63/4.00 (Cumlaude)</p>
                    </div>
                </div>
                <br />
                <h2>Sertifikat</h2>
                <h3>Red Hat Certified System Adminisrator</h3>
                <br />
                <h2>Proyek</h2>
                <h3>Fracture Vision</h3>
                <h3>Aplikasi Peminjaman Alat dan Penggunaan Lab Robotika</h3>
                <h3>CeTar (Celengan Pintar)</h3>
                <h3>Gerak Tanggap Darurat</h3>
                <h3>Sistem Monitoring & Penyiraman Tanaman Otomatis Berbasis IoT</h3>
            </div>
        </div>
    );
};

export default Profil