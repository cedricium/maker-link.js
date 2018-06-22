const {defaults} = require('underscore');

function MakerLink(options) {
  defaults(options, {
    // HTML
    author: 'levelsio',
    photoURL: 'https://levels.io/levelsio.png',
    redirectURL: 'https://levels.io',

    // CSS
    font: '"Helvetica Neue",sans-serif',
    brandColor: 'rgb(255, 71, 66)',
  });

  const template =
`<a target="_blank" rel="noopener" class="makerlink" href="${options.redirectURL}">
  <img class="makerlink__img" src="${options.photoURL}"
    style="display: ${(options.photoURL) ? 'inline-block' : 'none'}" />
  <p class="makerlink__author">by ${options.author}</p>
</a>`;

  const parser = new DOMParser();
  const makerLinkHTML = parser.parseFromString(template, 'text/html');

  if (typeof MakerLink.makerLinkExists === 'undefined' || ! MakerLink.makerLinkExists) {
    document.body.appendChild(makerLinkHTML.body.firstChild);
    MakerLink.makerLinkExists = true;
  } else {
    return;
  }

  // Dynamically set CSS for the Maker Link
  // refs: https://stackoverflow.com/a/8051488
  const addRule = (function (style) {
    const styleEL = document.head.appendChild(style);
    styleEL.dataset.title = 'MakerLink.js';
    const {sheet} = styleEL;
  
    return function (selector, css) {
      const propText = typeof css === 'string' ? css : Object.keys(css).map(function (property) {
          return property + ':' + (property === 'content' ? '`' + css[property] + `'` : css[property]);
      }).join(';');
      sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
    };
  })(document.createElement('style'));

  addRule('.makerlink', {
    'font-family': `${options.font}`,
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
    'color': `${options.brandColor}`,
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

self.MakerLink = MakerLink;
