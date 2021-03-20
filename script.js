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



accorProductBtn.addEventListener("click",
() => productPanel.style.display === "flex" ? productPanel.style.display = "none" : productPanel.style.display = "flex"
);
accorCompanyBtn.addEventListener("click",
() => companyPanel.style.display === "flex" ? companyPanel.style.display = "none" : companyPanel.style.display = "flex"
);
accorConnectBtn.addEventListener("click",
() => connectPanel.style.display === "flex" ? connectPanel.style.display = "none" : connectPanel.style.display = "flex"
);
