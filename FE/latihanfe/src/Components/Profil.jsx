import foto from "../assets/pasfoto.jpg"

function Profil(){
    return(
        <div>
            <div class="flex place-content-center">
              <img src={foto} class="rounded-full h-40" alt="foto" />
            </div>
            <h1 class="text-center">Muhammad Ihsan Naufal Muniif</h1>
            <div className="mx-10">
                <hr />
                <p className="text-center">
                    Merupakan fresh graduate dari program studi Teknik Komputer di Universitas Pendidikan Indonesia. Saya dikenal sebagai individu yang pekerja keras dan menjunjung tinggi sikap tanggung jawab dan memiliki semangat tinggi untuk terus belajar dan berkembang. Saya sangat suka dan menikmati membuat dan mengembangkan sebuah web atau aplikasi. Berbekal pengetahuan akademik serta pengalaman mengikuti berbagai kursus dan kegiatan online, saya selalu berusaha mengasah keterampilan teknologi yang saya miliki. Dengan komitmen yang kuat terhadap kualitas dan hasil, saya siap berkontribusi dalam dunia teknologi dan terus mengeksplorasi inovasi baru.
                </p>
                <br />  
                <h2>Sertifikat</h2>
                <br />
                <h2>Proyek</h2>
            </div>
        </div>
    );
};

export default Profil