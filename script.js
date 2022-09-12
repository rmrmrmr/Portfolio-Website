//clickable items
let menuBttn = document.querySelector('#headerButton');
let xBttn = document.querySelector('#xButtonImg');
let portfolioLink = document.getElementById('portfolioLink');
let aboutLink = document.getElementById('abtMeLink');
let contactLink = document.getElementById('contactLink');

//items which css properties will be changed
let mobMenu = document.querySelector('#mobileMenu');
let mobToolbar =   document.getElementById('toolbar');
let headline = document.getElementById('headline');
let recentWorks = document.getElementById('recentWorks');
let abtMe = document.getElementById('aboutMePage');
let contact = document.getElementById('contact');
let primName = document.getElementById('primaryName');
let primJob = document.getElementById('primaryJob');
let supText = document.getElementById('supportingText');
let smIAnim = document.getElementById('socialMediaIcons');

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

menuBttn.addEventListener('click', openMobMenu);
xBttn.addEventListener('click', closeMobMenu);
portfolioLink.addEventListener('click', closeMobMenu);
aboutLink.addEventListener('click', closeMobMenu);
contactLink.addEventListener('click', closeMobMenu);
