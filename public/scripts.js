const objects = [
  {
    id: "cadeirapendurar",
    filename: "cadeirapendurar.jpeg",
    object_name: "Cadeira tipo balanço/pendurar/rede",
    description: "seminova",
    value: "140 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "movelagua",
    filename: "movelagua.jpeg",
    object_name: "Móvel em MDF, para garrafão de agúa",
    description: "sem custo",
    value: "0 R",
    status: "reservado",
    category: "cozinha",
  },
  {
    id: "bike",
    filename: "bike.jpeg",
    object_name: "Bike Caiçara Beach",
    description: "3 x 6 marchas",
    value: "330 R",
    status: "disponível",
    category: "outros",
    link: "https://shorturl.at/joyKU",
  },
  {
    id: "patins",
    filename: "patins.jpeg",
    object_name: "Patins",
    description: "",
    value: "100 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "tampas",
    filename: "tampas.jpeg",
    object_name: "6x Tampas de vidro temperado avulsas",
    description: "A maioria Tramontina",
    value: "15 R cada",
    status: "disponível",
    category: "cozinha",
  },
  {
    id: "apoio",
    filename: "apoio.jpeg",
    object_name: "Apoio para pés",
    description: "pouco uso",
    value: "80 R",
    status: "disponível",
    category: "study",
  },
  {
    id: "bombona",
    filename: "bombona.jpeg",
    object_name: "bombona 80L com torneira",
    description: "",
    value: "80 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "fogareiro",
    filename: "fogareiro.jpeg",
    object_name: "Fogareiro e gas",
    description: "pouco uso",
    value: "90 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "estante",
    filename: "estante.jpeg",
    object_name: "Estante",
    description: "sem custo",
    value: "0 R",
    status: "reservado",
    category: "study",
  },
  {
    id: "astro",
    filename: "astro.jpeg",
    object_name: "Astro, luz de várias cores",
    description: "controle remoto",
    value: "60 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "jardim",
    filename: "jardim.jpeg",
    object_name: "3 ferramentas de jardim",
    description: "",
    value: "12 R (cada uma)",
    status: "tesoura reservada, 2 disponíveis",
    category: "outros",
  },
  {
    id: "snorkel",
    filename: "snorkel.jpeg",
    object_name: "Snorkel de 1 peça, de superficie",
    description: "Decathlon",
    value: "120 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "perneiras",
    filename: "perneiras.jpeg",
    object_name: "2x perneiras",
    description: "",
    value: "12 R (cada par)",
    status: "reservado",
    category: "outros",
  },
  {
    id: "botijao",
    filename: "botijao.jpeg",
    object_name: "Botijão de Gas 13kg",
    description: "2 a 3kg de gas (20%)",
    value: "200 R",
    status: "disponível",
    category: "cozinha",
    link: "https://acortar.link/rMKWrS",
  },
  {
    id: "ticotico",
    filename: "ticotico.jpeg",
    object_name: "Serra tico tico",
    description: "para cortes curvos. + serras manuais",
    value: "140 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "cobertores",
    filename: "cobertores.jpeg",
    object_name: "3x cobertor",
    description: "l̶a̶r̶a̶n̶j̶a̶, azul, l̶i̶l̶a̶s̶",
    value: "20 R (cada um)",
    status: "2 reservado, 1 livre",
    category: "quarto",
  },
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
    id: "carrinho",
    filename: "carrinho.jpeg",
    object_name: "Carrinho de Compras",
    description: "sem custo",
    value: "0 R",
    status: "doado",
    category: "cozinha",
  },
  {
    id: "varal",
    filename: "varal.jpeg",
    object_name: "Varal",
    description: "",
    value: "60 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "chaves",
    filename: "chaves.jpeg",
    object_name: "Porta chaves",
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
    link: "https://acortar.link/KBHmYa",
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
    link: "https://acortar.link/yUkyqC",
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
    status: "reservado",
    category: "sala",
    link: "https://acortar.link/pkYgqR",
  },
  {
    id: "mesa",
    filename: "mesa.jpeg",
    description: "O corino das cadeiras tem rasgões pequenos",
    object_name: "Mesa vidro/metálica 4 cadeiras",
    value: "280 R",
    status: "disponível",
    category: "sala",
    link: "https://acortar.link/YInwqb",
  },
  {
    id: "sofa3",
    filename: "sofa3.jpeg",
    description: "tem rasgão de 6cm",
    object_name: "Sofá 3 lugares corino",
    value: "300 R",
    status: "disponível",
    category: "sala",
    link: "https://shorturl.at/fgoGH",
  },
  {
    id: "sofa2",
    filename: "sofa2.jpeg",
    object_name: "Sofá 2 lugares corino",
    description: "",
    value: "200 R",
    status: "disponível",
    category: "sala",
    link: "https://shorturl.at/fgoGH",
  },
  {
    id: "cadeirapresidente",
    filename: "cadeirapresidente.jpeg",
    object_name: "Cadeira Presidente Way Gamer Cavaletti",
    description: "",
    value: "2000 R",
    status: "disponível",
    category: "study",
    link: "https://acortar.link/DmAyFk",
  },
  {
    id: "bombape",
    filename: "bombape.jpeg",
    description: "",
    object_name: "Bomba de pé para colchão Quechua",
    value: "50 R",
    status: "disponível",
    category: "outros",
  },
  {
    id: "casalinflavel",
    filename: "casalinflavel.jpeg",
    description: "",
    object_name: "colchão inflável casal",
    value: "50 R",
    status: "reservado",
    category: "outros",
  },
  {
    id: "hometheater",
    filename: "hometheater.jpeg",
    object_name: "Home Theater Blu-ray Samsung + 2 pedestais",
    description:
      "Subwoofer grande + 5 caixas /Netflix com cabo rede / USB / Karaoke",
    value: "500 R",
    status: "disponível",
    category: "sala",
    link: "https://acortar.link/RS60kH",
  },
  {
    id: "geladeira",
    filename: "geladeira.jpeg",
    object_name: "Geladeira Consul CRD36",
    description: "Não precisa desgelar",
    value: "800 R",
    status: "disponível",
    category: "cozinha",
    link: "https://acortar.link/Ikya3x",
  },
  {
    id: "microondas",
    filename: "microondas.jpeg",
    object_name: "Microondas Panasonic NN-ST27L",
    description: "Pouco uso",
    value: "400 R",
    status: "vendido no MShop",
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
    link: "https://acortar.link/5Nsvi8",
  },
  {
    id: "escrivaninha",
    filename: "escrivaninha.jpeg",
    object_name: "Escrivaninha metal/MDF/plástico/teclado/gavetas/chave",
    description: "",
    value: "170 R",
    status: "disponível",
    category: "study",
    link: "https://acortar.link/huQmJh",
  },
  {
    id: "comoda",
    filename: "comoda.jpeg",
    description: "45cm x 93(a) x 98 / defeito (10 x 20cm) no canto direito",
    object_name: "Cômoda em Madeira",
    value: "300 R",
    status: "disponível",
    category: "quarto",
    link: "https://shorturl.at/hiqG8",
  },
  {
    id: "espremedor",
    filename: "espremedor.jpeg",
    object_name: "Espremedor Laranja",
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
    status: "reservado",
    category: "cozinha",
  },
  {
    id: "panelas",
    filename: "panelas.jpeg",
    object_name: "Panelas Brinox Ceramic Life",
    value: "400 R",
    description: "ou 70-90 R por peça/algumas peças sem uso",
    link: "https://acortar.link/wHax7u",
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
    link: "https://shorturl.at/bquvL",
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
    link: "https://acortar.link/Q5c9Wb",
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
    status: "vendido",
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
    object_name: "Modem/roteador H3S para chip 4G",
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
    value: "120 R",
    description: "+ transf 220 -> 110V (mod. isol.)",
    link: "https://acortar.link/pgz1If",
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
    link: "https://acortar.link/j276MV",
    external_link: "",
    status: "disponível",
    category: "outros",
  },
  {
    id: "esteira",
    filename: "esteira.jpeg",
    object_name: "Esteira Decathlon espuma",
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
    status: "disponível",
    category: "quarto",
  },
  {
    id: "colchaocasal",
    filename: "colchaocasal.jpeg",
    object_name: "Colchão Casal",
    value: "450 R",
    description: "pequenos rasgões na superficie",
    link: "",
    external_link: "",
    status: "reservado (prioridade combo)",
    category: "quarto",
  },
  {
    id: "combocasal",
    filename: "combocasal.jpeg",
    object_name: "Combo: suporte box + colchão Casal",
    value: "750 R",
    description: "pequenos rasgões na superficie do colchão",
    link: "https://acortar.link/ke1sZl",
    external_link: "",
    status: "disponível",
    category: "quarto",
  },
];

