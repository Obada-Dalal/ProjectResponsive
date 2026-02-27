let clickMenu = document.querySelector(".Click-toggle");
console.log(clickMenu);
let MianUL = document.querySelector(".MianUL");
let MainBody = document.querySelector("body");
console.log(MainBody);

document.addEventListener("click", function (event) {
  // MianUL.classList.toggle("Ul");
  if (clickMenu.contains(event.target)) {
    MianUL.classList.toggle("Ul");
  } else {
    MianUL.classList.remove("Ul");
  }
});

// document.addEventListener("click", function () {
//   if(MianUL.classList.value === "MianUL Ul") {
//     MianUL.classList.remove("Ul")
//   }
// })

//start slider_continer
// Get Slider Items || Array.from [ES6 Featyer]
var sliderImage = Array.from(
  document.querySelectorAll(".slider_container img")
);
console.log(sliderImage);

// Get Number Of Slider
var sliderCount = sliderImage.length;

// Set Current Slider
let currentslider = 1;

// Slider Number Elment
var silderNumberElement = document.getElementById("slider-number");

// previous and Next Button
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle Click on previous
nextButton.onclick = nextSlider;
prevButton.onclick = prevSlider;

// Creat The Main UL Elment
var paginationElement = document.createElement("ul");

// set ID On Created UL Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Itmes Based On Slider Count
for (let i = 1; i <= sliderCount; i++) {
  // Create The IL
  var paginationItems = document.createElement("li");
  // Set Custom Attribute
  paginationItems.setAttribute("data-index", i);
  // Set Items Content
  // paginationItems.appendChild(document.createTextNode(i));
  // Append Items to The Main UL List
  paginationElement.appendChild(paginationItems);
}

// Add The Created Ul Element To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get the New Created Ul
var paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Items || Array.from [ES6 Featyer]
var PaginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Bullets Items
for (var i = 0; i < PaginationBullets.length; i++) {
  PaginationBullets[i].onclick = function () {
    currentslider = parseInt(this.getAttribute("data-index"));
    theCkecker();
  };
}

theCkecker();

// Next Slider Function
function nextSlider() {
  if (nextButton.classList.contains("disabled")) {
    // Do Notheng
    return false;
  } else {
    currentslider++;
    theCkecker();
  }
}

// previous Slider Function
function prevSlider() {
  if (prevButton.classList.contains("disabled")) {
    // Do Natheng
    return false;
  } else {
    currentslider--;
    theCkecker();
  }
}

// Create The Ckecker Function
function theCkecker() {
  // Set The Slider Number
  // silderNumberElement.textContent =
  //   "Slide # " + currentslider + " of " + sliderCount;

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slider
  sliderImage[currentslider - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentslider - 1].classList.add("active");

  // Check if Current slide is The First
  if (currentslider == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  // Check if Current slide is The last
  if (currentslider == sliderCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
  console.log(currentslider);
}

// Remov All Active Classes From Image And Pagination Bullets
function removeAllActive() {
  // Loop Through Images
  sliderImage.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  PaginationBullets.forEach(function (bullets) {
    bullets.classList.remove("active");
  });
}
//end slider_continer

let Li = Array.from(document.querySelectorAll(".MianUL li a"));
console.log(Li);

let active = document.querySelector("li .active");
console.log(active);

Li.forEach((elment) => {
  elment.addEventListener("mousemove", () => {
    active.classList.remove("active");
    elment.classList.add("active");
  });
  elment.addEventListener("mouseleave", () => {
    elment.classList.remove("active");
  });
});

// Start shuffle

let Lishuffle = document.querySelectorAll(".shuffleUl li");
console.log(Lishuffle);

let DivImage = Array.from(document.querySelectorAll(".BoxMainImage .DivImage"));
console.log(DivImage);


Lishuffle.forEach((li) => {
li.addEventListener("click", removeActiveUlLi);
li.addEventListener("click", ActiveImage);
})


function removeActiveUlLi() {
  Lishuffle.forEach((li) => {
    li.classList.remove("activeUlLi");
    this.classList.add("activeUlLi");
  })
}


function ActiveImage () {
  DivImage.forEach ((img) => {
    img.style.display = "none";
  })
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display= "block"
  })
}

// start Bullets AboutUs
let bullets = Array.from(document.querySelectorAll(".bullets li"));
console.log(bullets);








// end Bullets AboutUs








// let activeUlLi = document.querySelector(".activeUlLi");
// console.log(activeUlLi);

// let BoxMainImage = Array.from(document.querySelectorAll(".DivImage"));
// console.log(BoxMainImage);

// Lishuffle.forEach((elment) => {
//   elment.addEventListener("click", () => {
//     Lishuffle.forEach ((elmen) => {elmen.classList.remove("activeUlLi")})
//     elment.classList.add("activeUlLi");
//     // BoxMainImage[1].classList.add("displayNone");
//     if(elment.Content = "App") {
//       BoxMainImage[1].classList.add("displayNone");
//     } else if (elment.Content = "Photo") {}
//     // if(elment.Content = "Photo") {
//     //   BoxMainImage[3].classList.add("displayNone");
//     // }
//   });
// });













// End shuffle
