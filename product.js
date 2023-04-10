const menu = [
  {
    id: 1,
    title: "Mistolín fragancias",
    category: "mistolin",
    price: 15.99,
    img: "./img/a.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Mistolín Aromas",
    category: "mistolin",
    price: 13.99,
    img: "./img/b.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Mistolín limón",
    category: "mistolin",
    price: 6.99,
    img: "./img/e.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Jabón liquido",
    category: "detergentes",
    price: 20.99,
    img: "./img/d.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Jabón lavanda",
    category: "detergentes",
    price: 22.99,
    img: "./img/f.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Suavizante con fragancia",
    category: "suavizante",
    price: 18.99,
    img: "./img/c.png",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Suavizante soflan",
    category: "suavizante",
    price: 8.99,
    img: "./img/g.png",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Suavizante lavanda",
    category: "suavizante",
    price: 12.99,
    img: "./img/j.png",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Citronella",
    category: "mistolin",
    price: 16.99,
    img: "./img/i.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "mimosin",
    category: "suavizante",
    price: 22.99,
    img: "./img/h.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// get parent element
const sectionCenterProducts = document.querySelector(".section-center-product");
const btnContainerMenu = document.querySelector(".btn-container-menu");

// display all items when page loads
window.addEventListener("DOMContentLoaded", () => {
  diplayMenuItems(menu);
  displayMenuButtons();
});

const diplayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map( (item) => {
    // console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenterProducts.innerHTML = displayMenu;
}

const displayMenuButtons = () => {
  const categories = menu.reduce(
     (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    }, ["Todo"] );
  const categoryBtns = categories
    .map( (category) => {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

    btnContainerMenu.innerHTML = categoryBtns;
  const filterBtns = btnContainerMenu.querySelectorAll(".filter-btn");
  // console.log(filterBtns);

  filterBtns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter( (menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Todo") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
