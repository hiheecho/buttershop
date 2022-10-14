let gnbAlinks = document.querySelectorAll('.gnb2>ul>li>a');
    gnbAlinks.forEach((gnbAlink) => {
    gnbAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })

let slideAlinks = document.querySelectorAll('.swiper-slide>a');
  slideAlinks.forEach((slideAlink) => {
  slideAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })

let seasonAlinks = document.querySelectorAll('.seasonStory>a');
  seasonAlinks.forEach((seasonAlink) => {
  seasonAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })

let dailyAlinks = document.querySelectorAll('.dailyButter>a');
  dailyAlinks.forEach((dailyAlink) => {
  dailyAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })

let itemAlinks = document.querySelectorAll('.items>a');
  itemAlinks.forEach((itemAlink) => {
  itemAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })
let MoreAlinks = document.querySelectorAll('.productMore>a');
  MoreAlinks.forEach((MoreAlink) => {
  MoreAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })
let snsAlinks = document.querySelectorAll('.snsItems>ul>li>a');
  snsAlinks.forEach((snsAlink) => {
  snsAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })
let footerAlinks = document.querySelectorAll('.footerNav>ul>li>a');
  footerAlinks.forEach((footerAlink) => {
  footerAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })
let guideAlinks = document.querySelectorAll('.serviceGuide>ul>li:nth-of-type(2)>a, .serviceGuide>ul>li:nth-of-type(3)>a');
  guideAlinks.forEach((guideAlink) => {
  guideAlink.addEventListener('click', (event)=>{
                event.preventDefault();
              })
            })

const loginBtn = document.querySelector('#loginBtn');
const loginRegister = document.querySelector('#loginRegister');
const logoutBtn = document.querySelector('#logoutBtn');

console.log(document.cookie);
//로그인 된 경우 저장된 cookie 사용
if(document.cookie){
    loginBtn.classList.add('hide');
    loginRegister.classList.add('hide');
    logoutBtn.classList.remove('hide');
} else {
  logoutBtn.classList.add('hide');
}

logoutBtn.addEventListener('click',()=>{
  document.cookie = "login=ok; max-age=0";
  loginBtn.classList.remove('hide');
    loginRegister.classList.remove('hide');
    logoutBtn.classList.add('hide');
})

let seasonTitle = document.querySelector(".seasonStory>h1")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;
  
  if(scrollValue > 150){
    seasonTitle.style.animation = "topSlide 2s ease-out"
  } else {
    seasonTitle.style.animation = "topSlideDelete 2s ease-out forwards"
  };
});
let seasonImage1 = document.querySelector(".seasonStory>a>#season1")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;
  
  if(scrollValue > 400){
    seasonImage1.style.animation = "leftSlide 2s ease-out"
  } else {
    seasonImage1.style.animation = "leftSlideDelete 2s ease-out forwards"
  };
});
let seasonImage2 = document.querySelector(".seasonStory #season2")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;
  
  if(scrollValue > 500){
    seasonImage2.style.animation = "rightSlide 2s ease-out"
  } else {
    seasonImage2.style.animation = "rightSlideDelete 2s ease-out forwards"
  };
});

let dailyTitle = document.querySelector(".butterProduct>h1")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;
  
  if(scrollValue > 1200){
    dailyTitle.style.animation = "topSlide 2s ease-out"
  } else {
    dailyTitle.style.animation = "topSlideDelete 2s ease-out forwards"
  };
});
let dailySlogan= document.querySelector(".butterProduct>h2")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;
  
  if(scrollValue > 2100){
    dailySlogan.style.animation = "topSlide 2s ease-out"
  } else {
    dailySlogan.style.animation = "topSlideDelete 2s ease-out forwards"
  };
});

let dailyImage = document.querySelector(".dailyButter #dailyButter")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;
  
  if(scrollValue > 1400){
    dailyImage.style.animation = "rightSlide 2s ease-out"
  } else {
    dailyImage.style.animation = "rightSlideDelete 2s ease-out forwards"
  };
});

let newsTitle= document.querySelector(".section3>h1")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;

  if(scrollValue > 4000){
    newsTitle.style.animation = "topSlide 2s ease-out"
  } else {
    newsTitle.style.animation = "topSlideDelete 2s ease-out forwards"
  };
});
let newsVideo1= document.querySelector(".butterNews #video1")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;

  if(scrollValue > 4000){
    newsVideo1.style.animation = "leftSlide 2s ease-out"
  } else {
    newsVideo1.style.animation = "leftSlideDelete 2s ease-out forwards"
  };
});
let newsVideo2= document.querySelector(".butterNews #video2")
  window.addEventListener('scroll',function(){
  let scrollValue = window.scrollY;

  if(scrollValue > 4000){
    newsVideo2.style.animation = "rightSlide 2s ease-out"
  } else {
    newsVideo2.style.animation = "rightSlideDelete 2s ease-out forwards"
  };
});
