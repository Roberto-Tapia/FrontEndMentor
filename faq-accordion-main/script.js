const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const para = document.querySelectorAll('.para');

plus.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        let filteredPara = [...para].filter(paragraph => !paragraph.classList.contains('hidden'));
        let filteredMinus = [...minus].filter(min => !min.classList.contains('hidden'))
        let filteredPlus = [...plus].filter(plu => plu.classList.contains('hidden'))
        turnOffPara(filteredPara, filteredMinus, filteredPlus)


        plus[index].classList.toggle('hidden');
        minus[index].classList.toggle('hidden');    
        para[index].classList.toggle('hidden');
    });
});

minus.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        plus[index].classList.toggle('hidden');
        minus[index].classList.toggle('hidden');
        para[index].classList.toggle('hidden');
    });
});

function turnOffPara (filteredPara, filteredMinus, filteredPlus) {
    for(let i = 0; i < filteredPara.length; i++){
        filteredPara[i].classList.add('hidden')
    }

    for(let i = 0; i < filteredMinus.length; i++) {
        filteredMinus[i].classList.toggle('hidden')
    }

    for(let i = 0; i < filteredPlus.length; i++) {
        filteredPlus[i].classList.toggle('hidden')
    }  
}