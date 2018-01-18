# My Blawg: JS Selectors Practice

Open the included `index.html` in your browser.

# Part One: jQuery

First, use a `<script>` tag in `index.html` to include the minified jQuery file in the `js` folder.

Then, write down how you would select the following DOM objects on "My Blawg". Use only the following methods or attributes:

- `$`
- `eq`
- `html`

---

1. All `<a>` elements on the page
  - `$("a")`
- The first `<a>` element on the page
  - `$("a").eq(0)`
- Using an ID, the `<h1>` at the top of the page
  - `$("#logo")`
- All elements with class `post`
  - `$(".post")`
- The first element with class `post`
  - `$(".post").eq(0)`
- The second element with class `post`
  - `$(".post").eq(1)`
- The HTML content of the first `<a>` element on the page
  - `$("a").eq(0).html()`
- Using a CSS pseudo-selector, the third element with class `post`
  - `$("post:nth-of-type(3)")`
- Using its HTML attribute, the fourth `<img>` on the page
  - `$("img[alt=balloons]")`

# Part Two: Getting and Setting

Using these jQuery methods or attributes, follow the instructions below:

- `$`
- `eq`
- `html`
- `css`
- `prop`

---

1. Get the HTML content of the second `<p>` element on the page
  - `$("p").eq(1).html()`
- Set the HTML content of the second `<p>` to something else weird
  - `$("p").eq(1).html("Phantom Menace was a good movie.")`
- Get the background color of the body
  - `$("body").css("background-color")`
- Set the background color of the body to "burlywood"
  - `$("body").css("background-color", "burlywood")`
- Get the `alt` value of the fourth `<img>` on the page
  - `$("img").eq(3).prop("alt")`
- Set the `alt` value of the fourth `<img>` on the page to "Why is my boat upside down?"
  - `$("img").eq(3).prop("alt", "Why is my boat upside down?")`
