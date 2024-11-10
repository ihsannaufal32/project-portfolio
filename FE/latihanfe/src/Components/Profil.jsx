import { useState, useEffect } from 'react';
import foto from "../assets/pasfoto.jpg";
import upi from "../assets/Upi.png";

function Profil(){
    const [umur, setumur] = useState();
    const birthdate = new Date('2002-05-26');

    useEffect(() => {
        const hitungumur = () => {
            const sekarang = new Date();
            const umur = sekarang.getFullYear() - birthdate.getFullYear();
            setumur(umur);
        };
        hitungumur();
    });

    return(
        <div>
            <div class="flex place-content-center">
              <img src={foto} class="rounded-full h-40" alt="foto" />
            </div>
            <h1 class="text-center">Muhammad Ihsan Naufal Muniif</h1>
            <div className="mx-10">
                <hr />
                <p className="text-center">
                    Merupakan fresh graduate dari program studi Teknik Komputer di Universitas Pendidikan Indonesia. Saya berusia {umur}. Saya dikenal sebagai individu yang pekerja keras dan menjunjung tinggi sikap tanggung jawab dan memiliki semangat tinggi untuk terus belajar dan berkembang. Saya sangat suka dan menikmati membuat dan mengembangkan sebuah web atau aplikasi. Berbekal pengetahuan akademik serta pengalaman mengikuti berbagai kursus dan kegiatan online, saya selalu berusaha mengasah keterampilan teknologi yang saya miliki. Dengan komitmen yang kuat terhadap kualitas dan hasil, saya siap berkontribusi dalam dunia teknologi dan terus mengeksplorasi inovasi baru.
                </p>
                <br />
                <h2>Pendidikan</h2>
                <div className="flex flex-wrap">
                    <div className="size-1/4">
                        <img src={upi} alt="" />
                    </div>
                    <div className="place-content-center">
                        <p>1 September 2020 - 30 November 2024</p>
                    </div>
                </div>
                <br />
                <h2>Sertifikat</h2>
                <br />
                <h2>Proyek</h2>
            </div>
        </div>
    );
};

export default Profil