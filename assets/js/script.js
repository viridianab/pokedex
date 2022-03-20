const fetchPokemon = () => {
	// Buscador
	const pokeNameInput = document.getElementById("pokeName");
	let pokeName = pokeNameInput.value;
	pokeName = pokeName.toLowerCase();
	
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
	fetch(url)
		.then((res) => {
			if (res.status != "200") {
				// Mostrar imagen de error
				pokeImage("assets/img/error.gif");
				// Borrar datos anteriores
				document.getElementById("pokemonId").innerHTML = "ERROR";
				document.getElementById("pokemonNombre").innerHTML = "Try Again";
				document.getElementById("pokemonTipo").innerHTML = "";
				document.getElementById("pokeStats").innerHTML = "";
				document.getElementById("pokeMoves").innerHTML = "";
				document.getElementsByClassName("botones").style.display = "none";
				//console.log(res);
			} else {
				return res.json();
			}
		})
		.then((data) => {
			if (data) {
				/* ------ Ver información de pokémon ------ */
				//console.log(data);

				// Ruta de sprite
				let pokeImg = data.sprites.front_default;
				pokeImage(pokeImg);
				//console.log(pokeImg);

				// ID del pokémon
				let id = data.id;
				document.getElementById("pokemonId").innerHTML = "#" + " " + id;

				// Nombre del pokémon
				let name = data.species.name;
				document.getElementById("pokemonNombre").innerHTML = name;

				// Tipo del pokémon
				let type = data.types.map((typ) => typ.type.name);

				document.getElementById("pokemonTipo").innerHTML = "";
				type.forEach((item) => {
					// Buscar los tipos para agregar en un <li> con su clase
					if (item.includes("normal")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-normal">${item}</li>`;
					} else if (item.includes("fire")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-fuego">${item}</li>`;
					} else if (item.includes("water")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-agua">${item}</li>`;
					} else if (item.includes("grass")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-planta">${item}</li>`;
					} else if (item.includes("flying")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-volador">${item}</li>`;
					} else if (item.includes("fighting")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-lucha">${item}</li>`;
					} else if (item.includes("poison")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-veneno">${item}</li>`;
					} else if (item.includes("electric")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-electrico">${item}</li>`;
					} else if (item.includes("ground")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-tierra">${item}</li>`;
					} else if (item.includes("rock")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-roca">${item}</li>`;
					} else if (item.includes("psychic")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-psiquico">${item}</li>`;
					} else if (item.includes("ice")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-hielo">${item}</li>`;
					} else if (item.includes("bug")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-bicho">${item}</li>`;
					} else if (item.includes("ghost")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-fantasma">${item}</li>`;
					} else if (item.includes("steel")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-acero">${item}</li>`;
					} else if (item.includes("dragon")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-dragon">${item}</li>`;
					} else if (item.includes("dark")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-oscuro">${item}</li>`;
					} else if (item.includes("fairy")) {
						document.getElementById("pokemonTipo").innerHTML += `<li class="tipo-hada">${item}</li>`;
					} else {
						document.getElementById("pokemonTipo").innerHTML += `<li>${item}</li>`;
					}
				});

				// Estadisticas del pokémon
				let hp = data.stats[0].base_stat;
				let attack = data.stats[1].base_stat;
				let defense = data.stats[2].base_stat;
				let specialattack = data.stats[3].base_stat;
				let specialdefense = data.stats[4].base_stat;
				let speed = data.stats[5].base_stat;
				// Elementos a incorporar los <li>
				document.getElementById("pokeStats").innerHTML = "";
				const lista = document.getElementById("pokeStats");
				// Creamos los <li>
				const li_hp = document.createElement("li");
				const li_attack = document.createElement("li");
				const li_defense = document.createElement("li");
				const li_specialattack = document.createElement("li");
				const li_specialdefense = document.createElement("li");
				const li_speed = document.createElement("li");
				// Agregamos el contenido al <li>
				li_hp.innerHTML = "<b>HP:</b>" + " " + hp;
				li_attack.innerHTML = "<b>Defense:</b>" + " " + attack;
				li_defense.innerHTML = "<b>Defense:</b>" + " " + defense;
				li_specialattack.innerHTML = "<b>Special Attack:</b>" + " " + specialattack;
				li_specialdefense.innerHTML = "<b>Special Defense:</b>" + " " + specialdefense;
				li_speed.innerHTML = "<b>Speed:</b>" + " " + speed;
				// Incorporamos al <ul>
				lista.appendChild(li_hp);
				lista.appendChild(li_attack);
				lista.appendChild(li_defense);
				lista.appendChild(li_specialattack);
				lista.appendChild(li_specialdefense);
				lista.appendChild(li_speed);

				// Movimientos del pokemon
				let moves = data.moves.map((typ) => typ.move.name);
				document.getElementById("pokeMoves").innerHTML = "";
				// Colocar cada movimiento en un <li>
				moves.forEach(function (el) {
					document.getElementById("pokeMoves").innerHTML += "<li>" + el + "</li>";
				});
				//console.log(type);
			}
		});
};

