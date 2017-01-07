# morseJS
Translate any text in browsers from an input to morse code with Javascript

## How to use

First, import the contents of the file morse.js into our html:

```html
<script src="/morse.js"></script>
```

Then, once imported just create an instance of the Morse object to be able to use it as follows:

```js
var foo = new Morse('font','button')
```
Where font is the jquery selector of the input from which we select the text to translate and button, it is the jquery selector of the event trigger that will do the translation.