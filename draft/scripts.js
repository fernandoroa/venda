const objects = [
  {
    id: "tbb",
    filename: "burger.png",
    object_name: "C Triplo bacon burger",
    value: "150 R",
    link: "https://www.google.com",
    category: "cozinha",
  },
  {
    id: "p4e",
    filename: "pizza.png",
    object_name: "Pizza 4 estações",
    value: "Fabiana Melo",
    category: "cozinha",
  },
  {
    id: "eaa",
    filename: "espaguete.png",
    object_name: "Espaguete ao alho",
    value: "Júlia Kinoto",
    category: "cozinha",
  },
  {
    id: "lmc",
    filename: "lasanha.png",
    object_name: "Lasanha mac n’ cheese",
    value: "Juliano Vieira",
    category: "cozinha",
  },
  {
    id: "dpc",
    filename: "doce.png",
    object_name: "Docinhos pão-do-céu",
    value: "Ricardo Golvea",
    category: "cozinha",
  },
  {
    id: "afb",
    filename: "asinhas.png",
    object_name: "Asinhas de frango ao barbecue",
    value: "Vania Steroski",
    category: "cozinha",
  },
  {
    id: "tbb",
    filename: "burger.png",
    object_name: "s Triplo bacon burger",
    value: "Jorge Relato",
    category: "sala",
  },
  {
    id: "p4e",
    filename: "pizza.png",
    object_name: "Pizza 4 estações",
    value: "Fabiana Melo",
    link: "https://www.yahoo.com",
    category: "sala",
  },
  {
    id: "eaa",
    filename: "espaguete.png",
    object_name: "Espaguete ao alho",
    value: "Júlia Kinoto",
    category: "sala",
  },
  {
    id: "lmc",
    filename: "lasanha.png",
    object_name: "Lasanha mac n’ cheese",
    value: "Juliano Vieira",
    category: "sala",
  },
  {
    id: "dpc",
    filename: "doce.png",
    object_name: "Docinhos pão-do-céu",
    value: "Ricardo Golvea",
    category: "sala",
  },
  {
    id: "afb",
    filename: "asinhas.png",
    object_name: "Asinhas de frango ao barbecue",
    value: "Vania Steroski",
    category: "sala",
  },
  {
    id: "tbb",
    filename: "burger.png",
    object_name: "E Triplo bacon burger",
    value: "Jorge Relato",
    category: "study",
  },
  {
    id: "p4e",
    filename: "pizza.png",
    object_name: "Pizza 4 estações",
    value: "Fabiana Melo",
    category: "study",
  },
  {
    id: "eaa",
    filename: "espaguete.png",
    object_name: "Espaguete ao alho",
    value: "Júlia Kinoto",
    category: "study",
  },
  {
    id: "lmc",
    filename: "lasanha.png",
    object_name: "Lasanha mac n’ cheese",
    value: "Juliano Vieira",
    category: "study",
  },
  {
    id: "dpc",
    filename: "doce.png",
    object_name: "Docinhos pão-do-céu",
    value: "Ricardo Golvea",
    category: "study",
  },
  {
    id: "afb",
    filename: "asinhas.png",
    object_name: "Asinhas de frango ao barbecue",
    value: "Vania Steroski",
    category: "study",
  },
];

const living = document.querySelector(".living_cards");
const cozinha_cards = document.querySelector(".cozinha_cards");
const study_cards = document.querySelector(".study_cards");

const allcards = document.querySelector(".allcards");

/* categorys only */

if (study_cards) {
  study_cards.innerHTML = objects
    .map((item) => {
      if (item.category == "study") {
        let link = item.link;
        if (link != undefined) {
          link = `<a href=${link}>ML link</a>`;
        } else {
          link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="foodassets/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      ${link}
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
        if (link != undefined) {
          link = `<a href=${link}>ML link</a>`;
        } else {
          link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="foodassets/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
      ${link}
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
        if (link != undefined) {
          link = `<a href=${link}>ML link</a>`;
        } else {
          link = "";
        }
        return `
    <div class="card" id="${item.id}">
      <div class="card__image-container">
        <img src="foodassets/${item.filename}" alt="${item.object_name}">
      </div>
      <div class="card__content">
        <p>${item.object_name}</p>
      </div>
      <div class="card__info">
        <p>${item.value}</p>
      </div>
        ${link}
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
      if (link != undefined) {
        link = `<a href=${link}>ML link</a>`;
      } else {
        link = "";
      }
      return `
      <div class="card" id="${item.id}">
        <div class="card__image-container">
          <img src="foodassets/${item.filename}" alt="${item.object_name}">
        </div>
        <div class="card__content">
          <p>${item.object_name}</p>
        </div>
        <div class="card__info">
          <p>${item.value}</p>
        </div>
        ${link}
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
