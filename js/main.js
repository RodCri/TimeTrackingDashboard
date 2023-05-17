import data from '../data.json' assert {type: 'json'};

let bgColors = [
  'hsl(15, 100%, 70%)',
  'hsl(195, 74%, 62%)',
  'hsl(348, 100%, 68%)',
  'hsl(145, 58%, 55%)',
  'hsl(264, 64%, 52%)',
  'hsl(43, 84%, 65%)'
  ]

let dataDayli = data.map(item => item.timeframes.daily);
let dataWeekly = data.map(item => item.timeframes.weekly);
let dataMonthly = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector('#dayli');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let cards = document.querySelector('.cards');

drawCards(dataDayli);

dailyBtn.addEventListener('click',()=>{
  drawCards(dataDayli);
  removeActive();
  dailyBtn.classList.toggle('active');
});

weeklyBtn.addEventListener('click',()=>{
  drawCards(dataWeekly);
  removeActive();
  weeklyBtn.classList.toggle('active');
});

monthlyBtn.addEventListener('click',()=>{
  drawCards(dataMonthly);
  removeActive();
  monthlyBtn.classList.toggle('active');
});

function drawCards(array){
  cards.innerHTML = '';
  array.forEach((element, index) =>{
    cards.innerHTML += `
    <div class="card" style="background-color: ${bgColors[index]};">
    <img src="/../images/icon-${data[index].title}.svg" alt="" class="card__bg">
      <div class="card__info">
        <header class="info__header">
          <p class="header__title">${data[index].title}</p>
          <p class="header__points"><span class="point"></span><span class="point"></span><span class="point"></span></p>
        </header>
        <section class="info__data">
          <p class="data__current">${element.current}hrs</p>
          <p class="data__previous">Last Week - ${element.previous}hrs</p>
        </section>
      </div>
    </div>`;
  });
}
function removeActive(){
  weeklyBtn.classList.remove('active');
  monthlyBtn.classList.remove('active');
  dailyBtn.classList.remove('active');
}