# Nauka – siatka 8 + 4

## Cel

Na stronie startowej ułożysz treść główną ze zdjęciem sali w **szerszej kolumnie** oraz panel z godzinami w **węższej**, używając siatki Bootstrapa. Zdjęcie ma pozostać w kolumnie dzięki klasie responsywnej, bez poziomego „wylewania” się obrazu.

## Przydatne (ściąga)

Układ: `container` → `row` → kolumny **`col-12 col-md-8`** oraz **`col-12 col-md-4`**. Na tagu `img` dodaj **`img-fluid`**. Pasek nawigacji i skrypt ustaw jak w zadaniu 1. Nazw plików w folderze `images/` nie zmieniasz — tylko poprawiasz `src`, jeśli przenosisz HTML do `strony/`.

## Wymagania

1. Ustaw tytuły stron: **`Pracownia — start`** i **`Pracownia — o nas`**.
2. Zachowaj hamburger i skrypt Bootstrapa na **obu** stronach.
3. Na starcie w `container` dodaj **`row`** z kolumnami **8 i 4** od breakpointu **`md`** (na mobile kolumny układają się jedna pod drugą).
4. Zdjęcie sali oznacz klasą **`img-fluid`**. W stopce obu stron zostaw autora.

## Przykład

Na szerokim oknie zdjęcie i tekst są po lewej (w szerszej kolumnie), a godziny po prawej. Po zwężeniu okna obie sekcje stoją w pionie. Obraz nie wychodzi poza szerokość kontenera.
