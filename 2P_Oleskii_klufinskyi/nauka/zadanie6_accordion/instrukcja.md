# Nauka – accordion na O nas

## Cel

Na stronie **O nas** umieścisz **dwie składane sekcje** (accordion Bootstrapa). Po otwarciu drugiej sekcji pierwsza ma się automatycznie zwinąć dzięki wspólnemu `data-bs-parent`.

## Przydatne (ściąga)

Kontener: **`accordion`** z unikalnym **`id`**. Elementy: **`accordion-item`**, nagłówki z **`accordion-button`**, panele **`accordion-collapse`**. Pierwszy panel startuje z klasą **`show`**, drugi przycisk ma **`collapsed`**. Na panelach ustaw **`data-bs-parent`** wskazujący na `id` całego accordionu.

## Wymagania

1. Zachowaj **trzy strony** oraz hamburger i skrypt jak w **zadaniu 4**.
2. Tytuły stron pozostają jak w zadaniu 4.
3. Na O nas dodaj accordion o **`id="faq"`** z panelami **Godziny** i **Dojazd**.
4. Przy starcie **pierwszy panel jest rozwinięty**, drugi zwinięty, oba korzystają z tego samego rodzica accordionu. Autora zostaw na wszystkich stronach.

## Przykład

Po wejściu na O nas od razu widać treść sekcji Godziny. Klik nagłówka Dojazd rozwija drugi panel i chowa pierwszy — nie widać obu treści naraz.
