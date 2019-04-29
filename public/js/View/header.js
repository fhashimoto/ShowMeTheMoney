const texto = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light degrade">
        <a class="navbar-brand" href="#"><span style="font-family: PT Serif Caption; font-size: 20px">Evento</span> cheg&#64; disso</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link text-info" href="#">sobre o evento<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-info" href="#">compra de ingressos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-info" href="#">acompanhe:<i class="fab fa-facebook-f px-2 text-dark"></i><i class="fab fa-instagram text-dark"></i></a>
                </li>
            </ul>
        </div>
    </nav>`;

const imagem = `
    <img src="./imgs/banner-site-02.png" style="width:100%; height:auto" alt="banner chega disso"></img>
`;

const final = texto+imagem;

$("#header").html(final);


{/* <i class="fab fa-linkedin-in"> */}