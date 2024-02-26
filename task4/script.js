const userText = prompt('Введите текст');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в селекторе "a" был изменен на: ', userText);