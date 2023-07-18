// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let i = 0;
    return {
        increment: () => ++i,
        decrement: () => --i
    }
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());

const counter1 = createCounter();
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

const rootElement = document.querySelector('#root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

function findElementByClass(item, searchClass) {
    if (item.className == searchClass) {
        return item
    } else {
        const childElement = item.children;
        for (let i = 0; i < childElement.length; i++) {
            const childItem = findElementByClass(childElement[i], searchClass);
            if (childItem !== null && childItem.className == searchClass) {
                return childItem
            } 
        }
    }
    return null
}
