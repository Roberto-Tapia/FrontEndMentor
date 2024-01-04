// const plus = document.querySelectorAll('.plus')
// const minus = document.querySelectorAll('.minus')
// const para = document.querySelectorAll('.para')

// let plusArray = Array.from(plus)
// let minusArray = Array.from(minus)

// plus.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//         plus[index].classList.toggle('hidden')
//         minus[index].classList.toggle('hidden')
//         para[index].classList.toggle('hidden')
//     });
// });

// minus.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//         plus[index].classList.toggle('hidden')
//         minus[index].classList.toggle('hidden')
//         para[index].classList.toggle('hidden')
//     });
// });

const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const para = document.querySelectorAll('.para');

let filteredPara
let filteredMinus
let filteredPlus

plus.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        filteredPara = [...para].filter(paragraph => !paragraph.classList.contains('hidden'));
        turnOffPara()
        filteredMinus = [...minus].filter(min => !min.classList.contains('hidden'))
        turnOffMinus()
        filteredPlus = [...plus].filter(plu => plu.classList.contains('hidden'))
        turnOffPlus()


        plus[index].classList.toggle('hidden');
        minus[index].classList.toggle('hidden');    
        para[index].classList.toggle('hidden');
    });
});


console.log(filteredPara)


function turnOffPara () {
    for(let i = 0; i < filteredPara.length; i++){
        filteredPara[i].classList.add('hidden')
    }
}

function turnOffMinus () {
    for(let i = 0; i < filteredMinus.length; i++) {
        filteredMinus[i].classList.toggle('hidden')
    }
}

function turnOffPlus () {
    for(let i = 0; i < filteredPlus.length; i++) {
        filteredPlus[i].classList.toggle('hidden')
    }   
}


// function logVisibleParagraphs() {
//     let filtered = [...para].filter(paragraph => !paragraph.classList.contains('hidden'));
// }

minus.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        plus[index].classList.toggle('hidden');
        minus[index].classList.toggle('hidden');
        para[index].classList.toggle('hidden');
    });
});




// para.forEach((elem, index) => {
//     let filtered = para.filter(paragraph => !paragraph.classList.contains('hidden'))
//     elem.addEventListener('click', () => {
//         plus[index].classList.toggle('hidden');
//         minus[index].classList.toggle('hidden');
//         para[index].classList.toggle('hidden');
//         console.log(filtered)
//     });
// });


// function hideAllMinus() {
//     minus.forEach(element => {
//         element.classList.add('hidden');
//     });
// }

// function hideAllPlus() {
//     plus.forEach(element => {
//         element.classList.add('hidden');
//     });
// }
