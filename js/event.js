// 목록 객체화


//HTML 호출
document.addEventListener('DOMContentLoaded',function(){
    eventList();
})

//이벤트 목록
function eventList(){
    let eventArray = JSON.parse(localStorage.getItem('eventList'));
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
