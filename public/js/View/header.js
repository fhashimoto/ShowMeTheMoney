const texto_header = `
	<nav class="navbar navbar-expand-lg navbar-light degrade">
		<a class="navbar-brand" href="#">
			<span style="font-family: PT Serif Caption; font-size: 2em" class="text-capitalize pr-2">Evento</span>
			<span class="font-weight-bolder">
				<span style="color: #234562">cheg&#64;</span> 
				<span style="color: #f8b152;">disso</span>
			</span>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" style="color: #234562" href="#" onclick="handleClick(event,'#Sobre')">sobre o evento<span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" style="color: #234562" href="#" onclick="handleClick(event,'#compraBtn')">compra de ingressos</a>
				</li>
				<li class="nav-item">
					<div class="nav-link" style="color: #234562" href="#">acompanhe:
						<a href="https://www.facebook.com/blog.chegadisso/" target="_blank">
							<i class="fab fa-facebook-f fa-lg px-2 text-dark"></i>
						</a>
						<a href="https://www.instagram.com/chega.disso/" target="_blank">
							<i class="fab fa-instagram fa-lg text-dark"></i>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>`;

const imagem_header = `
	<img src="./imgs/banner-site-02.png" alt="banner chega disso" id="banner"></img>
`;

const final_header = texto_header+imagem_header;

$("#header").html(final_header);

let handleClick = (e,id) => {
	e.preventDefault();
	$("html, body").scrollTop($(id).offset().top/1.5);
}

{/* <i class="fab fa-linkedin-in"> */}