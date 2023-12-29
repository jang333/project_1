
// 로그인 창 띄우는 함수
function loginPop(){
    loginBg.style.display = 'block';
    loginWrap.style.display = 'block';
}
// 로그인 창 닫는 함수
function closeBtn(){
    loginBg.style.display = 'none';
    loginWrap.style.display = 'none';
}

// 헤더 푸터 불러오기
$( document ).ready( function(){
    $('#headers').load('../common/header.html');
    $('#footers').load('../common/footer.html');
})

// 관리자 만드는 함수
document.addEventListener('DOMContentLoaded' , function(){
    let userArray = JSON.parse(localStorage.getItem('userArray'));
    let memberNumber = JSON.parse(localStorage.getItem('memberNumber'));

    if(userArray == null){
        userArray = [{
            userNum : 0,
            userId : 'admin',
            userPw : 'admin123',
            userName : '관리자',
        }];
    }
    localStorage.setItem('userArray' , JSON.stringify(userArray));

    // 로그인 유지 함수
    const member = document.querySelector('#member'); 
    const memberServices = document.querySelector('#memberServices');

    let html='';
    
    for(let i = 0; i < userArray.length; i++){
        if(memberNumber == userArray[i].userNum){
            memberServices.style.display = 'none';
            member.style.display = 'block';
            html = `
            <p>
                ${userArray[i].userId} 님
            </p>
            <p>
                point : 0
            </p>
            <div id="memberBtn">
                <button type="button">
                    회원정보 수정
                </button>
                <button type="button">
                    포인트 조회
                </button>
                <button onclick="logoutBtn()" type="button">
                    로그아웃
                </button>
            </div>
            `;
            member.innerHTML = html;
            localStorage.setItem('memberNumber', JSON.stringify(userArray[i].userNum));
            return;
        }
    }

})
