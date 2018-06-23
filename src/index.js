/**
 * maker-link.js v1.0.0-beta.3
 * https://github.com/cedricium/maker-link.js
 *
 * Copyright (c) 2018 - Cedric Amaya
 * Released under the MIT license
 */

const {defaults} = require('underscore');

/** Class representing a Maker Link. */
class MakerLink {
  /* eslint-disable max-len */
  /**
   * Creates a Maker Link element and appends it to the document's body.
   * @param {object} options Configuration object used for customizing the Maker Link element - SEE BELOW
   * @param {string} options.author       text to display inside the Maker Link
   * @param {string} options.photoURL     URL pointing to the maker's photo
   * @param {string} options.redirectURL  URL of the desired destination address
   * @param {string} options.font         string containing valid CSS representing the CSS `color` property
   * @param {string} options.brandColor   string containing valid CSS representing the CSS `font-family` property
   */
  constructor(options) {
  /* eslint-enable max-len */
    const DEFAULT_OPTS = {
      // HTML
      author: 'levelsio',
      photoURL: 'https://levels.io/levelsio.png',
      redirectURL: 'https://levels.io',
      // CSS
      font: '"Helvetica Neue",sans-serif',
      brandColor: 'rgb(255, 71, 66)',
    };

    this.options = defaults(options, DEFAULT_OPTS);

    const template =
// eslint-disable-next-line
`<a target="_blank" rel="noopener" class="makerlink" href="${this.options.redirectURL}">
  <img class="makerlink__img" src="${this.options.photoURL}"
    style="display: ${(this.options.photoURL) ? 'inline-block' : 'none'}" />
  <p class="makerlink__author">by ${this.options.author}</p>
</a>`;

    const parser = new DOMParser();
    const makerLinkHTML = parser.parseFromString(template, 'text/html');

    if (typeof MakerLink.makerLinkExists === 'undefined' ||
        ! MakerLink.makerLinkExists) {
      document.body.appendChild(makerLinkHTML.body.firstChild);
      MakerLink.makerLinkExists = true;
    } else {
      console.log('maker-link.js: Maker Link already exists!');
      return;
    }

    /**
     * Dynamically adds CSS rules to a <style> element.
     * @see {@link https://stackoverflow.com/a/8051488|StackOverflow}
     */
    const addRule = (function(style) {
      const styleEL = document.head.appendChild(style);
      styleEL.dataset.title = 'maker-link';
      const {sheet} = styleEL;
      return function(selector, css) {
        const propText = typeof css === 'string'
          ? css : Object.keys(css).map(function(property) {
          return property + ':' + (property === 'content'
            ? '`' + css[property] + `'` : css[property]);
        }).join(';');
        sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length); // eslint-disable-line max-len
      };
    })(document.createElement('style'));

    addRule('.makerlink', {
      'font-family': `${this.options.font}`,
      'right': 0,
      'bottom': 0,
      'position': 'fixed',
      'z-index': 100,
      'border-top-left-radius': '5px',
      'padding': '6px',
      'border-top': '1px solid #efefef',
      'border-left': '1px solid #efefef',
      'background': '#fff',
      'color': '#6f6f6f',
      'text-decoration': 'none',
    });

    addRule('.makerlink:hover', {
      'background': '#fff',
      'color': `${this.options.brandColor}`,
    });

    addRule('.makerlink .makerlink__img', {
      'border-radius': '100%',
      'width': '22px',
      'vertical-align': 'middle',
    });

    addRule('.makerlink .makerlink__author', {
      'margin': 0,
      'vertical-align': 'middle',
      'display': 'inline',
      'margin-left': '7px',
      'font-weight': '500',
      'font-size': '14px',
    });
  }
}

global.MakerLink = MakerLink;
