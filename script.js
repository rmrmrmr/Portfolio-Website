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
const button1 = document.getElementById('card1');
const button2 = document.getElementById('card2');
const button3 = document.getElementById('card3');
const button4 = document.getElementById('card4');
const button5 = document.getElementById('card5');
const button6 = document.getElementById('card6');
const projectsInfo = [
  {
    id: 'card1',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavScript',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'card2',
    name:  'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavScript',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'card3',
    name:  'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavScript',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'card4',
    name:  'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavScript',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'card5',
    name:  'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavScript',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'card6',
    name:  'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavScript',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  }
]

function hideMobMenu() {
  if (window.innerWidth > 768) {
    mobToolbar.style.display = 'none';
  } else {
    mobToolbar.style.display = 'flex';
  }
}

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

function openPopupMobWindow(bttnId) {
  const popupBg = document.createElement('div');
  popupBg.setAttribute('id', 'mobileProjectPopupBG');

  for(let i = 0; i < projectsInfo.length; i++) {
    if(bttnId == projectsInfo[i].id) {
      let projectName = projectsInfo[i].name;
      let projectDesc = projectsInfo[i].description;
      let projectImg = projectsInfo[i].fImage;
      let projectTech1 = projectsInfo[i].technologies1;
      let projectTech2 = projectsInfo[i].technologies2;
      let projectTech3 = projectsInfo[i].technologies3;
      let liveLink = projectsInfo[i].liveVersion;
      let projectSrc = projectsInfo[i].projectSource;
        const popup = document.createElement('div');
        popup.setAttribute('id', 'mobileProjectPopup');
          const mobPopupSnpsht = document.createElement('img');
          mobPopupSnpsht.setAttribute('id', projectImg);
          mobPopupSnpsht.setAttribute('src', 'Images/modalPopupSnSh.svg');
          mobPopupSnpsht.setAttribute('alt', 'projectSnapshot');
          const mobPopupXBttn = document.createElement('div');
          mobPopupXBttn.setAttribute('id', 'mobPopupXBttn');
          const mobilePopupTitle = document.createElement('p');
          mobilePopupTitle.setAttribute('id', 'mobilePopupTitle');
          mobilePopupTitle.innerHTML = projectName;
          const mobPopupTechPH = document.createElement('ul');
          mobPopupTechPH.setAttribute('id', 'mobilePopupTechPH');
            const techlist1 = document.createElement('li');
            techlist1.classList.add('mobilePopupTech');
            techlist1.innerHTML = projectTech1;
            mobPopupTechPH.append(techlist1);
            const techlist2 = document.createElement('li');
            techlist2.classList.add('mobilePopupTech');
            techlist2.innerHTML = projectTech2;
            mobPopupTechPH.append(techlist2);
            const techlist3 = document.createElement('li');
            techlist3.classList.add('mobilePopupTech');
            techlist3.innerHTML = projectTech3;
            mobPopupTechPH.append(techlist3);
          const mobPopupInfo = document.createElement('p');
          mobPopupInfo.setAttribute('id', 'mobilePopupInfo');
          mobPopupInfo.innerHTML = projectDesc;
          const mobPopupBttnsPH = document.createElement('div');
          mobPopupBttnsPH.setAttribute('id', 'mobilePopupButtonsPH');
            const mobSeeLiveBttn = document.createElement('a');
            mobSeeLiveBttn.setAttribute('id', 'mobileSeeLiveBttn');
            mobSeeLiveBttn.setAttribute('href', liveLink);
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
            mobSeeSourceBttn.setAttribute('href', projectSrc);
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
          popup.append(mobPopupXBttn);
          popup.append(mobPopupSnpsht);
          popup.append(mobilePopupTitle);
          popup.append(mobPopupTechPH);
          popup.append(mobPopupInfo);
          popup.append(mobPopupBttnsPH);
        popupBg.append(popup);
      
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
  }

  document.body.append(popupBg);

  function closePopupWindow() {
    mobToolbar.style.display = 'flex';
    headline.style.display = 'flex';
    recentWorks.style.display = 'grid';
    abtMe.style.display = 'grid';
    contact.style.display = 'flex';
    popupBg.remove();
    hideMobMenu();
  }

  mobPopupXBttn.addEventListener('click', closePopupWindow);
}

menuBttn.addEventListener('click', openMobMenu);
xBttn.addEventListener('click', closeMobMenu);
portfolioLink.addEventListener('click', closeMobMenu);
aboutLink.addEventListener('click', closeMobMenu);
contactLink.addEventListener('click', closeMobMenu);
window.addEventListener('resize', hideMobMenu);
button1.addEventListener('click', function () { openPopupMobWindow(button1.id); });
button2.addEventListener('click', function () { openPopupMobWindow(button2.id); });
button3.addEventListener('click', function () { openPopupMobWindow(button3.id); });
button4.addEventListener('click', function () { openPopupMobWindow(button4.id); });
button5.addEventListener('click', function () { openPopupMobWindow(button5.id); });
button6.addEventListener('click', function () { openPopupMobWindow(button6.id); });

