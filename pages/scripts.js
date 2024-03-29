const objects = [
  {
    id: "ferro",
    filename: "ferro.jpeg",
    object_name: "Ferro Black&Decker 560",
    description: "Vapor",
    value: "40 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "chaves",
    filename: "chaves.jpeg",
    object_name: "Pindurador de chaves",
    description: "Madeira, rustico",
    value: "30 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "furadeira",
    filename: "furadeira.jpeg",
    description: "+ brocas",
    object_name: "Furadeira Tramontina 500W 220V",
    value: "100 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "colchaosolteiro",
    filename: "colchaosolteiro.jpeg",
    description: "Quechua/Decathlon",
    object_name: "Colchão inflável solteiro",
    value: "70 R",
    status: "vendido",
    category: "outros",
  },
  {
    id: "climatizador",
    filename: "climatizador.jpeg",
    object_name: "Climatizador Sixxis",
    description: "Pouco uso",
    value: "1000 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "zapateiro",
    filename: "zapateiro.jpeg",
    object_name: "Zapateiro de madeira",
    value: "80 R",
    description: "",
    status: "disponível",
    category: "sala",
  },
  {
    id: "nichos",
    filename: "nichos.jpeg",
    object_name: "3 x nichos brancos 80cm",
    description: "MDF",
    value: "100 R",
    status: "disponível",
    category: "sala",
  },
  {
    id: "rack",
    filename: "rack.jpeg",
    description: "O painel tem riscos que ficam ocultos com TV",
    object_name: "Rack TV / painel / Germai / rodinhas",
    value: "250 R",
    status: "disponível",
    category: "sala",
  },
  {
    id: "mesa",
    filename: "mesa.jpeg",
    description: "O corino das cadeiras tem rasgões pequenos",
    object_name: "Mesa vidro/metálica 4 cadeiras",
    value: "280 R",
    status: "disponível",
    category: "sala",
  },
  {
    id: "sofa3",
    filename: "sofa3.jpeg",
    description: "tem rasgão de 6cm",
    object_name: "Sofá 3 lugares corino",
    value: "300 R",
    status: "disponível",
    category: "sala",
  },
  {
    id: "sofa2",
    filename: "sofa2.jpeg",
    object_name: "Sofá 2 lugares corino",
    description: "",
    value: "200 R",
    status: "disponível",
    category: "sala",
  },
  {
    id: "cadeirapresidente",
    filename: "cadeirapresidente.jpeg",
    object_name: "Cadeira Presidente Way Gamer Cavaletti",
    description: "",
    value: "2000 R",
    status: "disponível",
    category: "study",
  },
  {
    id: "casalinflavel",
    filename: "casalinflavel.jpeg",
    description: "",
    object_name: "Bomba de pé + colchão inflável casal",
    value: "100 R",
    status: "reservado",
    category: "outros",
  },
  {
    id: "hometheater",
    filename: "hometheater.jpeg",
    object_name: "Home Theater Blu-ray Samsung + 2 pedestais",
    description: "Subwoofer grande + 5 caixas /Netflix com cabo rede / USB / Karaoke",
    value: "500 R",
    status: "disponível",
    category: "sala",
  },
  {
    id: "geladeira",
    filename: "geladeira.jpeg",
    object_name: "Geladeira Consul CRD36",
    description: "Não precisa desgelar",
    value: "800 R",
    status: "disponível",
    category: "cozinha",
  },
  {
    id: "microondas",
    filename: "microondas.jpeg",
    object_name: "Microondas Panasonic NN-ST27L",
    description: "Pouco uso",
    value: "400 R",
    status: "disponível",
    category: "cozinha",
  },
  {
    id: "fogao",
    filename: "fogao.jpeg",
    object_name: "Fogão Esmaltec Topázio",
    description: "o timer não funciona",
    value: "450 R",
    status: "disponível",
    category: "cozinha",
  },
  {
    id: "escrivaninha",
    filename: "escrivaninha.jpeg",
    object_name: "Escrivaninha metal/MDF/plástico/teclado/gavetas/chave",
    description: "",
    value: "170 R",
    status: "disponível",
    category: "study",
  },
  {
    id: "comoda",
    filename: "comoda.jpeg",
    description: "defeito (10 x 20cm) no canto direito",
    object_name: "Cômoda em Madeira",
    value: "300 R",
    status: "disponível",
    category: "quarto",
  },
  {
    id: "exprimidor",
    filename: "exprimidor.jpeg",
    object_name: "Exprimidor Laranja",
    value: "25 R",
    description: "",
    link: "",
    external_link: "",
    status: "disponível",
    category: "cozinha",
  },
  {
    id: "liquidificador",
    filename: "liquidificador.jpeg",
    object_name: "Liquidificador Walita RI2160",
    value: "60 R",
    description: "copo novo",
    link: "",
    external_link: "",
    status: "vendido",
    category: "cozinha",
  },
  {
    id: "pressao",
    filename: "pressao.jpeg",
    object_name: "Panela Pressão Tramontina 3L",
    value: "100 R",
    description: "",
    link: "",
    external_link: "",
    status: "disponível",
    category: "cozinha",
  },
  {
    id: "panelas",
    filename: "panelas.jpeg",
    object_name: "Panelas Brinox Ceramic Life",
    value: "400 R",
    description: "ou 80-100 R por peça/algumas peças sem uso",
    link: "",
    external_link: "",
    status: "disponível",
    category: "cozinha",
  },
  {
    id: "tv",
    filename: "tv.jpeg",
    object_name: 'TV Samsung 48" 3D',
    value: "1500 R",
    description: "Netflix, youtube",
    link: "",
    external_link: "",
    status: "disponível",
    category: "sala",
  },
  {
    id: "tela",
    filename: "tela.jpeg",
    object_name: "Tela Acer Gamer XV280K + cabo tb",
    value: "2000 R",
    description: "",
    link: "",
    external_link: "https://acortar.link/POPZ9z",
    status: "disponível",
    category: "study",
  },
  {
    id: "cadeiramesh",
    filename: "cadeiramesh.jpeg",
    object_name: "Cadeira Skate Mesh",
    value: "100 R",
    description: "",
    link: "",
    external_link: "",
    status: "disponível",
    category: "study",
  },
  {
    id: "cadeiraplastico",
    filename: "cadeiraplastico.jpeg",
    object_name: "Cadeira plastico, pés alumino",
    value: "200 R",
    description: "",
    link: "",
    external_link: "",
    status: "disponível",
    category: "study",
  },
  {
    id: "gaveteiropequeno",
    filename: "gaveteiropequeno.jpeg",
    object_name: "Gaveteiro pequeno madeira",
    value: "90 R",
    description: "6 gavetas",
    link: "",
    external_link: "",
    status: "vendido",
    category: "quarto",
  },
  {
    id: "gaveteiromediano",
    filename: "gaveteiromediano.jpeg",
    object_name: "Gaveteiro mediano madeira",
    value: "100 R",
    description: "4 gavetas",
    link: "",
    external_link: "",
    status: "reservado",
    category: "quarto",
  },
  {
    id: "barraca",
    filename: "barraca.jpeg",
    object_name: "Barraca Arpenaz (Decathlon) 2 pessoas",
    value: "200 R",
    description: "pouco uso",
    link: "",
    external_link: "",
    status: "disponível",
    category: "outros",
  },
  {
    id: "modem4g",
    filename: "modem4g.jpeg",
    object_name: "Modem para chip 4G",
    value: "270 R",
    description: "crie rede wifi com um chip",
    link: "",
    external_link: "",
    status: "disponível",
    category: "outros",
  },
  {
    id: "impressora",
    filename: "impressora.jpeg",
    object_name: "Impr Epson TX115 Sist. continuo de tinta",
    value: " R",
    description: "+ transf 220 -> 110V (mod. isol.)",
    link: "",
    external_link: "",
    status: "disponível",
    category: "study",
  },
  {
    id: "cesto",
    filename: "cesto.jpeg",
    object_name: "Cesto roupa 70L",
    value: "40 R",
    description: "",
    link: "",
    external_link: "",
    status: "disponível",
    category: "quarto",
  },
  {
    id: "maqlavar",
    filename: "maqlavar.jpeg",
    object_name: "Maquina Lavar Brastemp 8kg",
    value: "700 R",
    description: "2 niveis de agua",
    link: "",
    external_link: "",
    status: "disponível",
    category: "outros",
  },
  {
    id: "esteira",
    filename: "esteria.jpeg",
    object_name: "Esteria Decathlon espuma",
    value: "20 R",
    description: "",
    link: "",
    external_link: "",
    status: "reservado",
    category: "outros",
  },
  {
    id: "suportebox",
    filename: "suportebox.jpeg",
    object_name: "Suporte inferior de cama box casal",
    value: "300 R",
    description: "",
    link: "",
    external_link: "",
    status: "reservado",
    category: "quarto",
  },
  {
    id: "colchaocasal",
    filename: "colchaocasal.jpeg",
    object_name: "Colchão Casal",
    value: "500 R",
    description: "pequenos rasgões na superficie",
    link: "",
    external_link: "",
    status: "reservado",
    category: "quarto",
  },
];