objects.sort((a, b) => {
  let value_a = a.value;

  let value_b = b.value;
  const regex = /^\d+/;

  return RegExp(regex).exec(value_a) - RegExp(regex).exec(value_b);
});

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
        let spacer = "";
        if ((link != undefined) & (link != "")) {
          link = `<a href=${link} class="button-71 small-button" target="new">ML link</a>`;
          MS_link = `<a href="https://ferroao.mercadoshops.com.br/lista/casa-moveis-decoracao/" class="button-72 margin small-button" target="new">MShop link</a>`;
          spacer = "<br>";
        } else {
          link = "";
          MS_link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `${spacer}<a href=${external_link} class="button-70" target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" width="100%" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        <p>${item.description}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      <div class="card__status">
        <p>${item.status}</p>
      </div>
      <div class="mercado_line">
        ${MS_link}
        ${link}
      </div>
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
        let spacer = "";
        if ((link != undefined) & (link != "")) {
          link = `<a href=${link} class="button-71 small-button" target="new">ML link</a>`;
          MS_link = `<a href="https://ferroao.mercadoshops.com.br/lista/casa-moveis-decoracao/" class="button-72 margin small-button" target="new">MShop link</a>`;
          spacer = "<br>";
        } else {
          link = "";
          MS_link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `${spacer}<a href=${external_link} class="button-70" target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" width="100%" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        <p>${item.description}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      <div class="card__status">
        <p>${item.status}</p>
      </div>
      <div class="mercado_line">
        ${MS_link}
        ${link}
      </div>
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
        let spacer = "";
        if ((link != undefined) & (link != "")) {
          link = `<a href=${link} class="button-71 small-button" target="new">ML link</a>`;
          MS_link = `<a href="https://ferroao.mercadoshops.com.br/lista/casa-moveis-decoracao/" class="button-72 margin small-button" target="new">MShop link</a>`;
          spacer = "<br>";
        } else {
          link = "";
          MS_link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `${spacer}<a href=${external_link} class="button-70" target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" width="100%" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        <p>${item.description}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      <div class="card__status">
        <p>${item.status}</p>
      </div>
      <div class="mercado_line">
        ${MS_link}
        ${link}
      </div>
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
        let spacer = "";
        if ((link != undefined) & (link != "")) {
          link = `<a href=${link} class="button-71 small-button" target="new">ML link</a>`;
          MS_link = `<a href="https://ferroao.mercadoshops.com.br/lista/casa-moveis-decoracao/" class="button-72 margin small-button" target="new">MShop link</a>`;
          spacer = "<br>";
        } else {
          link = "";
          MS_link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `${spacer}<a href=${external_link} class="button-70" target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" width="100%" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        <p>${item.description}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      <div class="card__status">
        <p>${item.status}</p>
      </div>
      <div class="mercado_line">
        ${MS_link}
        ${link}
      </div>
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
        let spacer = "";
        if ((link != undefined) & (link != "")) {
          link = `<a href=${link} class="button-71 small-button" target="new">ML link</a>`;
          MS_link = `<a href="https://ferroao.mercadoshops.com.br/lista/casa-moveis-decoracao/" class="button-72 margin small-button" target="new">MShop link</a>`;
          spacer = "<br>";
        } else {
          link = "";
          MS_link = "";
        }
        let external_link = item.external_link;
        if ((external_link != undefined) & (external_link != "")) {
          external_link = `${spacer}<a href=${external_link} class="button-70" target="new">link externo</a>`;
        } else {
          external_link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="pictures/${item.filename}" width="100%" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
        <p>${item.description}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      <div class="card__status">
        <p>${item.status}</p>
      </div>
      <div class="mercado_line">
        ${MS_link}
        ${link}
      </div>
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
      let spacer = "";
      if ((link != undefined) & (link != "")) {
        link = `<a href=${link} class="button-71 small-button" target="new">ML link</a>`;
        MS_link = `<a href="https://ferroao.mercadoshops.com.br/lista/casa-moveis-decoracao/" class="button-72 margin small-button" target="new">MShop link</a>`;
        spacer = "<br>";
      } else {
        link = "";
        MS_link = "";
      }
      let external_link = item.external_link;
      if ((external_link != undefined) & (external_link != "")) {
        external_link = `${spacer}<a href=${external_link} class="button-70" target="new">link externo</a>`;
      } else {
        external_link = "";
      }
      return `
      <div class="card" id="${item.id}">
        <div class="card__image-container">
          <img src="pictures/${item.filename}" width="100%" alt="${item.object_name}">
        </div>
        <div class="card__content">
          <p>${item.object_name}</p>
          <p>${item.description}</p>
        </div>
        <div class="card__info">
          <p>${item.value}</p>
        </div>
        <div class="card__status">
          <p>${item.status}</p>
        </div>
        <div class="mercado_line">
          ${MS_link}
          ${link}
        </div>
        ${external_link}
      </div>
    `;
    })
    .join("");
}

