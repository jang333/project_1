document.addEventListener('DOMContentLoaded' , function(){
    
    // 로그인창,배경,로그인버튼 불러오기
    const loginBg = document.querySelector('#loginBg');
    const loginWrap = document.querySelector('#loginWrap');
    const loginBtn = document.querySelector('#loginBtn');
    const closeBtn = document.querySelector('#closeBtn');

    // 로그인 창 띄우는 함수
    loginBtn.addEventListener('click' , function(){
        loginBg.style.display = 'block';
        loginWrap.style.display = 'block';
    })

    // 로그인 창 닫는 함수
    closeBtn.addEventListener('click' , function(){
        loginBg.style.display = 'none';
        loginWrap.style.display = 'none';
    })
})