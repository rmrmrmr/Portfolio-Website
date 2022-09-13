const menuBttn = document.querySelector('#headerButton');
const xBttn = document.querySelector('#xButtonImg');
const portfolioLink = document.getElementById('portfolioLink');
const aboutLink = document.getElementById('abtMeLink');
const contactLink = document.getElementById('contactLink');

const mobMenu = document.querySelector('#mobileMenu');
const mobToolbar = document.getElementById('toolbar');
const headline = document.getElementById('headline');
const recentWorks = document.getElementById('recentWorks');
const abtMe = document.getElementById('aboutMePage');
const contact = document.getElementById('contact');
const primName = document.getElementById('primaryName');
const primJob = document.getElementById('primaryJob');
const supText = document.getElementById('supportingText');
const smIAnim = document.getElementById('socialMediaIcons');

function openMobMenu() {
  mobMenu.style.display = 'flex';
  mobToolbar.style.display = 'none';
  headline.style.display = 'none';
  recentWorks.style.display = 'none';
  abtMe.style.display = 'none';
  contact.style.display = 'none';
  primName.classList.remove('lrAnim');
  primJob.classList.remove('rlAnim');
  supText.classList.remove('btAnim');
  smIAnim.classList.remove('btAnim');
}

function closeMobMenu() {
  mobMenu.style.display = 'none';
  mobToolbar.style.display = 'flex';
  headline.style.display = 'flex';
  recentWorks.style.display = 'grid';
  abtMe.style.display = 'grid';
  contact.style.display = 'flex';
}

function hideMobMenu() {
  if (window.innerWidth > 768) {
    mobToolbar.style.display = 'none';
  } else {
    mobToolbar.style.display = 'flex';
  }
}

menuBttn.addEventListener('click', openMobMenu);
xBttn.addEventListener('click', closeMobMenu);
portfolioLink.addEventListener('click', closeMobMenu);
aboutLink.addEventListener('click', closeMobMenu);
contactLink.addEventListener('click', closeMobMenu);
window.addEventListener('resize', hideMobMenu); 