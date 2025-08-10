/*document.getElementById('burger-toggle').addEventListener('change', function () {
  const isChecked = this.checked;
  document.querySelector('.textbox').style.left = isChecked ? '-400px' : '0px';
  document.querySelector('.menutextbox').style.left = isChecked ? '19px' : '-300px';
})*/
const burgerToggle = document.getElementById('burger-toggle');
const textbox = document.querySelector('.textbox');
const menu = document.querySelector('.menutextbox');
textbox.style.opacity = '1';
burgerToggle.addEventListener('change', function () {
  const isChecked = this.checked;

  if (isChecked) {
    // Сначала скрываем textbox
    textbox.style.opacity = '0';

    // Ждём, пока он исчезнет (примерно 500 мс), и только потом показываем меню
    setTimeout(() => {
      textbox.style.left = '-400px';
      menu.style.left = '19px';
    }, 500);
  } else {
    // Сначала прячем меню
    menu.style.left = '-300px';

    // Через 500 мс — показываем textbox
    setTimeout(() => {
      textbox.style.left = '0px';
      textbox.style.opacity = '1';
    }, 500);
  }
});