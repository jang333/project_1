// 헤더 푸터 불러오기
// $( document ).ready( function(){
//     $('#headers').load('../common/header.html');
//     $('#footers').load('../common/footer.html');
// });

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#headers').innerHTML = `
    <div id="header">
    <div id="headerWrap">
        <div id="leftHeader">
            <h1 onclick="location.href='/index.html'">
                <div class="logo">
                    logo
                </div>
            </h1>
            <ul id="gnv">
                <li>
                    <a href="../sub/floor.html">
                        층별안내
                    </a>
                </li>
                <li>
                    <a href="javascript:alert('준비중입니다.')">
                        공지사항
                    </a>
                </li>
                <li>
                    <a href="../sub/event.html">
                        이벤트
                    </a>
                </li>
                <li>
                    <a href="../sub/customer_main.html">
                        고객센터
                    </a>
                </li>
                <li>
                    <a href="../sub/onload.html">
                        오시는길·주차장
                    </a>
                </li>
            </ul>
        </div>
        <div id="rightHeader">
            <ul id="memberServices">
                <li>
                    <a href="#" onclick="loginPop()" id="loginBtn">
                        로그인
                    </a>
                </li>
                <li>
                    <a href="../sub/join.html">
                        회원가입
                    </a>
                </li>
                <li>
                    <a href="#">
                        회원관리
                    </a>
                </li>
            </ul>
        </div>
        <div id="member" style="display: none;">

        </div>

        
        <button id="search">
            <span>검색</span>
            <img src="../img/search.png"/>
        </button>
    </div>
</div>
<div id="loginBg">
    <div id="loginWrap">
        <h3>로그인</h3>
        <button id="closeBtn" onclick="closeBtn()">
            <img src="../img/closeBtn.png" style="width: 40px;"/>
        </button>
        <div id="loginBox">
            <form>
                <p>아이디</p>
                <input id="putId" type="text" placeholder="아이디"/>
                <p>비밀번호</p>
                <input id="putPw" type="password" placeholder="비밀번호"/>
                <ul id="loginList">
                    <li>
                        <a href="#">
                            아이디 찾기
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            비밀번호 찾기
                        </a>
                    </li>
                    <li>
                        <a href="../sub/join.html">
                            회원가입
                        </a>
                    </li>
                </ul>
                <input onclick="loginBtn()" id="login" type="button" value="로그인"/>
                <input id="fastLogin" type="button" value="빠른 로그인"/>
                <input id="otpLogin" type="button" value="OTP 인증번호 로그인"/>
            </form>
        </div>
    </div>
</div>
    `
});