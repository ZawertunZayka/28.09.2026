# Teoria: witryna na Bootstrapie

Działy [`01_siatka`](../01_siatka/)–[`03_js`](../03_js/) dały Ci osobno siatkę, gotowe komponenty i interakcje oparte na `data-bs-*`. W tym dziale **składasz z nich mini-witrynę**: kilka podstron HTML, jedna spójna mapa folderów, ten sam pasek nawigacji na każdej stronie i jeden wspólny arkusz stylów. **Nie wprowadzasz nowych komponentów Bootstrapa** — używasz wyłącznie tego, czego nauczyłeś się wcześniej, tylko naraz na wielu plikach.

Układu strony nie budujesz własnym Flexboxem, Gridem ani regułami `@media` w `style.css` (to było w [`witryny/02_layout`](../../witryny/02_layout/)). Kolumny i responsywność wynikają z klas `container`, `row` i `col-*`. Kliknięcia w hamburger, modal czy accordion obsługujesz atrybutami `data-bs-*` oraz plikiem `bootstrap.bundle.min.js`, **bez** własnego `addEventListener`.

---

## 1. Mapa folderów (jak w semestrze 1)

Typowa struktura wygląda tak:

```
witryna/
  index.html
  style.css
  images/sala.jpg
  strony/
    o-nas.html
    kontakt.html
```

| Plik | Arkusz stylów | Link do startu | Obraz |
| ---- | ------------- | -------------- | ----- |
| `index.html` | `style.css` | `index.html` | `images/sala.jpg` |
| `strony/kontakt.html` | **`../style.css`** | **`../index.html`** | **`../images/sala.jpg`** |

Link do Bootstrapa z CDN to **adres z internetu** — nigdy nie poprzedzasz go `../`. Źle ustawiasz tylko ścieżki do plików **leżących obok projektu na dysku**: własny CSS, zdjęcia w `images/` oraz odnośniki do `index.html` z podfolderu `strony/`.

Jeśli skopiujesz cały pasek nawigacji z `index.html` do `strony/o-nas.html` **bez** zmiany `href` i `src`, linki do arkusza i do Startu przestaną działać, a pasek może stracić tło z `.tlo-nav`.

Klasę `.tlo-nav` zostawiasz w `style.css` (granat szkoły). Nie malujesz paska własnym Flexboxem w CSS — oceniane są klasy `navbar` z Bootstrapa.

**Po co to jest.** Spójna mapa folderów sprawia, że każda podstrona ładuje ten sam wygląd i że użytkownik zawsze trafia w dobre miejsce po kliknięciu logo lub „Start”, niezależnie od tego, w którym pliku się znajduje.

**Typowa pomyłka.** W podstronie zostawienie `href="style.css"` zamiast `../style.css` — wtedy przeglądarka szuka arkusza w `strony/style.css`, pasek traci Bootstrap i tło, a strona wygląda jak „goły” HTML.

---

## 2. Pasek nawigacji na każdej stronie

Hamburger i zwijanie menu omawialiśmy w [`03_js`](../03_js/). Na witrynie stosujesz ten sam wzorzec: `navbar-expand-md`, przycisk `navbar-toggler`, blok `collapse navbar-collapse` z `id="menu"` oraz skrypt **`bootstrap.bundle.min.js` na końcu każdego pliku HTML**, nie tylko na starcie.

Przykład trzech pozycji menu ze strony głównej:

```html
<a class="nav-link" href="index.html">Start</a>
<a class="nav-link" href="strony/o-nas.html">O nas</a>
<a class="nav-link" href="strony/kontakt.html">Kontakt</a>
```

Z pliku `strony/o-nas.html` podajesz **te same trzy etykiety**, ale Start prowadzi do `../index.html`, a Kontakt do `kontakt.html`, bo oba pliki leżą obok siebie w folderze `strony/`.

Na stronie, na której użytkownik właśnie jest, dodajesz klasę `active` na odpowiednim `nav-link`, żeby w menu widać było bieżącą sekcję.

**Po co to jest.** Jeden wzorzec paska na wszystkich podstronach daje spójne doświadczenie: nawigacja zawsze w tym samym miejscu, a na telefonie menu zwija się i rozwija po kliknięciu hamburgera.

