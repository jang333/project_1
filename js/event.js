// 목록 객체화
let eventArray = [
    {
        eNum : 1,
        eName : '앱 신년 이벤트',
        sDate : '2023.12.25',
        sDate : '2024.01.07',
        eImg : '/img/event/event_1.png',
        eContent : '앱 신년 이벤트 도전해보세요!'
    },
    {
        eNum : 2,
        eName : '그린프렌즈마일리지 오픈 안내',
        eDate : '2023.12.21 ~ 2024.12.31',
        eImg : '/img/event/event_1.png',
        eContent : '마일리지를 모아보세요!'
    },
    {
        eNum : 3,
        eName : '12월 WELCOME COUPON GIFT',
        eDate : '2023.12.01 ~ 2023.12.31',
        eImg : '/img/event/event_1.png',
        eContent : '쿠폰 받아가세요!'
    },

]

//HTML 호출
document.addEventListener('DOMContentLoaded',function(){
    eventList();
})

//이벤트 목록
function eventList(){
    let eventArray = JSON.parse(localStorage.getItem('eventList'));
    console.log(eventArray);
    //1.어디에
    const eList = document.querySelector('#eList');

    //2.무엇을
    html = ``;    

    for(let i = eventArray.length-1 ; i>=0 ; i--){
        const e = eventArray[i]
        html+=`<a href="#" onclick='eventpage(${e.eNum})'>
                    <ul class="event">
                        <img class="eImge" src="${e.eImg}"/>
                        <li class="eName">${e.eName}</li>
                        <li class="eDate">기간 : ${e.sDate}~${e.eDate}</li>
                    </ul>
                </a> `
    }
    
    //3.출력
    eList.innerHTML=html;

}

// 이벤트 뷰페이지 이동 함수
function eventpage(eNum){
    localStorage.setItem('eventNumber',eNum)
    location.href = 'eventview.html'
}
