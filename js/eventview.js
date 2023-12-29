/* jquery 이용한 현재html에 다른 html 호출방법 */
$( document ).ready( function(){
    $('#headers').load('../common/header.html');
    $('#footers').load('../common/footer.html');
});


document.addEventListener('DOMContentLoaded', function(){view()});

function view(){
    //누구를
    const eNum = JSON.parse(localStorage.getItem('eventNumber'));
    const eventList = JSON.parse(localStorage.getItem('eventList'));

    //어디에
    const eventView = document.querySelector('.eventView');

    //무엇을
    html ='';
    
    for(let i = 0 ; i <eventList.length ; i ++){
        if(eNum == eventList[i].eNum ){
            html += `<div class ="eName">
                        <h3>${eventList[i].eName}</h3>
                        <span>기간 : ${eventList[i].sDate} ~ ${eventList[i].eDate}</span>
                    </div>
                    <img src="${eventList[i].eImg}"> 
                    <div>${eventList[i].eContent}</div>`
                    
        }   
    }
    //출력
    eventView.innerHTML=html;
}

