import foto from "../assets/pasfoto.jpg";
import upi from "../assets/upi1.png";

function Profil(){
    const birthdate = new Date('2002-02-24');
    const sekarang = new Date();
    const umur = sekarang.getFullYear() - birthdate.getFullYear();

    return(
        <div className="container mx-auto">
            <div className="flex place-content-center">
              <img src={foto} className="rounded-full h-40" alt="foto" />
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
                    <div>
                        <img src={upi} className="bg-white rounded-full size-40" alt="Logo Universitas Pendidikan Indonesia" />
                        <p className="text-center">Universitas Pendidikan Indonesia</p>
                    </div>
                    <div className="place-content-center ml-10">
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