
const step = 7 + 1; // шаг, где 7 см - между бегунками и 1 см - ширина бегунка
let widthKarniz = 150; //ширина карниза в см
const correction = 1.5; // коррекция отступы от края карниза по 0,75см

getCount = (step, widthKarniz) => {
   let result = Math.round((widthKarniz) / step);
   const $divResult = document.getElementById('div-result');
   console.log($divResult.innerHTML = `<hr/> <p>Ширина карниза ${widthKarniz} см </br> Количество ламелей: ${result} шт</p><hr/>`);
   return result;
}

const $btn = document.getElementById('btn-result');
// console.log($inputValue);
$btn.addEventListener('click', (e) => {
   const $inputValue = document.getElementById('width-karniz');
   let value = $inputValue.value;
   getCount(step, value);
   // console.log(result);
})