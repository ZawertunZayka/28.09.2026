// Pobranie elementów drzewa DOM
const baner = document.querySelector('#baner-promocji');
const btnAktywuj = document.querySelector('#btn-aktywuj');
const btnDezaktywuj = document.querySelector('#btn-dezaktywuj');
const komunikat = document.querySelector('#komunikat-status');

btnAktywuj.addEventListener('click', () => {
  baner.classList.add('aktywny');
  komunikat.textContent = 'Wyróżnienie promocyjne zostało włączone.';
});

btnDezaktywuj.addEventListener('click', () => {
  baner.classList.remove('aktywny');
  komunikat.textContent = 'Wyróżnienie promocyjne zostało wyłączone.';
});
