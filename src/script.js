
// const step = 7 + 1; // шаг, где 7 см - между бегунками и 1 см - ширина бегунка
// const widthKarniz = 150; //ширина карниза в см
// const correction = 1.5; // коррекция отступы от края карниза по 0,75см


getCount = (widthKarniz) => {
   const step = 8; // шаг
   let result = Math.round((widthKarniz) / step);
   console.log(result);
   return render(widthKarniz, result);
}

getCenter = (widthKarniz) => {
   const step = 7 + 1; // шаг
   let result = Math.round((widthKarniz) / step);
   let math;
   if (result % 2) {
      math = result + 1;
   } else {
      math = result
   }
   return render(widthKarniz, math);
}

render = (widthKarniz, result) => {
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
   
   for (item of $inputChk) {
      if (item.checked) {
         if (item.value == 1) {
            getCount($inputValue);
            console.log('1');
         } else {
            getCenter($inputValue);
            console.log('2');
         }         
      }
   }
   
})