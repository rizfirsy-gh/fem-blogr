const productBtn = document.querySelector(".product-btn");
const companyBtn = document.querySelector(".company-btn");
const connectBtn = document.querySelector(".connect-btn");

const productDropMenu = document.querySelector(".dropdown-product");
const companyDropMenu = document.querySelector(".dropdown-company");
const connectDropMenu = document.querySelector(".dropdown-connect");

//button menu on hover
//product
productBtn.addEventListener('mouseenter', function () {
    productDropMenu.style.display = "block";
});
productBtn.addEventListener('mouseleave', function () {
    productDropMenu.style.display = "none";
});

//company
companyBtn.addEventListener('mouseenter', function () {
    companyDropMenu.style.display = "block";
});
companyBtn.addEventListener('mouseleave', function () {
    companyDropMenu.style.display = "none";
});

//connect
connectBtn.addEventListener('mouseenter', function () {
    connectDropMenu.style.display = "block";
});
connectBtn.addEventListener('mouseleave', function () {
    connectDropMenu.style.display = "none";
});


//dropdown menu on hover
//product
productDropMenu.addEventListener('mouseenter', function () {
    productDropMenu.style.display = "block";
});
productDropMenu.addEventListener('mouseleave', function () {
    productDropMenu.style.display = "none";
});

//company
companyDropMenu.addEventListener('mouseenter', function () {
    companyDropMenu.style.display = "block";
});
companyDropMenu.addEventListener('mouseleave', function () {
    companyDropMenu.style.display = "none";
});

//connect
connectDropMenu.addEventListener('mouseenter', function () {
    connectDropMenu.style.display = "block";
});
connectDropMenu.addEventListener('mouseleave', function () {
    connectDropMenu.style.display = "none";
});


const hamburgerButton = document.getElementById("hamburger");
const closeHamburgerButton = document.querySelector(".close-btn");
const hambergurMenu = document.querySelector(".menu");

hamburgerButton.addEventListener('click', function() {
    hambergurMenu.style.display = "flex";
    hamburgerButton.style.display = "none";
});

closeHamburgerButton.addEventListener('click', function() {
    hambergurMenu.style.display = "none";
    hamburgerButton.style.display = "block";
});

const accorProductBtn = document.querySelector(".accor-product-btn");
const accorCompanyBtn = document.querySelector(".accor-company-btn");
const accorConnectBtn = document.querySelector(".accor-connect-btn");
const productPanel = document.querySelector(".product-panel");
const companyPanel = document.querySelector(".company-panel");
const connectPanel = document.querySelector(".connect-panel");
const productArrowIcon = document.querySelector(".product-arrow");
const companyArrowIcon = document.querySelector(".company-arrow");
const connectArrowIcon = document.querySelector(".connect-arrow");


accorProductBtn.addEventListener("click",
() => productPanel.style.display === "flex" ? productPanel.style.display = "none" : productPanel.style.display = "flex"
);
accorCompanyBtn.addEventListener("click",
() => companyPanel.style.display === "flex" ? companyPanel.style.display = "none" : companyPanel.style.display = "flex"
);
accorConnectBtn.addEventListener("click",
() => connectPanel.style.display === "flex" ? connectPanel.style.display = "none" : connectPanel.style.display = "flex"
);


//rotating arrow
accorProductBtn.addEventListener("click",
() => productPanel.style.display === "flex" ? productArrowIcon.style.transform = "rotate(180deg)" : productArrowIcon.style.transform = "rotate(0deg)"
);

accorCompanyBtn.addEventListener("click",
() => companyPanel.style.display === "flex" ? companyArrowIcon.style.transform = "rotate(180deg)" : companyArrowIcon.style.transform = "rotate(0deg)"
);

accorConnectBtn.addEventListener("click",
() => connectPanel.style.display === "flex" ? connectArrowIcon.style.transform = "rotate(180deg)" : connectArrowIcon.style.transform = "rotate(0deg)"
);

ScrollReveal({delay: 5, duration: 1000});
ScrollReveal().reveal('.logo');
ScrollReveal().reveal('.dropbtn');
ScrollReveal().reveal('#hamburger');

ScrollReveal().reveal('.intro p');
ScrollReveal().reveal('.intro img');
ScrollReveal().reveal('.cta');
ScrollReveal().reveal('.heading-intro');

ScrollReveal().reveal('.design');
ScrollReveal().reveal('.design-title');
ScrollReveal().reveal('.design-image img');
ScrollReveal().reveal('.text1');
ScrollReveal().reveal('.text1 h1');
ScrollReveal().reveal('.text1 p');
ScrollReveal().reveal('.text2');
ScrollReveal().reveal('.text2 h1');
ScrollReveal().reveal('.text2 p');

ScrollReveal().reveal('.design-image');
ScrollReveal().reveal('.smartphone-content h1');
ScrollReveal().reveal('.smartphone-content p');
ScrollReveal().reveal('.illo');
ScrollReveal().reveal('.descriptions h1');
ScrollReveal().reveal('.descriptions p');


ScrollReveal().reveal('.laptop-illo');

ScrollReveal().reveal('footer img');
ScrollReveal().reveal('footer h1');
ScrollReveal().reveal('footer li');
ScrollReveal().reveal('footer a');

