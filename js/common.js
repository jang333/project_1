/* jquery 이용한 현재html에 다른 html 호출방법 */
$( document ).ready( function(){
    $('#headers').load('../common/header.html');
    $('#footers').load('../common/footer.html');
});