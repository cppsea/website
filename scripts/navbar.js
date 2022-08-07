const navbar = document.querySelector("nav");

const listings = [
  {
    name: "home",
    src: "/"
  },
  {
    name: "events",
    src: "../events"
  },
  {
    name: "about",
    src: "../about"
  },
  {
    name: "join",
    src: "../join"
  }
];

const leftNav = document.createElement("div");

const logoAnchor = document.createElement("a");
logoAnchor.href = "/";

const logo = document.createElement("img");
logo.id = "sea-logo";
logo.src = "../../assets/images/sealogo.png";

const rightNav = document.createElement("ul");
rightNav.className = "right";
listings.forEach((list) => {
  const { name, src } = list;
  const element = document.createElement("li");
  const anchor = document.createElement("a");
  const text = document.createTextNode(name);
  anchor.href = src;
  anchor.appendChild(text);
  element.appendChild(anchor);
  rightNav.appendChild(element);
});

logoAnchor.appendChild(logo);
leftNav.appendChild(logoAnchor);
navbar.appendChild(leftNav);
navbar.appendChild(rightNav);