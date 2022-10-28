value = prompt('Введите значение');
value_transformed = +value;

if (typeof value_transformed == "number" && !isNaN(value_transformed)) {
    if (value_transformed % 2 === 0) {
        console.log("Чётное число")
    } else {
        console.log("Нечётное число")
    }
} else console.log("Упс, кажется, вы ошиблись")
