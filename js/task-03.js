const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");
const markup = images.map(
  (image) => `<li><img src="${image.url}" alt="${image.alt}" /></li>`
);
galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.style.display = "flex";
galleryList.style.justifyContent = "space-between";
galleryList.style.alignItems = "center";
galleryList.style.listStyle = "none";
galleryList.style.paddingInlineStart = "0px";

const pictures = document.querySelectorAll("img");
pictures.forEach((element) => {
  element.style.width = "30vw";
  element.style.height = "auto";
});
