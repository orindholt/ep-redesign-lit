let menu = false;
let detector = false;
let regionSelector = false;
let detectorInteracted = false;
let showLogin = false;
let crtFlag = 'denmark.svg';
const local = 'Kastrup, Danmark';
const regions = [
  {
    imgSrc: './images/flags/usa.svg',
    title: 'USA',
    anchor: '#',
    active: false,
  },
  {
    imgSrc: './images/flags/denmark.svg',
    title: 'Danmark',
    active: true,
  },
  {
    imgSrc: './images/flags/german.svg',
    title: 'Deutshland',
    active: false,
  },
  {
    imgSrc: './images/flags/norway.svg',
    title: 'Norge',
    active: false,
  },
  {
    imgSrc: './images/flags/finland.svg',
    title: 'Suomi',
    active: false,
  },
  {
    imgSrc: './images/flags/sweden.svg',
    title: 'Sverige',
    active: false,
  },
];

const menuBtn = document.querySelector('#menuBtn');
const menuEl = document.querySelector('#menu');
const menuIcon = document.querySelector('#menuBtn > img');
const regionBtn = document.querySelectorAll('.regionBtn');
const regionEl = document.querySelectorAll('.regionMenu');
const regionIcon = document.querySelectorAll('.regionBtn > img');
let openIcon = 'burger-menu.svg';
let closeIcon = 'burger-exit.svg';

/* Menu Toggle Event */
menuBtn.addEventListener('click', () => {
  menu = !menu;
  if (!menu) {
    menuEl.classList.add('hide');
    menuIcon.setAttribute('src', `./images/${openIcon}`);
  } else {
    menuEl.classList.remove('hide');
    menuIcon.setAttribute('src', `./images/${closeIcon}`);
  }
});

const toggleRegionSelector = () => {
  regionSelector = !regionSelector;
  if (!regionSelector) {
    regionEl.forEach((element) => {
      element.classList.add('hide');
    });
  } else regionEl.forEach((element) => element.classList.remove('hide'));
};

regionBtn.forEach((btn) => {
  btn.addEventListener('click', toggleRegionSelector);
});

const setRegionIcon = (url) => {
  regionIcon.forEach((icon) => {
    icon.setAttribute('src', url);
  });
};

/* Region Click Handler */
const regionClickHandler = (e) => {
  if (e) {
    regionSelector && toggleRegionSelector();
    crtFlag = e.target.getAttribute('src');
    setRegionIcon(crtFlag);
    regions.forEach((region) => {
      if (crtFlag == region.imgSrc) {
        region.active = true;
      } else region.active = false;
    });
  }
  regionEl.forEach((element) => {
    element.innerHTML = ``;
  });

  regions.forEach(({imgSrc, title, active}) => {
    if (!active)
      regionEl.forEach((element) => {
        element.innerHTML += `
        <li>
          <button class="flex gap-2 w-10 region rounded-md overflow-hidden shadow-sm" onclick="regionClickHandler(event)">
            <img src="${imgSrc}" alt="${title}" />
          </button>
        </li>
      `;
      });
  });
};
regionClickHandler();
setRegionIcon(`./images/flags/${crtFlag}`);

/* MENU */
const menuListEl = document.querySelectorAll('.menuList');
const dropdownBtns = document.querySelectorAll('.dropdownBtn');

const deactivate = (element) => {
  let icon = element.querySelector('.triangle');
  let dropdown = element.nextElementSibling;
  element.style.color = 'black';
  element.style.fill = 'black';
  icon.style.transform = 'rotate(0)';
  element.setAttribute('data-active', 'false');
  if (dropdown.classList.contains('dropdown')) dropdown.classList.add('hide');
};

const activate = (element) => {
  let icon = element.querySelector('.triangle');
  let dropdown = element.nextElementSibling;
  element.style.color = '#2B7EE1';
  element.style.color = '#2B7EE1';
  icon.style.transform = 'rotate(180deg)';
  element.setAttribute('data-active', 'true');
  if (dropdown.classList.contains('dropdown'))
    dropdown.classList.remove('hide');
};

/* Dropdown Click Handler */
const toggleDropdown = (el, bool = true) => {
  if (bool) {
    /* If regionSelector is opened then close */
    regionSelector && toggleRegionSelector();
    /* Toggles All Dropdown Buttons */
    dropdownBtns.forEach((btn) => btn != el && deactivate(btn));
    /* Toggles button element */
    if (el.getAttribute('data-active') != 'true') {
      activate(el);
    } else deactivate(el);
  } else if (!bool) dropdownBtns.forEach((btn) => deactivate(btn));
};

document.querySelector('#loginBtn').addEventListener('click', () => {
  const loginElement = document.querySelector('#login');
  loginElement && loginElement.classList.toggle('hide');
});

document.addEventListener('click', (e) => {
  if (e.target.localName == 'my-app') {
    toggleDropdown(null, false);
    regionSelector && toggleRegionSelector();
  }
});
