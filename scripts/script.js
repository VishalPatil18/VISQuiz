const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginSignupPageBtn = document.getElementById("login-signup-page-btn");
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const loginEl = document.getElementById("login-el");
const signupEl = document.getElementById("signup-el");
const loginCloseBtn = document.getElementById("login-close-btn");
const signupCloseBtn = document.getElementById("signup-close-btn");
const themeSwitcherBtn = document.getElementById("theme-switcher-btn");
const darkIcons = document.querySelectorAll(".icon-dark");
const themeIcon = document.getElementById("theme-icon");

const sharelinkModalBtn = document.getElementById("sharelink-modal-btn");
const sharelinkModalContainer = document.getElementById("sharelink-modal-container");
const sharelinkModalEl = document.getElementById("sharelink-modal-el");
const sharelinkModalCloseBtn = document.getElementById("sharelink-modal-close-btn");

let storageValue = localStorage.getItem("theme");

const lightMode = () => {
  localStorage.setItem("theme","light_mode");
  themeIcon.src =
    "https://raw.githubusercontent.com/VishalPatil18/VISPA-UI/main/assets/moon.svg";
  document.body.classList.remove("dark-mode");
  themeIcon.classList.remove("icon-dark");
  themeIcon.classList.add("icon-light");

  darkIcons.forEach(function (currentIcon) {
    currentIcon.classList.remove("icon-light");
    currentIcon.classList.add("icon-dark");
  });
};

const darkMode = () => {
  localStorage.setItem("theme","dark_mode");
  themeIcon.src =
    "https://raw.githubusercontent.com/VishalPatil18/VISPA-UI/main/assets/sun.svg";
  document.body.classList.add("dark-mode");
  themeIcon.classList.add("icon-dark");
  themeIcon.classList.remove("icon-warning");

  darkIcons.forEach(function (currentIcon) {
    currentIcon.classList.remove("icon-dark");
    currentIcon.classList.add("icon-light");
  });
};

if (storageValue === null) {
  localStorage.setItem("theme", "light_mode");
} else if (storageValue === "dark_mode") {
  darkMode();
}

const hideEl = (element, elementContainer) => {
  elementContainer.style.display = "none";
  element.style.display = "none";
};

const showEl = (element, elementContainer) => {
  elementContainer.style.display = "flex";
  element.style.display = "flex";
};

loginBtn.addEventListener("click", () => {
  hideEl(signupEl, signupContainer);
  showEl(loginEl, loginContainer);
});

loginCloseBtn.addEventListener("click", () => hideEl(loginEl, loginContainer));

loginSignupPageBtn.addEventListener("click", () => {
  hideEl(signupEl, signupContainer);
  showEl(loginEl, loginContainer);
});

signupBtn.addEventListener("click", () => {
  hideEl(loginEl, loginContainer);
  showEl(signupEl, signupContainer);
});

signupCloseBtn.addEventListener("click", () =>
  hideEl(signupEl, signupContainer)
);

themeSwitcherBtn.addEventListener("click", () => {
  storageValue = localStorage.getItem("theme");
  if (storageValue === "light_mode") {
    darkMode();
  } else if(storageValue === "dark_mode") {
    lightMode();
  }
});

if(sharelinkModalBtn) {
  sharelinkModalBtn.addEventListener("click", () => {
    sharelinkModalContainer.style.display = "flex";
    sharelinkModalEl.style.display = "flex";
  });
}

if(sharelinkModalCloseBtn) {
  sharelinkModalCloseBtn.addEventListener("click", () => {
    sharelinkModalContainer.style.display = "none";
    sharelinkModalEl.style.display = "none";
  })
}
