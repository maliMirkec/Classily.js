# Classily.js

### _Toggling classes more classily._

Pure JavaScript plugin for toggling classes.

Supports multiple targets.
Supports multiple classes.
Supports preventing default event.

## Intro

Often I find myself writing JS code for toggling classes. After more than 5 years it hit me - why don't I create a plugin that could be used for this purpose and reuse it on every project. Boing!

## Disclaimer

> _I'm no JavaScript expert, I'm sure the code could be written more effeciently._
>
> _If you think you could do better, all contribution are more than welcome._

## Installation

Install from npm:

```
npm install classily
```

or GitHub:

```
git clone https://github.com/maliMirkec/Classily.js.git
```

Include it in your `HTML` document:

```html
<script src="/path/to/Classily.min.js"></script>
```

## Initialization

```html
<script>
  new Classily({
    selector: ".my-classily"
  });
</script>
```

## Usage

```html
<button type="button"
  class="js-classily"
  data-target=".my-target"
  data-class="my-class">
  Toggle
</button>
```

## Options

* _selector_
  - trigger selector
  - add on an element that will trigger click event
  - default '.js-classily': `class="js-classily"`
* _`data-target`_
  - target selector
  - add to target elements using `querySelectorAll`
  - use comma `,` to separate targets
  - supports multiple targets: `data-target=".first-target, .second-target"`
  - supports `this` to target current element: `data-target="this"`
* _`data-class`_
  - class to toggle
  - supports multiple classes: `data-class="first-class second-class"`
  - if number of `data-target` selectors separated with comma `,` matches number of `data-class` classes separated with comma `,` then each pair of selector => class will be used (see examples)
* _`data-prevent="default"`_
  - if provided, prevents default action (useful when setting trigger on anchors)
  - must be exact match

## Support

Plugin could be used in all modern browsers ([See support for `querySelectorAll`](https://caniuse.com/#feat=queryselector) ).

## Examples

### Simple class toggling

```html
<button type="button"
  class="js-classily"
  data-target=".my-div"
  data-class="my-class">
  Toggle class
</button>

<div class="my-div">...</div>
```

Demo: https://codepen.io/CiTA/pen/QOmeyG/

### Current element class toggling

```html
<button type="button"
  class="js-classily"
  data-target="this"
  data-class="my-class">
  Toggle class
</button>
```

Demo: https://codepen.io/CiTA/pen/ooqKoR/

### Toggling multiple classes on a single element

```html
<button type="button"
  class="js-classily"
  data-target=".my-div"
  data-class="first-class second-class">
  Toggle class
</button>

<div class="my-div">...</div>
```

Demo: https://codepen.io/CiTA/pen/ooqKRN/

### Toggling single class on multiple elements

```html
<button type="button"
  class="js-classily"
  data-target=".my-div"
  data-class="first-class">
  Toggle class
</button>

<div class="my-div">...</div>
<div class="my-div">...</div>
```

Demo: https://codepen.io/CiTA/pen/MOGggq/

### Toggling multiple classes on multiple elements

```html
<button type="button"
  class="js-classily"
  data-target=".my-first-div, .my-second-div"
  data-class="first-class, second-class">
  Toggle class
</button>

<div class="my-first-div">...</div>
<div class="my-second-div">...</div>
```

Demo: https://codepen.io/CiTA/pen/bYMbpa/

### Prevent default event

```html
<a href="//www.google.com"
  class="js-classily"
  data-target="this"
  data-class="first-class"
  data-prevent="default">
  Toggle class
</a>
```

Demo: https://codepen.io/CiTA/pen/RjyboK/

The possibilities are endless, it's up to you how you will use this plugin.
