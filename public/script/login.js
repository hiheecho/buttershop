const loginSubmit = document.querySelector('#loginSubmit');
loginSubmit.addEventListener('click',(event)=>{
  event.preventDefault();
  
  //console.log(document.querySelector('#inputId').value);
  console.log(loginForm.id.value);
  //name 속성은 server데이터를 주고받기위한 속성


  fetch('http://localhost:3500/login',{
    method:'POST',
    body:JSON.stringify({id:id.value, pw:pw.value}),
    headers:{
      'Content-type':'application/json;charset=UTF-8'
    }
  }).then(res => res.json())
  .then( json=>{
    console.log( json.success );
    // console.log( json.message );
    
    if( json.success ){
        document.cookie = 'login=ok';
        location.replace('http://localhost:3500/');
        //location.href = 'http://localhost:3500/' ;
          // 리다이렉트 : index.html
    }else{
        alert( json.message );
    }
  })
})