const cards = document.querySelectorAll(".card");
const cards_img_container = document.querySelectorAll(".card__image-container");

for (let card of cards) {
  const value = card
    .querySelector(".card__status")
    .querySelector("p").innerHTML;
  if (value.includes("vendid") || value.includes("doad")) {
    let image_container = card.querySelector(".card__image-container");
    image_container.appendChild(document.createElement("div"));
    image_container.querySelector("div").classList.add("outer");
  }
  if (value.includes("reservad")) {
    let image_container = card.querySelector(".card__image-container");
    image_container.appendChild(document.createElement("div"));
    image_container.querySelector("div").classList.add("loader");
  }
}

const modalOverlay = document.querySelector(".modal-overlay");

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("img").src = "";
});

for (let card_img of cards_img_container) {
  let card = card_img.parentNode;
  card_img.addEventListener("click", function () {
    const filename = card_img.querySelector("img").getAttribute("src");
    let item_name = card
      .querySelector(".card__content")
      .querySelector("p").innerHTML;
    item_name = item_name.replace(/&amp;/, "&");
    const value = card
      .querySelector(".card__info")
      .querySelector("p").innerHTML;

    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = filename;
    modalOverlay.querySelector("h1").innerText = item_name;
    modalOverlay.querySelector("span").innerText = `por ${value}`;
  });
}

const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

if (currentPage == "/" || currentPage == "/venda/") {
  menuItems[0].classList.add("active");
} else {
  for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
      item.classList.add("active");
    }
  }
}
