const dishes = [
  {
    id: "tbb",
    filename: "burger.png",
    dishname: "Triplo bacon burger",
    author: "Jorge Relato",
    favorite: true,
  },
  {
    id: "p4e",
    filename: "pizza.png",
    dishname: "Pizza 4 estações",
    author: "Fabiana Melo",
    favorite: true,
  },
  {
    id: "eaa",
    filename: "espaguete.png",
    dishname: "Espaguete ao alho",
    author: "Júlia Kinoto",
    favorite: true,
  },
  {
    id: "lmc",
    filename: "lasanha.png",
    dishname: "Lasanha mac n’ cheese",
    author: "Juliano Vieira",
    favorite: true,
  },
  {
    id: "dpc",
    filename: "doce.png",
    dishname: "Docinhos pão-do-céu",
    author: "Ricardo Golvea",
    favorite: true,
  },
  {
    id: "afb",
    filename: "asinhas.png",
    dishname: "Asinhas de frango ao barbecue",
    author: "Vania Steroski",
    favorite: true,
  },
  {
    id: "tbb",
    filename: "burger.png",
    dishname: "Triplo bacon burger",
    author: "Jorge Relato",
    favorite: false,
  },
  {
    id: "p4e",
    filename: "pizza.png",
    dishname: "Pizza 4 estações",
    author: "Fabiana Melo",
    favorite: false,
  },
  {
    id: "eaa",
    filename: "espaguete.png",
    dishname: "Espaguete ao alho",
    author: "Júlia Kinoto",
  },
  {
    id: "lmc",
    filename: "lasanha.png",
    dishname: "Lasanha mac n’ cheese",
    author: "Juliano Vieira",
  },
  {
    id: "dpc",
    filename: "doce.png",
    dishname: "Docinhos pão-do-céu",
    author: "Ricardo Golvea",
  },
  {
    id: "afb",
    filename: "asinhas.png",
    dishname: "Asinhas de frango ao barbecue",
    author: "Vania Steroski",
  },
];

const cards1 = document.querySelector(".cards");
const allcards1 = document.querySelector(".allcards");

/* favorites only */

if (cards1) {
  cards1.innerHTML = dishes
    .map((item) => {
      if (item.favorite) {
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="foodassets/${item.filename}" alt="${item.dishname}">
      </div>
      <div class="card__content">
        <p>${item.dishname}</p>
      </div>
      <div class="card__info">
        <p>${item.author}</p>
      </div>
    </div>
  `;
      }
    })
    .join("");
}

/*all dishes */

if (allcards1) {
  allcards1.innerHTML = dishes
    .map((item) => {
      return `
      <div class="card" id="${item.id}">
        <div class="card__image-container">
          <img src="foodassets/${item.filename}" alt="${item.dishname}">
        </div>
        <div class="card__content">
          <p>${item.dishname}</p>
        </div>
        <div class="card__info">
          <p>${item.author}</p>
        </div>
      </div>
    `;
    })
    .join("");
}

const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const filename = card.querySelector("img").getAttribute("src");
    const dishname = card.querySelector(".card__content").querySelector("p").innerHTML;
    const author = card.querySelector(".card__info").querySelector("p").innerHTML;

    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = filename;
    modalOverlay.querySelector("h1").innerText = dishname;
    modalOverlay.querySelector("span").innerText = `por ${author}`;
  });
}
