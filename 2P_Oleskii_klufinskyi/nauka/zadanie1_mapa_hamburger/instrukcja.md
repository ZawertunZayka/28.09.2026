# Nauka – mapa i hamburger

## Cel

Zbudujesz **dwie strony** w poprawnej mapie folderów (`index.html` i podstronę w `strony/`) z **tym samym paskiem nawigacji**, który na wąskim oknie zwija menu za hamburgerem. Na obu plikach HTML podłączysz skrypt Bootstrapa, żeby przycisk zwijania działał.

## Przydatne (ściąga)

Struktura: `index.html`, `style.css` oraz `strony/o-nas.html`. Z pliku O nas link do arkusza to `../style.css`, a do Startu — `../index.html`. Hamburger budujesz jak w [`03_js`](../../../03_js/): `navbar-expand-md`, `navbar-toggler` z `data-bs-target="#menu"`, blok `collapse navbar-collapse` z `id="menu"` oraz `bootstrap.bundle.min.js` przed `</body>`.

## Wymagania

1. Ustaw w `<title>` odpowiednio tekst **`Pracownia — start`** na stronie głównej oraz **`Pracownia — o nas`** na podstronie.
2. Zbuduj pasek z hamburgerem, `navbar-brand` z tekstem **Pracownia 12** oraz dwoma linkami menu: **Start** i **O nas**.
3. W pliku `strony/o-nas.html` podłącz arkusz stylów i link do Startu przez prefiks **`../`**.
4. Wstaw `bootstrap.bundle.min.js` na **obu** stronach. W stopce zostaw autora. Klasy **`tlo-nav`** w CSS nie usuwaj.

## Przykład

Po otwarciu obu plików w przeglądarce widzisz ten sam granatowy pasek. Na wąskim oknie zostaje logo i ikona hamburgera; klik rozwija i chowa linki. Przejście Start ↔ O nas działa w obie strony.
