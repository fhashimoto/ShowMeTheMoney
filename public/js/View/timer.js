// Data alvo
const dataAlvo = new Date("May 3, 2019 19:00:00").getTime();

// Update da contagem
let x = setInterval( ()=> {

  // Data de agora
  let now = new Date().getTime();

  // diff para a data alvo e a atualização
  let distance = dataAlvo - now,
    days = Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // mostando a contagem regressiva
  $("#timer").html(`
    <div class=" text-white mt-4 rounded py-3" style="background-color:#f3f3f3">
      <div style="text-align:center; color:#00b0f0; font-weight: 700">Gestão e Tecnologia:</div> 
      <div style="text-align:center; color:#00b0f0; font-weight: 700">Transformando sua Empresa</div>
      <div style="text-align:center; color:black; font-weight: 900" class="pt-2 d-flex justify-content-center">
        <div class="row">
          <div class="d-flex flex-column px-2"><div>${days}</div><div>dia</div></div>
          <div class="d-flex flex-column px-2"><div>${hours}</div><div>horas</div></div>
          <div class="d-flex flex-column px-2"><div>${minutes}</div><div>min</div></div>
          <div class="d-flex flex-column px-2"><div>${seconds}</div><div>seg</div></div>
        </div>
      </div>
    </div>`);

  // terminando a contagem
  if (distance < 0) {
    clearInterval(x);
    $("#timer").html("Chegou o grande dia!");
  }
}, 1000);