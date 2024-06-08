'use strict';

const categoriesTotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesTotal.length}`);

const categoryTitles = document.querySelectorAll("h2");
const categoryElements = document.querySelectorAll(".item ul");

const getInfo = () => {
  categoryTitles.forEach((title, index) => {
    console.log(`Category: ${title.textContent}`);
  const numOfElements = categoryElements[index].querySelectorAll("li").length;
    console.log(`Number of elements: ${numOfElements}`);
  });
}

getInfo();