**Typowa pomyłka.** Użycie `navbar-expand` z działu 02 (bez `-md` i bez hamburgera) albo hamburgera **bez** skryptu na podstronie — menu znika na wąskim ekranie albo przycisk nic nie robi.

---

## 3. Co gdzie stosujesz (nie mieszaj narzędzi)

| Region strony | Bootstrap | Czego nie używasz w tym dziale |
| ------------- | --------- | ------------------------------ |
| Kolumny na starcie (treść + boczny panel) | `container` → `row` → `col-12 col-md-8` / `col-md-4` | `display: flex` lub Grid w `style.css` |
| Trzy kafelki obok siebie | `col-12 col-md-4` z `.card` wewnątrz każdej kolumny | własna siatka CSS |
| Formularz kontaktowy | `form-label`, `form-control`, `form-select`, `form-check` | klasa `.pole` z [`css/08_formularze`](../../css/08_formularze/) |
| Godziny lub regulamin „nad stroną” | komponent `modal` + `data-bs-toggle` / `data-bs-target` | `position: fixed` w CSS |
| Pytania i odpowiedzi | `accordion` z `data-bs-parent` | dwa akapity jeden pod drugim |
| Zdjęcie sali | `img-fluid` | sztywna szerokość w pikselach w CSS |

Przyciski akcji zostaw w wariancie `btn-primary` (niebieski Bootstrapa) — na sprawdzianie i w zadaniach tak ma zostać.

**Po co to jest.** Tabela przypomina, że witryna to **składanie** znanych klocków, a nie powrót do ręcznego układu z wcześniejszych modułów CSS.

**Typowa pomyłka.** Wstawienie trzech elementów `.card` bezpośrednio pod `body`, bez `row` i kolumn — na szerokim monitorze karty układają się w pionie zamiast w jednym rzędzie.

---

## 4. Zdjęcie responsywne

```html
<img class="img-fluid" src="images/sala.jpg" alt="Sala komputerowa 12" width="900" height="240" />
```

Z podstrony w folderze `strony/` atrybut `src` wskazuje na `../images/sala.jpg`. Klasa `img-fluid` sprawia, że obraz nie wychodzi poza szerokość kolumny (`max-width: 100%`). Nazw plików w folderze `images/` **nie zmieniasz** — tylko poprawiasz ścieżkę względem miejsca, w którym stoi dany HTML.

**Po co to jest.** Zdjęcie na starcie ma uzupełniać treść w kolumnie siatki, a na wąskim telefonie ma się skalować razem z układem, bez poziomego przewijania.

**Typowa pomyłka.** Skopiowanie tagu `img` z `index.html` do podstrony bez zmiany `src` na `../images/...` — obraz się nie ładuje, choć na starcie działał poprawnie.

---

## 5. Checklist przed oddaniem

Przed wysłaniem projektu przejdź poniższą listę — każdy punkt to typowy warunek zaliczenia witryny.

- Z pliku w `strony/` w `<head>` widzisz link do **`../style.css`**, a pasek ma te same klasy `navbar`, co na starcie.
- Tag ze skryptem `bootstrap.bundle.min.js` jest **na każdej** podstronie, tuż przed `</body>`.
- Pasek używa **`navbar-expand-md`**, przycisku `navbar-toggler` i bloku `#menu`, a nie samego `navbar-expand` z działu 02.
- Karty stoją w **`row`** z kolumnami `col-md-4`, a nie jako trzy osobne bloki jeden pod drugim na szerokim oknie.
- Pola formularza mają **`form-control`**, a nie klasę `.pole` z modułu czystego CSS.
- Modal ma strukturę `modal` → `modal-dialog` → `modal-content`; accordion ma wspólny **`data-bs-parent`** na kontenerze.
- W `style.css` zostaje tylko **`.tlo-nav`** (i ewentualnie komentarze) — bez Flex/Grid/`@media` do układu strony.

**Po co to jest.** Checklist zbiera w jednym miejscu wymagania, które najczęściej decydują o punktach na sprawdzianie.

**Typowa pomyłka.** Poprawienie tylko `index.html` i zapomnienie o skrypcie lub ścieżkach `../` na jednej podstronie — wtedy na tej stronie modal, hamburger albo style „magicznie” przestają działać.
