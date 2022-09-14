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
const seeProjectBttn = document.querySelectorAll('.seeProjectBttn');

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

function createPopupMobWindow() {
  const popupBg = document.createElement('div');
  popupBg.setAttribute('id', 'mobileProjectPopupBG');
    const popup = document.createElement('div');
    popup.setAttribute('id', 'mobileProjectPopup');
      const mobPopupSnpsht = document.createElement('img');
      mobPopupSnpsht.setAttribute('id', 'mobilePopupSnsh');
      mobPopupSnpsht.setAttribute('src', 'Images/modalPopupSnSh.svg');
      mobPopupSnpsht.setAttribute('alt', 'projectSnapshot');
      const mobilePopupTitle = document.createElement('p');
      mobilePopupTitle.setAttribute('id', 'mobilePopupTitle');
      mobilePopupTitle.innerHTML = 'Keeping track of hundreds of components';
      const mobPopupTechPH = document.createElement('ul');
      mobPopupTechPH.setAttribute('id', 'mobilePopupTechPH');
        for(let i = 0; i < 3; i++) {
          let techlist = document.createElement('li');
          techlist.classList.add('mobilePopupTech');
          techlist.innerHTML = 'JavScrpt';
          mobPopupTechPH.append(techlist);
        }
      const mobPopupInfo = document.createElement('p');
      mobPopupInfo.setAttribute('id', 'mobilePopupInfo');
      mobPopupInfo.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
      const mobPopupBttnsPH = document.createElement('div');
      mobPopupBttnsPH.setAttribute('id', 'mobilePopupButtonsPH');
        const mobSeeLiveBttn = document.createElement('a');
        mobSeeLiveBttn.setAttribute('id', 'mobileSeeLiveBttn');
        mobSeeLiveBttn.setAttribute('href', 'https://github.com/rmrmrmr');
          const seeLiveTextMobile = document.createElement('p');
          seeLiveTextMobile.setAttribute('id', 'seeLiveTextMobile');
          seeLiveTextMobile.innerHTML = 'See Live';
          mobSeeLiveBttn.append(seeLiveTextMobile);
          const seeLiveImgMobile = document.createElement('img');
          seeLiveImgMobile.setAttribute('id', 'seeLiveImgMobile');
          seeLiveImgMobile.setAttribute('src', 'Images/seeLiveMobile.png');
          seeLiveImgMobile.setAttribute('alt', 'SeeLive');
          mobSeeLiveBttn.append(seeLiveImgMobile);
        mobPopupBttnsPH.append(mobSeeLiveBttn);
        const mobSeeSourceBttn = document.createElement('a');
        mobSeeSourceBttn.setAttribute('id', 'mobileSeeSourceBttn');
        mobSeeSourceBttn.setAttribute('href', 'https://github.com/rmrmrmr');
          const seeSourceTextMobile = document.createElement('p');
          seeSourceTextMobile.setAttribute('id', 'seeSourceTextMobile');
          seeSourceTextMobile.innerHTML = 'See Source';
          mobSeeSourceBttn.append(seeSourceTextMobile);
          const seeSourceImgMobile = document.createElement('img');
          seeSourceImgMobile.setAttribute('id', 'seeSourceImgMobile');
          seeSourceImgMobile.setAttribute('src', 'Images/seeSourceMobile.png');
          seeSourceImgMobile.setAttribute('alt', 'SeeSource');
          mobSeeSourceBttn.append(seeSourceImgMobile);
        mobPopupBttnsPH.append(mobSeeSourceBttn);
      popup.append(mobPopupSnpsht);
      popup.append(mobilePopupTitle);
      popup.append(mobPopupTechPH);
      popup.append(mobPopupInfo);
      popup.append(mobPopupBttnsPH);
    popupBg.append(popup);
  document.body.append(popupBg);

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

menuBttn.addEventListener('click', openMobMenu);
xBttn.addEventListener('click', closeMobMenu);
portfolioLink.addEventListener('click', closeMobMenu);
aboutLink.addEventListener('click', closeMobMenu);
contactLink.addEventListener('click', closeMobMenu);
window.addEventListener('resize', hideMobMenu);
for(let i = 0; i < 7; i++) {
  let bttn = seeProjectBttn.item(i)
  bttn.addEventListener('click', createPopupMobWindow);
}