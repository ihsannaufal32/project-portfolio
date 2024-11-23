import { useState } from "react";
const datakomen = [
  {
    id: 1,
    nama: "Ahmad",
    komen: "komentar pertama",
    tanggal: "11/09/2001"
  },
  {
    id: 2,
    komen: "Komentar kedua",
    tanggal: "03/06/2021"
  },
  {
    id: 3,
    komen: "komentar ketiga",
    tanggal: "11/01/2022"
  },
  {
    id: 4,
    komen: "komentar cek ",
    tanggal: "DD/MM/YYYY"
  }
]

function Comment(){
  const [klik, setKlik] = useState(false);
  const cbutton = () => {
    setKlik(true);
    alert('coming soon');
  }
    return (
      <div>
        <div className="container mx-auto">
        <h1>Komentar & Feedback</h1>
        <p>Terima kasih telah berkunjung ke web ini! Saya akan sangan mengapresiasi apabila anda dapat meninggalkan komentar dan memberikan feedback.</p>
          <form className="flex flex-col mt-5">
              <h2>Nama</h2>Name
              <textarea className="border border-gray-300 p-1 rounded-md px-2" placeholder="Tulis Nama Anda"></textarea>
              <h2>Komentar</h2>
              <textarea className="border border-gray-300 p-2 rounded-md my-2 px-2" placeholder="Tulis komentar Anda"></textarea>
              <button onClick={cbutton} className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
          <div className="flex flex-col">
            <div className="mt-4">
              {datakomen.slice(0, 1).map((datakomen) => {
                return (
                  <div key={datakomen.id} class="bg-gray-500 p-4 rounded-lg shadow-md my-2 text-white hover:bg-gray-700">
                    <div className="flex justify-between">
                        <div>
                          <p>{datakomen.nama}</p>
                        </div>
                        <div>
                          <p>{datakomen.tanggal}</p>
                        </div>
                    </div>
                    <p>{datakomen.komen}.</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Comment