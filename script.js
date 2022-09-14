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
const button1 = document.getElementById('bttn1');
const button2 = document.getElementById('bttn2');
const button3 = document.getElementById('bttn3');
const button4 = document.getElementById('bttn4');
const button5 = document.getElementById('bttn5');
const button6 = document.getElementById('bttn6');
const projectsInfo = [
  {
    id: 'bttn1',
    name: 'Keeping track of hundreds of components[1]',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    fImageDesk: 'Images/snapshootDesktop.png',
    technologies1: 'Ruby on rails',
    technologies2: 'CSS',
    technologies3: 'JavaScript',
    techDesk1: 'Codekit',
    techDesk2: 'GitHub',
    techDesk3: 'JavaScript',
    techDesk4: 'Bootstrap',
    techDesk5: 'Terminal',
    techDesk6: 'Codepen',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'bttn2',
    name:  'Keeping track of hundreds of components[2]',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    fImageDesk: 'Images/snapshootDesktop.png',
    technologies1: 'Ruby on rails',
    technologies2: 'CSS',
    technologies3: 'JavaScript',
    techDesk1: 'Codekit',
    techDesk2: 'GitHub',
    techDesk3: 'JavaScript',
    techDesk4: 'Bootstrap',
    techDesk5: 'Terminal',
    techDesk6: 'Codepen',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'bttn3',
    name:  'Keeping track of hundreds of components[3]',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    fImageDesk: 'Images/snapshootDesktop.png',
    technologies1: 'Ruby on rails',
    technologies2: 'CSS',
    technologies3: 'JavaScript',
    techDesk1: 'Codekit',
    techDesk2: 'GitHub',
    techDesk3: 'JavaScript',
    techDesk4: 'Bootstrap',
    techDesk5: 'Terminal',
    techDesk6: 'Codepen',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'bttn4',
    name:  'Keeping track of hundreds of components[4]',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    fImageDesk: 'Images/snapshootDesktop.png',
    technologies1: 'Ruby on rails',
    technologies2: 'CSS',
    technologies3: 'JavaScript',
    techDesk1: 'Codekit',
    techDesk2: 'GitHub',
    techDesk3: 'JavaScript',
    techDesk4: 'Bootstrap',
    techDesk5: 'Terminal',
    techDesk6: 'Codepen',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'bttn5',
    name:  'Keeping track of hundreds of components[5]',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    fImageDesk: 'Images/snapshootDesktop.png',
    technologies1: 'Ruby on rails',
    technologies2: 'CSS',
    technologies3: 'JavaScript',
    techDesk1: 'Codekit',
    techDesk2: 'GitHub',
    techDesk3: 'JavaScript',
    techDesk4: 'Bootstrap',
    techDesk5: 'Terminal',
    techDesk6: 'Codepen',
    liveVersion: 'https://github.com/rmrmrmr',
    projectSource: 'https://github.com/rmrmrmr',
  },
  {
    id: 'btnn6',
    name:  'Keeping track of hundreds of components[6]',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    fImage: 'Images/modalPopupSnSh.svg',
    fImageDesk: 'Images/snapshootDesktop.png',
    technologies1: 'Ruby on rails',
    technologies2: 'CSS',
    technologies3: 'JavaScript',
    techDesk1: 'Codekit',
    techDesk2: 'GitHub',
    techDesk3: 'JavaScript',
    techDesk4: 'Bootstrap',
    techDesk5: 'Terminal',
    techDesk6: 'Codepen',
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
  console.log(bttnId);
  const popupBg = document.createElement('div');
  popupBg.setAttribute('id', 'mobileProjectPopupBG');

if(window.innerWidth > 768) {
  for(let i = 0; i < projectsInfo.length; i++) {
    if(bttnId == projectsInfo[i].id) {
      let projectName = projectsInfo[i].name;
      let projectDesc = projectsInfo[i].description;
      let projectImg = projectsInfo[i].fImageDesk;
      let deskTech1 = projectsInfo[i].techDesk1;
      let deskTech2 = projectsInfo[i].techDesk2;
      let deskTech3 = projectsInfo[i].techDesk3;
      let deskTech4 = projectsInfo[i].techDesk4;
      let deskTech5 = projectsInfo[i].techDesk5;
      let deskTech6 = projectsInfo[i].techDesk6;
      let liveLink = projectsInfo[i].liveVersion;
      let projectSrc = projectsInfo[i].projectSource;
      const deskPopPH = document.createElement('section');
      deskPopPH.setAttribute('id', 'desktopPopupPH');
      const deskPopup = document.createElement('div');
      deskPopup.setAttribute('id', 'desktopPopup');
      deskPopPH.append(deskPopup);
      const deskXBttnPH = document.createElement('div');
      deskXBttnPH.setAttribute('id', 'deskXBttnPH');
      const deskXBttnImg = document.createElement('img');
      deskXBttnImg.setAttribute('id','desktopXBttn');
      deskXBttnImg.setAttribute('src','Images/xDesktopBttn.svg');
      deskXBttnImg.setAttribute('alt','ClosePopup');
      deskXBttnPH.append(deskXBttnImg);
      deskPopup.append(deskXBttnPH);
      const desktopSnsh = document.createElement('img');
      desktopSnsh.setAttribute('id','desktopSnsh');
      desktopSnsh.setAttribute('src', projectImg);
      desktopSnsh.setAttribute('alt','ProjectImage');
      deskPopup.append(desktopSnsh);
      const deskProjectTitlePH = document.createElement('div');
      deskProjectTitlePH.setAttribute('id','desktopProjectTitlePH');
      const deskProjectName = document.createElement('p');
      deskProjectName.setAttribute('id', 'desktopProjectName');
      deskProjectName.innerHTML = projectName;
      deskProjectTitlePH.append(deskProjectName);
      const deskPopupBttnPH = document.createElement('div');
      deskPopupBttnPH.setAttribute('id', 'desktopPopupButtonsPH');
      const deskLiveBttn = document.createElement('a');
      deskLiveBttn.setAttribute('id', 'desktopSeeLiveBttn');
      deskLiveBttn.setAttribute('href', liveLink);
      const deskLiveText = document.createElement('p');
      deskLiveText.setAttribute('id','seeLiveTextDesktop');
      deskLiveText.innerHTML = 'See live';
      deskLiveBttn.append(deskLiveText);
      const deskLiveImg = document.createElement('img');
      deskLiveImg.setAttribute('id','seeLiveImgDesktop');
      deskLiveImg.setAttribute('src','Images/seeLiveMobile.png');
      deskLiveImg.setAttribute('alt','SeeLive');
      deskLiveBttn.append(deskLiveImg);
      deskPopupBttnPH.append(deskLiveBttn);
      const deskSourceBttn = document.createElement('a');
      deskSourceBttn.setAttribute('id', 'desktopSeeSourceBttn');
      deskSourceBttn.setAttribute('href', projectSrc);
      const deskSourceText = document.createElement('p');
      deskSourceText.setAttribute('id','seeSourceTextDesktop');
      deskSourceText.innerHTML = 'See source';
      deskSourceBttn.append(deskSourceText);
      const deskSourceImg = document.createElement('img');
      deskSourceImg.setAttribute('id','seeSourceImgDesktop');
      deskSourceImg.setAttribute('src','Images/seeSourceMobile.png');
      deskSourceImg.setAttribute('alt','SeeSource');
      deskSourceBttn.append(deskSourceImg);
      deskPopupBttnPH.append(deskSourceBttn);
      deskProjectTitlePH.append(deskPopupBttnPH);
      deskPopup.append(deskProjectTitlePH);
      const deskTechList = document.createElement('ul');
      deskTechList.setAttribute('id', 'desktopPopupTechPH');
      const deskTechLi1 = document.createElement('li');
      deskTechLi1.classList.add('deskPopupTech');
      deskTechLi1.innerHTML = deskTech1;
      deskTechList.append(deskTechLi1);
      const deskTechLi2 = document.createElement('li');
      deskTechLi2.classList.add('deskPopupTech');
      deskTechLi2.innerHTML = deskTech2;
      deskTechList.append(deskTechLi2);
      const deskTechLi3 = document.createElement('li');
      deskTechLi3.classList.add('deskPopupTech');
      deskTechLi1.innerHTML = deskTech3;
      deskTechList.append(deskTechLi3);
      const deskTechLi4 = document.createElement('li');
      deskTechLi4.classList.add('deskPopupTech');
      deskTechLi4.innerHTML = deskTech4;
      deskTechList.append(deskTechLi4);
      const deskTechLi5 = document.createElement('li');
      deskTechLi5.classList.add('deskPopupTech');
      deskTechLi5.innerHTML = deskTech5;
      deskTechList.append(deskTechLi5);
      const deskTechLi6 = document.createElement('li');
      deskTechLi6.classList.add('deskPopupTech');
      deskTechLi6.innerHTML = deskTech6;
      deskTechList.append(deskTechLi6);
      const deskInfoTxt = document.createElement('p');
      deskInfoTxt.setAttribute('id', 'desktopPopupInfoText');
      deskInfoTxt.innerHTML = projectDesc;
      deskPopup.append(deskInfoTxt);
      const deskOverlay = document.createElement('div');
      deskOverlay.setAttribute('id', 'modalOverlay');
      deskPopPH.append(deskOverlay);
      document.body.append(deskPopPH);
      function closePopupWindowDesk() {
        deskPopPH.remove()
      }
      deskXBttnImg.addEventListener('click', closePopupWindowDesk);
    }
  }
}

if(window.innerWidth <= 768){
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
    document.body.append(popupBg);
  }
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