const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn= document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn= document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
let action = '+'


plusBtn.onclick = function(){
    action = '+'
}

minusBtn.onclick = function(){
    action = '-'
}

multiplicationBtn.onclick = function(){
    action = '*'
}

divisionBtn.onclick = function(){
    action = '/'
}

function printResult(res){
    if(res<0){
        result.style.color = 'red'
    }else{
        result.style.color = 'green'
    }
    result.textContent = res
}

function computeNumbersWithAction(input1, input2, actionSymvol){
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    if(actionSymvol == '+'){
        return num1+num2
    } else if(actionSymvol == '-'){
        return num1-num2
    }
    else if(actionSymvol == '*'){
        return num1 * num2
    }
    else if(actionSymvol == '/'){
        return num1 / num2
    }
}
submitBtn.onclick = function(){
   const result = computeNumbersWithAction(input1, input2, action)
   printResult(result)
}


document.getElementById("submit").addEventListener("click", function() {
    var resultImage = document.createElement("img");
    resultImage.src = "know.png"; // Замените ссылку на ваше изображение
    resultImage.alt = "Result Image";
    var resultContainer = document.getElementById("result-image-container");
    resultContainer.innerHTML = ""; // Очистим контейнер от предыдущего изображения (если оно было)
    resultContainer.appendChild(resultImage); // Добавим новое изображение

    // Начальное значение прозрачности
    resultImage.style.opacity = 0;
    var opacity = 0;

    // Увеличиваем прозрачность каждые 10 миллисекунд
    var fadeInInterval = setInterval(function() {
        opacity += 0.01;
        resultImage.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInInterval); // Остановить интервал, когда прозрачность достигнет 1
        }
    }, 10);
});


// $("#submit").click(function() {
//     var resultImage = $("<img>");
//     resultImage.attr("know.png"); // Замените ссылку на ваше изображение
//     resultImage.attr("alt", "Result Image");
//     var resultContainer = $("#result-image-container");
//     resultContainer.html(""); // Очистим контейнер от предыдущего изображения (если оно было)
//     resultImage.hide(); // Сначала скрываем изображение
//     resultContainer.append(resultImage); // Добавляем изображение в контейнер
//     resultImage.fadeIn("slow"); // Плавно отображаем изображение
// });

