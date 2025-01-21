'use strict';


const allNumberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allNumberCategories.length}`);

allNumberCategories.forEach((category) => {
    const categoryName = category.querySelector('.item > h2').textContent;

    const elementCount = category.querySelectorAll('ul > li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementCount}`);
});




