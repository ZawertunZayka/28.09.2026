# Nauka – modal na Kontakt

## Cel

Na stronie Kontakt dodasz **przycisk otwierający okno modalne** z godzinami otwarcia, bez usuwania istniejącego formularza. Okno zamkniesz krzyżykiem Bootstrapa, używając atrybutów `data-bs-*`, bez własnego JavaScriptu.

## Przydatne (ściąga)

Przycisk: **`data-bs-toggle="modal"`** i **`data-bs-target="#okno"`**. Struktura okna: **`modal fade`** → **`modal-dialog`** → **`modal-content`**. Zamknięcie: **`btn-close`** z **`data-bs-dismiss="modal"`**.

## Wymagania

1. Zachowaj **trzy strony** oraz hamburger i skrypt tak jak w **zadaniu 4**.
2. Tytuły stron (`<title>`) pozostają jak w zadaniu 4.
3. Na Kontakt zostaw formularz i dodaj przycisk **„Godziny”**, który otwiera modal o **`id="okno"`** z treścią godzin.
4. W nagłówku modala umieść **`btn-close`**, który zamyka okno. Autora zostaw na wszystkich stronach.

## Przykład

Po kliknięciu „Godziny” strona się przyciemnia i na wierzchu widać kartę z godzinami. Krzyżyk zamyka modal, a pola formularza pod spodem nadal są dostępne.
