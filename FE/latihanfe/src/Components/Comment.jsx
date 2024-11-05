const datakomen = [
  {
    id: 1,
    komen: "komentar pertama"
  },
  {
    id: 2,
    komen: "Komentar kedua"
  },
  {
    id: 3,
    komen: "komentar ketiga"
  },
  {
    id: 4,
    komen: "komentar cek "
  }
]

function Comment(){
    return (
        <div class="container mx-auto">
          <h1>Komentar & Feedback</h1>
          <form class="flex flex-col mt-5">
              <h2>Nama</h2>
              <textarea class="border border-gray-300 rounded-md my-2 px-2" placeholder="Tulis Nama Anda"></textarea>
              <h2>Komentar</h2>
              <textarea class="border border-gray-300 p-2 rounded-md my-2 px-2" placeholder="Tulis komentar Anda"></textarea>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kirim</button>
          </form>
          <div class="flex flex-col">
            <div class="mt-4">
              {datakomen.slice(0, 4).map((datakomen) => {
                return (
                  <div key={datakomen.id} class="bg-white p-4 rounded-lg shadow-md my-2">
                    <p class="text-gray-700">{datakomen.id}</p>
                    <p class="text-gray-700">Komentar: {datakomen.komen}.</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    );
};

export default Comment