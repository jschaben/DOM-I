const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// images

const ctaImage = document.getElementById('cta-img');
ctaImage.src = 'img/header-img.png';

const middleImage = document.getElementById('middle-img');
middleImage.src = "img/mid-page-accent.jpg";

// nav

const navItems = document.querySelectorAll('a');
let itemIncrements = 1;
const navList = navItems.forEach(ni => {
  return (ni.textContent = siteContent.nav[`nav-item-${itemIncrements++}`]);
});
let nav = document.querySelector('header nav')
let link1 = document.createElement('a');
link1.innerHTML = 'Home';
nav.prepend(link1);
let link2 = document.createElement('a');
link2.innerHTML = 'Members';
nav.append(link2);

navItems.forEach(link => {
  link.style.color = "green";
  link.onmouseover = function() {
    mouseover();
  };
  link.onmouseout = function() {
    mouseout();
  };
  function mouseover () {
    link.style.backgroundColor = 'lightblue';
  }
  function mouseout() {
    link.style.backgroundColor = "white";
  }
});
link1.style.color = "green";
link1.onmouseover = function() {
  link1mouseover();
};
link1.onmouseout = function() {
 link1mouseout();
};
function link1mouseover () {
  link1.style.backgroundColor = 'lightblue';
}
function link1mouseout() {
  link1.style.backgroundColor = "white";
}


link2.style.color = "green";
link2.onmouseover = function() {
  mouseover();
};
link2.onmouseout = function() {
  mouseout();
};
function mouseover () {
  link2.style.backgroundColor = 'lightblue';
}
function mouseout() {
  link2.style.backgroundColor = "white";
}




// header

// const headerText = document.querySelector('h1');
// headerText.textContent = siteContent.cta.h1;

const headerText = document.querySelector('.cta-text h1');
headerText.innerHTML = siteContent.cta.h1.replace(/\s/g, '</br>');

// const ctaText = document.querySelector(".cta-text h1");
// ctaText.Node.textContent = siteContent['cta']['h1'].replace(/\s/g, "</br>");

// button

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

// main section
const middleContent = siteContent['main-content'];

let paragraphHeadings = document.querySelectorAll("h4");
paragraphHeadings[0].innerText = "Features";
paragraphHeadings[1].innerText = "About";
paragraphHeadings[2].innerText = "Services";
paragraphHeadings[3].innerText = "Product";
paragraphHeadings[4].innerText = "Vision";
paragraphHeadings[5].innerText = "Contact";

let textBlocks = document.querySelectorAll("p");
textBlocks[0].textContent = middleContent['features-content'];
textBlocks[1].textContent = middleContent['about-content'];
textBlocks[2].textContent = middleContent['services-content'];
textBlocks[3].textContent = middleContent['product-content'];
textBlocks[4].textContent = middleContent['vision-content'];

const contactSection = siteContent.contact;
const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].innerHTML = "123 Way Street </br> Somewhere, USA";
contactParagraph[1].textContent = contactSection.phone;
contactParagraph[2].textContent = contactSection.email;
// footer

const foot = siteContent.footer;

const copyright = document.querySelector('footer p');
copyright.textContent = foot.copyright;