// Evento a botón buscador para mostrar información
const botonBuscador = document.getElementsByClassName("btn-buscar")[0];
botonBuscador.addEventListener("click", function () {
	document.getElementById("pokemon__seleccionado").style.display = "block";
	document.getElementsByClassName("mas-info")[0].style.display = "none";
});

// Sprite del Pokemon
const pokeImage = (url) => {
	const pokePhoto = document.getElementById("imagenPokemon");
	pokePhoto.src = url;
};
// ID del pokemon
const pokeId = (url) => {
	const campo1 = document.getElementById("pokemonId");
	campo1.src = url;
};
// Nombre del pokemon
const pokeNombre = (url) => {
	const campo1 = document.getElementById("pokemonNombre");
	campo2.src = url;
};
// Tipo del pokemon
const pokeType = (url) => {
	const campo2 = document.getElementById("pokemonTipo");
	campo3.src = url;
};
// Tipo del pokemon
const pokeStat = (url) => {
	const campo3 = document.getElementById("pokeStats");
	campo3.src = url;
};
// Movimientos del pokemon
const pokeMove = (url) => {
	const campo4 = document.getElementById("pokeMoves");
	campo4.src = url;
};

// Ocultar animacion de pokedex
setTimeout(function(){
	var elem = document.querySelector(".bienvenida");
	elem.style.display = "none";
}, 1760); // Display none despues de ...segundos

// Botones para mostrar informacion del pokemon
// Botón para ocultar info
const botonOcultar = document.getElementsByClassName("btn-ocultar")[0];
botonOcultar.addEventListener("click", ocultarInformacion);
function ocultarInformacion() {
	playSonidoCancelar();
	document.getElementsByClassName("mas-info")[0].style.display = "none";
}

// Botón de stats
const botonVerStats = document.getElementsByClassName("btn-stats")[0];
botonVerStats.addEventListener("click", verStats);
function verStats() {
	playSonido();
	document.getElementsByClassName("mas-info")[0].style.display = "block";
	document.getElementById("pokeStats").style.display = "block";
	document.getElementById("pokeMoves").style.display = "none";
}

// Botón del movesets
const botonVerMoveset = document.getElementsByClassName("btn-moves")[0];
botonVerMoveset.addEventListener("click", verMoves);
function verMoves() {
	playSonido();
	document.getElementsByClassName("mas-info")[0].style.display = "block";
	document.getElementById("pokeStats").style.display = "none";
	document.getElementById("pokeMoves").style.display = "block";
}

// Sonido a botones
// Sonido default
function playSonido() {
	const sound = new Audio("assets/sounds/boton.mp3");
	sound.play();
}
const btnSonido = document.getElementsByClassName("btn")[0];
btnSonido.addEventListener("click", playSonido);

// Sonido cerrar ventana
function playSonidoCancelar() {
	const sound2 = new Audio("assets/sounds/cancelar.mp3");
	sound2.play();
}