const living = document.querySelector(".living_cards");
const room_cards = document.querySelector(".room_cards");
const others_cards = document.querySelector(".others_cards");
const cozinha_cards = document.querySelector(".cozinha_cards");
const study_cards = document.querySelector(".study_cards");

const allcards = document.querySelector(".allcards");

/* categorys only */

if (others_cards) {
  others_cards.innerHTML = objects
    .map((item) => {
      if (item.category == "outros") {
        let link = item.link;
        if ((link != undefined) & (link != "")) {
          link = `<br><a href=${link} target="new">ML link</a>`;
        } else {
          link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `<br><a href=${external_link} target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        ${item.description}      
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      ${item.status}
      ${link}
      ${external_link}
    </div>
  `;
      }
    })
    .join("");
}

if (room_cards) {
  room_cards.innerHTML = objects
    .map((item) => {
      if (item.category == "quarto") {
        let link = item.link;
        if ((link != undefined) & (link != "")) {
          link = `<br><a href=${link} target="new">ML link</a>`;
        } else {
          link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `<br><a href=${external_link} target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        ${item.description}      
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      ${item.status}
      ${link}
      ${external_link}
      </div>
  `;
      }
    })
    .join("");
}

if (study_cards) {
  study_cards.innerHTML = objects
    .map((item) => {
      if (item.category == "study") {
        let link = item.link;
        if ((link != undefined) & (link != "")) {
          link = `<br><a href=${link} target="new">ML link</a>`;
        } else {
          link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `<br><a href=${external_link} target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        ${item.description}      
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      ${item.status}
      ${link}
      ${external_link}
    </div>
  `;
      }
    })
    .join("");
}

if (living) {
  living.innerHTML = objects
    .map((item) => {
      if (item.category == "sala") {
        let link = item.link;
        if ((link != undefined) & (link != "")) {
          link = `<br><a href=${link} target="new">ML link</a>`;
        } else {
          link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `<br><a href=${external_link} target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        ${item.description}      
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      ${item.status}
      ${link}
      ${external_link}
    </div>
  `;
      }
    })
    .join("");
}

if (cozinha_cards) {
  cozinha_cards.innerHTML = objects
    .map((item) => {
      if (item.category == "cozinha") {
        let link = item.link;
        if ((link != undefined) & (link != "")) {
          link = `<br><a href=${link} target="new">ML link</a>`;
        } else {
          link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `<br><a href=${external_link} target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        ${item.description}      
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      ${item.status}
      ${link}
      ${external_link}
    </div>
  `;
      }
    })
    .join("");
}

/*all objects */

if (allcards) {
  allcards.innerHTML = objects
    .map((item) => {
      let link = item.link;
      if ((link != undefined) & (link != "")) {
        link = `<br><a href=${link} target="new">ML link</a>`;
      } else {
        link = "";
      }
      let external_link = item.external_link;
      if ((external_link != undefined) & (external_link != "")) {
        external_link = `<br><a href=${external_link} target="new">link externo</a>`;
      } else {
        external_link = "";
      }
      return `
      <div class="card" id="${item.id}">
        <div class="card__image-container">
          <img src="pictures/${item.filename}" alt="${item.object_name}">
        </div>
        <div class="card__content">
          <p>${item.object_name}</p>
          ${item.description}      
        </div>
        <div class="card__info">
          <p>${item.value}</p>
        </div>
        ${item.status}
        ${link}
        ${external_link}
      </div>
    `;
    })
    .join("");
}

const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const filename = card.querySelector("img").getAttribute("src");
    const object_name = card.querySelector(".card__content").querySelector("p").innerHTML;
    const value = card.querySelector(".card__info").querySelector("p").innerHTML;

    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = filename;
    modalOverlay.querySelector("h1").innerText = object_name;
    modalOverlay.querySelector("span").innerText = `por ${value}`;
  });
}
