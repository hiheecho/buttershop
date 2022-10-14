$('.accordion-title').on('click', function(){
    $('.accordion-title').removeClass('active');
    $(this).addClass('active');

    $('.accordion-content').removeClass('active');
    $(this).next().addClass('active');
})

$('.accordion-title').eq(0).trigger('click');

let gnbAlinks = document.querySelectorAll('.gnb2>ul>li>a');
    gnbAlinks.forEach((gnbAlink) => {
    gnbAlink.addEventListener('click', (event)=>{
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

