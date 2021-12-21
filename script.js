const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s');

// let date = new Date();

// console.log(date.getSeconds());

function clock() {

    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        second = time.getSeconds() * 6;

    
    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${second}deg)`;

}

clock();

const links = document.querySelectorAll('.tabsItem'),
tabs = document.querySelectorAll('.tabsContentItem');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function (e){
        e.preventDefault();
        removeActiveClass()
        addActiveClass(this, tabs[i])
    })
}

function removeActiveClass() {
    links.forEach(link => {
        link.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
}go


function addActiveClass(element,arr){
    element.classList.add('active')
    arr.classList.add('active')
}

