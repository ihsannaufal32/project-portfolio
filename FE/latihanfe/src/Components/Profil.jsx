import foto from "../assets/pasfoto.jpg"

function Profil(){
    return(
        <div>
            <div class="flex place-content-center">
              <img src={foto} class="rounded-full h-40" alt="foto" />
            </div>
            <h1 class="text-center">Muhammad Ihsan Naufal Muniif</h1>
        </div>
    );
};

export default Profil