localStorage.setItem('floorNumber', 5);
document.addEventListener('DOMContentLoaded',function(){
    var floorNumber = JSON.parse(localStorage.getItem('floorNumber'));
    floorNavIn(floorNumber);
    floorBrandIn(floorNumber)
});

function floorNavIn(floorNumber){
    console.log(floorNumber)
    const floorNav = document.querySelector('.floorNav')
    const floorArray = JSON.parse(localStorage.getItem('floorArray'));
    let html = ``;
    for(let i = floorArray.length-1; i>=0; i--){
        let floor = floorArray[i];
        html += `
            <li class='${floor.floorNumber == floorNumber ? 'current': ''}' onclick='floorBrandIn(${floor.floorNumber})'>${floor.floorName}F</li>
        `;
    }

    floorNav.innerHTML = html;
}

function floorBrandIn(floorNumber){
    const floorCategoryArray = JSON.parse(localStorage.getItem('floorCategoryArray'));
    let floorContent = document.querySelector('.floorContent');
    localStorage.setItem('floorNumber', floorNumber);
    floorNavIn(floorNumber)

    let html = ``;
    for(let i = 0; i<floorCategoryArray.length; i++){
        var floorCategory = floorCategoryArray[i]
        if(floorCategory.floorNumber == floorNumber){
            html += `
                <div class="section">
                    <h4>${floorCategory.floorCategoryName}</h4>
                    ${floorBrandIn2(floorCategory.floorCategoryNumber)}
                </div>
            `
        }
    }
    floorContent.innerHTML = html;
}

function floorBrandIn2(floorCategoryNumber){
    const floorBrandArray = JSON.parse(localStorage.getItem('floorBrandArray'));
    let html = ``;
    for(let i =0; i<floorBrandArray.length;i++){
        const floorBrand = floorBrandArray[i]
        if(floorBrand.floorCategoryNumber == floorCategoryNumber){
            html += `
                <p><span class="brand">${floorBrand.floorBrandName}</span><span class="Tel">${floorBrand.floorBrandTel}</span></p>
            `
        }
    }
    return html;
}