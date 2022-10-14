$('.tab-btns>li>a').on('click',function(event){
    event.preventDefault();
    console.log($(this).parent().index());
    let num = $(this).parent().index();
    $('.tab-btns>li>a').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(num).addClass('active')
})

$('.tab-btns>li:nth-child(1)>a').trigger('click');

let gnbAlinks = document.querySelectorAll('.gnb2>ul>li>a');
    gnbAlinks.forEach((gnbAlink) => {
    gnbAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })

let fnqAlinks = document.querySelectorAll('.tab-content>ul>li>a');
    fnqAlinks.forEach((fnqAlink) => {
    fnqAlink.addEventListener('click', (event)=>{
          event.preventDefault();
        })
      })

let moreAlinks = document.querySelectorAll('.more>a');
    moreAlinks.forEach((moreAlinks) => {
    moreAlinks.addEventListener('click', (event)=>{
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

