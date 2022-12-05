'use strict'

const range = (start, stop, step = 1) =>
   Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
let a = [6, 14, 24, 33, 42, 51]; // где числа в двумерном массиве меньше 7
let b = 21; // старт размера карниза
let lamli = 3; // старт количества ламелей
let d = []; // для создания двумерного массива

for (let i = 0; i < range(1, 61).length; i++) {
   d.push(range(b, b + 8));
   b += 8;
   if (a.includes(i)) {
      d.push(range(b, b + 7));
      b += 7;
   }
}

// console.log(d);

const searchIndexArr = (widthKarniz) => {
   let result;
   for(let i = 0; i < d.length; i++) {
      if (d[i].includes(widthKarniz)) {
         result = i + lamli;
         // console.log(result);
         break;
      }
   }
   return result;
}

const getLeftRight = (widthKarniz) => {
   let result = searchIndexArr(widthKarniz);
   return render(widthKarniz, result);
}

const getCenter = (widthKarniz) => {
   let result = searchIndexArr(widthKarniz);
   let math = result % 2 ? result + 1 : result;
   return render(widthKarniz, math);
}

const render = (widthKarniz, result) => {
   const $divResult = document.getElementById('div-result');
   $divResult.innerHTML = `
   <hr/>
   <p>Ширина карниза <strong>${widthKarniz} см</strong></p>
   <p>Количество ламелей: <strong>${result} шт</strong></p>
   <hr/>`;
}

const $btn = document.getElementById('btn-result');
$btn.addEventListener('click', () => {
   const $inputChk = document.querySelectorAll('input[type=radio]');
   const $inputValue = document.getElementById('width-karniz').value;
   // console.log(Number($inputValue), 'dawdwa');

   for (let item of $inputChk) {
      if (item.checked) {
         if (item.value === '1') {
            getLeftRight(Number($inputValue));
            // console.log(item.value);
         } else {
            getCenter(Number($inputValue));
            // console.log(item.value);
         }
      }
   }

})
