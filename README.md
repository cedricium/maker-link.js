# maker-link.js
**JavaScript library for creating configurable Maker Links**

[Maker Links](https://twitter.com/levelsio/status/985879093135589376) are small, unobtrusive buttons found at the bottom right of all of Pieter Levels' (@levelsio) websites.
When clicked, the button opens a new tab and navigates to his personal website, https://levels.io.
This library allows you to easily customize and add one to your own website without the need to alter your current site's code.

## Download

`maker-link.js` is meant to be consumed in the browser using `<script>` tags. You have a couple of options when it comes to including `maker-link.js` in your project / site.

1. Using a package manager (e.g. npm, yarn, bower, etc.):

    - npm:  `npm i --save maker-link`
    - yarn: *__Coming soon!__*
    - bower: *__Coming soon!__*

2. Downloading the bundled library directly:

    - Navigate to https://github.com/cedricium/maker-link.js/releases, select the most recent release and download the `maker-link.min.js` file

3. Consuming `maker-link.js` via CDN:

    - *__Coming soon!__*


## Usage

Instantiate a new MakerLink object with `options` containing your information to have a Maker Link added to your site.


```html
<!-- index.html -->

<!-- Include the MakerLink library -->
<script src="path/to/maker-link.js/"></script>

<!-- Initialize MakerLink object -->
<script>
  const makerLink = new MakerLink({
    author: "cedric amaya",
    photoURL: "https://pbs.twimg.com/profile_images/1002035724076568576/8SSEXKp3_400x400.jpg",
    redirectURL: "https://cedric.tech",
    brandColor: '#007bff',
    font: 'monospace',
  });
</script>
```

### Configuration

It's super easy to customize the look and feel of your Maker Link. By passing an `options` object when instantiating MakerLink, you control what MakerLink displays.

`MakerLink([options])`

#### `options`
Type: `Object`

##### `author`
Type: `string`

Default: `'levelsio'`

Text to display inside the Maker Link (by **levelsio**). Typically your name (Pieter Levels) or social-media handle (levelsio).

##### `photoURL`
Type: `string`

Default: `'https://levels.io/levelsio.png'`

URL pointing to the image you'd like displayed in the Maker Link.

If an empty string (`''`) is given, then the Maker Link will hide the `<img>` element (by applying `display: none`).

##### `redirectURL`
Type: `string`

Default: `'https://levels.io'`

URL pointing to the link you want users to visit when the Maker Link is clicked.

##### `brandColor`
Type: `string` - (`color` CSS property)

Default: `'rgb(255, 71, 66)'`

String containing valid CSS representing the CSS `color` property. Applied to the display text when hovered.

Possible Values:

```
A <color> can be defined in any of the following ways:

  - Using a keyword (such as 'blue' or 'transparent')
  - Using the RGB cubic-coordinate system (via the '#-hexadecimal' or the 'rgb()' and 'rgba()' functional notations)
  - Using the HSL cylindrical-coordinate system (via the 'hsl()' and 'hsla()' functional notations)
```

More Information: [MDN `color` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

##### `font`
Type: `string` - (`font-family` CSS property)

Default: `'"Helvetica Neue", sans-serif'`

String containing valid CSS representing the CSS `font-family` property. Any font that your site has access to is fair game for the Maker Link
`font` option as well.

More Information: [MDN `font-family` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)


## Contributing

Contributions are welcome from anyone and everyone. To contribute:

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

> Note: Be sure to merge the latest from "upstream" before making a pull request!


## License
[MIT](./LICENSE.md)