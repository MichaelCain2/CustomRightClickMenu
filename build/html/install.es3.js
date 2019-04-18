/*!
 * Original can be found at https://github.com/SanderRonde/CustomRightClickMenu 
 * This code may only be used under the MIT style license found in the LICENSE.txt file 
**/
"use notstrict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](subClass,superClass):subClass.__proto__ = superClass : subClass.__proto__ = superClass; }

!function (e) {
  var r = e.babelHelpers = {};r["typeof"] = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }, r.classCallCheck = function (e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
  }, r.createClass = function () {
    function e(e, r) {
      for (var t = 0; t < r.length; t++) {
        var n = r[t];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }return function (r, t, n) {
      return t && e(r.prototype, t), n && e(r, n), r;
    };
  }(), r.defineEnumerableProperties = function (e, r) {
    for (var t in r) {
      var n = r[t];n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n);
    }return e;
  }, r.defaults = function (e, r) {
    for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) {
      var o = t[n],
          i = Object.getOwnPropertyDescriptor(r, o);i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
    }return e;
  }, r.defineProperty = function (e, r, t) {
    return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
  }, r["extends"] = Object.assign || function (e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }return e;
  }, r.get = function e(r, t, n) {
    null === r && (r = Function.prototype);var o = Object.getOwnPropertyDescriptor(r, t);if (void 0 === o) {
      var i = Object.getPrototypeOf(r);return null === i ? void 0 : e(i, t, n);
    }if ("value" in o) return o.value;var a = o.get;if (void 0 !== a) return a.call(n);
  }, r.inherits = function (e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof(r)));e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](e,r):e.__proto__ = r : e.__proto__ = r);
  }, r["instanceof"] = function (e, r) {
    return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r;
  }, r.newArrowCheck = function (e, r) {
    if (e !== r) throw new TypeError("Cannot instantiate an arrow function");
  }, r.objectDestructuringEmpty = function (e) {
    if (null == e) throw new TypeError("Cannot destructure undefined");
  }, r.objectWithoutProperties = function (e, r) {
    var t = {};for (var n in e) {
      r.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }return t;
  }, r.possibleConstructorReturn = function (e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !r || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) && "function" != typeof r ? e : r;
  }, r.set = function e(r, t, n, o) {
    var i = Object.getOwnPropertyDescriptor(r, t);if (void 0 === i) {
      var a = Object.getPrototypeOf(r);null !== a && e(a, t, n, o);
    } else if ("value" in i && i.writable) i.value = n;else {
      var u = i.set;void 0 !== u && u.call(o, n);
    }return n;
  }, r.slicedToArray = function () {
    function e(e, r) {
      var t = [],
          n = !0,
          o = !1,
          i = void 0;try {
        for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (t.push(a.value), !r || t.length !== r); n = !0) {}
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          !n && u["return"] && u["return"]();
        } finally {
          if (o) throw i;
        }
      }return t;
    }return function (r, t) {
      if (Array.isArray(r)) return r;if (Symbol.iterator in Object(r)) return e(r, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(), r.taggedTemplateLiteral = function (e, r) {
    return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
  }, r.temporalRef = function (e, r, t) {
    if (e === t) throw new ReferenceError(r + " is not defined - temporal dead zone");return e;
  }, r.temporalUndefined = {}, r.toArray = function (e) {
    return Array.isArray(e) ? e : Array.from(e);
  }, r.toConsumableArray = function (e) {
    if (Array.isArray(e)) {
      for (var r = 0, t = Array(e.length); r < e.length; r++) {
        t[r] = e[r];
      }return t;
    }return Array.from(e);
  };
}("undefined" == typeof global ? self : global);
(function () {
  'use notstrict';

  (function () {
    'use notstrict';
    if (!window.customElements) return;var a = window.HTMLElement,
        b = window.customElements.define,
        c = window.customElements.get,
        d = new Map(),
        e = new Map();var f = !1,
        g = !1;window.HTMLElement = function () {
      if (!f) {
        var _a = d.get(this.constructor),
            _b = c.call(window.customElements, _a);g = !0;var _e2 = new _b();return _e2;
      }f = !1;
    }, window.HTMLElement.prototype = a.prototype;Object.defineProperty(window, 'customElements', { value: window.customElements, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'define', { value: function value(c, h) {
        var i = h.prototype,
            j = function (_a2) {
          _inherits(j, _a2);

          function j() {
            var _this2;

            _classCallCheck(this, j);

            (_this2 = _possibleConstructorReturn(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this)), _this2), typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](_this2,i):_this2.__proto__ = i, g || (f = !0, h.call(_this2)), g = !1;return _this2;
          }

          return j;
        }(a),
            k = j.prototype;j.observedAttributes = h.observedAttributes, k.connectedCallback = i.connectedCallback, k.disconnectedCallback = i.disconnectedCallback, k.attributeChangedCallback = i.attributeChangedCallback, k.adoptedCallback = i.adoptedCallback, d.set(h, c), e.set(c, h), b.call(window.customElements, c, j);
      }, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'get', { value: function value(a) {
        return e.get(a);
      }, configurable: !0, writable: !0 });
  })();

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function () {
  'use notstrict';
  // global for (1) existence means `WebComponentsReady` will file,
  // (2) WebComponents.ready == true means event has fired.

  window.WebComponents = window.WebComponents || {};
  var name = 'webcomponents-loader.js';
  // Feature detect which polyfill needs to be imported.
  var polyfills = [];
  if (!('import' in document.createElement('link'))) {
    polyfills.push('hi');
  }
  if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force) {
    polyfills.push('sd');
  }
  if (!window.customElements || window.customElements.forcePolyfill) {
    polyfills.push('ce');
  }
  // NOTE: any browser that does not have template or ES6 features
  // must load the full suite (called `lite` for legacy reasons) of polyfills.
  if (!('content' in document.createElement('template')) || !window.Promise || !Array.from ||
  // Edge has broken fragment cloning which means you cannot clone template.content
  !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
    polyfills = ['lite'];
  }

  if (polyfills.length) {
    var script = document.querySelector('script[src*="' + name + '"]');
    var newScript = document.createElement('script');
    // Load it from the right place.
    var replacement = 'webcomponents-' + polyfills.join('-') + '.js';
    var url = script.src.replace(name, replacement);
    newScript.src = url;
    // NOTE: this is required to ensure the polyfills are loaded before
    // *native* html imports load on older Chrome versions. This *is* CSP
    // compliant since CSP rules must have allowed this script to run.
    // In all other cases, this can be async.
    if (document.readyState === 'loading' && 'import' in document.createElement('link')) {
      document.write(newScript.outerHTML);
    } else {
      document.head.appendChild(newScript);
    }
  } else {
    // Ensure `WebComponentsReady` is fired also when there are no polyfills loaded.
    // however, we have to wait for the document to be in 'interactive' state,
    // otherwise a rAF may fire before scripts in <body>

    var fire = function fire() {
      requestAnimationFrame(function () {
        window.WebComponents.ready = true;
        document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: true }));
      });
    };

    if (document.readyState !== 'loading') {
      fire();
    } else {
      document.addEventListener('readystatechange', function wait() {
        fire();
        document.removeEventListener('readystatechange', wait);
      });
    }
  }
})();
(function () {
  "use notstrict";
  function b() {
    this.end = this.start = 0, this.rules = this.parent = this.previous = null, this.cssText = this.parsedCssText = "", this.atRule = !1, this.type = 0, this.parsedSelector = this.selector = this.keyframesName = "";
  }function c(j) {
    j = j.replace(v, "").replace(K, "");var a = j,
        c = new b();c.start = 0, c.end = a.length;for (var d = c, e = 0, f = a.length; e < f; e++) {
      if ("{" === a[e]) {
        d.rules || (d.rules = []);var h = d,
            g = h.rules[h.rules.length - 1] || null;d = new b(), d.start = e + 1, d.parent = h, d.previous = g, h.rules.push(d);
      } else "}" === a[e] && (d.end = e + 1, d = d.parent || c);
    }return i(c, j);
  }function i(h, a) {
    var b = a.substring(h.start, h.end - 1);if (h.parsedCssText = h.cssText = b.trim(), h.parent && (b = a.substring(h.previous ? h.previous.end : h.parent.start, h.start - 1), b = g(b), b = b.replace(V, " "), b = b.substring(b.lastIndexOf(";") + 1), b = h.parsedSelector = h.selector = b.trim(), h.atRule = 0 === b.indexOf("@"), h.atRule ? 0 === b.indexOf("@media") ? h.type = u : b.match(U) && (h.type = x, h.keyframesName = h.selector.split(V).pop()) : h.type = 0 === b.indexOf("--") ? t : k), b = h.rules) for (var c, f = 0, d = b.length; f < d && (c = b[f]); f++) {
      i(c, a);
    }return h;
  }function g(b) {
    return b.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, a) {
      for (b = a, a = 6 - b.length; a--;) {
        b = "0" + b;
      }return "\\" + b;
    });
  }function j(i, a, b) {
    b = void 0 === b ? "" : b;var c = "";if (i.cssText || i.rules) {
      var d,
          f = i.rules;if ((d = f) && (d = f[0], d = !(d && d.selector && 0 === d.selector.indexOf("--"))), d) {
        d = 0;for (var e, g = f.length; d < g && (e = f[d]); d++) {
          c = j(e, a, c);
        }
      } else a ? a = i.cssText : (a = i.cssText, a = a.replace(L, "").replace(N, ""), a = a.replace(O, "").replace(P, "")), (c = a.trim()) && (c = "  " + c + "\n");
    }return c && (i.selector && (b += i.selector + " {\n"), b += c, i.selector && (b += "}\n\n")), b;
  }function d(b) {
    (b = B[b]) && (b._applyShimCurrentVersion = b._applyShimCurrentVersion || 0, b._applyShimValidatingVersion = b._applyShimValidatingVersion || 0, b._applyShimNextVersion = (b._applyShimNextVersion || 0) + 1);
  }function e(b) {
    return b._applyShimCurrentVersion === b._applyShimNextVersion;
  }function f(b) {
    b._applyShimValidatingVersion = b._applyShimNextVersion, b.a || (b.a = !0, r.then(function () {
      b._applyShimCurrentVersion = b._applyShimNextVersion, b.a = !1;
    }));
  }function a(b) {
    J = b && b.shimcssproperties ? !1 : W || !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)");
  }function h(b) {
    return b ? ("string" === typeof b && (b = c(b)), j(b, X)) : "";
  }function l(b) {
    return !b.__cssRules && b.textContent && (b.__cssRules = c(b.textContent)), b.__cssRules || null;
  }function m(i, a, b, c) {
    if (i) {
      var d = !1,
          j = i.type;if (c && j === u) {
        var f = i.selector.match(G);f && (window.matchMedia(f[1]).matches || (d = !0));
      }if (j === k ? a(i) : b && j === x ? b(i) : j === t && (d = !0), (i = i.rules) && !d) {
        d = 0, j = i.length;for (var h; d < j && (h = i[d]); d++) {
          m(h, a, b, c);
        }
      }
    }
  }function n(g, a) {
    var b = g.indexOf("var(");if (-1 === b) return a(g, "", "", "");a: {
      for (var c = 0, d = b + 3, e = g.length; d < e; d++) {
        if ("(" === g[d]) c++;else if (")" === g[d] && 0 === --c) break a;
      }d = -1;
    }return c = g.substring(b + 4, d), b = g.substring(0, b), g = n(g.substring(d + 1), a), d = c.indexOf(","), -1 === d ? a(b, c.trim(), "", g) : a(b, c.substring(0, d).trim(), c.substring(d + 1).trim(), g);
  }function o() {
    this.a = {};
  }function p() {
    this.b = this.c = null, this.a = new o();
  }function q(c, a) {
    return a = a.replace(Y, function (a, b, d, e) {
      return w(c, a, b, d, e);
    }), s(c, a);
  }function s(i, a) {
    for (var b; b = F.exec(a);) {
      var c = b[0],
          d = b[1];b = b.index;var e = a.slice(0, b + c.indexOf("@apply"));a = a.slice(b + c.length);var f = y(i, e);c = void 0;var h = i;d = d.replace($, "");var g = [],
          j = h.a.get(d);if (j || (h.a.set(d, {}), j = h.a.get(d)), j) for (c in h.c && (j.i[h.c] = !0), j.h) {
        h = f && f[c], j = [c, ": var(", d, "_-_", c], h && j.push(",", h), j.push(")"), g.push(j.join(""));
      }c = g.join("; "), a = "" + e + c + a, F.lastIndex = b + c.length;
    }return a;
  }function y(i, a) {
    a = a.split(";");for (var b, c, d, h = {}, e = 0; e < a.length; e++) {
      if ((b = a[e]) && (d = b.split(":"), 1 < d.length)) {
        b = d[0].trim();var f = i;c = b, d = d.slice(1).join(":");var g = _.exec(d);g && (g[1] ? (f.b || (f.b = document.createElement("meta"), f.b.setAttribute("apply-shim-measure", ""), f.b.style.all = "initial", document.head.appendChild(f.b)), c = window.getComputedStyle(f.b).getPropertyValue(c)) : c = "apply-shim-inherit", d = c), c = d, h[b] = c;
      }
    }return h;
  }function z(d, a) {
    if (aa) for (var b in a.i) {
      b !== d.c && aa(b);
    }
  }function w(i, a, b, c, d) {
    if (c && n(c, function (a, b) {
      b && i.a.get(b) && (d = "@apply " + b + ";");
    }), !d) return a;var j = s(i, d),
        f = a.slice(0, a.indexOf("--")),
        h = j = y(i, j),
        g = i.a.get(b),
        k = g && g.h;k ? h = Object.assign(Object.create(k), j) : i.a.set(b, h);var m,
        o = [],
        p = !1;for (m in h) {
      var q = j[m];void 0 === q && (q = "initial"), !k || m in k || (p = !0), o.push("" + b + "_-_" + m + ": " + q);
    }return p && z(i, g), g && (g.h = h), c && (f = a + ";" + f), "" + f + o.join("; ") + ";";
  }function C(b) {
    requestAnimationFrame(function () {
      Q ? Q(b) : (S || (S = new Promise(function (b) {
        M = b;
      }), "complete" === document.readyState ? M() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && M();
      })), S.then(function () {
        b && b();
      }));
    });
  }function D() {
    var b = this;this.a = null, C(function () {
      H(b);
    }), R.invalidCallback = d;
  }function H(b) {
    b.a || (b.a = window.ShadyCSS.CustomStyleInterface, b.a && (b.a.transformCallback = function (b) {
      R.f(b);
    }, b.a.validateCallback = function () {
      requestAnimationFrame(function () {
        b.a.enqueued && I(b);
      });
    }));
  }function I(e) {
    if (H(e), e.a) {
      var a = e.a.processStyles();if (e.a.enqueued) {
        for (var b, d = 0; d < a.length; d++) {
          b = e.a.getStyleForCustomStyle(a[d]), b && R.f(b);
        }e.a.enqueued = !1;
      }
    }
  }var J,
      B = {},
      k = 1,
      x = 7,
      u = 4,
      t = 1E3,
      v = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      K = /@import[^;]*;/gim,
      L = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      N = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      O = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      P = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      U = /^@[^\s]*keyframes/,
      V = /\s+/g,
      r = Promise.resolve(),
      W = !(window.ShadyDOM && window.ShadyDOM.inUse);window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? J = window.ShadyCSS.nativeCss : window.ShadyCSS ? (a(window.ShadyCSS), window.ShadyCSS = void 0) : a(window.WebComponents && window.WebComponents.flags);var X = J,
      Y = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      F = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      G = /@media\s(.*)/,
      $ = /;\s*/m,
      _ = /^\s*(initial)|(inherit)\s*$/;o.prototype.set = function (c, a) {
    c = c.trim(), this.a[c] = { h: a, i: {} };
  }, o.prototype.get = function (b) {
    return b = b.trim(), this.a[b] || null;
  };var aa = null;p.prototype.o = function (b) {
    return b = F.test(b) || Y.test(b), F.lastIndex = 0, Y.lastIndex = 0, b;
  }, p.prototype.m = function (d, a) {
    d = d.content.querySelector("style");var b = null;return d && (b = this.j(d, a)), b;
  }, p.prototype.j = function (d, a) {
    a = void 0 === a ? "" : a;var b = l(d);return this.l(b, a), d.textContent = h(b), b;
  }, p.prototype.f = function (d) {
    var e = this,
        a = l(d);return m(a, function (b) {
      ":root" === b.selector && (b.selector = "html"), e.g(b);
    }), d.textContent = h(a), a;
  }, p.prototype.l = function (d, a) {
    var b = this;this.c = a, m(d, function (c) {
      b.g(c);
    }), this.c = null;
  }, p.prototype.g = function (b) {
    b.cssText = q(this, b.parsedCssText), ":root" === b.selector && (b.selector = ":host > *");
  }, p.prototype.detectMixin = p.prototype.o, p.prototype.transformStyle = p.prototype.j, p.prototype.transformCustomStyle = p.prototype.f, p.prototype.transformRules = p.prototype.l, p.prototype.transformRule = p.prototype.g, p.prototype.transformTemplate = p.prototype.m, p.prototype._separator = "_-_", Object.defineProperty(p.prototype, "invalidCallback", { get: function get() {
      return aa;
    }, set: function set(b) {
      aa = b;
    } });var M,
      S = null,
      Q = window.HTMLImports && window.HTMLImports.whenReady || null,
      R = new p();if (D.prototype.prepareTemplate = function (c, a) {
    H(this), B[a] = c, a = R.m(c, a), c._styleAst = a;
  }, D.prototype.styleSubtree = function (d, a) {
    if (H(this), a) for (var b in a) {
      null === b ? d.style.removeProperty(b) : d.style.setProperty(b, a[b]);
    }if (d.shadowRoot) for (this.styleElement(d), d = d.shadowRoot.children || d.shadowRoot.childNodes, a = 0; a < d.length; a++) {
      this.styleSubtree(d[a]);
    } else for (d = d.children || d.childNodes, a = 0; a < d.length; a++) {
      this.styleSubtree(d[a]);
    }
  }, D.prototype.styleElement = function (d) {
    H(this);var a,
        c = d.localName;a = c ? -1 < c.indexOf("-") ? c : d.getAttribute && d.getAttribute("is") || "" : d.is, (c = B[a]) && !e(c) && ((e(c) || c._applyShimValidatingVersion !== c._applyShimNextVersion) && (this.prepareTemplate(c, a), f(c)), (d = d.shadowRoot) && (d = d.querySelector("style")) && (d.__cssRules = c._styleAst, d.textContent = h(c._styleAst)));
  }, D.prototype.styleDocument = function (b) {
    H(this), this.styleSubtree(document.body, b);
  }, !window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    var T = new D(),
        Z = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;window.ShadyCSS = { prepareTemplate: function prepareTemplate(c, a) {
        I(T), T.prepareTemplate(c, a);
      }, styleSubtree: function styleSubtree(c, a) {
        I(T), T.styleSubtree(c, a);
      }, styleElement: function styleElement(b) {
        I(T), T.styleElement(b);
      }, styleDocument: function styleDocument(b) {
        I(T), T.styleDocument(b);
      }, getComputedStyleValue: function getComputedStyleValue(c, a) {
        return (c = window.getComputedStyle(c).getPropertyValue(a)) ? c.trim() : "";
      }, nativeCss: X, nativeShadow: W }, Z && (window.ShadyCSS.CustomStyleInterface = Z);
  }window.ShadyCSS.ApplyShim = R;
}).call(undefined);
(function () {
  'use notstrict';
  var a = window.Polymer;window.Polymer = function (a) {
    return window.Polymer._polymerFn(a);
  }, a && Object.assign(Polymer, a), window.Polymer._polymerFn = function () {
    throw new Error('Load polymer.html to use the Polymer() function.');
  }, window.Polymer.version = '2.0.0', window.JSCompiler_renameProperty = function (a) {
    return a;
  };
})();
(function () {
  'use notstrict';
  function a(a) {
    return function (b) {
      a.__mixinApplications || (a.__mixinApplications = new WeakMap());var c = a.__mixinApplications,
          d = c.get(b);return d || (d = a(b), c.set(b, d)), d;
    };
  }var b = 0;Polymer.dedupingMixin = function (c) {
    return c = a(c), c.__dedupeId = ++b, function (a) {
      var b = a.__mixinSet;if (b && b[c.__dedupeId]) return a;var d = c(a);return d.__mixinSet = Object.create(d.__mixinSet || b || null), d.__mixinSet[c.__dedupeId] = !0, d;
    };
  };
})();
(function () {
  'use notstrict';
  var a = {},
      b = /-[a-z]/g,
      c = /([A-Z])/g;Polymer.CaseMap = { dashToCamelCase: function dashToCamelCase(c) {
      return a[c] || (a[c] = 0 > c.indexOf('-') ? c : c.replace(b, function (a) {
        return a[1].toUpperCase();
      }));
    }, camelToDashCase: function camelToDashCase(b) {
      return a[b] || (a[b] = b.replace(c, '-$1').toLowerCase());
    } };
})();
(function () {
  'use notstrict';
  function a(a, d) {
    if (a && e.test(a)) return a;if (void 0 === b) {
      b = !1;try {
        var f = new URL('b', 'http://a');f.pathname = 'c%20d', b = 'http://a/c%20d' === f.href;
      } catch (a) {}
    }return (d || (d = document.baseURI || window.location.href), b) ? new URL(a, d).href : (c || (c = document.implementation.createHTMLDocument('temp'), c.base = c.createElement('base'), c.head.appendChild(c.base), c.anchor = c.createElement('a'), c.body.appendChild(c.anchor)), c.base.href = d, c.anchor.href = a, c.anchor.href || a);
  }var b,
      c,
      d = /(url\()([^)]*)(\))/g,
      e = /(^\/)|(^#)|(^[\w-\d]*:)/;Polymer.ResolveUrl = { resolveCss: function resolveCss(b, c) {
      return b.replace(d, function (b, d, e, f) {
        return d + '\'' + a(e.replace(/["']/g, ''), c) + '\'' + f;
      });
    }, resolveUrl: a, pathFromUrl: function pathFromUrl(a) {
      return a.substring(0, a.lastIndexOf('/') + 1);
    } };
})();
(function () {
  'use notstrict';
  function a(a) {
    return Polymer.DomModule ? Polymer.DomModule['import'](a) : null;
  }Polymer.StyleGather = { cssFromModules: function cssFromModules(a) {
      for (var b = a.trim().split(' '), c = '', d = 0; d < b.length; d++) {
        c += this.cssFromModule(b[d]);
      }return c;
    }, cssFromModule: function cssFromModule(b) {
      var c = a(b);if (c && void 0 === c._cssText) {
        var d = '',
            e = c.querySelector('template');e && (d += this.cssFromTemplate(e, c.assetpath)), d += this.cssFromModuleImports(b), c._cssText = d || null;
      }return c || console.warn('Could not find style data in module named', b), c && c._cssText || '';
    }, cssFromTemplate: function cssFromTemplate(a, b) {
      for (var c = '', d = a.content.querySelectorAll('style'), f = 0; f < d.length; f++) {
        var g = d[f],
            e = g.getAttribute('include');e && (c += this.cssFromModules(e)), g.parentNode.removeChild(g), c += b ? Polymer.ResolveUrl.resolveCss(g.textContent, b) : g.textContent;
      }return c;
    }, cssFromModuleImports: function cssFromModuleImports(b) {
      var c = '',
          d = a(b);if (!d) return c;for (var e, f = d.querySelectorAll('link[rel=import][type~=css]'), g = 0; g < f.length; g++) {
        if (e = f[g], e['import']) {
          var h = e['import'],
              i = h.body ? h.body : h;c += Polymer.ResolveUrl.resolveCss(i.textContent, h.baseURI);
        }
      }return c;
    } };
})();
(function () {
  'use notstrict';
  function a(a) {
    return c[a] || d[a.toLowerCase()];
  }function b(a) {
    a.querySelector('style') && console.warn('dom-module %s has style outside template', a.id);
  }var c = {},
      d = {},
      e = function (e) {
    function f() {
      return babelHelpers.classCallCheck(this, f), babelHelpers.possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
    }return babelHelpers.inherits(f, e), babelHelpers.createClass(f, [{ key: 'attributeChangedCallback', value: function value(a, b, c) {
        b !== c && this.register();
      } }, { key: 'register', value: function value(a) {
        a = a || this.id, a && (this.id = a, c[a] = this, d[a.toLowerCase()] = this, b(this));
      } }, { key: 'assetpath', get: function get() {
        if (!this.__assetpath) {
          var a = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument,
              b = Polymer.ResolveUrl.resolveUrl(this.getAttribute('assetpath') || '', a.baseURI);this.__assetpath = Polymer.ResolveUrl.pathFromUrl(b);
        }return this.__assetpath;
      } }], [{ key: 'import', value: function value(b, c) {
        if (b) {
          var d = a(b);return d && c ? d.querySelector(c) : d;
        }return null;
      } }, { key: 'observedAttributes', get: function get() {
        return ['id'];
      } }]), f;
  }(HTMLElement);e.prototype.modules = c, customElements.define('dom-module', e), Polymer.DomModule = e;
})();
(function () {
  'use notstrict';
  var a = { isPath: function isPath(a) {
      return 0 <= a.indexOf('.');
    }, root: function root(a) {
      var b = a.indexOf('.');return -1 === b ? a : a.slice(0, b);
    }, isAncestor: function isAncestor(a, b) {
      return 0 === a.indexOf(b + '.');
    }, isDescendant: function isDescendant(a, b) {
      return 0 === b.indexOf(a + '.');
    }, translate: function translate(a, b, c) {
      return b + c.slice(a.length);
    }, matches: function matches(a, b) {
      return a === b || this.isAncestor(a, b) || this.isDescendant(a, b);
    }, normalize: function normalize(a) {
      if (Array.isArray(a)) {
        for (var b, c = [], d = 0; d < a.length; d++) {
          b = a[d].toString().split('.');for (var e = 0; e < b.length; e++) {
            c.push(b[e]);
          }
        }return c.join('.');
      }return a;
    }, split: function split(a) {
      return Array.isArray(a) ? this.normalize(a).split('.') : a.toString().split('.');
    }, get: function get(a, b, c) {
      for (var d = a, e = this.split(b), f = 0; f < e.length; f++) {
        if (!d) return;var g = e[f];d = d[g];
      }return c && (c.path = e.join('.')), d;
    }, set: function set(a, b, c) {
      var d = a,
          e = this.split(b),
          f = e[e.length - 1];if (1 < e.length) {
        for (var g, h = 0; h < e.length - 1; h++) {
          if (g = e[h], d = d[g], !d) return;
        }d[f] = c;
      } else d[b] = c;return e.join('.');
    } };a.isDeep = a.isPath, Polymer.Path = a;
})();
(function () {
  'use notstrict';
  var a = 0,
      b = 0,
      c = [],
      d = 0,
      e = document.createTextNode('');new window.MutationObserver(function () {
    for (var a, d = c.length, e = 0; e < d; e++) {
      if (a = c[e], a) try {
        a();
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }c.splice(0, d), b += d;
  }).observe(e, { characterData: !0 }), Polymer.Async = { timeOut: { after: function after(a) {
        return { run: function run(b) {
            return setTimeout(b, a);
          }, cancel: window.clearTimeout.bind(window) };
      }, run: window.setTimeout.bind(window), cancel: window.clearTimeout.bind(window) }, animationFrame: { run: window.requestAnimationFrame.bind(window), cancel: window.cancelAnimationFrame.bind(window) }, idlePeriod: { run: function run(a) {
        return window.requestIdleCallback ? window.requestIdleCallback(a) : window.setTimeout(a, 16);
      }, cancel: function cancel(a) {
        window.cancelIdleCallback ? window.cancelIdleCallback(a) : window.clearTimeout(a);
      } }, microTask: { run: function run(b) {
        return e.textContent = d++, c.push(b), a++;
      }, cancel: function cancel(a) {
        var d = a - b;if (0 <= d) {
          if (!c[d]) throw new Error('invalid async handle: ' + a);c[d] = null;
        }
      } } };
})();
(function () {
  'use notstrict';
  function a(a, b) {
    if (!d[b]) {
      var c = a[b];c !== void 0 && (a.__data ? a._setPendingProperty(b, c) : (a.__dataProto ? !a.hasOwnProperty(JSCompiler_renameProperty('__dataProto', a)) && (a.__dataProto = Object.create(a.__dataProto)) : a.__dataProto = {}, a.__dataProto[b] = c));
    }
  }for (var b = Polymer.CaseMap, c = Polymer.Async.microTask, d = {}, e = HTMLElement.prototype; e;) {
    for (var f = Object.getOwnPropertyNames(e), g = 0; g < f.length; g++) {
      d[f[g]] = !0;
    }e = Object.getPrototypeOf(e);
  }Polymer.PropertyAccessors = Polymer.dedupingMixin(function (d) {
    var e = function (d) {
      function e() {
        babelHelpers.classCallCheck(this, e);var a = babelHelpers.possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));return a._initializeProperties(), a;
      }return babelHelpers.inherits(e, d), babelHelpers.createClass(e, null, [{ key: 'createPropertiesForAttributes', value: function value() {
          for (var a = this.observedAttributes, c = 0; c < a.length; c++) {
            this.prototype._createPropertyAccessor(b.dashToCamelCase(a[c]));
          }
        } }]), babelHelpers.createClass(e, [{ key: 'attributeChangedCallback', value: function value(a, b, c) {
          b !== c && this._attributeToProperty(a, c);
        } }, { key: '_initializeProperties', value: function value() {
          for (var a in this.__serializing = !1, this.__dataCounter = 0, this.__dataEnabled = !1, this.__dataInitialized = !1, this.__dataInvalid = !1, this.__data = {}, this.__dataPending = null, this.__dataOld = null, this.__dataProto && (this._initializeProtoProperties(this.__dataProto), this.__dataProto = null), this.__dataHasAccessor) {
            this.hasOwnProperty(a) && (this.__dataInstanceProps = this.__dataInstanceProps || {}, this.__dataInstanceProps[a] = this[a], delete this[a]);
          }
        } }, { key: '_initializeProtoProperties', value: function value(a) {
          for (var b in a) {
            this._setProperty(b, a[b]);
          }
        } }, { key: '_initializeInstanceProperties', value: function value(a) {
          Object.assign(this, a);
        } }, { key: '_ensureAttribute', value: function value(a, b) {
          this.hasAttribute(a) || this._valueToNodeAttribute(this, b, a);
        } }, { key: '_attributeToProperty', value: function value(a, c, d) {
          if (!this.__serializing) {
            var e = b.dashToCamelCase(a);this[e] = this._deserializeValue(c, d);
          }
        } }, { key: '_propertyToAttribute', value: function value(a, c, d) {
          this.__serializing = !0, d = 3 > arguments.length ? this[a] : d, this._valueToNodeAttribute(this, d, c || b.camelToDashCase(a)), this.__serializing = !1;
        } }, { key: '_valueToNodeAttribute', value: function value(a, b, c) {
          var d = this._serializeValue(b);void 0 === d ? a.removeAttribute(c) : a.setAttribute(c, d);
        } }, { key: '_serializeValue', value: function value(a) {
          switch ('undefined' === typeof a ? 'undefined' : babelHelpers['typeof'](a)) {case 'boolean':
              return a ? '' : void 0;case 'object':
              if (a instanceof Date) return a.toString();if (a) try {
                return JSON.stringify(a);
              } catch (a) {
                return '';
              }default:
              return null == a ? void 0 : a.toString();}
        } }, { key: '_deserializeValue', value: function value(a, b) {
          var c;switch (b) {case Number:
              c = +a;break;case Boolean:
              c = null !== a;break;case Object:
              try {
                c = JSON.parse(a);
              } catch (a) {}break;case Array:
              try {
                c = JSON.parse(a);
              } catch (b) {
                c = null, console.warn('Polymer::Attributes: couldn\'t decode Array as JSON: ' + a);
              }break;case Date:
              c = new Date(a);break;case String:default:
              c = a;}return c;
        } }, { key: '_createPropertyAccessor', value: function value(b, c) {
          this.hasOwnProperty('__dataHasAccessor') || (this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor)), this.__dataHasAccessor[b] || (this.__dataHasAccessor[b] = !0, a(this, b), Object.defineProperty(this, b, { get: function get() {
              return this.__data[b];
            }, set: c ? function () {} : function (a) {
              this._setProperty(b, a);
            } }));
        } }, { key: '_hasAccessor', value: function value(a) {
          return this.__dataHasAccessor && this.__dataHasAccessor[a];
        } }, { key: '_setProperty', value: function value(a, b) {
          this._setPendingProperty(a, b) && this._invalidateProperties();
        } }, { key: '_setPendingProperty', value: function value(a, b) {
          var c = this.__data[a];if (this._shouldPropertyChange(a, b, c)) return this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), a in this.__dataOld || (this.__dataOld[a] = c), this.__data[a] = b, this.__dataPending[a] = b, !0;
        } }, { key: '_isPropertyPending', value: function value(a) {
          return this.__dataPending && a in this.__dataPending;
        } }, { key: '_invalidateProperties', value: function value() {
          var a = this;!this.__dataInvalid && this.__dataInitialized && (this.__dataInvalid = !0, c.run(function () {
            a.__dataInvalid && (a.__dataInvalid = !1, a._flushProperties());
          }));
        } }, { key: '_enableProperties', value: function value() {
          this.__dataEnabled || (this.__dataEnabled = !0, this.__dataInstanceProps && (this._initializeInstanceProperties(this.__dataInstanceProps), this.__dataInstanceProps = null), this.ready());
        } }, { key: '_flushProperties', value: function value() {
          if (this.__dataPending) {
            var a = this.__dataPending;this.__dataPending = null, this.__dataCounter++, this._propertiesChanged(this.__data, a, this.__dataOld), this.__dataCounter--;
          }
        } }, { key: 'ready', value: function value() {
          this.__dataInitialized = !0, this._flushProperties();
        } }, { key: '_propertiesChanged', value: function value() {} }, { key: '_shouldPropertyChange', value: function value(a, b, c) {
          return c !== b && (c === c || b === b);
        } }]), e;
    }(d);return e;
  });
})();
(function () {
  'use notstrict';
  function a(a) {
    var b = a.getAttribute('is');if (b && g[b]) {
      var c = a;for (c.removeAttribute('is'), a = c.ownerDocument.createElement(b), c.parentNode.replaceChild(a, c), a.appendChild(c); c.attributes.length;) {
        a.setAttribute(c.attributes[0].name, c.attributes[0].value), c.removeAttribute(c.attributes[0].name);
      }
    }return a;
  }function b(a, c) {
    var d = c.parentInfo && b(a, c.parentInfo);if (d) {
      for (var e = d.firstChild, f = 0; e; e = e.nextSibling) {
        if (c.parentIndex === f++) return e;
      }
    } else return a;
  }function c(a, b, c, d) {
    d.id && (b[d.id] = c);
  }function d(a, b, c) {
    if (c.events && c.events.length) for (var d, e = 0, f = c.events; e < f.length && (d = f[e]); e++) {
      a._addMethodEventListenerToNode(b, d.name, d.value, a);
    }
  }function e(a, b, c) {
    c.templateInfo && (b._templateInfo = c.templateInfo);
  }function f(a, b, c) {
    a = a._methodHost || a;return function (b) {
      a[c] ? a[c](b, b.detail) : console.warn('listener method `' + c + '` not defined');
    };
  }var g = { "dom-if": !0, "dom-repeat": !0 };Polymer.TemplateStamp = Polymer.dedupingMixin(function (g) {
    var h = function (g) {
      function h() {
        return babelHelpers.classCallCheck(this, h), babelHelpers.possibleConstructorReturn(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
      }return babelHelpers.inherits(h, g), babelHelpers.createClass(h, [{ key: '_stampTemplate', value: function value(a) {
          a && !a.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(a);var f = this.constructor._parseTemplate(a),
              g = f.nodeInfoList,
              h = f.content || a.content,
              j = document.importNode(h, !0);j.__noInsertionPoint = !f.hasInsertionPoint;var k = j.nodeList = Array(g.length);j.$ = {};for (var m, n, o = 0, i = g.length; o < i && (m = g[o]); o++) {
            n = k[o] = b(j, m), c(this, j.$, n, m), e(this, n, m), d(this, n, m);
          }return j;
        } }, { key: '_addMethodEventListenerToNode', value: function value(a, b, c, d) {
          d = d || a;var e = f(d, b, c);return this._addEventListenerToNode(a, b, e), e;
        } }, { key: '_addEventListenerToNode', value: function value(a, b, c) {
          a.addEventListener(b, c);
        } }, { key: '_removeEventListenerFromNode', value: function value(a, b, c) {
          a.removeEventListener(b, c);
        } }], [{ key: '_parseTemplate', value: function value(a, b) {
          if (!a._templateInfo) {
            var c = a._templateInfo = {};c.nodeInfoList = [], c.stripWhiteSpace = b && b.stripWhiteSpace || a.hasAttribute('strip-whitespace'), this._parseTemplateContent(a, c, { parent: null });
          }return a._templateInfo;
        } }, { key: '_parseTemplateContent', value: function value(a, b, c) {
          return this._parseTemplateNode(a.content, b, c);
        } }, { key: '_parseTemplateNode', value: function value(a, b, c) {
          var d;return 'template' != a.localName || a.hasAttribute('preserve-content') ? 'slot' === a.localName && (b.hasInsertionPoint = !0) : d = this._parseTemplateNestedTemplate(a, b, c) || d, a.firstChild && (d = this._parseTemplateChildNodes(a, b, c) || d), a.hasAttributes && a.hasAttributes() && (d = this._parseTemplateNodeAttributes(a, b, c) || d), d;
        } }, { key: '_parseTemplateChildNodes', value: function value(b, c, d) {
          for (var e, f = b.firstChild, g = 0; f; f = e) {
            if ('template' == f.localName && (f = a(f)), e = f.nextSibling, f.nodeType === Node.TEXT_NODE) {
              for (var h = e; h && h.nodeType === Node.TEXT_NODE;) {
                f.textContent += h.textContent, e = h.nextSibling, b.removeChild(h), h = e;
              }if (c.stripWhiteSpace && !f.textContent.trim()) {
                b.removeChild(f);continue;
              }
            }var i = { parentIndex: g, parentInfo: d };this._parseTemplateNode(f, c, i) && (i.infoIndex = c.nodeInfoList.push(i) - 1), f.parentNode && g++;
          }
        } }, { key: '_parseTemplateNestedTemplate', value: function value(a, b, c) {
          var d = this._parseTemplate(a, b),
              e = d.content = a.content.ownerDocument.createDocumentFragment();return e.appendChild(a.content), c.templateInfo = d, !0;
        } }, { key: '_parseTemplateNodeAttributes', value: function value(b, c, d) {
          for (var e, a = void 0, f = Array.from(b.attributes), g = f.length - 1; e = f[g]; g--) {
            a = this._parseTemplateNodeAttribute(b, c, d, e.name, e.value) || a;
          }return a;
        } }, { key: '_parseTemplateNodeAttribute', value: function value(a, b, c, d, e) {
          return 'on-' === d.slice(0, 3) ? (a.removeAttribute(d), c.events = c.events || [], c.events.push({ name: d.slice(3), value: e }), !0) : 'id' === d ? (c.id = e, !0) : void 0;
        } }, { key: '_contentForTemplate', value: function value(a) {
          var b = a.__templateInfo;return b && b.content || a.content;
        } }]), h;
    }(g);return h;
  });
})();
(function () {
  'use notstrict';
  function e(e, t) {
    var a = e[t];if (!a) a = e[t] = {};else if (!e.hasOwnProperty(t)) for (var r in a = e[t] = Object.create(e[t]), a) {
      for (var n = a[r], o = a[r] = Array(n.length), p = 0; p < n.length; p++) {
        o[p] = n[p];
      }
    }return a;
  }function t(e, t, r, n, o, i) {
    if (t) {
      var p = !1,
          d = z++;for (var s in r) {
        a(e, t, d, s, r, n, o, i) && (p = !0);
      }return p;
    }return !1;
  }function a(e, t, a, n, o, p, d, s) {
    var _ = !1,
        y = d ? Polymer.Path.root(n) : n,
        u = t[y];if (u) for (var h, f = 0, i = u.length; f < i && (h = u[f]); f++) {
      h.info && h.info.lastRun === a || d && !r(n, h.trigger) || (h.info && (h.info.lastRun = a), h.fn(e, n, o, p, h.info, d, s), _ = !0);
    }return _;
  }function r(e, t) {
    if (t) {
      var a = t.name;return a == e || t.structured && Polymer.Path.isAncestor(a, e) || t.wildcard && Polymer.Path.isDescendant(a, e);
    }return !0;
  }function n(e, t, a, r, n) {
    var o = e[n.methodName],
        i = n.property;o ? o.call(e, e.__data[i], r[i]) : !n.dynamicFn && console.warn('observer method `' + n.methodName + '` not defined');
  }function o(e, t, r, n, o) {
    var p,
        d = e.__notifyEffects,
        s = z++;for (var _ in t) {
      t[_] && (d && a(e, d, s, _, r, n, o) ? p = !0 : o && i(e, _, r) && (p = !0));
    }var l;p && (l = e.__dataHost) && l._invalidateProperties && l._invalidateProperties();
  }function i(e, t, a) {
    var r = Polymer.Path.root(t);if (r !== t) {
      var n = Polymer.CaseMap.camelToDashCase(r) + '-changed';return p(e, n, a[t], t), !0;
    }
  }function p(e, t, a, r) {
    var n = { value: a, queueProperty: !0 };r && (n.path = r), e.dispatchEvent(new CustomEvent(t, { detail: n }));
  }function d(e, t, a, r, n, o) {
    var i = o ? Polymer.Path.root(t) : t,
        d = i == t ? null : t,
        s = d ? Polymer.Path.get(e, d) : e.__data[t];d && s === void 0 && (s = a[t]), p(e, n.eventName, s, d);
  }function s(e, t, a, r, n) {
    var o,
        i = e.detail,
        p = i && i.path;p ? (r = Polymer.Path.translate(a, r, p), o = i && i.value) : o = e.target[a], o = n ? !o : o, t.__readOnly && t.__readOnly[r] || !t._setPendingPropertyOrPath(r, o, !0, !!p) || i && i.queueProperty || t._invalidateProperties();
  }function _(e, t, a, r, n) {
    var o = e.__data[t];Polymer.sanitizeDOMValue && (o = Polymer.sanitizeDOMValue(o, n.attrName, 'attribute', e)), e._propertyToAttribute(t, n.attrName, o);
  }function l(e, a, r, n) {
    var o = e.__computeEffects;if (o) for (var i = a; t(e, o, i, r, n);) {
      Object.assign(r, e.__dataOld), Object.assign(a, e.__dataPending), i = e.__dataPending, e.__dataPending = null;
    }
  }function y(e, t, a, r, n) {
    var o = O(e, t, a, r, n),
        i = n.methodInfo;e.__dataHasAccessor && e.__dataHasAccessor[i] ? e._setPendingProperty(i, o, !0) : e[i] = o;
  }function u(e, t, r) {
    var n = e.__dataLinkedPaths;if (n) {
      var o;for (var i in n) {
        var a = n[i];Polymer.Path.isDescendant(i, t) ? (o = Polymer.Path.translate(i, a, t), e._setPendingPropertyOrPath(o, r, !0, !0)) : Polymer.Path.isDescendant(a, t) && (o = Polymer.Path.translate(a, i, t), e._setPendingPropertyOrPath(o, r, !0, !0));
      }
    }
  }function h(e, t, a, r, n, o, p) {
    a.bindings = a.bindings || [];var d = { kind: r, target: n, parts: o, literal: p, isCompound: 1 !== o.length };if (a.bindings.push(d), m(d)) {
      var s = d.parts[0],
          _ = s.event,
          l = s.negate;d.listenerEvent = _ || H.camelToDashCase(n) + '-changed', d.listenerNegate = l;
    }for (var y, u = t.nodeInfoList.length, h = 0; h < d.parts.length; h++) {
      y = d.parts[h], y.compoundIndex = h, f(e, t, d, y, u);
    }
  }function f(e, t, a, r, n) {
    if (!r.literal) if ('attribute' === a.kind && '-' === a.target[0]) console.warn('Cannot set attribute ' + a.target + ' because "-" is not a valid attribute starting character');else for (var o, i = r.dependencies, p = { index: n, binding: a, part: r, evaluator: e }, d = 0; d < i.length; d++) {
      o = i[d], 'string' == typeof o && (o = I(o), o.wildcard = !0), e._addTemplatePropertyEffect(t, o.rootProperty, { fn: P, info: p, trigger: o });
    }
  }function P(e, t, a, r, n, o, i) {
    var p = i[n.index],
        d = n.binding,
        s = n.part;if (o && s.source && t.length > s.source.length && 'property' == d.kind && !d.isCompound && p.__dataHasAccessor && p.__dataHasAccessor[d.target]) {
      var _ = a[t];t = Polymer.Path.translate(s.source, d.target, t), p._setPendingPropertyOrPath(t, _, !1, !0) && e._enqueueClient(p);
    } else {
      var l = n.evaluator._evaluateBinding(e, s, t, a, r, o);g(e, p, d, s, l);
    }
  }function g(e, t, a, r, n) {
    if (n = c(t, n, a, r), Polymer.sanitizeDOMValue && (n = Polymer.sanitizeDOMValue(n, a.target, a.kind, t)), 'attribute' == a.kind) e._valueToNodeAttribute(t, n, a.target);else {
      var o = a.target;t.__dataHasAccessor && t.__dataHasAccessor[o] ? (!t.__readOnly || !t.__readOnly[o]) && t._setPendingProperty(o, n) && e._enqueueClient(t) : e._setUnmanagedPropertyToNode(t, o, n);
    }
  }function c(e, t, a, r) {
    if (a.isCompound) {
      var n = e.__dataCompoundStorage[a.target];n[r.compoundIndex] = t, t = n.join('');
    }return 'attribute' !== a.kind && ('textContent' === a.target || 'input' == e.localName && 'value' == a.target) && (t = void 0 == t ? '' : t), t;
  }function m(e) {
    return e.target && 'attribute' != e.kind && 'text' != e.kind && !e.isCompound && '{' === e.parts[0].mode;
  }function v(e, t) {
    var a = t.nodeList,
        r = t.nodeInfoList;if (r.length) for (var n = 0; n < r.length; n++) {
      var o = r[n],
          i = a[n],
          p = o.bindings;if (p) for (var d, s = 0; s < p.length; s++) {
        d = p[s], k(i, d), E(i, e, d);
      }i.__dataHost = e;
    }
  }function k(e, t) {
    if (t.isCompound) {
      for (var a = e.__dataCompoundStorage || (e.__dataCompoundStorage = {}), r = t.parts, n = Array(r.length), o = 0; o < r.length; o++) {
        n[o] = r[o].literal;
      }var i = t.target;a[i] = n, t.literal && 'property' == t.kind && (e[i] = t.literal);
    }
  }function E(e, t, a) {
    if (a.listenerEvent) {
      var r = a.parts[0];e.addEventListener(a.listenerEvent, function (n) {
        s(n, t, a.target, r.source, r.negate);
      });
    }
  }function C(e, t, a, r, n, o) {
    o = t['static'] || o && ('object' !== ('undefined' === typeof o ? 'undefined' : babelHelpers['typeof'](o)) || o[t.methodName]);for (var p, d = { methodName: t.methodName, args: t.args, methodInfo: n, dynamicFn: o }, s = 0; s < t.args.length && (p = t.args[s]); s++) {
      p.literal || e._addPropertyEffect(p.rootProperty, a, { fn: r, info: d, trigger: p });
    }o && e._addPropertyEffect(t.methodName, a, { fn: r, info: d });
  }function O(e, t, a, r, n) {
    var o = e._methodHost || e,
        i = o[n.methodName];if (i) {
      var p = x(e.__data, n.args, t, a);return i.apply(o, p);
    }n.dynamicFn || console.warn('method `' + n.methodName + '` not defined');
  }function T(e) {
    for (var t, a = '', r = 0; r < e.length; r++) {
      t = e[r].literal, a += t || '';
    }return a;
  }function b(e) {
    var t = e.match(/([^\s]+?)\(([\s\S]*)\)/);if (t) {
      var a = t[1],
          r = { methodName: a, "static": !0 };if (t[2].trim()) {
        var n = t[2].replace(/\\,/g, '&comma;').split(',');return N(n, r);
      }return r.args = M, r;
    }return null;
  }function N(e, t) {
    return t.args = e.map(function (e) {
      var a = I(e);return a.literal || (t['static'] = !1), a;
    }, this), t;
  }function I(e) {
    var t = e.trim().replace(/&comma;/g, ',').replace(/\\(.)/g, '$1'),
        r = { name: t },
        a = t[0];return '-' === a && (a = t[1]), '0' <= a && '9' >= a && (a = '#'), '\'' === a || '"' === a ? (r.value = t.slice(1, -1), r.literal = !0) : '#' === a ? (r.value = +t, r.literal = !0) : void 0, (r.literal || (r.rootProperty = Polymer.Path.root(t), r.structured = Polymer.Path.isPath(t), r.structured && (r.wildcard = '.*' == t.slice(-2), r.wildcard && (r.name = t.slice(0, -2)))), r);
  }function x(e, t, a, r) {
    for (var n = [], o = 0, i = t.length; o < i; o++) {
      var p = t[o],
          d = p.name,
          s = void 0;if (p.literal ? s = p.value : p.structured ? (s = Polymer.Path.get(e, d), void 0 === s && (s = r[d])) : s = e[d], p.wildcard) {
        var _ = 0 === d.indexOf(a + '.'),
            l = 0 === a.indexOf(d) && !_;n[o] = { path: l ? a : d, value: l ? r[a] : s, base: s };
      } else n[o] = s;
    }return n;
  }function A(e, t, a, r) {
    var n = a + '.splices';e.notifyPath(n, { indexSplices: r }), e.notifyPath(a + '.length', t.length), e.__data[n] = { indexSplices: null };
  }function L(e, t, a, r, n, o) {
    A(e, t, a, [{ index: r, addedCount: n, removed: o, object: t, type: 'splice' }]);
  }function R(e) {
    return e[0].toUpperCase() + e.substring(1);
  }var H = Polymer.CaseMap,
      z = 0,
      D = { COMPUTE: '__computeEffects', REFLECT: '__reflectEffects', NOTIFY: '__notifyEffects', PROPAGATE: '__propagateEffects', OBSERVE: '__observeEffects', READ_ONLY: '__readOnly' },
      M = [],
      S = '(?:[a-zA-Z_$][\\w.:$\\-*]*)',
      F = '(?:' + S + '|' + '(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)' + '|' + ('(?:' + '(?:\'(?:[^\'\\\\]|\\\\.)*\')' + '|' + '(?:"(?:[^"\\\\]|\\\\.)*")' + ')') + '\\s*)',
      w = /(\[\[|{{)\s*(?:(!)\s*)?((?:[a-zA-Z_$][\w.:$\-*]*)\s*(?:\(\s*(?:(?:(?:(?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*"))\s*)(?:,\s*(?:(?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*"))\s*))*)?)\)\s*)?)(?:]]|}})/g;Polymer.PropertyEffects = Polymer.dedupingMixin(function (a) {
    var r = Polymer.TemplateStamp(Polymer.PropertyAccessors(a)),
        i = function (a) {
      function r() {
        return babelHelpers.classCallCheck(this, r), babelHelpers.possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
      }return babelHelpers.inherits(r, a), babelHelpers.createClass(r, [{ key: '_initializeProperties', value: function value() {
          babelHelpers.get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), '_initializeProperties', this).call(this), B.registerHost(this), this.__dataClientsInitialized = !1, this.__dataPendingClients = null, this.__dataToNotify = null, this.__dataLinkedPaths = null, this.__dataHasPaths = !1, this.__dataCompoundStorage = this.__dataCompoundStorage || null, this.__dataHost = this.__dataHost || null, this.__dataTemp = {};
        } }, { key: '_initializeProtoProperties', value: function value(e) {
          this.__data = Object.create(e), this.__dataPending = Object.create(e), this.__dataOld = {};
        } }, { key: '_initializeInstanceProperties', value: function value(e) {
          var t = this.__readOnly;for (var a in e) {
            t && t[a] || (this.__dataPending = this.__dataPending || {}, this.__dataOld = this.__dataOld || {}, this.__data[a] = this.__dataPending[a] = e[a]);
          }
        } }, { key: '_addPropertyEffect', value: function value(t, a, r) {
          this._createPropertyAccessor(t, a == D.READ_ONLY);var n = e(this, a)[t];n || (n = this[a][t] = []), n.push(r);
        } }, { key: '_removePropertyEffect', value: function value(t, a, r) {
          var n = e(this, a)[t],
              o = n.indexOf(r);0 <= o && n.splice(o, 1);
        } }, { key: '_hasPropertyEffect', value: function value(e, t) {
          var a = this[t];return !!(a && a[e]);
        } }, { key: '_hasReadOnlyEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.READ_ONLY);
        } }, { key: '_hasNotifyEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.NOTIFY);
        } }, { key: '_hasReflectEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.REFLECT);
        } }, { key: '_hasComputedEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.COMPUTE);
        } }, { key: '_setPendingPropertyOrPath', value: function value(e, t, a, n) {
          if (n || Polymer.Path.root(Array.isArray(e) ? e[0] : e) !== e) {
            if (!n) {
              var o = Polymer.Path.get(this, e);if (e = Polymer.Path.set(this, e, t), !e || !babelHelpers.get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), '_shouldPropertyChange', this).call(this, e, t, o)) return !1;
            }if (this.__dataHasPaths = !0, this._setPendingProperty(e, t, a)) return u(this, e, t), !0;
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[e]) return this._setPendingProperty(e, t, a);this[e] = t;
          }return !1;
        } }, { key: '_setUnmanagedPropertyToNode', value: function value(e, t, a) {
          (a !== e[t] || 'object' == ('undefined' === typeof a ? 'undefined' : babelHelpers['typeof'](a))) && (e[t] = a);
        } }, { key: '_setPendingProperty', value: function value(e, t, a) {
          var r = this.__dataHasPaths && Polymer.Path.isPath(e),
              n = r ? this.__dataTemp : this.__data;if (this._shouldPropertyChange(e, t, n[e])) return this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), e in this.__dataOld || (this.__dataOld[e] = this.__data[e]), r ? this.__dataTemp[e] = t : this.__data[e] = t, this.__dataPending[e] = t, (r || this.__notifyEffects && this.__notifyEffects[e]) && (this.__dataToNotify = this.__dataToNotify || {}, this.__dataToNotify[e] = a), !0;
        } }, { key: '_setProperty', value: function value(e, t) {
          this._setPendingProperty(e, t, !0) && this._invalidateProperties();
        } }, { key: '_invalidateProperties', value: function value() {
          this.__dataInitialized && this._flushProperties();
        } }, { key: '_enqueueClient', value: function value(e) {
          this.__dataPendingClients = this.__dataPendingClients || [], e !== this && this.__dataPendingClients.push(e);
        } }, { key: '_flushClients', value: function value() {
          if (!this.__dataClientsInitialized) this.__dataClientsInitialized = !0, this._readyClients(), this.__dataInitialized = !0;else {
            var e = this.__dataPendingClients;if (e) {
              this.__dataPendingClients = null;for (var t, a = 0; a < e.length; a++) {
                t = e[a], t.__dataPending && t._flushProperties();
              }
            }
          }
        } }, { key: '_readyClients', value: function value() {
          var e = this.__dataPendingClients;if (e) {
            this.__dataPendingClients = null;for (var t, a = 0; a < e.length; a++) {
              t = e[a], t.__dataEnabled || t._enableProperties();
            }
          }
        } }, { key: 'setProperties', value: function value(e, t) {
          for (var a in e) {
            !t && this.__readOnly && this.__readOnly[a] || this._setPendingPropertyOrPath(a, e[a], !0);
          }this._invalidateProperties();
        } }, { key: 'ready', value: function value() {
          this._flushProperties(), this.__dataClientsInitialized || this._flushClients(), this.__dataPending && this._flushProperties();
        } }, { key: '_propertiesChanged', value: function value(e, a, r) {
          var n = this.__dataHasPaths;this.__dataHasPaths = !1, l(this, a, r, n);var i = this.__dataToNotify;this.__dataToNotify = null, this._propagatePropertyChanges(a, r, n), this._flushClients(), t(this, this.__reflectEffects, a, r, n), t(this, this.__observeEffects, a, r, n), i && o(this, i, a, r, n), 1 == this.__dataCounter && (this.__dataTemp = {});
        } }, { key: '_propagatePropertyChanges', value: function value(e, a, r) {
          this.__propagateEffects && t(this, this.__propagateEffects, e, a, r);for (var n = this.__templateInfo; n;) {
            t(this, n.propertyEffects, e, a, r, n.nodeList), n = n.nextTemplateInfo;
          }
        } }, { key: 'linkPaths', value: function value(e, t) {
          e = Polymer.Path.normalize(e), t = Polymer.Path.normalize(t), this.__dataLinkedPaths = this.__dataLinkedPaths || {}, this.__dataLinkedPaths[e] = t;
        } }, { key: 'unlinkPaths', value: function value(e) {
          e = Polymer.Path.normalize(e), this.__dataLinkedPaths && delete this.__dataLinkedPaths[e];
        } }, { key: 'notifySplices', value: function value(e, t) {
          var a = {},
              r = Polymer.Path.get(this, e, a);A(this, r, a.path, t);
        } }, { key: 'get', value: function value(e, t) {
          return Polymer.Path.get(t || this, e);
        } }, { key: 'set', value: function value(e, t, a) {
          a ? Polymer.Path.set(a, e, t) : (!this.__readOnly || !this.__readOnly[e]) && this._setPendingPropertyOrPath(e, t, !0) && this._invalidateProperties();
        } }, { key: 'push', value: function value(e) {
          for (var t = {}, a = Polymer.Path.get(this, e, t), r = a.length, n = arguments.length, o = Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) {
            o[i - 1] = arguments[i];
          }var p = a.push.apply(a, o);return o.length && L(this, a, t.path, r, o.length, []), p;
        } }, { key: 'pop', value: function value(e) {
          var t = {},
              a = Polymer.Path.get(this, e, t),
              r = !!a.length,
              n = a.pop();return r && L(this, a, t.path, a.length, 0, [n]), n;
        } }, { key: 'splice', value: function value(e, t, a) {
          var r = Math.floor,
              n = {},
              o = Polymer.Path.get(this, e, n);t = 0 > t ? o.length - r(-t) : r(t), t || (t = 0);for (var i = arguments.length, p = Array(3 < i ? i - 3 : 0), d = 3; d < i; d++) {
            p[d - 3] = arguments[d];
          }var s = o.splice.apply(o, [t, a].concat(p));return (p.length || s.length) && L(this, o, n.path, t, p.length, s), s;
        } }, { key: 'shift', value: function value(e) {
          var t = {},
              a = Polymer.Path.get(this, e, t),
              r = !!a.length,
              n = a.shift();return r && L(this, a, t.path, 0, 0, [n]), n;
        } }, { key: 'unshift', value: function value(e) {
          for (var t = {}, a = Polymer.Path.get(this, e, t), r = arguments.length, n = Array(1 < r ? r - 1 : 0), o = 1; o < r; o++) {
            n[o - 1] = arguments[o];
          }var i = a.unshift.apply(a, n);return n.length && L(this, a, t.path, 0, n.length, []), i;
        } }, { key: 'notifyPath', value: function value(e, t) {
          var a;if (1 == arguments.length) {
            var r = {};t = Polymer.Path.get(this, e, r), a = r.path;
          } else a = Array.isArray(e) ? Polymer.Path.normalize(e) : e;this._setPendingPropertyOrPath(a, t, !0, !0) && this._invalidateProperties();
        } }, { key: '_createReadOnlyProperty', value: function value(e, t) {
          this._addPropertyEffect(e, D.READ_ONLY), t && (this['_set' + R(e)] = function (t) {
            this._setProperty(e, t);
          });
        } }, { key: '_createPropertyObserver', value: function value(e, t, a) {
          var r = { property: e, methodName: t, dynamicFn: a };this._addPropertyEffect(e, D.OBSERVE, { fn: n, info: r, trigger: { name: e } }), a && this._addPropertyEffect(t, D.OBSERVE, { fn: n, info: r, trigger: { name: t } });
        } }, { key: '_createMethodObserver', value: function value(e, t) {
          var a = b(e);if (!a) throw new Error('Malformed observer expression \'' + e + '\'');C(this, a, D.OBSERVE, O, null, t);
        } }, { key: '_createNotifyingProperty', value: function value(e) {
          this._addPropertyEffect(e, D.NOTIFY, { fn: d, info: { eventName: H.camelToDashCase(e) + '-changed', property: e } });
        } }, { key: '_createReflectedProperty', value: function value(e) {
          var t = H.camelToDashCase(e);'-' === t[0] ? console.warn('Property ' + e + ' cannot be reflected to attribute ' + t + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property thisead.') : this._addPropertyEffect(e, D.REFLECT, { fn: _, info: { attrName: t } });
        } }, { key: '_createComputedProperty', value: function value(e, t, a) {
          var r = b(t);if (!r) throw new Error('Malformed computed expression \'' + t + '\'');C(this, r, D.COMPUTE, y, e, a);
        } }, { key: '_bindTemplate', value: function value(e, t) {
          var a = this.constructor._parseTemplate(e),
              r = this.__templateInfo == a;if (!r) for (var n in a.propertyEffects) {
            this._createPropertyAccessor(n);
          }if (t && (a = Object.create(a), a.wasPreBound = r, !r && this.__templateInfo)) {
            var o = this.__templateInfoLast || this.__templateInfo;return this.__templateInfoLast = o.nextTemplateInfo = a, a.previousTemplateInfo = o, a;
          }return this.__templateInfo = a;
        } }, { key: '_stampTemplate', value: function value(e) {
          B.beginHosting(this);var a = babelHelpers.get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), '_stampTemplate', this).call(this, e);B.endHosting(this);var o = this._bindTemplate(e, !0);if (o.nodeList = a.nodeList, !o.wasPreBound) for (var i = o.childNodes = [], p = a.firstChild; p; p = p.nextSibling) {
            i.push(p);
          }return a.templateInfo = o, v(this, o), this.__dataInitialized && t(this, o.propertyEffects, this.__data, null, !1, o.nodeList), a;
        } }, { key: '_removeBoundDom', value: function value(e) {
          var t = e.templateInfo;t.previousTemplateInfo && (t.previousTemplateInfo.nextTemplateInfo = t.nextTemplateInfo), t.nextTemplateInfo && (t.nextTemplateInfo.previousTemplateInfo = t.previousTemplateInfo), this.__templateInfoLast == t && (this.__templateInfoLast = t.previousTemplateInfo), t.previousTemplateInfo = t.nextTemplateInfo = null;for (var a, r = t.childNodes, n = 0; n < r.length; n++) {
            a = r[n], a.parentNode.removeChild(a);
          }
        } }, { key: 'PROPERTY_EFFECT_TYPES', get: function get() {
          return D;
        } }], [{ key: 'addPropertyEffect', value: function value(e, t, a) {
          this.prototype._addPropertyEffect(e, t, a);
        } }, { key: 'createPropertyObserver', value: function value(e, t, a) {
          this.prototype._createPropertyObserver(e, t, a);
        } }, { key: 'createMethodObserver', value: function value(e, t) {
          this.prototype._createMethodObserver(e, t);
        } }, { key: 'createNotifyingProperty', value: function value(e) {
          this.prototype._createNotifyingProperty(e);
        } }, { key: 'createReadOnlyProperty', value: function value(e, t) {
          this.prototype._createReadOnlyProperty(e, t);
        } }, { key: 'createReflectedProperty', value: function value(e) {
          this.prototype._createReflectedProperty(e);
        } }, { key: 'createComputedProperty', value: function value(e, t, a) {
          this.prototype._createComputedProperty(e, t, a);
        } }, { key: 'bindTemplate', value: function value(e) {
          return this.prototype._bindTemplate(e);
        } }, { key: '_addTemplatePropertyEffect', value: function value(e, t, a) {
          var r = e.hostProps = e.hostProps || {};r[t] = !0;var n = e.propertyEffects = e.propertyEffects || {},
              o = n[t] = n[t] || [];o.push(a);
        } }, { key: '_parseTemplateNode', value: function value(e, t, a) {
          var n = babelHelpers.get(r.__proto__ || Object.getPrototypeOf(r), '_parseTemplateNode', this).call(this, e, t, a);if (e.nodeType === Node.TEXT_NODE) {
            var o = this._parseBindings(e.textContent, t);o && (e.textContent = T(o) || ' ', h(this, t, a, 'text', 'textContent', o), n = !0);
          }return n;
        } }, { key: '_parseTemplateNodeAttribute', value: function value(e, t, a, n, o) {
          var i = this._parseBindings(o, t);if (i) {
            var p = n,
                d = 'property';'$' == n[n.length - 1] && (n = n.slice(0, -1), d = 'attribute');var s = T(i);return s && 'attribute' == d && e.setAttribute(n, s), 'input' === e.localName && 'value' === p && e.setAttribute(p, ''), e.removeAttribute(p), 'property' === d && (n = Polymer.CaseMap.dashToCamelCase(n)), h(this, t, a, d, n, i, s), !0;
          }return babelHelpers.get(r.__proto__ || Object.getPrototypeOf(r), '_parseTemplateNodeAttribute', this).call(this, e, t, a, n, o);
        } }, { key: '_parseTemplateNestedTemplate', value: function value(e, t, a) {
          var n = babelHelpers.get(r.__proto__ || Object.getPrototypeOf(r), '_parseTemplateNestedTemplate', this).call(this, e, t, a),
              o = a.templateInfo.hostProps;for (var i in o) {
            h(this, t, a, 'property', '_host_' + i, [{ mode: '{', source: i, dependencies: [i] }]);
          }return n;
        } }, { key: '_parseBindings', value: function value(e, t) {
          for (var a, r = [], n = 0; null !== (a = w.exec(e));) {
            a.index > n && r.push({ literal: e.slice(n, a.index) });var o = a[1][0],
                p = !!a[2],
                d = a[3].trim(),
                s = void 0,
                _ = void 0,
                l = void 0;'{' == o && 0 < (l = d.indexOf('::')) && (_ = d.substring(l + 2), d = d.substring(0, l), s = !0);var y = b(d),
                u = [];if (y) {
              for (var h, f = y.args, P = y.methodName, g = 0; g < f.length; g++) {
                h = f[g], h.literal || u.push(h);
              }var i = t.dynamicFns;(i && i[P] || y['static']) && (u.push(P), y.dynamicFn = !0);
            } else u.push(d);r.push({ source: d, mode: o, negate: p, customEvent: s, signature: y, dependencies: u, event: _ }), n = w.lastIndex;
          }if (n && n < e.length) {
            var c = e.substring(n);c && r.push({ literal: c });
          }return r.length ? r : void 0;
        } }, { key: '_evaluateBinding', value: function value(e, t, a, r, n, o) {
          var i;return i = t.signature ? O(e, a, r, n, t.signature) : a == t.source ? o && Polymer.Path.isPath(a) ? Polymer.Path.get(e, a) : e.__data[a] : Polymer.Path.get(e, t.source), t.negate && (i = !i), i;
        } }]), r;
    }(r);return i;
  });var B = { stack: [], registerHost: function registerHost(e) {
      if (this.stack.length) {
        var t = this.stack[this.stack.length - 1];t._enqueueClient(e);
      }
    }, beginHosting: function beginHosting(e) {
      this.stack.push(e);
    }, endHosting: function endHosting(e) {
      var t = this.stack.length;t && this.stack[t - 1] == e && this.stack.pop();
    } };
})();
(function () {
  'use notstrict';
  var a = function a() {};a.is, a['extends'], a.properties, a.observers, a.template, Polymer.ElementMixin = Polymer.dedupingMixin(function (a) {
    function b(a) {
      return a.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', a)) || (a.__ownProperties = a.hasOwnProperty(JSCompiler_renameProperty('properties', a)) ? a.properties : {}), a.__ownProperties;
    }function c(a) {
      return a.hasOwnProperty(JSCompiler_renameProperty('__ownObservers', a)) || (a.__ownObservers = a.hasOwnProperty(JSCompiler_renameProperty('observers', a)) ? a.observers : []), a.__ownObservers;
    }function d(a, b) {
      for (var c in b) {
        var d = b[c];'function' == typeof d && (d = { type: d }), a[c] = d;
      }return a;
    }function e(a) {
      if (!a.hasOwnProperty(JSCompiler_renameProperty('__classProperties', a))) {
        a.__classProperties = d({}, b(a));var c = Object.getPrototypeOf(a.prototype).constructor;c.prototype instanceof p && (a.__classProperties = Object.assign(Object.create(e(c)), a.__classProperties));
      }return a.__classProperties;
    }function f(a) {
      if (!a.hasOwnProperty(JSCompiler_renameProperty('__classPropertyDefaults', a))) {
        a.__classPropertyDefaults = null;var b = e(a);for (var c in b) {
          var d = b[c];'value' in d && (a.__classPropertyDefaults = a.__classPropertyDefaults || {}, a.__classPropertyDefaults[c] = d);
        }
      }return a.__classPropertyDefaults;
    }function g(a) {
      return a.hasOwnProperty(JSCompiler_renameProperty('__finalized', a));
    }function h(a) {
      var b = a.prototype,
          c = Object.getPrototypeOf(b).constructor;c.prototype instanceof p && c.finalize(), i(a);
    }function i(a) {
      a.__finalized = !0;var d = a.prototype;a.hasOwnProperty(JSCompiler_renameProperty('is', a)) && a.is && Polymer.telemetry.register(d);var e = b(a);e && j(d, e);var f = c(a);f && k(d, f, e);var g = a.template;if (g) {
        if ('string' === typeof g) {
          var h = document.createElement('template');h.innerHTML = g, g = h;
        } else g = g.cloneNode(!0);d._template = g;
      }
    }function j(a, b) {
      for (var c in b) {
        l(a, c, b[c], b);
      }
    }function k(a, b, c) {
      for (var d = 0; d < b.length; d++) {
        a._createMethodObserver(b[d], c);
      }
    }function l(a, b, c, d) {
      c.computed && (c.readOnly = !0), c.computed && !a._hasReadOnlyEffect(b) && a._createComputedProperty(b, c.computed, d), c.readOnly && !a._hasReadOnlyEffect(b) && a._createReadOnlyProperty(b, !c.computed), c.reflectToAttribute && !a._hasReflectEffect(b) && a._createReflectedProperty(b), c.notify && !a._hasNotifyEffect(b) && a._createNotifyingProperty(b), c.observer && a._createPropertyObserver(b, c.observer, d[c.observer]);
    }function m(a, b, c, d, e) {
      var f = Polymer.StyleGather.cssFromTemplate(b, c) + Polymer.StyleGather.cssFromModuleImports(d);if (f) {
        var g = document.createElement('style');g.textContent = f, b.content.insertBefore(g, b.content.firstChild);
      }window.ShadyCSS && window.ShadyCSS.prepareTemplate(b, d, e), a._bindTemplate(b);
    }var n = Polymer.PropertyEffects(a),
        o = Polymer.CaseMap,
        p = function (a) {
      function b() {
        return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
      }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, [{ key: '_initializeProperties', value: function value() {
          Polymer.telemetry.instanceCount++, this.constructor.finalize();var a = this.constructor.importPath;if (this._template && !this._template.__polymerFinalized) {
            this._template.__polymerFinalized = !0;var c = a ? Polymer.ResolveUrl.resolveUrl(a) : '';m(this.__proto__, this._template, c, this.localName);
          }babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), '_initializeProperties', this).call(this), this.rootPath = Polymer.rootPath, this.importPath = a;var d = f(this.constructor);if (d) for (var e in d) {
            var g = d[e];if (!this.hasOwnProperty(e)) {
              var h = 'function' == typeof g.value ? g.value.call(this) : g.value;this._hasAccessor(e) ? this._setPendingProperty(e, h, !0) : this[e] = h;
            }
          }
        } }, { key: 'connectedCallback', value: function value() {
          window.ShadyCSS && this._template && window.ShadyCSS.styleElement(this), this._enableProperties();
        } }, { key: 'disconnectedCallback', value: function value() {} }, { key: 'ready', value: function value() {
          this._template && (this.root = this._stampTemplate(this._template), this.$ = this.root.$), babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'ready', this).call(this);
        } }, { key: '_readyClients', value: function value() {
          this._template && (this.root = this._attachDom(this.root)), babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), '_readyClients', this).call(this);
        } }, { key: '_attachDom', value: function value(a) {
          if (!this.attachShadow) throw new Error('ShadowDOM not available. Polymer.Element can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.');else if (a) return this.shadowRoot || this.attachShadow({ mode: 'open' }), this.shadowRoot.appendChild(a), this.shadowRoot;
        } }, { key: 'attributeChangedCallback', value: function value(a, b, c) {
          if (b !== c) {
            var d = o.dashToCamelCase(a),
                f = e(this.constructor)[d].type;this._hasReadOnlyEffect(d) || this._attributeToProperty(a, c, f);
          }
        } }, { key: 'updateStyles', value: function value(a) {
          window.ShadyCSS && window.ShadyCSS.styleSubtree(this, a);
        } }, { key: 'resolveUrl', value: function value(a, b) {
          return !b && this.importPath && (b = Polymer.ResolveUrl.resolveUrl(this.importPath)), Polymer.ResolveUrl.resolveUrl(a, b);
        } }], [{ key: 'finalize', value: function value() {
          g(this) || h(this);
        } }, { key: '_parseTemplateContent', value: function value(a, c, d) {
          return c.dynamicFns = c.dynamicFns || e(this), babelHelpers.get(b.__proto__ || Object.getPrototypeOf(b), '_parseTemplateContent', this).call(this, a, c, d);
        } }, { key: 'observedAttributes', get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__observedAttributes', this))) {
            var a = [],
                b = e(this);for (var c in b) {
              a.push(Polymer.CaseMap.camelToDashCase(c));
            }this.__observedAttributes = a;
          }return this.__observedAttributes;
        } }, { key: 'template', get: function get() {
          return this.hasOwnProperty(JSCompiler_renameProperty('_template', this)) || (this._template = Polymer.DomModule['import'](this.is, 'template') || Object.getPrototypeOf(this.prototype).constructor.template), this._template;
        } }, { key: 'importPath', get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
            var a = Polymer.DomModule['import'](this.is);this._importPath = a ? a.assetpath : Object.getPrototypeOf(this.prototype).constructor.importPath;
          }return this._importPath;
        } }]), b;
    }(n);return p;
  }), Polymer.telemetry = { instanceCount: 0, registrations: [], _regLog: function _regLog(a) {
      console.log('[' + a.is + ']: registered');
    }, register: function register(a) {
      this.registrations.push(a), Polymer.log && this._regLog(a);
    }, dumpRegistrations: function dumpRegistrations() {
      this.registrations.forEach(this._regLog);
    } }, Polymer.updateStyles = function (a) {
    window.ShadyCSS && window.ShadyCSS.styleDocument(a);
  }, Polymer.rootPath = Polymer.rootPath || Polymer.ResolveUrl.pathFromUrl(document.baseURI || window.location.href);
})();
(function () {
  'use notstrict';
  var a = function () {
    function a() {
      babelHelpers.classCallCheck(this, a), this._asyncModule = null, this._callback = null, this._timer = null;
    }return babelHelpers.createClass(a, [{ key: 'setConfig', value: function value(a, b) {
        var c = this;this._asyncModule = a, this._callback = b, this._timer = this._asyncModule.run(function () {
          c._timer = null, c._callback();
        });
      } }, { key: 'cancel', value: function value() {
        this.isActive() && (this._asyncModule.cancel(this._timer), this._timer = null);
      } }, { key: 'flush', value: function value() {
        this.isActive() && (this.cancel(), this._callback());
      } }, { key: 'isActive', value: function value() {
        return null != this._timer;
      } }], [{ key: 'debounce', value: function value(b, c, d) {
        return b instanceof a ? b.cancel() : b = new a(), b.setConfig(c, d), b;
      } }]), a;
  }();Polymer.Debouncer = a;
})();
(function () {
  'use notstrict';
  function a(a) {
    for (var b, c = r ? ['click'] : n, d = 0; d < c.length; d++) {
      b = c[d], a ? document.addEventListener(b, s, !0) : document.removeEventListener(b, s, !0);
    }
  }function b(a) {
    var b = a.type;if (-1 === n.indexOf(b)) return !1;if ('mousemove' === b) {
      var c = void 0 === a.buttons ? 1 : a.buttons;return a instanceof window.MouseEvent && !p && (c = o[a.which] || 0), !!(1 & c);
    }var d = void 0 === a.button ? 0 : a.button;return 0 === d;
  }function c(a) {
    if ('click' === a.type) {
      if (0 === a.detail) return !0;var b = v._findOriginalTarget(a);if (b.nodeType !== Node.ELEMENT_NODE) return !0;var c = b.getBoundingClientRect(),
          d = a.pageX,
          e = a.pageY;return !(d >= c.left && d <= c.right && e >= c.top && e <= c.bottom);
    }return !1;
  }function d(a) {
    var b = 'auto',
        c = a.composedPath && a.composedPath();if (c) for (var d, e = 0; e < c.length; e++) {
      if (d = c[e], d[l]) {
        b = d[l];break;
      }
    }return b;
  }function f(a, b, c) {
    a.movefn = b, a.upfn = c, document.addEventListener('mousemove', b), document.addEventListener('mouseup', c);
  }function g(a) {
    document.removeEventListener('mousemove', a.movefn), document.removeEventListener('mouseup', a.upfn), a.movefn = null, a.upfn = null;
  }var h = Math.abs,
      e = 'string' === typeof document.head.style.touchAction,
      j = '__polymerGestures',
      k = '__polymerGesturesHandled',
      l = '__polymerGesturesTouchAction',
      i = 25,
      m = 5,
      n = ['mousedown', 'mousemove', 'mouseup', 'click'],
      o = [0, 1, 4, 2],
      p = function () {
    try {
      return 1 === new MouseEvent('test', { buttons: 1 }).buttons;
    } catch (a) {
      return !1;
    }
  }(),
      q = !1;(function () {
    try {
      var a = Object.defineProperty({}, 'passive', { get: function get() {
          q = !0;
        } });window.addEventListener('test', null, a), window.removeEventListener('test', null, a);
    } catch (a) {}
  })();var r = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),
      s = function s(a) {
    var b = a.sourceCapabilities;if ((!b || b.firesTouchEvents) && (a[k] = { skip: !0 }, 'click' === a.type)) {
      var c = a.composedPath && a.composedPath();if (c) for (var d = 0; d < c.length; d++) {
        if (c[d] === u.mouse.target) return;
      }a.preventDefault(), a.stopPropagation();
    }
  },
      u = { mouse: { target: null, mouseIgnoreJob: null }, touch: { x: 0, y: 0, id: -1, scrollDecided: !1 } };document.addEventListener('touchend', function (b) {
    u.mouse.mouseIgnoreJob || a(!0);u.mouse.target = b.composedPath()[0], u.mouse.mouseIgnoreJob = Polymer.Debouncer.debounce(u.mouse.mouseIgnoreJob, Polymer.Async.timeOut.after(2500), function () {
      a(), u.mouse.target = null, u.mouse.mouseIgnoreJob = null;
    });
  }, !!q && { passive: !0 });var v = { gestures: {}, recognizers: [], deepTargetFind: function deepTargetFind(a, b) {
      for (var c, d = document.elementFromPoint(a, b), e = d; e && e.shadowRoot && !window.ShadyDOM && (c = e, e = e.shadowRoot.elementFromPoint(a, b), c !== e);) {
        e && (d = e);
      }return d;
    }, _findOriginalTarget: function _findOriginalTarget(a) {
      return a.composedPath ? a.composedPath()[0] : a.target;
    }, _handleNative: function _handleNative(a) {
      var b,
          c = a.type,
          d = a.currentTarget,
          f = d[j];if (f) {
        var g = f[c];if (g) {
          if (!a[k] && (a[k] = {}, 'touch' === c.slice(0, 5))) {
            var h = a.changedTouches[0];if ('touchstart' === c && 1 === a.touches.length && (u.touch.id = h.identifier), u.touch.id !== h.identifier) return;e || 'touchstart' !== c && 'touchmove' !== c || v._handleTouchAction(a);
          }if (b = a[k], !b.skip) {
            for (var l, m = v.recognizers, n = 0; n < m.length; n++) {
              l = m[n], g[l.name] && !b[l.name] && l.flow && -1 < l.flow.start.indexOf(a.type) && l.reset && l.reset();
            }for (var i, o = 0; o < m.length; o++) {
              i = m[o], g[i.name] && !b[i.name] && (b[i.name] = !0, i[c](a));
            }
          }
        }
      }
    }, _handleTouchAction: function _handleTouchAction(a) {
      var b = a.changedTouches[0],
          c = a.type;if ('touchstart' === c) u.touch.x = b.clientX, u.touch.y = b.clientY, u.touch.scrollDecided = !1;else if ('touchmove' === c) {
        if (u.touch.scrollDecided) return;u.touch.scrollDecided = !0;var e = d(a),
            f = !1,
            g = h(u.touch.x - b.clientX),
            i = h(u.touch.y - b.clientY);a.cancelable && ('none' === e ? f = !0 : 'pan-x' === e ? f = i > g : 'pan-y' === e && (f = g > i)), f ? a.preventDefault() : v.prevent('track');
      }
    }, addListener: function addListener(a, b, c) {
      if (this.gestures[b]) return this._add(a, b, c), !0;
    }, removeListener: function removeListener(a, b, c) {
      if (this.gestures[b]) return this._remove(a, b, c), !0;
    }, _add: function _add(a, b, c) {
      var d = this.gestures[b],
          e = d.deps,
          f = d.name,
          g = a[j];g || (a[j] = g = {});for (var h, k, l = 0; l < e.length; l++) {
        (h = e[l], !(r && -1 < n.indexOf(h) && 'click' !== h)) && (k = g[h], k || (g[h] = k = { _count: 0 }), 0 === k._count && a.addEventListener(h, this._handleNative), k[f] = (k[f] || 0) + 1, k._count = (k._count || 0) + 1);
      }a.addEventListener(b, c), d.touchAction && this.setTouchAction(a, d.touchAction);
    }, _remove: function _remove(a, b, c) {
      var d = this.gestures[b],
          e = d.deps,
          f = d.name,
          g = a[j];if (g) for (var h, k, l = 0; l < e.length; l++) {
        h = e[l], k = g[h], k && k[f] && (k[f] = (k[f] || 1) - 1, k._count = (k._count || 1) - 1, 0 === k._count && a.removeEventListener(h, this._handleNative));
      }a.removeEventListener(b, c);
    }, register: function register(a) {
      this.recognizers.push(a);for (var b = 0; b < a.emits.length; b++) {
        this.gestures[a.emits[b]] = a;
      }
    }, _findRecognizerByEvent: function _findRecognizerByEvent(a) {
      for (var b, c = 0; c < this.recognizers.length; c++) {
        b = this.recognizers[c];for (var d, e = 0; e < b.emits.length; e++) {
          if (d = b.emits[e], d === a) return b;
        }
      }return null;
    }, setTouchAction: function setTouchAction(a, b) {
      e && (a.style.touchAction = b), a[l] = b;
    }, _fire: function _fire(a, b, c) {
      var d = new Event(b, { bubbles: !0, cancelable: !0, composed: !0 });if (d.detail = c, a.dispatchEvent(d), d.defaultPrevented) {
        var e = c.preventer || c.sourceEvent;e && e.preventDefault && e.preventDefault();
      }
    }, prevent: function prevent(a) {
      var b = this._findRecognizerByEvent(a);b.info && (b.info.prevent = !0);
    }, resetMouseCanceller: function resetMouseCanceller() {
      u.mouse.mouseIgnoreJob && u.mouse.mouseIgnoreJob.flush();
    } };v.register({ name: 'downup', deps: ['mousedown', 'touchstart', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['mouseup', 'touchend'] }, emits: ['down', 'up'], info: { movefn: null, upfn: null }, reset: function reset() {
      g(this.info);
    }, mousedown: function mousedown(a) {
      if (b(a)) {
        var c = v._findOriginalTarget(a),
            d = this,
            e = function e(a) {
          b(a) || (d._fire('up', c, a), g(d.info));
        },
            h = function h(a) {
          b(a) && d._fire('up', c, a), g(d.info);
        };f(this.info, e, h), this._fire('down', c, a);
      }
    }, touchstart: function touchstart(a) {
      this._fire('down', v._findOriginalTarget(a), a.changedTouches[0], a);
    }, touchend: function touchend(a) {
      this._fire('up', v._findOriginalTarget(a), a.changedTouches[0], a);
    }, _fire: function _fire(a, b, c, d) {
      v._fire(b, a, { x: c.clientX, y: c.clientY, sourceEvent: c, preventer: d, prevent: function prevent(a) {
          return v.prevent(a);
        } });
    } }), v.register({ name: 'track', touchAction: 'none', deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['mouseup', 'touchend'] }, emits: ['track'], info: { x: 0, y: 0, state: 'start', started: !1, moves: [], addMove: function addMove(a) {
        this.moves.length > 2 && this.moves.shift(), this.moves.push(a);
      }, movefn: null, upfn: null, prevent: !1 }, reset: function reset() {
      this.info.state = 'start', this.info.started = !1, this.info.moves = [], this.info.x = 0, this.info.y = 0, this.info.prevent = !1, g(this.info);
    }, hasMovedEnough: function hasMovedEnough(a, b) {
      if (this.info.prevent) return !1;if (this.info.started) return !0;var c = h(this.info.x - a),
          d = h(this.info.y - b);return c >= m || d >= m;
    }, mousedown: function mousedown(a) {
      if (b(a)) {
        var c = v._findOriginalTarget(a),
            d = this,
            h = function h(a) {
          var e = a.clientX,
              f = a.clientY;d.hasMovedEnough(e, f) && (d.info.state = d.info.started ? 'mouseup' === a.type ? 'end' : 'track' : 'start', 'start' === d.info.state && v.prevent('tap'), d.info.addMove({ x: e, y: f }), !b(a) && (d.info.state = 'end', g(d.info)), d._fire(c, a), d.info.started = !0);
        },
            e = function e(a) {
          d.info.started && h(a), g(d.info);
        };f(this.info, h, e), this.info.x = a.clientX, this.info.y = a.clientY;
      }
    }, touchstart: function touchstart(a) {
      var b = a.changedTouches[0];this.info.x = b.clientX, this.info.y = b.clientY;
    }, touchmove: function touchmove(a) {
      var b = v._findOriginalTarget(a),
          c = a.changedTouches[0],
          d = c.clientX,
          e = c.clientY;this.hasMovedEnough(d, e) && ('start' === this.info.state && v.prevent('tap'), this.info.addMove({ x: d, y: e }), this._fire(b, c), this.info.state = 'track', this.info.started = !0);
    }, touchend: function touchend(a) {
      var b = v._findOriginalTarget(a),
          c = a.changedTouches[0];this.info.started && (this.info.state = 'end', this.info.addMove({ x: c.clientX, y: c.clientY }), this._fire(b, c, a));
    }, _fire: function _fire(a, b) {
      var c,
          d = this.info.moves[this.info.moves.length - 2],
          e = this.info.moves[this.info.moves.length - 1],
          f = e.x - this.info.x,
          g = e.y - this.info.y,
          h = 0;return d && (c = e.x - d.x, h = e.y - d.y), v._fire(a, 'track', { state: this.info.state, x: b.clientX, y: b.clientY, dx: f, dy: g, ddx: c, ddy: h, sourceEvent: b, hover: function hover() {
          return v.deepTargetFind(b.clientX, b.clientY);
        } });
    } }), v.register({ name: 'tap', deps: ['mousedown', 'click', 'touchstart', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['click', 'touchend'] }, emits: ['tap'], info: { x: NaN, y: NaN, prevent: !1 }, reset: function reset() {
      this.info.x = NaN, this.info.y = NaN, this.info.prevent = !1;
    }, save: function save(a) {
      this.info.x = a.clientX, this.info.y = a.clientY;
    }, mousedown: function mousedown(a) {
      b(a) && this.save(a);
    }, click: function click(a) {
      b(a) && this.forward(a);
    }, touchstart: function touchstart(a) {
      this.save(a.changedTouches[0], a);
    }, touchend: function touchend(a) {
      this.forward(a.changedTouches[0], a);
    }, forward: function forward(a, b) {
      var d = h(a.clientX - this.info.x),
          f = h(a.clientY - this.info.y),
          g = v._findOriginalTarget(a);(isNaN(d) || isNaN(f) || d <= i && f <= i || c(a)) && !this.info.prevent && v._fire(g, 'tap', { x: a.clientX, y: a.clientY, sourceEvent: a, preventer: b });
    } }), v.findOriginalTarget = v._findOriginalTarget, v.add = v.addListener, v.remove = v.removeListener, Polymer.Gestures = v;
})();
(function () {
  'use notstrict';
  var a = Polymer.Gestures;Polymer.GestureEventListeners = Polymer.dedupingMixin(function (b) {
    var c = function (b) {
      function c() {
        return babelHelpers.classCallCheck(this, c), babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: '_addEventListenerToNode', value: function value(b, d, e) {
          a.addListener(b, d, e) || babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), '_addEventListenerToNode', this).call(this, b, d, e);
        } }, { key: '_removeEventListenerFromNode', value: function value(b, d, e) {
          a.removeListener(b, d, e) || babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), '_removeEventListenerFromNode', this).call(this, b, d, e);
        } }]), c;
    }(b);return c;
  });
})();
(function () {
  'use notstrict';
  function a(a) {
    window.HTMLImports ? HTMLImports.whenReady(a) : a();
  }Polymer.importHref = function (b, c, d, e) {
    var f = document.head.querySelector('link[href="' + b + '"][import-href]');f || (f = document.createElement('link'), f.rel = 'import', f.href = b, f.setAttribute('import-href', '')), e && f.setAttribute('async', '');var g = function g() {
      f.removeEventListener('load', h), f.removeEventListener('error', i);
    },
        h = function h(b) {
      g(), f.__dynamicImportLoaded = !0, c && a(function () {
        c(b);
      });
    },
        i = function i(b) {
      g(), f.parentNode && f.parentNode.removeChild(f), d && a(function () {
        d(b);
      });
    };return f.addEventListener('load', h), f.addEventListener('error', i), null == f.parentNode ? document.head.appendChild(f) : f.__dynamicImportLoaded && f.dispatchEvent(new Event('load')), f;
  };
})();
(function () {
  'use notstrict';
  function a() {
    e = !0, requestAnimationFrame(function () {
      e = !1, b(f), setTimeout(function () {
        c(g);
      });
    });
  }function b(a) {
    for (; a.length;) {
      d(a.shift());
    }
  }function c(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      d(a.shift());
    }
  }function d(a) {
    var b = a[0],
        c = a[1],
        d = a[2];try {
      c.apply(b, d);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }var e = !1,
      f = [],
      g = [];Polymer.RenderStatus = { beforeNextRender: function beforeNextRender(b, c, d) {
      e || a(), f.push([b, c, d]);
    }, afterNextRender: function afterNextRender(b, c, d) {
      e || a(), g.push([b, c, d]);
    }, flush: function flush() {
      for (; f.length || g.length;) {
        b(f), b(g);
      }e = !1;
    } };
})();
(function () {
  'use notstrict';
  function a() {
    document.body.removeAttribute('unresolved');
  }window.WebComponents ? window.addEventListener('WebComponentsReady', a) : 'interactive' === document.readyState || 'complete' === document.readyState ? a() : window.addEventListener('DOMContentLoaded', a);
})();
(function () {
  'use notstrict';
  function a(a, b, c) {
    return { index: a, removed: b, addedCount: c };
  }var b = 0,
      c = 1,
      d = 2,
      e = 3,
      f = { calcEditDistances: function calcEditDistances(a, b, c, d, e, f) {
      for (var g = f - e + 1, h = c - b + 1, k = Array(g), l = 0; l < g; l++) {
        k[l] = Array(h), k[l][0] = l;
      }for (var i = 0; i < h; i++) {
        k[0][i] = i;
      }for (var j = 1; j < g; j++) {
        for (var m = 1; m < h; m++) {
          if (this.equals(a[b + m - 1], d[e + j - 1])) k[j][m] = k[j - 1][m - 1];else {
            var n = k[j - 1][m] + 1,
                o = k[j][m - 1] + 1;k[j][m] = n < o ? n : o;
          }
        }
      }return k;
    }, spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(a) {
      for (var f = a.length - 1, g = a[0].length - 1, h = a[f][g], i = []; 0 < f || 0 < g;) {
        if (0 == f) {
          i.push(d), g--;continue;
        }if (0 == g) {
          i.push(e), f--;continue;
        }var j = a[f - 1][g - 1],
            k = a[f - 1][g],
            l = a[f][g - 1],
            m = void 0;m = k < l ? k < j ? k : j : l < j ? l : j, m == j ? (j == h ? i.push(b) : (i.push(c), h = j), f--, g--) : m == k ? (i.push(e), f--, h = k) : (i.push(d), g--, h = l);
      }return i.reverse(), i;
    }, calcSplices: function calcSplices(f, g, h, j, k, l) {
      var m,
          n = 0,
          o = 0,
          p = Math.min(h - g, l - k);if (0 == g && 0 == k && (n = this.sharedPrefix(f, j, p)), h == f.length && l == j.length && (o = this.sharedSuffix(f, j, p - n)), g += n, k += n, h -= o, l -= o, 0 == h - g && 0 == l - k) return [];if (g == h) {
        for (m = a(g, [], 0); k < l;) {
          m.removed.push(j[k++]);
        }return [m];
      }if (k == l) return [a(g, [], h - g)];var q = this.spliceOperationsFromEditDistances(this.calcEditDistances(f, g, h, j, k, l));m = void 0;for (var r = [], s = g, t = k, u = 0; u < q.length; u++) {
        switch (q[u]) {case b:
            m && (r.push(m), m = void 0), s++, t++;break;case c:
            m || (m = a(s, [], 0)), m.addedCount++, s++, m.removed.push(j[t]), t++;break;case d:
            m || (m = a(s, [], 0)), m.addedCount++, s++;break;case e:
            m || (m = a(s, [], 0)), m.removed.push(j[t]), t++;}
      }return m && r.push(m), r;
    }, sharedPrefix: function sharedPrefix(a, b, c) {
      for (var d = 0; d < c; d++) {
        if (!this.equals(a[d], b[d])) return d;
      }return c;
    }, sharedSuffix: function sharedSuffix(a, b, c) {
      for (var d = a.length, e = b.length, f = 0; f < c && this.equals(a[--d], b[--e]);) {
        f++;
      }return f;
    }, calculateSplices: function calculateSplices(a, b) {
      return this.calcSplices(a, 0, a.length, b, 0, b.length);
    }, equals: function equals(a, b) {
      return a === b;
    } };Polymer.ArraySplice = { calculateSplices: function calculateSplices(a, b) {
      return f.calculateSplices(a, b);
    } };
})();
(function () {
  'use notstrict';
  function a(a) {
    return 'slot' === a.localName;
  }var b = function () {
    function b(a, c) {
      var d = this;babelHelpers.classCallCheck(this, b), this._shadyChildrenObserver = null, this._nativeChildrenObserver = null, this._connected = !1, this._target = a, this.callback = c, this._effectiveNodes = [], this._observer = null, this._scheduled = !1, this._boundSchedule = function () {
        d._schedule();
      }, this.connect(), this._schedule();
    }return babelHelpers.createClass(b, null, [{ key: 'getFlattenedNodes', value: function value(b) {
        return a(b) ? b.assignedNodes({ flatten: !0 }) : Array.from(b.childNodes).map(function (b) {
          return a(b) ? b.assignedNodes({ flatten: !0 }) : [b];
        }).reduce(function (c, a) {
          return c.concat(a);
        }, []);
      } }]), babelHelpers.createClass(b, [{ key: 'connect', value: function value() {
        var b = this;a(this._target) ? this._listenSlots([this._target]) : (this._listenSlots(this._target.children), window.ShadyDOM ? this._shadyChildrenObserver = ShadyDOM.observeChildren(this._target, function (a) {
          b._processMutations(a);
        }) : (this._nativeChildrenObserver = new MutationObserver(function (a) {
          b._processMutations(a);
        }), this._nativeChildrenObserver.observe(this._target, { childList: !0 }))), this._connected = !0;
      } }, { key: 'disconnect', value: function value() {
        a(this._target) ? this._unlistenSlots([this._target]) : (this._unlistenSlots(this._target.children), window.ShadyDOM && this._shadyChildrenObserver ? (ShadyDOM.unobserveChildren(this._shadyChildrenObserver), this._shadyChildrenObserver = null) : this._nativeChildrenObserver && (this._nativeChildrenObserver.disconnect(), this._nativeChildrenObserver = null)), this._connected = !1;
      } }, { key: '_schedule', value: function value() {
        var a = this;this._scheduled || (this._scheduled = !0, Polymer.Async.microTask.run(function () {
          return a.flush();
        }));
      } }, { key: '_processMutations', value: function value(a) {
        this._processSlotMutations(a), this.flush();
      } }, { key: '_processSlotMutations', value: function value(a) {
        if (a) for (var b, c = 0; c < a.length; c++) {
          b = a[c], b.addedNodes && this._listenSlots(b.addedNodes), b.removedNodes && this._unlistenSlots(b.removedNodes);
        }
      } }, { key: 'flush', value: function value() {
        if (this._connected) {
          window.ShadyDOM && ShadyDOM.flush(), this._nativeChildrenObserver ? this._processSlotMutations(this._nativeChildrenObserver.takeRecords()) : this.shadyChildrenObserver && this._processSlotMutations(this._shadyChildrenObserver.takeRecords()), this._scheduled = !1;for (var a, b = { target: this._target, addedNodes: [], removedNodes: [] }, c = this.constructor.getFlattenedNodes(this._target), d = Polymer.ArraySplice.calculateSplices(c, this._effectiveNodes), e = 0; e < d.length && (a = d[e]); e++) {
            for (var f, g = 0; g < a.removed.length && (f = a.removed[g]); g++) {
              b.removedNodes.push(f);
            }
          }for (var h, i = 0; i < d.length && (h = d[i]); i++) {
            for (var j = h.index; j < h.index + h.addedCount; j++) {
              b.addedNodes.push(c[j]);
            }
          }this._effectiveNodes = c;var k = !1;return (b.addedNodes.length || b.removedNodes.length) && (k = !0, this.callback.call(this._target, b)), k;
        }
      } }, { key: '_listenSlots', value: function value(b) {
        for (var c, d = 0; d < b.length; d++) {
          c = b[d], a(c) && c.addEventListener('slotchange', this._boundSchedule);
        }
      } }, { key: '_unlistenSlots', value: function value(b) {
        for (var c, d = 0; d < b.length; d++) {
          c = b[d], a(c) && c.removeEventListener('slotchange', this._boundSchedule);
        }
      } }]), b;
  }();Polymer.FlattenedNodesObserver = b;
})();
(function () {
  'use notstrict';
  function a() {
    for (var a = !!b.length; b.length;) {
      try {
        b.shift().flush();
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }return a;
  }var b = [];Polymer.enqueueDebouncer = function (a) {
    b.push(a);
  }, Polymer.flush = function () {
    var b, c;do {
      b = window.ShadyDOM && ShadyDOM.flush(), window.ShadyCSS && window.ShadyCSS.ScopingShim && window.ShadyCSS.ScopingShim.flush(), c = a();
    } while (b || c);
  };
})();
(function () {
  'use notstrict';
  var a = Element.prototype,
      b = a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector,
      d = function d(a, c) {
    return b.call(a, c);
  },
      c = function () {
    function a(b) {
      babelHelpers.classCallCheck(this, a), this.node = b;
    }return babelHelpers.createClass(a, [{ key: 'observeNodes', value: function value(a) {
        return new Polymer.FlattenedNodesObserver(this.node, a);
      } }, { key: 'unobserveNodes', value: function value(a) {
        a.disconnect();
      } }, { key: 'notifyObserver', value: function value() {} }, { key: 'deepContains', value: function value(a) {
        if (this.node.contains(a)) return !0;for (var b = a, c = a.ownerDocument; b && b !== c && b !== this.node;) {
          b = b.parentNode || b.host;
        }return b === this.node;
      } }, { key: 'getOwnerRoot', value: function value() {
        return this.node.getRootNode();
      } }, { key: 'getDistributedNodes', value: function value() {
        return 'slot' === this.node.localName ? this.node.assignedNodes({ flatten: !0 }) : [];
      } }, { key: 'getDestinationInsertionPoints', value: function value() {
        for (var a = [], b = this.node.assignedSlot; b;) {
          a.push(b), b = b.assignedSlot;
        }return a;
      } }, { key: 'importNode', value: function value(a, b) {
        var c = this.node instanceof Document ? this.node : this.node.ownerDocument;return c.importNode(a, b);
      } }, { key: 'getEffectiveChildNodes', value: function value() {
        return Polymer.FlattenedNodesObserver.getFlattenedNodes(this.node);
      } }, { key: 'queryDistributedElements', value: function value(a) {
        for (var b, c = this.getEffectiveChildNodes(), e = [], f = 0, g = c.length; f < g && (b = c[f]); f++) {
          b.nodeType === Node.ELEMENT_NODE && d(b, a) && e.push(b);
        }return e;
      } }, { key: 'activeElement', get: function get() {
        var a = this.node;return void 0 === a._activeElement ? a.activeElement : a._activeElement;
      } }]), a;
  }();(function (a, b) {
    for (var c = function c(_c) {
      var d = b[_c];a[d] = function () {
        return this.node[d].apply(this.node, arguments);
      };
    }, d = 0; d < b.length; d++) {
      c(d);
    }
  })(c.prototype, ['cloneNode', 'appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'setAttribute', 'removeAttribute', 'querySelector', 'querySelectorAll']), function (a, b) {
    for (var c = function c(_c2) {
      var d = b[_c2];Object.defineProperty(a, d, { get: function get() {
          return this.node[d];
        }, configurable: !0 });
    }, d = 0; d < b.length; d++) {
      c(d);
    }
  }(c.prototype, ['parentNode', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'firstElementChild', 'lastElementChild', 'nextElementSibling', 'previousElementSibling', 'childNodes', 'children', 'classList']), function (a, b) {
    for (var c = function c(_c3) {
      var d = b[_c3];Object.defineProperty(a, d, { get: function get() {
          return this.node[d];
        }, set: function set(a) {
          this.node[d] = a;
        }, configurable: !0 });
    }, d = 0; d < b.length; d++) {
      c(d);
    }
  }(c.prototype, ['textContent', 'innerHTML']);var e = function () {
    function a(b) {
      babelHelpers.classCallCheck(this, a), this.event = b;
    }return babelHelpers.createClass(a, [{ key: 'rootTarget', get: function get() {
        return this.event.composedPath()[0];
      } }, { key: 'localTarget', get: function get() {
        return this.event.target;
      } }, { key: 'path', get: function get() {
        return this.event.composedPath();
      } }]), a;
  }();Polymer.dom = function (a) {
    a = a || document;var b = a instanceof Event ? e : c;return a.__domApi || (a.__domApi = new b(a)), a.__domApi;
  }, Polymer.dom.matchesSelector = d, Polymer.dom.flush = Polymer.flush, Polymer.dom.addDebouncer = Polymer.enqueueDebouncer;var f = Polymer.Settings || {};f.useShadow = !window.ShadyDOM, f.useNativeCSSProperties = !(window.ShadyCSS && !window.ShadyCSS.nativeCss), f.useNativeCustomElements = !window.customElements.polyfillWrapFlushCallback, Polymer.Settings = f;
})();
(function () {
  'use notstrict';
  var a = window.ShadyCSS;Polymer.LegacyElementMixin = Polymer.dedupingMixin(function (b) {
    var c = Polymer.GestureEventListeners(Polymer.ElementMixin(b)),
        d = { x: 'pan-x', y: 'pan-y', none: 'none', all: 'auto' },
        e = function (b) {
      function c() {
        babelHelpers.classCallCheck(this, c);var a = babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));return a.root = a, a.created(), a;
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: 'created', value: function value() {} }, { key: 'connectedCallback', value: function value() {
          babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'connectedCallback', this).call(this), this.isAttached = !0, this.attached();
        } }, { key: 'attached', value: function value() {} }, { key: 'disconnectedCallback', value: function value() {
          babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'disconnectedCallback', this).call(this), this.isAttached = !1, this.detached();
        } }, { key: 'detached', value: function value() {} }, { key: 'attributeChangedCallback', value: function value(a, b, d) {
          b !== d && (babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'attributeChangedCallback', this).call(this, a, b, d), this.attributeChanged(a, b, d));
        } }, { key: 'attributeChanged', value: function value() {} }, { key: '_initializeProperties', value: function value() {
          var a = Object.getPrototypeOf(this);a.hasOwnProperty('__hasRegisterFinished') || (a.__hasRegisterFinished = !0, this._registered()), babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), '_initializeProperties', this).call(this);
        } }, { key: '_registered', value: function value() {} }, { key: 'ready', value: function value() {
          this._ensureAttributes(), this._applyListeners(), babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'ready', this).call(this);
        } }, { key: '_ensureAttributes', value: function value() {} }, { key: '_applyListeners', value: function value() {} }, { key: 'serialize', value: function value(a) {
          return this._serializeValue(a);
        } }, { key: 'deserialize', value: function value(a, b) {
          return this._deserializeValue(a, b);
        } }, { key: 'reflectPropertyToAttribute', value: function value(a, b, c) {
          this._propertyToAttribute(a, b, c);
        } }, { key: 'serializeValueToAttribute', value: function value(a, b, c) {
          this._valueToNodeAttribute(c || this, a, b);
        } }, { key: 'extend', value: function value(a, b) {
          if (!(a && b)) return a || b;for (var c, d, e = Object.getOwnPropertyNames(b), f = 0; f < e.length && (c = e[f]); f++) {
            d = Object.getOwnPropertyDescriptor(b, c), d && Object.defineProperty(a, c, d);
          }return a;
        } }, { key: 'mixin', value: function value(a, b) {
          for (var c in b) {
            a[c] = b[c];
          }return a;
        } }, { key: 'chainObject', value: function value(a, b) {
          return a && b && a !== b && (a.__proto__ = b), a;
        } }, { key: 'instanceTemplate', value: function value(a) {
          var b = this.constructor._contentForTemplate(a),
              c = document.importNode(b, !0);return c;
        } }, { key: 'fire', value: function value(a, b, c) {
          c = c || {}, b = null === b || void 0 === b ? {} : b;var d = new Event(a, { bubbles: void 0 === c.bubbles || c.bubbles, cancelable: !!c.cancelable, composed: void 0 === c.composed || c.composed });d.detail = b;var e = c.node || this;return e.dispatchEvent(d), d;
        } }, { key: 'listen', value: function value(a, b, c) {
          a = a || this;var d = this.__boundListeners || (this.__boundListeners = new WeakMap()),
              e = d.get(a);e || (e = {}, d.set(a, e));var f = b + c;e[f] || (e[f] = this._addMethodEventListenerToNode(a, b, c, this));
        } }, { key: 'unlisten', value: function value(a, b, c) {
          a = a || this;var d = this.__boundListeners && this.__boundListeners.get(a),
              e = b + c,
              f = d && d[e];f && (this._removeEventListenerFromNode(a, b, f), d[e] = null);
        } }, { key: 'setScrollDirection', value: function value(a, b) {
          Polymer.Gestures.setTouchAction(b || this, d[a] || 'auto');
        } }, { key: '$$', value: function value(a) {
          return this.root.querySelector(a);
        } }, { key: 'distributeContent', value: function value() {
          window.ShadyDOM && this.shadowRoot && this.shadowRoot.forceRender();
        } }, { key: 'getEffectiveChildNodes', value: function value() {
          return Polymer.dom(this).getEffectiveChildNodes();
        } }, { key: 'queryDistributedElements', value: function value(a) {
          return Polymer.dom(this).queryDistributedElements(a);
        } }, { key: 'getEffectiveChildren', value: function value() {
          var a = this.getEffectiveChildNodes();return a.filter(function (a) {
            return a.nodeType === Node.ELEMENT_NODE;
          });
        } }, { key: 'getEffectiveTextContent', value: function value() {
          for (var a, b = this.getEffectiveChildNodes(), c = [], d = 0; a = b[d]; d++) {
            a.nodeType !== Node.COMMENT_NODE && c.push(a.textContent);
          }return c.join('');
        } }, { key: 'queryEffectiveChildren', value: function value(a) {
          var b = this.queryDistributedElements(a);return b && b[0];
        } }, { key: 'queryAllEffectiveChildren', value: function value(a) {
          return this.queryDistributedElements(a);
        } }, { key: 'getContentChildNodes', value: function value(a) {
          var b = this.root.querySelector(a || 'slot');return b ? Polymer.dom(b).getDistributedNodes() : [];
        } }, { key: 'getContentChildren', value: function value(a) {
          return this.getContentChildNodes(a).filter(function (a) {
            return a.nodeType === Node.ELEMENT_NODE;
          });
        } }, { key: 'isLightDescendant', value: function value(a) {
          return this !== a && this.contains(a) && this.getRootNode() === a.getRootNode();
        } }, { key: 'isLocalDescendant', value: function value(a) {
          return this.root === a.getRootNode();
        } }, { key: 'scopeSubtree', value: function value() {} }, { key: 'getComputedStyleValue', value: function value(b) {
          return a.getComputedStyleValue(this, b);
        } }, { key: 'debounce', value: function value(a, b, c) {
          return this._debouncers = this._debouncers || {}, this._debouncers[a] = Polymer.Debouncer.debounce(this._debouncers[a], 0 < c ? Polymer.Async.timeOut.after(c) : Polymer.Async.microTask, b.bind(this));
        } }, { key: 'isDebouncerActive', value: function value(a) {
          this._debouncers = this._debouncers || {};var b = this._debouncers[a];return !!(b && b.isActive());
        } }, { key: 'flushDebouncer', value: function value(a) {
          this._debouncers = this._debouncers || {};var b = this._debouncers[a];b && b.flush();
        } }, { key: 'cancelDebouncer', value: function value(a) {
          this._debouncers = this._debouncers || {};var b = this._debouncers[a];b && b.cancel();
        } }, { key: 'async', value: function value(a, b) {
          return 0 < b ? Polymer.Async.timeOut.run(a.bind(this), b) : ~Polymer.Async.microTask.run(a.bind(this));
        } }, { key: 'cancelAsync', value: function value(a) {
          0 > a ? Polymer.Async.microTask.cancel(~a) : Polymer.Async.timeOut.cancel(a);
        } }, { key: 'create', value: function value(a, b) {
          var c = document.createElement(a);if (b) if (c.setProperties) c.setProperties(b);else for (var d in b) {
            c[d] = b[d];
          }return c;
        } }, { key: 'importHref', value: function value(a, b, c, d) {
          var e = b ? b.bind(this) : null,
              f = c ? c.bind(this) : null;return Polymer.importHref(a, e, f, d);
        } }, { key: 'elementMatches', value: function value(a, b) {
          return Polymer.dom.matchesSelector(b || this, a);
        } }, { key: 'toggleAttribute', value: function value(a, b, c) {
          c = c || this, 1 == arguments.length && (b = !c.hasAttribute(a)), b ? c.setAttribute(a, '') : c.removeAttribute(a);
        } }, { key: 'toggleClass', value: function value(a, b, c) {
          c = c || this, 1 == arguments.length && (b = !c.classList.contains(a)), b ? c.classList.add(a) : c.classList.remove(a);
        } }, { key: 'transform', value: function value(a, b) {
          b = b || this, b.style.webkitTransform = a, b.style.transform = a;
        } }, { key: 'translate3d', value: function value(a, b, c, d) {
          d = d || this, this.transform('translate3d(' + a + ',' + b + ',' + c + ')', d);
        } }, { key: 'arrayDelete', value: function value(a, b) {
          var c;if (!Array.isArray(a)) {
            var d = Polymer.Path.get(this, a);if (c = d.indexOf(b), 0 <= c) return this.splice(a, c, 1);
          } else if (c = a.indexOf(b), 0 <= c) return a.splice(c, 1);return null;
        } }, { key: '_logger', value: function value(a, b) {
          var c;Array.isArray(b) && 1 === b.length && (b = b[0]), 'log' === a || 'warn' === a || 'error' === a ? (c = console)[a].apply(c, babelHelpers.toConsumableArray(b)) : void 0;
        } }, { key: '_log', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }this._logger('log', b);
        } }, { key: '_warn', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }this._logger('warn', b);
        } }, { key: '_error', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }this._logger('error', b);
        } }, { key: '_logf', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }return ['[%s::%s]', this.is].concat(b);
        } }, { key: 'domHost', get: function get() {
          var a = this.getRootNode();return a instanceof DocumentFragment ? a.host : a;
        } }]), c;
    }(c);return e;
  });
})();
(function () {
  'use notstrict';
  function a(a, e) {
    if (!a) return e;e = b(e), Array.isArray(a) || (a = [a]);var f = e.prototype.behaviors;return a = d(a, null, f), e = c(a, e), f && (a = f.concat(a)), e.prototype.behaviors = a, e;
  }function c(a, d) {
    for (var f, b = 0; b < a.length; b++) {
      f = a[b], f && (d = Array.isArray(f) ? c(f, d) : e(f, d));
    }return d;
  }function d(a, c, e) {
    c = c || [];for (var f, b = a.length - 1; 0 <= b; b--) {
      f = a[b], f ? Array.isArray(f) ? d(f, c) : 0 > c.indexOf(f) && (!e || 0 > e.indexOf(f)) && c.unshift(f) : console.warn('behavior is null, check for missing or 404 import');
    }return c;
  }function e(b, a) {
    var c = function (c) {
      function d() {
        return babelHelpers.classCallCheck(this, d), babelHelpers.possibleConstructorReturn(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments));
      }return babelHelpers.inherits(d, c), babelHelpers.createClass(d, [{ key: 'created', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'created', this).call(this), b.created && b.created.call(this);
        } }, { key: '_registered', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), '_registered', this).call(this), b.beforeRegister && b.beforeRegister.call(Object.getPrototypeOf(this)), b.registered && b.registered.call(Object.getPrototypeOf(this));
        } }, { key: '_applyListeners', value: function value() {
          if (babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), '_applyListeners', this).call(this), b.listeners) for (var a in b.listeners) {
            this._addMethodEventListenerToNode(this, a, b.listeners[a]);
          }
        } }, { key: '_ensureAttributes', value: function value() {
          if (b.hostAttributes) for (var c in b.hostAttributes) {
            this._ensureAttribute(c, b.hostAttributes[c]);
          }babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), '_ensureAttributes', this).call(this);
        } }, { key: 'ready', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'ready', this).call(this), b.ready && b.ready.call(this);
        } }, { key: 'attached', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'attached', this).call(this), b.attached && b.attached.call(this);
        } }, { key: 'detached', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'detached', this).call(this), b.detached && b.detached.call(this);
        } }, { key: 'attributeChanged', value: function value(a, c, e) {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'attributeChanged', this).call(this, a, c, e), b.attributeChanged && b.attributeChanged.call(this, a, c, e);
        } }], [{ key: 'properties', get: function get() {
          return b.properties;
        } }, { key: 'observers', get: function get() {
          return b.observers;
        } }, { key: 'template', get: function get() {
          return b._template || Polymer.DomModule['import'](this.is, 'template') || a.template || this.prototype._template;
        } }]), d;
    }(a);for (var d in c.generatedFrom = b, b) {
      if (!(d in f)) {
        var e = Object.getOwnPropertyDescriptor(b, d);e && Object.defineProperty(c.prototype, d, e);
      }
    }return c;
  }var b = Polymer.LegacyElementMixin,
      f = { attached: !0, detached: !0, ready: !0, created: !0, beforeRegister: !0, registered: !0, attributeChanged: !0, behaviors: !0 };Polymer.Class = function (c) {
    c || console.warn('Polymer.Class requires `info` argument');var d = e(c, c.behaviors ? a(c.behaviors, HTMLElement) : b(HTMLElement));return d.is = c.is, d;
  }, Polymer.mixinBehaviors = a;
})();
'use notstrict';var IE = function () {
  function a() {}return a.is = 'install-error', a;
}();window.objectify ? window.register(IE) : window.addEventListener('RegisterReady', function () {
  window.register(IE);
});
(function () {
  'use notstrict';
  window.Polymer._polymerFn = function (a) {
    var b;return b = 'function' === typeof a ? a : Polymer.Class(a), customElements.define(b.is, b), b;
  };
})();
(function () {
  'use notstrict';
  function a(a, b, c, d, e) {
    var f;e && (f = 'object' === ('undefined' === typeof c ? 'undefined' : babelHelpers['typeof'](c)) && null !== c, f && (d = a.__dataTemp[b]));var g = d !== c && (d === d || c === c);return f && g && (a.__dataTemp[b] = c), g;
  }Polymer.MutableData = Polymer.dedupingMixin(function (b) {
    var c = function (b) {
      function c() {
        return babelHelpers.classCallCheck(this, c), babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: '_shouldPropertyChange', value: function value(b, c, d) {
          return a(this, b, c, d, !0);
        } }]), c;
    }(b);return c;
  }), Polymer.OptionalMutableData = Polymer.dedupingMixin(function (b) {
    var c = function (b) {
      function c() {
        return babelHelpers.classCallCheck(this, c), babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: '_shouldPropertyChange', value: function value(b, c, d) {
          return a(this, b, c, d, this.mutableData);
        } }], [{ key: 'properties', get: function get() {
          return { mutableData: Boolean };
        } }]), c;
    }(b);return c;
  }), Polymer.MutableData._mutablePropertyChange = a;
})();
(function () {
  'use notstrict';
  function a() {
    return j;
  }function b(a, b) {
    j = a, typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](a,b.prototype):a.__proto__ = b.prototype, new b(), j = null;
  }function c(a) {
    var b = a.__dataHost;return b && b._methodHost || b;
  }function d(a, b, c) {
    var d = c.mutableData ? o : n,
        e = function (a) {
      function b() {
        return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
      }return babelHelpers.inherits(b, a), b;
    }(d);return e.prototype.__templatizeOptions = c, e.prototype._bindTemplate(a), g(e, a, b, c), e;
  }function e(a, c, d) {
    var e = d.forwardHostProp;if (e) {
      var g = c.templatizeTemplateClass;if (!g) {
        var h = d.mutableData ? l : k;g = c.templatizeTemplateClass = function (a) {
          function b() {
            return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
          }return babelHelpers.inherits(b, a), b;
        }(h);var i = c.hostProps;for (var j in i) {
          g.prototype._addPropertyEffect('_host_' + j, g.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, { fn: f(j, e) }), g.prototype._createNotifyingProperty('_host_' + j);
        }
      }b(a, g), a.__dataProto && Object.assign(a.__data, a.__dataProto), a.__dataTemp = {}, a.__dataPending = null, a.__dataOld = null, a._enableProperties();
    }
  }function f(a, b) {
    return function (a, c, d) {
      b.call(a.__templatizeOwner, c.substring(6), d[c]);
    };
  }function g(a, b, c, d) {
    var e = c.hostProps || {};for (var f in d.instanceProps) {
      delete e[f];var g = d.notifyInstanceProp;g && a.prototype._addPropertyEffect(f, a.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: h(f, g) });
    }if (d.forwardHostProp && b.__dataHost) for (var j in e) {
      a.prototype._addPropertyEffect(j, a.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: i() });
    }
  }function h(a, b) {
    return function (a, c, d) {
      b.call(a.__templatizeOwner, a, c, d[c]);
    };
  }function i() {
    return function (a, b, c) {
      a.__dataHost._setPendingPropertyOrPath('_host_' + b, c[b], !0, !0);
    };
  }var j = null;a.prototype = Object.create(HTMLTemplateElement.prototype, { constructor: { value: a, writable: !0 } });var k = Polymer.PropertyEffects(a),
      l = Polymer.MutableData(k),
      m = Polymer.PropertyEffects(function () {
    function a() {
      babelHelpers.classCallCheck(this, a);
    }return a;
  }()),
      n = function (a) {
    function b(a) {
      babelHelpers.classCallCheck(this, b);var c = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));c._configureProperties(a), c.root = c._stampTemplate(c.__dataHost);for (var d = c.children = [], e = c.root.firstChild; e; e = e.nextSibling) {
        d.push(e), e.__templatizeInstance = c;
      }c.__templatizeOwner.__hideTemplateChildren__ && c._showHideChildren(!0);var f = c.__templatizeOptions;return (a && f.instanceProps || !f.instanceProps) && c._enableProperties(), c;
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, [{ key: '_configureProperties', value: function value(a) {
        var b = this.__templatizeOptions;if (a) for (var c in b.instanceProps) {
          c in a && this._setPendingProperty(c, a[c]);
        }for (var d in this.__hostProps) {
          this._setPendingProperty(d, this.__dataHost['_host_' + d]);
        }
      } }, { key: 'forwardHostProp', value: function value(a, b) {
        this._setPendingPropertyOrPath(a, b, !1, !0) && this.__dataHost._enqueueClient(this);
      } }, { key: '_addEventListenerToNode', value: function value(a, b, c) {
        var d = this;if (this._methodHost && this.__templatizeOptions.parentModel) this._methodHost._addEventListenerToNode(a, b, function (a) {
          a.model = d, c(a);
        });else {
          var e = this.__dataHost.__dataHost;e && e._addEventListenerToNode(a, b, c);
        }
      } }, { key: '_showHideChildren', value: function value(a) {
        for (var b, d = this.children, c = 0; c < d.length; c++) {
          b = d[c], !!a != !!b.__hideTemplateChildren__ && (b.nodeType === Node.TEXT_NODE ? a ? (b.__polymerTextContent__ = b.textContent, b.textContent = '') : b.textContent = b.__polymerTextContent__ : b.style && (a ? (b.__polymerDisplay__ = b.style.display, b.style.display = 'none') : b.style.display = b.__polymerDisplay__)), b.__hideTemplateChildren__ = a, b._showHideChildren && b._showHideChildren(a);
        }
      } }, { key: '_setUnmanagedPropertyToNode', value: function value(a, c, d) {
        a.__hideTemplateChildren__ && a.nodeType == Node.TEXT_NODE && 'textContent' == c ? a.__polymerTextContent__ = d : babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), '_setUnmanagedPropertyToNode', this).call(this, a, c, d);
      } }, { key: 'parentModel', get: function get() {
        var a = this.__parentModel;if (!a) {
          var b;a = this;do {
            a = a.__dataHost.__dataHost;
          } while ((b = a.__templatizeOptions) && !b.parentModel);this.__parentModel = a;
        }return a;
      } }]), b;
  }(m),
      o = Polymer.MutableData(n);Polymer.Templatize = { templatize: function templatize(a, b, f) {
      if (f = f || {}, a.__templatizeOwner) throw new Error('A <template> can only be templatized once');a.__templatizeOwner = b;var g = b.constructor._parseTemplate(a),
          h = g.templatizeInstanceClass;h || (h = d(a, g, f), g.templatizeInstanceClass = h), e(a, g, f);var i = function (a) {
        function b() {
          return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
        }return babelHelpers.inherits(b, a), b;
      }(h);return i.prototype._methodHost = c(a), i.prototype.__dataHost = a, i.prototype.__templatizeOwner = b, i.prototype.__hostProps = g.hostProps, i;
    }, modelForElement: function modelForElement(a, b) {
      for (var c; b;) {
        if (!(c = b.__templatizeInstance)) b = b.parentNode;else if (c.__dataHost != a) b = c.__dataHost;else return c;
      }return null;
    } };
})();
(function () {
  'use notstrict';
  Polymer.Templatizer = { templatize: function templatize(a, b) {
      this._templatizerTemplate = a, this.ctor = Polymer.Templatize.templatize(a, this, { mutableData: !!b, parentModel: this._parentModel, instanceProps: this._instanceProps, forwardHostProp: this._forwardHostPropV2, notifyInstanceProp: this._notifyInstancePropV2 });
    }, stamp: function stamp(a) {
      return new this.ctor(a);
    }, modelForElement: function modelForElement(a) {
      return Polymer.Templatize.modelForElement(this._templatizerTemplate, a);
    } };
})();
(function () {
  'use notstrict';
  var a = Polymer.GestureEventListeners(Polymer.OptionalMutableData(Polymer.PropertyEffects(HTMLElement))),
      b = function (a) {
    function b() {
      return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, [{ key: 'attributeChangedCallback', value: function value() {
        this.mutableData = !0;
      } }, { key: 'connectedCallback', value: function value() {
        this.render();
      } }, { key: 'disconnectedCallback', value: function value() {
        this.__removeChildren();
      } }, { key: '__insertChildren', value: function value() {
        this.parentNode.insertBefore(this.root, this);
      } }, { key: '__removeChildren', value: function value() {
        if (this.__children) for (var a = 0; a < this.__children.length; a++) {
          this.root.appendChild(this.__children[a]);
        }
      } }, { key: 'render', value: function value() {
        var a,
            b = this;if (!this.__children) {
          if (a = a || this.querySelector('template'), !a) {
            var c = new MutationObserver(function () {
              if (a = b.querySelector('template'), a) c.disconnect(), b.render(a);else throw new Error('dom-bind requires a <template> child');
            });return void c.observe(this, { childList: !0 });
          }this.root = this._stampTemplate(a), this.$ = this.root.$, this.__children = [];for (var d = this.root.firstChild; d; d = d.nextSibling) {
            this.__children[this.__children.length] = d;
          }this._enableProperties();
        }this.__insertChildren(), this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 }));
      } }], [{ key: 'observedAttributes', get: function get() {
        return ['mutable-data'];
      } }]), b;
  }(a);customElements.define('dom-bind', b);
})();
(function () {
  'use notstrict';
  var a = Polymer.ElementMixin(HTMLElement);Polymer.Element = a;
})();
(function () {
  'use notstrict';
  var a = Polymer.OptionalMutableData(Polymer.Element),
      b = function (a) {
    function b() {
      babelHelpers.classCallCheck(this, b);var a = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.__instances = [], a.__limit = Infinity, a.__pool = [], a.__renderDebouncer = null, a.__itemsIdxToInstIdx = {}, a.__chunkCount = null, a.__lastChunkTime = null, a.__needFullRefresh = !1, a.__sortFn = null, a.__filterFn = null, a.__observePaths = null, a.__ctor = null, a;
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'is', get: function get() {
        return 'dom-repeat';
      } }, { key: 'template', get: function get() {
        return null;
      } }, { key: 'properties', get: function get() {
        return { items: { type: Array }, as: { type: String, value: 'item' }, indexAs: { type: String, value: 'index' }, itemsIndexAs: { type: String, value: 'itemsIndex' }, sort: { type: Function, observer: '__sortChanged' }, filter: { type: Function, observer: '__filterChanged' }, observe: { type: String, observer: '__observeChanged' }, delay: Number, renderedItemCount: { type: Number, notify: !0, readOnly: !0 }, initialCount: { type: Number, observer: '__initializeChunking' }, targetFramerate: { type: Number, value: 20 }, _targetFrameTime: { type: Number, computed: '__computeFrameTime(targetFramerate)' } };
      } }, { key: 'observers', get: function get() {
        return ['__itemsChanged(items.*)'];
      } }]), babelHelpers.createClass(b, [{ key: 'disconnectedCallback', value: function value() {
        babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'disconnectedCallback', this).call(this), this.__isDetached = !0;for (var a = 0; a < this.__instances.length; a++) {
          this.__detachInstance(a);
        }
      } }, { key: 'connectedCallback', value: function value() {
        if (babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'connectedCallback', this).call(this), this.__isDetached) {
          this.__isDetached = !1;for (var a = this.parentNode, c = 0; c < this.__instances.length; c++) {
            this.__attachInstance(c, a);
          }
        }
      } }, { key: '__ensureTemplatized', value: function value() {
        var a = this;if (!this.__ctor) {
          var b = this.template = this.querySelector('template');if (!b) {
            var c = new MutationObserver(function () {
              if (a.querySelector('template')) c.disconnect(), a.__render();else throw new Error('dom-repeat requires a <template> child');
            });return c.observe(this, { childList: !0 }), !1;
          }var d = {};d[this.as] = !0, d[this.indexAs] = !0, d[this.itemsIndexAs] = !0, this.__ctor = Polymer.Templatize.templatize(b, this, { mutableData: this.mutableData, parentModel: !0, instanceProps: d, forwardHostProp: function forwardHostProp(a, b) {
              for (var c, d = this.__instances, e = 0; e < d.length && (c = d[e]); e++) {
                c.forwardHostProp(a, b);
              }
            }, notifyInstanceProp: function notifyInstanceProp(a, b, c) {
              if (Polymer.Path.matches(this.as, b)) {
                var d = a[this.itemsIndexAs];b == this.as && (this.items[d] = c);var e = Polymer.Path.translate(this.as, 'items.' + d, b);this.notifyPath(e, c);
              }
            } });
        }return !0;
      } }, { key: '__getMethodHost', value: function value() {
        return this.__dataHost._methodHost || this.__dataHost;
      } }, { key: '__sortChanged', value: function value(a) {
        var b = this.__getMethodHost();this.__sortFn = a && ('function' == typeof a ? a : function () {
          return b[a].apply(b, arguments);
        }), this.__needFullRefresh = !0, this.items && this.__debounceRender(this.__render);
      } }, { key: '__filterChanged', value: function value(a) {
        var b = this.__getMethodHost();this.__filterFn = a && ('function' == typeof a ? a : function () {
          return b[a].apply(b, arguments);
        }), this.__needFullRefresh = !0, this.items && this.__debounceRender(this.__render);
      } }, { key: '__computeFrameTime', value: function value(a) {
        return Math.ceil(1e3 / a);
      } }, { key: '__initializeChunking', value: function value() {
        this.initialCount && (this.__limit = this.initialCount, this.__chunkCount = this.initialCount, this.__lastChunkTime = performance.now());
      } }, { key: '__tryRenderChunk', value: function value() {
        this.items && this.__limit < this.items.length && this.__debounceRender(this.__requestRenderChunk);
      } }, { key: '__requestRenderChunk', value: function value() {
        var a = this;requestAnimationFrame(function () {
          return a.__renderChunk();
        });
      } }, { key: '__renderChunk', value: function value() {
        var a = performance.now(),
            b = this._targetFrameTime / (a - this.__lastChunkTime);this.__chunkCount = Math.round(this.__chunkCount * b) || 1, this.__limit += this.__chunkCount, this.__lastChunkTime = a, this.__debounceRender(this.__render);
      } }, { key: '__observeChanged', value: function value() {
        this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
      } }, { key: '__itemsChanged', value: function value(a) {
        this.items && !Array.isArray(this.items) && console.warn('dom-repeat expected array for `items`, found', this.items), this.__handleItemPath(a.path, a.value) || (this.__needFullRefresh = !0, this.__initializeChunking(), this.__debounceRender(this.__render));
      } }, { key: '__handleObservedPaths', value: function value(a) {
        if (this.__observePaths) {
          a = a.substring(a.indexOf('.') + 1);for (var b = this.__observePaths, c = 0; c < b.length; c++) {
            if (0 === a.indexOf(b[c])) return this.__needFullRefresh = !0, this.__debounceRender(this.__render, this.delay), !0;
          }
        }
      } }, { key: '__debounceRender', value: function value(a, b) {
        this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, 0 < b ? Polymer.Async.timeOut.after(b) : Polymer.Async.microTask, a.bind(this)), Polymer.enqueueDebouncer(this.__renderDebouncer);
      } }, { key: 'render', value: function value() {
        this.__needFullRefresh = !0, this.__debounceRender(this.__render), Polymer.flush();
      } }, { key: '__render', value: function value() {
        this.__ensureTemplatized() && (this.__applyFullRefresh(), this.__pool.length = 0, this._setRenderedItemCount(this.__instances.length), this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 })), this.__tryRenderChunk());
      } }, { key: '__applyFullRefresh', value: function value() {
        for (var c = this, d = this.items || [], a = Array(d.length), b = 0; b < d.length; b++) {
          a[b] = b;
        }this.__filterFn && (a = a.filter(function (a, b, e) {
          return c.__filterFn(d[a], b, e);
        })), this.__sortFn && a.sort(function (e, a) {
          return c.__sortFn(d[e], d[a]);
        });for (var e = this.__itemsIdxToInstIdx = {}, f = 0, g = Math.min(a.length, this.__limit); f < g; f++) {
          var h = this.__instances[f],
              i = a[f],
              j = d[i];e[i] = f, h && f < this.__limit ? (h._setPendingProperty(this.as, j), h._setPendingProperty(this.indexAs, f), h._setPendingProperty(this.itemsIndexAs, i), h._flushProperties()) : this.__insertInstance(j, f, i);
        }for (var k = this.__instances.length - 1; k >= f; k--) {
          this.__detachAndRemoveInstance(k);
        }
      } }, { key: '__detachInstance', value: function value(a) {
        for (var b, c = this.__instances[a], d = 0; d < c.children.length; d++) {
          b = c.children[d], c.root.appendChild(b);
        }return c;
      } }, { key: '__attachInstance', value: function value(a, b) {
        var c = this.__instances[a];b.insertBefore(c.root, this);
      } }, { key: '__detachAndRemoveInstance', value: function value(a) {
        var b = this.__detachInstance(a);b && this.__pool.push(b), this.__instances.splice(a, 1);
      } }, { key: '__stampInstance', value: function value(a, b, c) {
        var d = {};return d[this.as] = a, d[this.indexAs] = b, d[this.itemsIndexAs] = c, new this.__ctor(d);
      } }, { key: '__insertInstance', value: function value(a, b, c) {
        var d = this.__pool.pop();d ? (d._setPendingProperty(this.as, a), d._setPendingProperty(this.indexAs, b), d._setPendingProperty(this.itemsIndexAs, c), d._flushProperties()) : d = this.__stampInstance(a, b, c);var e = this.__instances[b + 1],
            f = e ? e.children[0] : this;return this.parentNode.insertBefore(d.root, f), this.__instances[b] = d, d;
      } }, { key: '_showHideChildren', value: function value(a) {
        for (var b = 0; b < this.__instances.length; b++) {
          this.__instances[b]._showHideChildren(a);
        }
      } }, { key: '__handleItemPath', value: function value(a, b) {
        var c = a.slice(6),
            d = c.indexOf('.'),
            e = 0 > d ? c : c.substring(0, d);if (e == parseInt(e, 10)) {
          var f = 0 > d ? '' : c.substring(d + 1);if (!this.__handleObservedPaths(f)) {
            var g = this.__itemsIdxToInstIdx[e],
                h = this.__instances[g];if (h) {
              var i = this.as + (f ? '.' + f : '');h._setPendingPropertyOrPath(i, b, !1, !0), h._flushProperties();
            }
          }return !0;
        }
      } }, { key: 'itemForElement', value: function value(a) {
        var b = this.modelForElement(a);return b && b[this.as];
      } }, { key: 'indexForElement', value: function value(a) {
        var b = this.modelForElement(a);return b && b[this.indexAs];
      } }, { key: 'modelForElement', value: function value(a) {
        return Polymer.Templatize.modelForElement(this.template, a);
      } }]), b;
  }(a);customElements.define(b.is, b), Polymer.DomRepeat = b;
})();
(function () {
  'use notstrict';
  var a = function (a) {
    function b() {
      babelHelpers.classCallCheck(this, b);var a = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.__renderDebouncer = null, a.__invalidProps = null, a.__instance = null, a;
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'is', get: function get() {
        return 'dom-if';
      } }, { key: 'template', get: function get() {
        return null;
      } }, { key: 'properties', get: function get() {
        return { "if": { type: Boolean, observer: '__debounceRender' }, restamp: { type: Boolean, observer: '__debounceRender' } };
      } }]), babelHelpers.createClass(b, [{ key: '__debounceRender', value: function value() {
        var a = this;this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, Polymer.Async.microTask, function () {
          return a.__render();
        }), Polymer.enqueueDebouncer(this.__renderDebouncer);
      } }, { key: 'disconnectedCallback', value: function value() {
        babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'disconnectedCallback', this).call(this), this.parentNode && (this.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE || this.parentNode.host) || this.__teardownInstance();
      } }, { key: 'connectedCallback', value: function value() {
        babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'connectedCallback', this).call(this), this['if'] && this.__debounceRender();
      } }, { key: 'render', value: function value() {
        Polymer.flush();
      } }, { key: '__render', value: function value() {
        if (this['if']) {
          if (!this.__ensureInstance()) return;this._showHideChildren();
        } else this.restamp && this.__teardownInstance();!this.restamp && this.__instance && this._showHideChildren(), this['if'] != this._lastIf && (this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 })), this._lastIf = this['if']);
      } }, { key: '__ensureInstance', value: function value() {
        var a = this,
            b = this.parentNode;if (b) {
          if (!this.__ctor) {
            var c = this.querySelector('template');if (!c) {
              var d = new MutationObserver(function () {
                if (a.querySelector('template')) d.disconnect(), a.__render();else throw new Error('dom-if requires a <template> child');
              });return d.observe(this, { childList: !0 }), !1;
            }this.__ctor = Polymer.Templatize.templatize(c, this, { mutableData: !0, forwardHostProp: function forwardHostProp(a, b) {
                this.__instance && (this['if'] ? this.__instance.forwardHostProp(a, b) : (this.__invalidProps = this.__invalidProps || Object.create(null), this.__invalidProps[Polymer.Path.root(a)] = !0));
              } });
          }if (!this.__instance) this.__instance = new this.__ctor(), b.insertBefore(this.__instance.root, this);else {
            this.__syncHostProperties();var e = this.__instance.children;if (e && e.length) {
              var f = this.previousSibling;if (f !== e[e.length - 1]) for (var g, h = 0; h < e.length && (g = e[h]); h++) {
                b.insertBefore(g, this);
              }
            }
          }
        }return !0;
      } }, { key: '__syncHostProperties', value: function value() {
        var a = this.__invalidProps;if (a) {
          for (var b in a) {
            this.__instance._setPendingProperty(b, this.__dataHost[b]);
          }this.__invalidProps = null, this.__instance._flushProperties();
        }
      } }, { key: '__teardownInstance', value: function value() {
        if (this.__instance) {
          var a = this.__instance.children;if (a && a.length) for (var b, c = a[0].parentNode, d = 0; d < a.length && (b = a[d]); d++) {
            c.removeChild(b);
          }this.__instance = null, this.__invalidProps = null;
        }
      } }, { key: '_showHideChildren', value: function value() {
        var a = this.__hideTemplateChildren__ || !this['if'];this.__instance && this.__instance._showHideChildren(a);
      } }]), b;
  }(Polymer.Element);customElements.define(a.is, a), Polymer.DomIf = a;
})();
(function () {
  'use notstrict';
  var a = Polymer.dedupingMixin(function (a) {
    var b = function (a) {
      function b() {
        babelHelpers.classCallCheck(this, b);var a = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.__lastItems = null, a.__lastMulti = null, a.__selectedMap = null, a;
      }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'properties', get: function get() {
          return { items: { type: Array }, multi: { type: Boolean, value: !1 }, selected: { type: Object, notify: !0 }, selectedItem: { type: Object, notify: !0 }, toggle: { type: Boolean, value: !1 } };
        } }, { key: 'observers', get: function get() {
          return ['__updateSelection(multi, items.*)'];
        } }]), babelHelpers.createClass(b, [{ key: '__updateSelection', value: function value(a, b) {
          var c = b.path;if ('items' == c) {
            var d = b.base || [],
                e = this.__lastItems,
                f = this.__lastMulti;if (a !== f && this.clearSelection(), e) {
              var g = Polymer.ArraySplice.calculateSplices(d, e);this.__applySplices(g);
            }this.__lastItems = d, this.__lastMulti = a;
          } else if ('items.splices' == b.path) this.__applySplices(b.value.indexSplices);else {
            var h = c.slice(6),
                i = parseInt(h, 10);0 > h.indexOf('.') && h == i && this.__deselectChangedIdx(i);
          }
        } }, { key: '__applySplices', value: function value(a) {
          for (var b = this, c = this.__selectedMap, d = function d(_d) {
            var e = a[_d];c.forEach(function (a, b) {
              a < e.index || (a >= e.index + e.removed.length ? c.set(b, a + e.addedCount - e.removed.length) : c.set(b, -1));
            });for (var f, g = 0; g < e.addedCount; g++) {
              f = e.index + g, c.has(b.items[f]) && c.set(b.items[f], f);
            }
          }, e = 0; e < a.length; e++) {
            d(e);
          }this.__updateLinks();var f = 0;c.forEach(function (a, d) {
            0 > a ? (b.multi ? b.splice('selected', f, 1) : b.selected = b.selectedItem = null, c['delete'](d)) : f++;
          });
        } }, { key: '__updateLinks', value: function value() {
          var a = this;if (this.__dataLinkedPaths = {}, this.multi) {
            var b = 0;this.__selectedMap.forEach(function (c) {
              0 <= c && a.linkPaths('items.' + c, 'selected.' + b++);
            });
          } else this.__selectedMap.forEach(function (b) {
            a.linkPaths('selected', 'items.' + b), a.linkPaths('selectedItem', 'items.' + b);
          });
        } }, { key: 'clearSelection', value: function value() {
          this.__dataLinkedPaths = {}, this.__selectedMap = new Map(), this.selected = this.multi ? [] : null, this.selectedItem = null;
        } }, { key: 'isSelected', value: function value(a) {
          return this.__selectedMap.has(a);
        } }, { key: 'isIndexSelected', value: function value(a) {
          return this.isSelected(this.items[a]);
        } }, { key: '__deselectChangedIdx', value: function value(a) {
          var b = this,
              c = this.__selectedIndexForItemIndex(a);if (0 <= c) {
            var d = 0;this.__selectedMap.forEach(function (a, e) {
              c == d++ && b.deselect(e);
            });
          }
        } }, { key: '__selectedIndexForItemIndex', value: function value(a) {
          var b = this.__dataLinkedPaths['items.' + a];if (b) return parseInt(b.slice(9), 10);
        } }, { key: 'deselect', value: function value(a) {
          var b = this.__selectedMap.get(a);if (0 <= b) {
            this.__selectedMap['delete'](a);var c;this.multi && (c = this.__selectedIndexForItemIndex(b)), this.__updateLinks(), this.multi ? this.splice('selected', c, 1) : this.selected = this.selectedItem = null;
          }
        } }, { key: 'deselectIndex', value: function value(a) {
          this.deselect(this.items[a]);
        } }, { key: 'select', value: function value(a) {
          this.selectIndex(this.items.indexOf(a));
        } }, { key: 'selectIndex', value: function value(a) {
          var b = this.items[a];this.isSelected(b) ? this.toggle && this.deselectIndex(a) : (!this.multi && this.__selectedMap.clear(), this.__selectedMap.set(b, a), this.__updateLinks(), this.multi ? this.push('selected', b) : this.selected = this.selectedItem = b);
        } }]), b;
    }(a);return b;
  });Polymer.ArraySelectorMixin = a;var b = a(Polymer.Element),
      c = function (a) {
    function b() {
      return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'is', get: function get() {
        return 'array-selector';
      } }]), b;
  }(b);customElements.define(c.is, c), Polymer.ArraySelector = c;
})();
(function () {
  "use notstrict";
  function a(b) {
    i = b && b.shimcssproperties ? !1 : f || !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)");
  }function d(c, a) {
    for (var b in a) {
      null === b ? c.style.removeProperty(b) : c.style.setProperty(b, a[b]);
    }
  }function b() {
    var b = o;requestAnimationFrame(function () {
      l ? l(b) : (n || (n = new Promise(function (b) {
        k = b;
      }), "complete" === document.readyState ? k() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && k();
      })), n.then(function () {
        b && b();
      }));
    });
  }function e() {
    this.customStyles = [], this.enqueued = !1;
  }function g(c) {
    !c.enqueued && o && (c.enqueued = !0, b());
  }var i,
      f = !(window.ShadyDOM && window.ShadyDOM.inUse);window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? i = window.ShadyCSS.nativeCss : window.ShadyCSS ? (a(window.ShadyCSS), window.ShadyCSS = void 0) : a(window.WebComponents && window.WebComponents.flags);var j = i;var k,
      n = null,
      l = window.HTMLImports && window.HTMLImports.whenReady || null;var m = null,
      o = null;e.prototype.c = function (b) {
    b.__seenByShadyCSS || (b.__seenByShadyCSS = !0, this.customStyles.push(b), g(this));
  }, e.prototype.b = function (c) {
    if (c.__shadyCSSCachedStyle) return c.__shadyCSSCachedStyle;var a;return a = c.getStyle ? c.getStyle() : c, a;
  }, e.prototype.a = function () {
    for (var c, d = this.customStyles, a = 0; a < d.length; a++) {
      if (c = d[a], !c.__shadyCSSCachedStyle) {
        var b = this.b(c);b && (b = b.__appliedElement || b, m && m(b), c.__shadyCSSCachedStyle = b);
      }
    }return d;
  }, e.prototype.addCustomStyle = e.prototype.c, e.prototype.getStyleForCustomStyle = e.prototype.b, e.prototype.processStyles = e.prototype.a, Object.defineProperties(e.prototype, { transformCallback: { get: function get() {
        return m;
      }, set: function set(b) {
        m = b;
      } }, validateCallback: { get: function get() {
        return o;
      }, set: function set(c) {
        var a = !1;o || (a = !0), o = c, a && g(this);
      } } });var p = new e();window.ShadyCSS || (window.ShadyCSS = { prepareTemplate: function prepareTemplate() {}, styleSubtree: function styleSubtree(c, a) {
      p.a(), d(c, a);
    }, styleElement: function styleElement() {
      p.a();
    }, styleDocument: function styleDocument(b) {
      p.a(), d(document.body, b);
    }, getComputedStyleValue: function getComputedStyleValue(c, a) {
      return (c = window.getComputedStyle(c).getPropertyValue(a)) ? c.trim() : "";
    }, nativeCss: j, nativeShadow: f }), window.ShadyCSS.CustomStyleInterface = p;
}).call(undefined);
(function () {
  'use notstrict';
  var a = 'include',
      b = window.ShadyCSS.CustomStyleInterface,
      c = function (c) {
    function d() {
      babelHelpers.classCallCheck(this, d);var a = babelHelpers.possibleConstructorReturn(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));return a._style = null, b.addCustomStyle(a), a;
    }return babelHelpers.inherits(d, c), babelHelpers.createClass(d, [{ key: 'getStyle', value: function value() {
        if (this._style) return this._style;var b = this.querySelector('style');if (b) {
          this._style = b;var c = b.getAttribute(a);return c && (b.removeAttribute(a), b.textContent = Polymer.StyleGather.cssFromModules(c) + b.textContent), this._style;
        }
      } }]), d;
  }(HTMLElement);window.customElements.define('custom-style', c), Polymer.CustomStyle = c;
})();
(function () {
  'use notstrict';
  var a = Polymer.MutableData._mutablePropertyChange;Polymer.MutableDataBehavior = { _shouldPropertyChange: function _shouldPropertyChange(b, c, d) {
      return a(this, b, c, d, !0);
    } }, Polymer.OptionalMutableDataBehavior = { properties: { mutableData: Boolean }, _shouldPropertyChange: function _shouldPropertyChange(b, c, d) {
      return a(this, b, c, d, this.mutableData);
    } };
})();
Polymer.Base = Polymer.LegacyElementMixin(HTMLElement).prototype;
(function () {
  'use notstrict';
  function a(a, b) {
    var c = '';if (a) {
      var d = a.toLowerCase();' ' === d || o.test(d) ? c = 'space' : p.test(d) ? c = 'esc' : 1 == d.length ? (!b || l.test(d)) && (c = d) : n.test(d) ? c = d.replace('arrow', '') : 'multiply' == d ? c = '*' : c = d;
    }return c;
  }function b(a) {
    var b = '';return a && (a in i ? b = i[a] : m.test(a) ? (a = parseInt(a.replace('U+', '0x'), 16), b = h(a).toLowerCase()) : b = a.toLowerCase()), b;
  }function c(a) {
    var b = '';return +a && (65 <= a && 90 >= a ? b = h(32 + a) : 112 <= a && 123 >= a ? b = 'f' + (a - 112 + 1) : 48 <= a && 57 >= a ? b = a - 48 + '' : 96 <= a && 105 >= a ? b = a - 96 + '' : b = j[a]), b;
  }function d(d, e) {
    return d.key ? a(d.key, e) : d.detail && d.detail.key ? a(d.detail.key, e) : b(d.keyIdentifier) || c(d.keyCode) || '';
  }function e(a, b) {
    var c = d(b, a.hasModifiers);return c === a.key && (!a.hasModifiers || !!b.shiftKey === !!a.shiftKey && !!b.ctrlKey === !!a.ctrlKey && !!b.altKey === !!a.altKey && !!b.metaKey === !!a.metaKey);
  }function f(a) {
    return 1 === a.length ? { combo: a, key: a, event: 'keydown' } : a.split('+').reduce(function (a, b) {
      var c = b.split(':'),
          d = c[0],
          e = c[1];return d in k ? (a[k[d]] = !0, a.hasModifiers = !0) : (a.key = d, a.event = e || 'keydown'), a;
    }, { combo: a.split(':').shift() });
  }function g(a) {
    return a.trim().split(' ').map(function (a) {
      return f(a);
    });
  }var h = String.fromCharCode,
      i = { "U+0008": 'backspace', "U+0009": 'tab', "U+001B": 'esc', "U+0020": 'space', "U+007F": 'del' },
      j = { 8: 'backspace', 9: 'tab', 13: 'enter', 27: 'esc', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down', 46: 'del', 106: '*' },
      k = { shift: 'shiftKey', ctrl: 'ctrlKey', alt: 'altKey', meta: 'metaKey' },
      l = /[a-z0-9*]/,
      m = /U\+/,
      n = /^arrow/,
      o = /^space(bar)?/,
      p = /^escape$/;Polymer.IronA11yKeysBehavior = { properties: { keyEventTarget: { type: Object, value: function value() {
          return this;
        } }, stopKeyboardEventPropagation: { type: Boolean, value: !1 }, _boundKeyHandlers: { type: Array, value: function value() {
          return [];
        } }, _imperativeKeyBindings: { type: Object, value: function value() {
          return {};
        } } }, observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'], keyBindings: {}, registered: function registered() {
      this._prepKeyBindings();
    }, attached: function attached() {
      this._listenKeyEventListeners();
    }, detached: function detached() {
      this._unlistenKeyEventListeners();
    }, addOwnKeyBinding: function addOwnKeyBinding(a, b) {
      this._imperativeKeyBindings[a] = b, this._prepKeyBindings(), this._resetKeyEventListeners();
    }, removeOwnKeyBindings: function removeOwnKeyBindings() {
      this._imperativeKeyBindings = {}, this._prepKeyBindings(), this._resetKeyEventListeners();
    }, keyboardEventMatchesKeys: function keyboardEventMatchesKeys(a, b) {
      for (var c = g(b), d = 0; d < c.length; ++d) {
        if (e(c[d], a)) return !0;
      }return !1;
    }, _collectKeyBindings: function _collectKeyBindings() {
      var a = this.behaviors.map(function (a) {
        return a.keyBindings;
      });return -1 === a.indexOf(this.keyBindings) && a.push(this.keyBindings), a;
    }, _prepKeyBindings: function _prepKeyBindings() {
      for (var a in this._keyBindings = {}, this._collectKeyBindings().forEach(function (a) {
        for (var b in a) {
          this._addKeyBinding(b, a[b]);
        }
      }, this), this._imperativeKeyBindings) {
        this._addKeyBinding(a, this._imperativeKeyBindings[a]);
      }for (var b in this._keyBindings) {
        this._keyBindings[b].sort(function (a, b) {
          var c = a[0].hasModifiers,
              d = b[0].hasModifiers;return c === d ? 0 : c ? -1 : 1;
        });
      }
    }, _addKeyBinding: function _addKeyBinding(a, b) {
      g(a).forEach(function (a) {
        this._keyBindings[a.event] = this._keyBindings[a.event] || [], this._keyBindings[a.event].push([a, b]);
      }, this);
    }, _resetKeyEventListeners: function _resetKeyEventListeners() {
      this._unlistenKeyEventListeners(), this.isAttached && this._listenKeyEventListeners();
    }, _listenKeyEventListeners: function _listenKeyEventListeners() {
      this.keyEventTarget && Object.keys(this._keyBindings).forEach(function (a) {
        var b = this._keyBindings[a],
            c = this._onKeyBindingEvent.bind(this, b);this._boundKeyHandlers.push([this.keyEventTarget, a, c]), this.keyEventTarget.addEventListener(a, c);
      }, this);
    }, _unlistenKeyEventListeners: function _unlistenKeyEventListeners() {
      for (var a, b, c, d; this._boundKeyHandlers.length;) {
        a = this._boundKeyHandlers.pop(), b = a[0], c = a[1], d = a[2], b.removeEventListener(c, d);
      }
    }, _onKeyBindingEvent: function _onKeyBindingEvent(a, b) {
      if (this.stopKeyboardEventPropagation && b.stopPropagation(), !b.defaultPrevented) for (var c = 0; c < a.length; c++) {
        var d = a[c][0],
            f = a[c][1];if (e(d, b) && (this._triggerKeyHandler(d, f, b), b.defaultPrevented)) return;
      }
    }, _triggerKeyHandler: function _triggerKeyHandler(a, b, c) {
      var d = Object.create(a);d.keyboardEvent = c;var e = new CustomEvent(a.event, { detail: d, cancelable: !0 });this[b].call(this, e), e.defaultPrevented && c.preventDefault();
    } };
})();
Polymer.IronControlState = { properties: { focused: { type: Boolean, value: !1, notify: !0, readOnly: !0, reflectToAttribute: !0 }, disabled: { type: Boolean, value: !1, notify: !0, observer: '_disabledChanged', reflectToAttribute: !0 }, _oldTabIndex: { type: Number }, _boundFocusBlurHandler: { type: Function, value: function value() {
        return this._focusBlurHandler.bind(this);
      } }, __handleEventRetargeting: { type: Boolean, value: function value() {
        return !this.shadowRoot && !Polymer.Element;
      } } }, observers: ['_changedControlState(focused, disabled)'], ready: function ready() {
    this.addEventListener('focus', this._boundFocusBlurHandler, !0), this.addEventListener('blur', this._boundFocusBlurHandler, !0);
  }, _focusBlurHandler: function _focusBlurHandler(a) {
    if (Polymer.Element) return void this._setFocused('focus' === a.type);if (a.target === this) this._setFocused('focus' === a.type);else if (this.__handleEventRetargeting) {
      var b = Polymer.dom(a).localTarget;this.isLightDescendant(b) || this.fire(a.type, { sourceEvent: a }, { node: this, bubbles: a.bubbles, cancelable: a.cancelable });
    }
  }, _disabledChanged: function _disabledChanged(a) {
    this.setAttribute('aria-disabled', a ? 'true' : 'false'), this.style.pointerEvents = a ? 'none' : '', a ? (this._oldTabIndex = this.tabIndex, this._setFocused(!1), this.tabIndex = -1, this.blur()) : this._oldTabIndex !== void 0 && (this.tabIndex = this._oldTabIndex);
  }, _changedControlState: function _changedControlState() {
    this._controlStateChanged && this._controlStateChanged();
  } };
Polymer.IronButtonStateImpl = { properties: { pressed: { type: Boolean, readOnly: !0, value: !1, reflectToAttribute: !0, observer: '_pressedChanged' }, toggles: { type: Boolean, value: !1, reflectToAttribute: !0 }, active: { type: Boolean, value: !1, notify: !0, reflectToAttribute: !0 }, pointerDown: { type: Boolean, readOnly: !0, value: !1 }, receivedFocusFromKeyboard: { type: Boolean, readOnly: !0 }, ariaActiveAttribute: { type: String, value: 'aria-pressed', observer: '_ariaActiveAttributeChanged' } }, listeners: { down: '_downHandler', up: '_upHandler', tap: '_tapHandler' }, observers: ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'], keyBindings: { "enter:keydown": '_asyncClick', "space:keydown": '_spaceKeyDownHandler', "space:keyup": '_spaceKeyUpHandler' }, _mouseEventRe: /^mouse/, _tapHandler: function _tapHandler() {
    this.toggles ? this._userActivate(!this.active) : this.active = !1;
  }, _focusChanged: function _focusChanged(a) {
    this._detectKeyboardFocus(a), a || this._setPressed(!1);
  }, _detectKeyboardFocus: function _detectKeyboardFocus(a) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && a);
  }, _userActivate: function _userActivate(a) {
    this.active !== a && (this.active = a, this.fire('change'));
  }, _downHandler: function _downHandler() {
    this._setPointerDown(!0), this._setPressed(!0), this._setReceivedFocusFromKeyboard(!1);
  }, _upHandler: function _upHandler() {
    this._setPointerDown(!1), this._setPressed(!1);
  }, _spaceKeyDownHandler: function _spaceKeyDownHandler(a) {
    var b = a.detail.keyboardEvent,
        c = Polymer.dom(b).localTarget;this.isLightDescendant(c) || (b.preventDefault(), b.stopImmediatePropagation(), this._setPressed(!0));
  }, _spaceKeyUpHandler: function _spaceKeyUpHandler(a) {
    var b = a.detail.keyboardEvent,
        c = Polymer.dom(b).localTarget;this.isLightDescendant(c) || (this.pressed && this._asyncClick(), this._setPressed(!1));
  }, _asyncClick: function _asyncClick() {
    this.async(function () {
      this.click();
    }, 1);
  }, _pressedChanged: function _pressedChanged() {
    this._changedButtonState();
  }, _ariaActiveAttributeChanged: function _ariaActiveAttributeChanged(a, b) {
    b && b != a && this.hasAttribute(b) && this.removeAttribute(b);
  }, _activeChanged: function _activeChanged(a) {
    this.toggles ? this.setAttribute(this.ariaActiveAttribute, a ? 'true' : 'false') : this.removeAttribute(this.ariaActiveAttribute), this._changedButtonState();
  }, _controlStateChanged: function _controlStateChanged() {
    this.disabled ? this._setPressed(!1) : this._changedButtonState();
  }, _changedButtonState: function _changedButtonState() {
    this._buttonStateChanged && this._buttonStateChanged();
  } }, Polymer.IronButtonState = [Polymer.IronA11yKeysBehavior, Polymer.IronButtonStateImpl];
(function () {
  'use notstrict';
  function a(a) {
    this.element = a, this.width = this.boundingRect.width, this.height = this.boundingRect.height, this.size = d(this.width, this.height);
  }function b(a) {
    this.element = a, this.color = window.getComputedStyle(a).color, this.wave = document.createElement('div'), this.waveContainer = document.createElement('div'), this.wave.style.backgroundColor = this.color, this.wave.classList.add('wave'), this.waveContainer.classList.add('wave-container'), Polymer.dom(this.waveContainer).appendChild(this.wave), this.resetInteractionState();
  }var c = Math.min,
      d = Math.max,
      e = Math.sqrt,
      f = { distance: function distance(a, b, c, d) {
      var f = a - c,
          g = b - d;return e(f * f + g * g);
    }, now: window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now };a.prototype = Object.defineProperties({ furthestCornerDistanceFrom: function furthestCornerDistanceFrom(a, b) {
      var c = f.distance(a, b, 0, 0),
          e = f.distance(a, b, this.width, 0),
          g = f.distance(a, b, 0, this.height),
          h = f.distance(a, b, this.width, this.height);return d(c, e, g, h);
    } }, { boundingRect: { get: function get() {
        return this.element.getBoundingClientRect();
      }, configurable: !0, enumerable: !0 } }), b.MAX_RADIUS = 300, b.prototype = Object.defineProperties({ resetInteractionState: function resetInteractionState() {
      this.maxRadius = 0, this.mouseDownStart = 0, this.mouseUpStart = 0, this.xStart = 0, this.yStart = 0, this.xEnd = 0, this.yEnd = 0, this.slideDistance = 0, this.containerMetrics = new a(this.element);
    }, draw: function draw() {
      var a, b, c;this.wave.style.opacity = this.opacity, a = this.radius / (this.containerMetrics.size / 2), b = this.xNow - this.containerMetrics.width / 2, c = this.yNow - this.containerMetrics.height / 2, this.waveContainer.style.webkitTransform = 'translate(' + b + 'px, ' + c + 'px)', this.waveContainer.style.transform = 'translate3d(' + b + 'px, ' + c + 'px, 0)', this.wave.style.webkitTransform = 'scale(' + a + ',' + a + ')', this.wave.style.transform = 'scale3d(' + a + ',' + a + ',1)';
    }, downAction: function downAction(a) {
      var b = this.containerMetrics.width / 2,
          c = this.containerMetrics.height / 2;this.resetInteractionState(), this.mouseDownStart = f.now(), this.center ? (this.xStart = b, this.yStart = c, this.slideDistance = f.distance(this.xStart, this.yStart, this.xEnd, this.yEnd)) : (this.xStart = a ? a.detail.x - this.containerMetrics.boundingRect.left : this.containerMetrics.width / 2, this.yStart = a ? a.detail.y - this.containerMetrics.boundingRect.top : this.containerMetrics.height / 2), this.recenters && (this.xEnd = b, this.yEnd = c, this.slideDistance = f.distance(this.xStart, this.yStart, this.xEnd, this.yEnd)), this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(this.xStart, this.yStart), this.waveContainer.style.top = (this.containerMetrics.height - this.containerMetrics.size) / 2 + 'px', this.waveContainer.style.left = (this.containerMetrics.width - this.containerMetrics.size) / 2 + 'px', this.waveContainer.style.width = this.containerMetrics.size + 'px', this.waveContainer.style.height = this.containerMetrics.size + 'px';
    }, upAction: function upAction() {
      this.isMouseDown && (this.mouseUpStart = f.now());
    }, remove: function remove() {
      Polymer.dom(this.waveContainer.parentNode).removeChild(this.waveContainer);
    } }, { recenters: { get: function get() {
        return this.element.recenters;
      }, configurable: !0, enumerable: !0 }, center: { get: function get() {
        return this.element.center;
      }, configurable: !0, enumerable: !0 }, mouseDownElapsed: { get: function get() {
        var a;return this.mouseDownStart ? (a = f.now() - this.mouseDownStart, this.mouseUpStart && (a -= this.mouseUpElapsed), a) : 0;
      }, configurable: !0, enumerable: !0 }, mouseUpElapsed: { get: function get() {
        return this.mouseUpStart ? f.now() - this.mouseUpStart : 0;
      }, configurable: !0, enumerable: !0 }, mouseDownElapsedSeconds: { get: function get() {
        return this.mouseDownElapsed / 1e3;
      }, configurable: !0, enumerable: !0 }, mouseUpElapsedSeconds: { get: function get() {
        return this.mouseUpElapsed / 1e3;
      }, configurable: !0, enumerable: !0 }, mouseInteractionSeconds: { get: function get() {
        return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
      }, configurable: !0, enumerable: !0 }, initialOpacity: { get: function get() {
        return this.element.initialOpacity;
      }, configurable: !0, enumerable: !0 }, opacityDecayVelocity: { get: function get() {
        return this.element.opacityDecayVelocity;
      }, configurable: !0, enumerable: !0 }, radius: { get: function get() {
        var a = this.containerMetrics.width * this.containerMetrics.width,
            d = this.containerMetrics.height * this.containerMetrics.height,
            f = 1.1 * c(e(a + d), b.MAX_RADIUS) + 5,
            g = 1.1 - 0.2 * (f / b.MAX_RADIUS),
            h = this.mouseInteractionSeconds / g,
            i = f * (1 - Math.pow(80, -h));return Math.abs(i);
      }, configurable: !0, enumerable: !0 }, opacity: { get: function get() {
        return this.mouseUpStart ? d(0, this.initialOpacity - this.mouseUpElapsedSeconds * this.opacityDecayVelocity) : this.initialOpacity;
      }, configurable: !0, enumerable: !0 }, outerOpacity: { get: function get() {
        var a = 0.3 * this.mouseUpElapsedSeconds,
            b = this.opacity;return d(0, c(a, b));
      }, configurable: !0, enumerable: !0 }, isOpacityFullyDecayed: { get: function get() {
        return 0.01 > this.opacity && this.radius >= c(this.maxRadius, b.MAX_RADIUS);
      }, configurable: !0, enumerable: !0 }, isRestingAtMaxRadius: { get: function get() {
        return this.opacity >= this.initialOpacity && this.radius >= c(this.maxRadius, b.MAX_RADIUS);
      }, configurable: !0, enumerable: !0 }, isAnimationComplete: { get: function get() {
        return this.mouseUpStart ? this.isOpacityFullyDecayed : this.isRestingAtMaxRadius;
      }, configurable: !0, enumerable: !0 }, translationFraction: { get: function get() {
        return c(1, 2 * (this.radius / this.containerMetrics.size) / 1.4142135623730951);
      }, configurable: !0, enumerable: !0 }, xNow: { get: function get() {
        return this.xEnd ? this.xStart + this.translationFraction * (this.xEnd - this.xStart) : this.xStart;
      }, configurable: !0, enumerable: !0 }, yNow: { get: function get() {
        return this.yEnd ? this.yStart + this.translationFraction * (this.yEnd - this.yStart) : this.yStart;
      }, configurable: !0, enumerable: !0 }, isMouseDown: { get: function get() {
        return this.mouseDownStart && !this.mouseUpStart;
      }, configurable: !0, enumerable: !0 } }), Polymer(Object.defineProperties({ is: 'paper-ripple', behaviors: [Polymer.IronA11yKeysBehavior], properties: { initialOpacity: { type: Number, value: 0.25 }, opacityDecayVelocity: { type: Number, value: 0.8 }, recenters: { type: Boolean, value: !1 }, center: { type: Boolean, value: !1 }, ripples: { type: Array, value: function value() {
          return [];
        } }, animating: { type: Boolean, readOnly: !0, reflectToAttribute: !0, value: !1 }, holdDown: { type: Boolean, value: !1, observer: '_holdDownChanged' }, noink: { type: Boolean, value: !1 }, _animating: { type: Boolean }, _boundAnimate: { type: Function, value: function value() {
          return this.animate.bind(this);
        } } }, keyBindings: { "enter:keydown": '_onEnterKeydown', "space:keydown": '_onSpaceKeydown', "space:keyup": '_onSpaceKeyup' }, attached: function attached() {
      this.keyEventTarget = 11 == this.parentNode.nodeType ? Polymer.dom(this).getOwnerRoot().host : this.parentNode;var a = this.keyEventTarget;this.listen(a, 'up', 'uiUpAction'), this.listen(a, 'down', 'uiDownAction');
    }, detached: function detached() {
      this.unlisten(this.keyEventTarget, 'up', 'uiUpAction'), this.unlisten(this.keyEventTarget, 'down', 'uiDownAction'), this.keyEventTarget = null;
    }, simulatedRipple: function simulatedRipple() {
      this.downAction(null), this.async(function () {
        this.upAction();
      }, 1);
    }, uiDownAction: function uiDownAction(a) {
      this.noink || this.downAction(a);
    }, downAction: function downAction(a) {
      if (!(this.holdDown && 0 < this.ripples.length)) {
        var b = this.addRipple();b.downAction(a), this._animating || (this._animating = !0, this.animate());
      }
    }, uiUpAction: function uiUpAction(a) {
      this.noink || this.upAction(a);
    }, upAction: function upAction(a) {
      this.holdDown || (this.ripples.forEach(function (b) {
        b.upAction(a);
      }), this._animating = !0, this.animate());
    }, onAnimationComplete: function onAnimationComplete() {
      this._animating = !1, this.$.background.style.backgroundColor = null, this.fire('transitionend');
    }, addRipple: function addRipple() {
      var a = new b(this);return Polymer.dom(this.$.waves).appendChild(a.waveContainer), this.$.background.style.backgroundColor = a.color, this.ripples.push(a), this._setAnimating(!0), a;
    }, removeRipple: function removeRipple(a) {
      var b = this.ripples.indexOf(a);0 > b || (this.ripples.splice(b, 1), a.remove(), !this.ripples.length && this._setAnimating(!1));
    }, animate: function animate() {
      if (this._animating) {
        var a, b;for (a = 0; a < this.ripples.length; ++a) {
          b = this.ripples[a], b.draw(), this.$.background.style.opacity = b.outerOpacity, b.isOpacityFullyDecayed && !b.isRestingAtMaxRadius && this.removeRipple(b);
        }this.shouldKeepAnimating || 0 !== this.ripples.length ? window.requestAnimationFrame(this._boundAnimate) : this.onAnimationComplete();
      }
    }, _onEnterKeydown: function _onEnterKeydown() {
      this.uiDownAction(), this.async(this.uiUpAction, 1);
    }, _onSpaceKeydown: function _onSpaceKeydown() {
      this.uiDownAction();
    }, _onSpaceKeyup: function _onSpaceKeyup() {
      this.uiUpAction();
    }, _holdDownChanged: function _holdDownChanged(a, b) {
      void 0 === b || (a ? this.downAction() : this.upAction());
    } }, { target: { get: function get() {
        return this.keyEventTarget;
      }, configurable: !0, enumerable: !0 }, shouldKeepAnimating: { get: function get() {
        for (var a = 0; a < this.ripples.length; ++a) {
          if (!this.ripples[a].isAnimationComplete) return !0;
        }return !1;
      }, configurable: !0, enumerable: !0 } }));
})();
Polymer.PaperRippleBehavior = { properties: { noink: { type: Boolean, observer: '_noinkChanged' }, _rippleContainer: { type: Object } }, _buttonStateChanged: function _buttonStateChanged() {
    this.focused && this.ensureRipple();
  }, _downHandler: function _downHandler(a) {
    Polymer.IronButtonStateImpl._downHandler.call(this, a), this.pressed && this.ensureRipple(a);
  }, ensureRipple: function ensureRipple(a) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple(), this._ripple.noink = this.noink;var b = this._rippleContainer || this.root;if (b && Polymer.dom(b).appendChild(this._ripple), a) {
        var c = Polymer.dom(this._rippleContainer || this),
            d = Polymer.dom(a).rootTarget;c.deepContains(d) && this._ripple.uiDownAction(a);
      }
    }
  }, getRipple: function getRipple() {
    return this.ensureRipple(), this._ripple;
  }, hasRipple: function hasRipple() {
    return !!this._ripple;
  }, _createRipple: function _createRipple() {
    var a = document.createElement('paper-ripple');return a;
  }, _noinkChanged: function _noinkChanged(a) {
    this.hasRipple() && (this._ripple.noink = a);
  } };
Polymer.PaperButtonBehaviorImpl = { properties: { elevation: { type: Number, reflectToAttribute: !0, readOnly: !0 } }, observers: ['_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)', '_computeKeyboardClass(receivedFocusFromKeyboard)'], hostAttributes: { role: 'button', tabindex: '0', animated: !0 }, _calculateElevation: function _calculateElevation() {
    var a = 1;this.disabled ? a = 0 : this.active || this.pressed ? a = 4 : this.receivedFocusFromKeyboard && (a = 3), this._setElevation(a);
  }, _computeKeyboardClass: function _computeKeyboardClass(a) {
    this.toggleClass('keyboard-focus', a);
  }, _spaceKeyDownHandler: function _spaceKeyDownHandler(a) {
    Polymer.IronButtonStateImpl._spaceKeyDownHandler.call(this, a), this.hasRipple() && 1 > this.getRipple().ripples.length && this._ripple.uiDownAction();
  }, _spaceKeyUpHandler: function _spaceKeyUpHandler(a) {
    Polymer.IronButtonStateImpl._spaceKeyUpHandler.call(this, a), this.hasRipple() && this._ripple.uiUpAction();
  } }, Polymer.PaperButtonBehavior = [Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior, Polymer.PaperButtonBehaviorImpl];
Polymer({ is: 'paper-button', behaviors: [Polymer.PaperButtonBehavior], properties: { raised: { type: Boolean, reflectToAttribute: !0, value: !1, observer: '_calculateElevation' } }, _calculateElevation: function _calculateElevation() {
    this.raised ? Polymer.PaperButtonBehaviorImpl._calculateElevation.apply(this) : this._setElevation(0);
  } });
(function () {
  function a(a) {
    this.type = a && a.type || 'default', this.key = a && a.key, 'value' in a && (this.value = a.value);
  }a.types = {}, a.prototype = Object.defineProperties({ byKey: function byKey(a) {
      return this.key = a, this.value;
    } }, { value: { get: function get() {
        var b = this.type,
            c = this.key;if (b && c) return a.types[b] && a.types[b][c];
      }, set: function set(b) {
        var c = this.type,
            d = this.key;c && d && (c = a.types[c] = a.types[c] || {}, null == b ? delete c[d] : c[d] = b);
      }, configurable: !0, enumerable: !0 }, list: { get: function get() {
        var c = this.type;if (c) {
          var d = a.types[this.type];return d ? Object.keys(d).map(function (a) {
            return b[this.type][a];
          }, this) : [];
        }
      }, configurable: !0, enumerable: !0 } }), Polymer.IronMeta = a;var b = Polymer.IronMeta.types;Polymer(Object.defineProperties({ is: 'iron-meta', properties: { type: { type: String, value: 'default' }, key: { type: String }, value: { type: String, notify: !0 }, self: { type: Boolean, observer: '_selfChanged' }, __meta: { type: Boolean, computed: '__computeMeta(type, key, value)' } }, hostAttributes: { hidden: !0 }, __computeMeta: function __computeMeta(a, b, c) {
      var d = new Polymer.IronMeta({ type: a, key: b });return void 0 !== c && c !== d.value ? d.value = c : this.value !== d.value && (this.value = d.value), d;
    }, _selfChanged: function _selfChanged(a) {
      a && (this.value = this);
    }, byKey: function byKey(a) {
      return new Polymer.IronMeta({ type: this.type, key: a }).value;
    } }, { list: { get: function get() {
        return this.__meta && this.__meta.list;
      }, configurable: !0, enumerable: !0 } }));
})();
Polymer.IronValidatableBehaviorMeta = null, Polymer.IronValidatableBehavior = Object.defineProperties({ properties: { validator: { type: String }, invalid: { notify: !0, reflectToAttribute: !0, type: Boolean, value: !1, observer: '_invalidChanged' } }, registered: function registered() {
    Polymer.IronValidatableBehaviorMeta = new Polymer.IronMeta({ type: 'validator' });
  }, _invalidChanged: function _invalidChanged() {
    this.invalid ? this.setAttribute('aria-invalid', 'true') : this.removeAttribute('aria-invalid');
  }, hasValidator: function hasValidator() {
    return null != this._validator;
  }, validate: function validate(a) {
    return this.invalid = void 0 === a && void 0 !== this.value ? !this._getValidity(this.value) : !this._getValidity(a), !this.invalid;
  }, _getValidity: function _getValidity(a) {
    return !this.hasValidator() || this._validator.validate(a);
  } }, { _validator: { get: function get() {
      return Polymer.IronValidatableBehaviorMeta && Polymer.IronValidatableBehaviorMeta.byKey(this.validator);
    }, configurable: !0, enumerable: !0 } });
Polymer.IronFormElementBehavior = { properties: { name: { type: String }, value: { notify: !0, type: String }, required: { type: Boolean, value: !1 }, _parentForm: { type: Object } }, attached: Polymer.Element ? null : function () {
    this.fire('iron-form-element-register');
  }, detached: Polymer.Element ? null : function () {
    this._parentForm && this._parentForm.fire('iron-form-element-unregister', { target: this });
  } };
Polymer.IronCheckedElementBehaviorImpl = { properties: { checked: { type: Boolean, value: !1, reflectToAttribute: !0, notify: !0, observer: '_checkedChanged' }, toggles: { type: Boolean, value: !0, reflectToAttribute: !0 }, value: { type: String, value: 'on', observer: '_valueChanged' } }, observers: ['_requiredChanged(required)'], created: function created() {
    this._hasIronCheckedElementBehavior = !0;
  }, _getValidity: function _getValidity() {
    return this.disabled || !this.required || this.checked;
  }, _requiredChanged: function _requiredChanged() {
    this.required ? this.setAttribute('aria-required', 'true') : this.removeAttribute('aria-required');
  }, _checkedChanged: function _checkedChanged() {
    this.active = this.checked, this.fire('iron-change');
  }, _valueChanged: function _valueChanged() {
    (this.value === void 0 || null === this.value) && (this.value = 'on');
  } }, Polymer.IronCheckedElementBehavior = [Polymer.IronFormElementBehavior, Polymer.IronValidatableBehavior, Polymer.IronCheckedElementBehaviorImpl];
Polymer.PaperInkyFocusBehaviorImpl = { observers: ['_focusedChanged(receivedFocusFromKeyboard)'], _focusedChanged: function _focusedChanged(a) {
    a && this.ensureRipple(), this.hasRipple() && (this._ripple.holdDown = a);
  }, _createRipple: function _createRipple() {
    var a = Polymer.PaperRippleBehavior._createRipple();return a.id = 'ink', a.setAttribute('center', ''), a.classList.add('circle'), a;
  } }, Polymer.PaperInkyFocusBehavior = [Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior, Polymer.PaperInkyFocusBehaviorImpl];
Polymer.PaperCheckedElementBehaviorImpl = { _checkedChanged: function _checkedChanged() {
    Polymer.IronCheckedElementBehaviorImpl._checkedChanged.call(this), this.hasRipple() && (this.checked ? this._ripple.setAttribute('checked', '') : this._ripple.removeAttribute('checked'));
  }, _buttonStateChanged: function _buttonStateChanged() {
    Polymer.PaperRippleBehavior._buttonStateChanged.call(this);this.disabled || this.isAttached && (this.checked = this.active);
  } }, Polymer.PaperCheckedElementBehavior = [Polymer.PaperInkyFocusBehavior, Polymer.IronCheckedElementBehavior, Polymer.PaperCheckedElementBehaviorImpl];
Polymer({ is: 'paper-checkbox', behaviors: [Polymer.PaperCheckedElementBehavior], hostAttributes: { role: 'checkbox', "aria-checked": !1, tabindex: 0 }, properties: { ariaActiveAttribute: { type: String, value: 'aria-checked' } }, attached: function attached() {
    Polymer.RenderStatus.afterNextRender(this, function () {
      var a = this.getComputedStyleValue('--calculated-paper-checkbox-ink-size').trim();if ('-1px' === a) {
        var b = this.getComputedStyleValue('--calculated-paper-checkbox-size').trim(),
            c = b.match(/[A-Za-z]+$/)[0] || 'px',
            d = parseFloat(b, 10),
            e = 8 / 3 * d;'px' === c && (e = Math.floor(e), e % 2 !== d % 2 && e++), this.updateStyles({ "--paper-checkbox-ink-size": e + c });
      }
    });
  }, _computeCheckboxClass: function _computeCheckboxClass(a, b) {
    var c = '';return a && (c += 'checked '), b && (c += 'invalid'), c;
  }, _computeCheckmarkClass: function _computeCheckmarkClass(a) {
    return a ? '' : 'hidden';
  }, _createRipple: function _createRipple() {
    return this._rippleContainer = this.$.checkboxContainer, Polymer.PaperInkyFocusBehaviorImpl._createRipple.call(this);
  } });
var MonacoEditorElement,
    __extends = undefined && undefined.__extends || function () {
  var _e3 = function e(t, o) {
    return _e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var o in t) {
        t.hasOwnProperty(o) && (e[o] = t[o]);
      }
    }, _e3(t, o);
  };return function (t, o) {
    function i() {
      this.constructor = t;
    }_e3(t, o), t.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i());
  };
}(),
    __assign = undefined && undefined.__assign || function () {
  return __assign = Object.assign || function (e) {
    for (var t, o = 1, i = arguments.length; o < i; o++) {
      for (var s in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
      }
    }return e;
  }, __assign.apply(this, arguments);
},
    __awaiter = undefined && undefined.__awaiter || function (e, t, o, i) {
  return new (o || (o = Promise))(function (s, r) {
    function a(e) {
      try {
        l(i.next(e));
      } catch (t) {
        r(t);
      }
    }function n(e) {
      try {
        l(i["throw"](e));
      } catch (t) {
        r(t);
      }
    }function l(e) {
      e.done ? s(e.value) : new o(function (t) {
        t(e.value);
      }).then(a, n);
    }l((i = i.apply(e, t || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (e, o) {
  function i(e) {
    return function (t) {
      return s([e, t]);
    };
  }function s(i) {
    if (r) throw new TypeError("Generator is already executing.");for (; d;) {
      try {
        if (r = 1, a && (n = 2 & i[0] ? a["return"] : i[0] ? a["throw"] || ((n = a["return"]) && n.call(a), 0) : a.next) && !(n = n.call(a, i[1])).done) return n;switch ((a = 0, n) && (i = [2 & i[0], n.value]), i[0]) {case 0:case 1:
            n = i;break;case 4:
            return d.label++, { value: i[1], done: !1 };case 5:
            d.label++, a = i[1], i = [0];continue;case 7:
            i = d.ops.pop(), d.trys.pop();continue;default:
            if ((n = d.trys, !(n = 0 < n.length && n[n.length - 1])) && (6 === i[0] || 2 === i[0])) {
              d = 0;continue;
            }if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
              d.label = i[1];break;
            }if (6 === i[0] && d.label < n[1]) {
              d.label = n[1], n = i;break;
            }if (n && d.label < n[2]) {
              d.label = n[2], d.ops.push(i);break;
            }n[2] && d.ops.pop(), d.trys.pop();continue;}i = o.call(e, d);
      } catch (t) {
        i = [6, t], a = 0;
      } finally {
        r = n = 0;
      }
    }if (5 & i[0]) throw i[1];return { value: i[0] ? i[1] : void 0, done: !0 };
  }var r,
      a,
      n,
      l,
      d = { label: 0, sent: function sent() {
      if (1 & n[0]) throw n[1];return n[1];
    }, trys: [], ops: [] };return l = { next: i(0), "throw": i(1), "return": i(2) }, "function" === typeof Symbol && (l[Symbol.iterator] = function () {
    return this;
  }), l;
};(function (e) {
  var t = { name: "The name of this script", namespace: "The namespace of the script", version: "The script version. This is used for the update check.", author: "The scripts author", description: "A short description.", homepage: "The author's homepage", homepageURL: "The author's homepage", website: "The author's homepage", source: "The author's homepage", icon: "The script's icon in low res", iconURL: "The script's icon in low res", defaulticon: "The script's icon in low res", icon64: "This scripts icon in 64x64 pixels.", icon64URL: "This scripts icon in 64x64 pixels.", updateURL: "An update URL for the userscript", downloadURL: "Defines the URL where the script will be downloaded from when an update was detected", supportURL: "Defines the URL where the user can report issues and get personal support", include: "The pages on which the script should run", match: "The pages on which the script should run", exclude: "Exclude URLs even if they are included by **@include** or **@match**", require: "Points to a javascript file that is loaded and executed before the script itself", resource: "Preloads resources that can be accessed by `GM_getResourceURL` and `GM_getResourceText` by the script", connect: "Domains which are allowed to be retrieved by `GM_xmlhttpRequest`", run_at: "The moment the script is injected (document-start, document-body, document-end, document-idle or document-menu)", "run-at": "The moment the script is injected (document-start, document-body, document-end, document-idle or document-menu)", grant: "Whitelists given `GM_*` functions", noframes: "Makes the script run on the main page but not in iframes", CRM_contentTypes: "The content types on which to run this script as a 6 items long boolean array (e.g. [true, false, true, false, true, false]) (CRM ONLY)", CRM_launchMode: "When to run this script. 0 = Run on clicking, 1 = always run, 2 = run on specified, 3 = show on specified, 4 = disabled. (CRM ONLY)", CRM_stylesheet: "Interpret this as a stylesheet (userstyle) instead of a script (userscript). (CRM ONLY)", CRM_toggle: "A boolean value (true/false) indicating whether to allow toggling this stylesheet on or off. Only used when @CRM_stylesheet is present. (CRM ONLY)", CRM_defaultOn: "A boolean value (true/false) indicating whether this stylesheet is toggled on by default. Only used when @CRM_stylesheet and @CRM_toggle are present. (CRM ONLY)", CRM_libraries: "An array containing stringified objects with a \"url\" and a \"name\" key, pointing to external libraries used in this script.", license: "The license for this script. If none is supplied, it's under exclusive copyright by default", preprocessor: "The css preprocessor to use, choose from 'less', 'stylus', 'uso' or 'default'. For more info check out https://github.com/openstyles/stylus/wiki/Usercss#preprocessor", "var": "A variable that can be changed by the user and is replaced when compiling the stylesheet" },
      o = function () {
    function e() {
      this._privateListenerMap = {}, this._publicListenerMap = {};
    }return e.prototype._insertOnce = function (e, t) {
      e.push(function o() {
        for (var i = [], s = 0; s < arguments.length; s++) {
          i[s] = arguments[s];
        }return e.slice(e.indexOf(o, 1)), t.apply(void 0, i);
      });
    }, e.prototype._assertKeyExists = function (e, t) {
      e in t || (t[e] = []);
    }, e.prototype._listen = function (e, t, o) {
      void 0 === o && (o = !1), this._assertKeyExists(e, this._privateListenerMap), o ? this._insertOnce(this._privateListenerMap[e], t) : this._privateListenerMap[e].push(t);
    }, e.prototype.listen = function (e, t, o) {
      void 0 === o && (o = !1), this._assertKeyExists(e, this._publicListenerMap), o ? this._insertOnce(this._publicListenerMap[e], t) : this._publicListenerMap[e].push(t);
    }, e.prototype._clearListeners = function (e) {
      e in this._publicListenerMap && delete this._publicListenerMap[e], e in this._privateListenerMap && delete this._privateListenerMap[e];
    }, e.prototype._firePrivate = function (e, t) {
      return e in this._privateListenerMap ? this._privateListenerMap[e].map(function (e) {
        return e.apply(void 0, t);
      }) : [];
    }, e.prototype._firePublic = function (e, t) {
      return e in this._publicListenerMap ? this._publicListenerMap[e].map(function (e) {
        return e.apply(void 0, t);
      }) : [];
    }, e;
  }(),
      i = function (e) {
    function t(t, o) {
      var i = e.call(this) || this;return i._editor = t, i._model = o, i;
    }return __extends(t, e), t.prototype._isTextarea = function () {
      return "__textarea" in this._editor;
    }, t;
  }(o),
      s = function (e) {
    function t(t, o) {
      var i = e.call(this, t, o) || this;return (i._disposables = [], i._isTextarea()) ? i : (i._onCreate(), window.setTimeout(function () {
        i._model.isDisposed() || (i._firePrivate("onLoad", []), i._clearListeners("onLoad"));
      }, 2500), i);
    }return __extends(t, e), t._genDisposable = function (e, t) {
      var o = e();return { dispose: function dispose() {
          t(o);
        } };
    }, t.prototype._isDiff = function (e) {
      return "__textarea" in e ? "__diff" in e : !("onDidChangeModel" in this._editor);
    }, t.prototype._onCreate = function () {
      var t = this;this.destroy(), this._disposables.push(this._model.onDidChangeContent(function (o) {
        t._firePrivate("onModelContentChange", [o]);
      }));
    }, t.prototype.destroy = function () {
      this._disposables = this._disposables.filter(function (e) {
        e.dispose();
      });
    }, t;
  }(i),
      r = function (e) {
    function o(t, o) {
      var i = e.call(this, t, o) || this;return (i._hasMetaBlockChanged = !0, i._decorations = [], i._isMetaDataHighlightDisabled = !1, i._isTextarea()) ? i : (i._attachListeners(), i);
    }return __extends(o, e), o._containsPosition = function (e, t) {
      for (var o = 0, i = e.indexes; o < i.length; o++) {
        var s = i[o],
            r = s.start,
            a = s.end;if (new monaco.Range(r.lineNumber, r.column, a.lineNumber, a.column).containsPosition(t)) return !0;
      }return !1;
    }, o.prototype._attachListeners = function () {
      var e = this;this._listen("onLoad", function () {
        e._doModelUpdate();
      }), this._listen("onModelContentChange", function () {
        e._hasMetaBlockChanged = !0, e._doModelUpdate();
      }), this._listen("shouldDecorate", function (t) {
        if (e._isMetaDataHighlightDisabled) return !1;var o = !1;if (!e._metaBlock) if (e.getMetaBlock()) o = !0;else return !1;return o || t && t.isRedoing || t && 0 !== t.changes.filter(function (t) {
          return e._isInMetaRange(t.range);
        }).length;
      }), this._listen("decorate", function () {
        return e._isMetaDataHighlightDisabled ? [] : e._userScriptGutterHighlightChange();
      }), this._listen("decorate", function () {
        return e._isMetaDataHighlightDisabled ? [] : e._userScriptHighlightChange();
      }), this._isMetaDataHighlightDisabled = window.app ? window.app.settings.editor.disabledMetaDataHighlight : window.installPage.settings.editor.disabledMetaDataHighlight, this._isDiff(this._editor) || this._disposables.push(this._editor.addAction({ id: "disable-metadata-highlight", label: "Disable Metadata Highlight", run: function run() {
          e._isMetaDataHighlightDisabled = !0;
        } })), this._isDiff(this._editor) || this._disposables.push(this._editor.addAction({ id: "enable-metadata-highlight", label: "Enable Metadata Highlight", run: function run() {
          e._isMetaDataHighlightDisabled = !1;
        } })), this._defineMetaOnModel(), this._listen("onModelContentChange", function (t) {
        e._hasMetaBlockChanged = !0, e._shouldUpdateDecorations(t) && e._doModelUpdate();
      });
    }, o.prototype._defineMetaOnModel = function () {
      var e = this;"_metaBlock" in this._model || Object.defineProperty(this._model, "_metaBlock", { get: function get() {
          return e.getMetaBlock();
        } });
    }, o.prototype._getMetaOutlines = function () {
      var e = this._model.getValue();if ((-1 === e.indexOf(o._userScriptStart) || -1 === e.indexOf(o._userScriptEnd)) && (-1 === e.indexOf(o._userStyleStart) || -1 === e.indexOf(o._userStyleEnd))) return this._metaBlock = null;for (var t, i = e.split("\n"), s = [], r = { start: null, end: null }, a = 0; a < i.length; a++) {
        if (t = i[a], -1 !== t.indexOf(o._userScriptStart) || -1 !== t.indexOf(o._userStyleStart)) {
          var n = t.indexOf(o._userScriptStart);-1 === n && (n = t.indexOf(o._userStyleStart)), r.start || (r.start = new monaco.Position(a + 1, n));
        }if (-1 !== t.indexOf(o._userScriptEnd) || -1 !== t.indexOf(o._userStyleEnd)) {
          var n = t.indexOf(o._userScriptEnd);-1 === n && (n = t.indexOf(o._userStyleEnd)), r.end || (r.end = new monaco.Position(a + 1, n + o._userScriptEnd.length)), s.push({ start: r.start, end: r.end }), r.start = r.end = null;
        }
      }return 0 === s.length && (this._metaBlock = null), s;
    }, o.prototype._getMetaContent = function (e) {
      for (var t = this._model.getValue(), s = {}, r = o._metaPropRegex, a = t.split("\n"), n = { tag: null, content: null }, l = 0, d = e; l < d.length; l++) {
        for (var p = d[l], c = p.start, u = p.end, g = c.lineNumber; g < u.lineNumber; g++) {
          var i = a[g],
              _ = r.exec(i);if (_) {
            n.tag && n.content && (n.tag in s ? s[n.tag].push(n.content) : s[n.tag] = [n.content], n.tag = n.content = null);var h = _[1],
                m = _[3];if (!h || !m) continue;n.tag = h, n.content = m;
          } else n.content += i;
        }
      }return s;
    }, o.prototype._isDifferent = function (e, t) {
      if (!e || !t) return !0;if (e.indexes.length !== t.indexes.length) return !1;for (var o = 0; o < e.indexes.length; o++) {
        var i = e.indexes[o],
            s = t.indexes[o];if (!i.start.equals(s.start) || !i.end.equals(s.end)) return !1;
      }var r = [];for (var a in e) {
        if (!(a in t)) return !1;r.push(a);
      }for (var a in t) {
        if (!(a in e)) return !1;-1 === r.indexOf(a) && r.push(a);
      }for (var n = 0, l = r; n < l.length; n++) {
        var a = l[n],
            d = e.content[a],
            p = t.content[a],
            c = Array.isArray(d),
            u = Array.isArray(p);if (c !== u) return !1;if (c) {
          for (var g, _ = 0, h = d; _ < h.length; _++) {
            if (g = h[_], -1 === p.indexOf(g)) return !1;
          }for (var g, m = 0, y = p; m < y.length; m++) {
            if (g = y[m], -1 === d.indexOf(g)) return !1;
          }
        } else if (d !== p) return !1;
      }return !0;
    }, o.prototype.getMetaBlock = function () {
      if (!this._hasMetaBlockChanged) return this._metaBlock;var e = this._metaBlock,
          t = this._getMetaOutlines();if (!t) return null;var o = this._getMetaContent(t),
          i = this._metaBlock = { indexes: t, content: o };return this._isDifferent(e, i) && (!e && (e = { indexes: [{ start: new monaco.Position(0, 0), end: new monaco.Position(0, 0) }], content: {} }), this._firePublic("metaChange", [e, i])), i;
    }, o.prototype._getKeyDescription = function (e) {
      return e in t ? "Metadata key `" + e + "`:\n" + t[e] : "Metadata key `" + e + "`, unknown key";
    }, o.prototype._isInMetaRange = function (e) {
      if (!this._metaBlock) return !1;for (var t = 0, o = this._metaBlock.indexes; t < o.length; t++) {
        var i = o[t],
            s = i.start,
            r = i.end;if (monaco.Range.areIntersectingOrTouching({ startColumn: s.column, startLineNumber: s.lineNumber, endColumn: r.column, endLineNumber: r.lineNumber }, e)) return !0;
      }return !1;
    }, o.prototype._userScriptGutterHighlightChange = function () {
      return this._getMetaOutlines() ? this.getMetaBlock().indexes.map(function (e) {
        var t = e.start,
            o = e.end;return { range: new monaco.Range(t.lineNumber, t.column, o.lineNumber, o.column), options: { isWholeLine: !0, linesDecorationsClassName: "userScriptGutterHighlight", stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges } };
      }) : [];
    }, o.prototype._userScriptHighlightChange = function () {
      var e = this._model.getValue();if (!this.getMetaBlock()) return null;for (var t = o._metaPropRegex, s = e.split("\n"), r = [], a = 0; a < s.length; a++) {
        var i = s[a],
            n = t.exec(i);if (n) {
          var l = n[1],
              d = n[3],
              p = l ? i.indexOf(l) : 0,
              c = l ? p + l.length : 0,
              u = a + 1;if (l && r.push({ range: new monaco.Range(u, p, u, c + 1), options: { stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges, inlineClassName: "userScriptKeyHighlight", hoverMessage: this._getKeyDescription(l), isWholeLine: !1 } }), d) {
            var g = i.slice(c).indexOf(d) + c,
                _ = g + 1;r.push({ range: new monaco.Range(u, _, u, _ + d.length), options: { stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges, inlineClassName: "userScriptValueHighlight", hoverMessage: "Value `" + d + "` for key `" + l + "`", isWholeLine: !1 } });
          }
        }
      }return r;
    }, o.prototype._doDecorationUpdate = function (e) {
      this._isDiff(this._editor) || (this._editor.getModel() === this._model ? this._decorations = this._editor.deltaDecorations(this._decorations, e) : this._decorations = this._editor.deltaDecorations(this._decorations, []));
    }, o.prototype._shouldUpdateDecorations = function (e) {
      var t = this._firePrivate("shouldDecorate", [e]);return 1 < t.length ? t.reduce(function (e, t) {
        return e || t;
      }) : 1 === t.length && t[0];
    }, o.prototype._formatDecorations = function (e) {
      return 0 === e.length ? [] : 1 === e.length ? e[0] : e.reduce(function (e, t) {
        return e.concat(t);
      });
    }, o.prototype._doModelUpdate = function () {
      var e = this._firePrivate("decorate", []).filter(function (e) {
        return null !== e;
      });this._doDecorationUpdate(this._formatDecorations(e));
    }, o._metaTagProvider = { provideCompletionItems: function provideCompletionItems() {
        return [{ label: "==UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==UserScript==", detail: "UserScript start tag", documentation: "The start tag for a UserScript metadata block" }, { label: "==/UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==/UserScript==", detail: "UserScript end tag", documentation: "The end tag for a UserScript metadata block" }, { label: "==UserStyle==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==UserStyle==", detail: "UserStyle start tag", documentation: "The start tag for a UserStyle metadata block" }, { label: "==/UserStyle==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==/UserStyle==", detail: "UserStyle end tag", documentation: "The end tag for a UserStyle metadata block" }];
      } }, o._metaKeyProvider = { provideCompletionItems: function provideCompletionItems(e, i) {
        var s = new monaco.Range(i.lineNumber, 0, i.lineNumber, i.column),
            r = e.getValueInRange(s),
            a = e._metaBlock;if (!a || o._containsPosition(a, i)) {
          var n = r.split("@"),
              l = n[0].length;n = n.slice(1);for (var d = 0, p = n; d < p.length; d++) {
            var c = p[d],
                u = "@" + c,
                g = null;if (g = /@(\w*)/.exec(u)) {
              var _ = l + u.indexOf(g[0]) + 1,
                  h = new monaco.Range(i.lineNumber, _, i.lineNumber, _ + g[0].length);if (h.containsPosition(i)) return { isIncomplete: !0, items: Object.getOwnPropertyNames(t).map(function (e) {
                  var o = t[e];return { label: "@" + e, kind: monaco.languages.CompletionItemKind.Property, insertText: "@" + e, detail: "Metadata key", documentation: o };
                }) };
            }l += u.length;
          }
        }return [];
      } }, o._userScriptStart = "==UserScript==", o._userStyleStart = "==UserStyle==", o._userScriptEnd = "==/UserScript==", o._userStyleEnd = "==/UserStyle==", o._metaPropRegex = /@(\w+)(\s+)(.+)?/, o;
  }(s),
      a = function (e) {
    function t(t, o) {
      var i = e.call(this, t, o) || this;return (i.metaBlockChanged = !0, i._isTextarea()) ? i : (f.Completion.register("javascript", r._metaTagProvider), f.Completion.register("javascript", r._metaKeyProvider), f.Completion.register("typescript", r._metaTagProvider), f.Completion.register("typescript", r._metaKeyProvider), i._disposables.push({ dispose: function dispose() {
          f.Completion.clearAll();
        } }), i);
    }return __extends(t, e), t.getSettings = function () {
      return {};
    }, t;
  }(r);e.MonacoEditorScriptMetaMods = a;var n = function (e) {
    function t(t, o) {
      var i = e.call(this, t, o) || this;return (i._underlineDisabled = !1, i._currentStylesheetRules = "", i._styleLines = [], i._isTextarea()) ? i : (f.Completion.register("css", r._metaTagProvider), f.Completion.register("css", r._metaKeyProvider), f.Completion.register("less", r._metaTagProvider), f.Completion.register("less", r._metaKeyProvider), i._disposables.push({ dispose: function dispose() {
          f.Completion.clearAll();
        } }), i._listen("shouldDecorate", function (e) {
        if (e.isFlush) return !0;for (var t = 0, o = e.changes; t < o.length; t++) {
          var s = o[t],
              r = [s.range.startLineNumber];s.range.endLineNumber !== s.range.startLineNumber && r.push(s.range.endLineNumber);for (var a, n = 0, l = r; n < l.length; n++) {
            if (a = l[n], -1 < i._styleLines.indexOf(a)) return !0;for (var d, p = i._model.getLineContent(a), c = i._getCssRuleParts(p), u = 0, g = c; u < g.length; u++) {
              if (d = g[u], i._findColor(0, d.text)) return !0;
            }
          }
        }return !1;
      }), i._listen("decorate", function () {
        return i._highlightColors();
      }), i._disposables.push(s._genDisposable(function () {
        return window.setInterval(function () {
          !i._underlineDisabled && window.app.item && i._markUnderlines();
        }, 50);
      }, function (e) {
        window.clearInterval(e);
      })), i._underlineDisabled = window.app ? window.app.settings.editor.cssUnderlineDisabled : window.installPage.settings.editor.cssUnderlineDisabled, i._isDiff(i._editor) || (i._disposables.push(i._editor.addAction({ id: "disable-css-underline", label: "Disable CSS underline", run: function run() {
          i._underlineDisabled = !0;
        } })), i._disposables.push(i._editor.addAction({ id: "enable-css-underline", label: "Enable CSS Underline", run: function run() {
          i._underlineDisabled = !1;
        } }))), i);
    }return __extends(t, e), t.prototype._getCssRuleParts = function (e) {
      for (var o = null, i = []; o = t._cssRuleRegex.exec(e);) {
        var s = e.indexOf(o[0]),
            r = s + o[0].length;i.push({ text: o[0], start: s }), e = e.slice(0, s) + this._stringRepeat("-", o[0].length) + e.slice(r);
      }return i;
    }, t.prototype._findColor = function (e, o, i) {
      void 0 === i && (i = 0);for (var s = 0, r = t._cssColorNames; s < r.length; s++) {
        var a = r[s],
            n = -1;if (-1 < (n = o.toLowerCase().indexOf(a))) return { pos: new monaco.Range(e + 1, n + i + 1, e + 1, n + i + a.length + 1), color: a };
      }var l = null;if (l = t._hexRegex.exec(o)) {
        var n = o.indexOf(l[1]);return { pos: new monaco.Range(e + 1, n + i + 1, e + 1, n + i + l[1].length + 1), color: l[1] };
      }if (l = t._rgbRegex.exec(o)) {
        var n = o.indexOf(l[0]);return { pos: new monaco.Range(e + 1, n + i + 1, e + 1, n + i + l[0].length + 1), color: l[0] };
      }if (l = t._rgbaRegex.exec(o)) {
        var n = o.indexOf(l[0]);return { pos: new monaco.Range(e + 1, n + i + 1, e + 1, n + i + l[0].length + 1), color: l[0] };
      }return null;
    }, t.prototype._stringRepeat = function (e, t) {
      for (var o = "", s = 0; s < t; s++) {
        o += e;
      }return o;
    }, t.prototype._getColors = function () {
      for (var e = this._model.getValue(), t = e.split("\n"), o = [], s = 0; s < t.length; s++) {
        for (var i = t[s], r = null, a = this._getCssRuleParts(i), n = 0, l = a; n < l.length; n++) {
          var d = l[n],
              p = d.text,
              c = d.start;(r = this._findColor(s, p, c)) && o.push(r);
        }
      }return o;
    }, t.prototype._highlightColors = function () {
      var e = this._getColors();return this._styleLines = e.map(function (e) {
        return e.pos.startLineNumber;
      }), e.map(function (e) {
        return { range: e.pos, options: { stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges, beforeContentClassName: "userScriptColorUnderline color" + e.color } };
      });
    }, t.prototype._markUnderlines = function () {
      var e = [],
          t = "";if (this._editor.getModel() === this._model) {
        var o = this._editor.getDomNode().querySelectorAll(".userScriptColorUnderline");if (Array.prototype.slice.apply(o).forEach(function (o) {
          for (var s = 0; s < o.classList.length; s++) {
            if (0 === o.classList[s].indexOf("color")) {
              var i = o.classList[s].slice(5),
                  r = o.classList[s];e.push(["." + r + "::before", "background-color: " + i]), t += "" + r + i;
            }
          }
        }), t === this._currentStylesheetRules) return;for (var i = ("script" === window.app.item.type ? window.scriptEdit : window.stylesheetEdit).$.editor._getStylesheet(), s = i.sheet; 0 !== s.rules.length;) {
          s.deleteRule(0);
        }this._currentStylesheetRules = t, e.forEach(function (e) {
          var t = e[0],
              o = e[1];s.addRule(t, o);
        });
      }
    }, t.getSettings = function () {
      return {};
    }, t._cssRuleRegex = /:(\s*)?(.*)(\s*);/, t._cssColorNames = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed ", "Indigo ", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"].map(function (e) {
      return e.toLowerCase();
    }).sort(function (e, t) {
      return t.length - e.length;
    }), t._hexRegex = /#((([a-f]|[A-F]){8})|(([a-f]|[A-F]){6})|(([a-f]|[A-F]){3}))[^a-f|A-F]/, t._rgbRegex = /rgb\((\d{1,3}),(\s*)?(\d{1,3}),(\s*)?(\d{1,3})\)/, t._rgbaRegex = /rgb\((\d{1,3}),(\s*)?(\d{1,3}),(\s*)?(\d{1,3})\),(\s*)?(\d{1,3})\)/, t;
  }(r),
      l = function (e) {
    function t(o, i) {
      var s = e.call(this, o, i) || this;if (s._isTextarea()) return s;var r = i.getValue();return s._findSchema(r) || i.setValue(s._addSchemaKey(r)), t.enableSchema(), s._disposables.push({ dispose: function dispose() {
          t.disableSchema();
        } }), s;
    }return __extends(t, e), t.prototype._addSchemaKey = function (e) {
      var t = "\t\"$schema\": \"crm-settings.json\"";if (0 === e.split("\n").join("").trim().length) return "{\n" + t + "\n}";var o = e.split("\n");for (var s in o) {
        var r = o[s];0 === r.trim().indexOf("{") && (1 < r.trim().length ? (o[s] = "{", o.splice(~~s + 1, 0, t, r.trim().slice(1))) : o.splice(~~s + 1, 0, t));
      }return o.join("\n");
    }, t.prototype._findSchema = function (e) {
      e = e.replace(/\/\*.*?\*\//g, "");var t = e.split("\n");for (var o in t) {
        if (-1 < t[o].indexOf("//")) for (var i, s = !1, r = 0; r < t[o].length; r++) {
          if (i = t[o][r], "\\" === i) continue;else "\"" === i ? s = !s : s || "/" !== i || "/" !== t[o][r + 1] || (t[o] = t[o].slice(0, r));
        }
      }try {
        var a = JSON.parse(e);return !!("$schema" in a);
      } catch (e) {
        return !0;
      }
    }, t.disableSchema = function () {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({ allowComments: !0 });
    }, t.enableSchema = function () {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({ allowComments: !1, schemas: [{ uri: "crm-settings.json", schema: { type: "object", properties: { $schema: { type: "string", "enum": ["crm-settings.json"] } }, additionalProperties: { title: "The name of the option", type: "object", oneOf: [{ type: "object", properties: { type: { title: "A number type option", type: "string", "enum": ["number"] }, minimum: { title: "The minimum value of the number", type: "number" }, maximum: { title: "The maximum value of the number", type: "number" }, descr: { title: "A description for this option", type: "string" }, defaultValue: { title: "The default value for this option", type: "number" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["number", "null"] } } }, { type: "object", properties: { type: { title: "A string type option", type: "string", "enum": ["string"] }, maxLength: { title: "The maximum length of the string", type: "number" }, format: { title: "A regex format that the string has to follow", type: "string" }, descr: { title: "A description for this option", type: "string" }, defaultValue: { title: "The default value for this option", type: "string" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["string", "null"] } } }, { type: "object", properties: { type: { title: "A choice type option", type: "string", "enum": ["choice"] }, selected: { title: "The selected value's index", type: "number" }, descr: { title: "A description for this option", type: "string" }, values: { title: "The possible values of this option", type: "array", items: { type: ["string", "number"] } } } }, { type: "object", properties: { type: { title: "A choice type option", type: "string", "enum": ["color"] }, descr: { title: "A description for this option", type: "string" }, defaultValue: { title: "The default value for this option", type: "string" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["string", "null"] } } }, { type: "object", properties: { type: { title: "A boolean type option", type: "string", "enum": ["boolean"] }, descr: { title: "A description for this option", type: "string" }, defaultValue: { title: "The default value for this option", type: "boolean" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["boolean", "null"] } } }, { type: "object", properties: { type: { title: "An array type option", type: "string", "enum": ["array"] }, maxItems: { title: "The maximum number of array items", type: "number" }, items: { title: "The type of items this array contains (array or string)", type: "string", "enum": ["string", "number"] }, descr: { title: "A description for this option", type: "string" }, defaultValue: { title: "The default value for this option", type: "array", items: { type: ["string", "number"] } }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["array", "null"], items: { type: ["string", "number"] } } }, required: ["items"] }] } } }], validate: !0 });
    }, t.getSettings = function () {
      return {};
    }, t;
  }(s),
      d = function (e) {
    function t(t, o, i) {
      var s = i.node,
          r = i.isBackground,
          a = e.call(this, t, o) || this;return (a._libraries = [], a._registrationDisposables = [], a._node = s, a._isBackground = r, a._isTextarea()) ? a : (a._enable(), a._isDiff(a._editor) || a._disposables.push(a._editor.onDidChangeModel(function (t) {
        t.newModelUrl === o.uri ? a._enable() : a._disable();
      })), a._disposables.push({ dispose: function dispose() {
          a._registrationDisposables.forEach(function (e) {
            e.dispose();
          });
        } }), a);
    }return __extends(t, e), t.prototype._enable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var e;return __generator(this, function (t) {
          switch (t.label) {case 0:
              return e = this, [4, this._registerLibraries(this._libraries)];case 1:
              return e._registrationDisposables = t.sent(), [2];}
        });
      });
    }, t.prototype._disable = function () {
      this._registrationDisposables.forEach(function (e) {
        e.dispose();
      }), this._registrationDisposables = [];
    }, t.prototype.updateLibraries = function () {
      this._libraries = this._getLibraries(this._node, this._isBackground);
    }, t.prototype._getLibraries = function (e, t) {
      return t ? e.value.backgroundLibraries : e.value.libraries;
    }, t.prototype._getLibrary = function (e) {
      return __awaiter(this, void 0, void 0, function () {
        var t, o, i, s, r;return __generator(this, function (a) {
          switch (a.label) {case 0:
              return e ? [4, browserAPI.storage.local.get()] : [2, !1];case 1:
              for (t = a.sent(), o = t.libraries, (i = 0, s = o); i < s.length; i++) {
                if (r = s[i], r.name === e) {
                  if (r.ts && r.ts.enabled) return [2, r.ts.code.compiled];break;
                }
              }return [2, !1];}
        });
      });
    }, t.prototype._registerLibrary = function (e) {
      return __awaiter(this, void 0, void 0, function () {
        var t;return __generator(this, function (o) {
          switch (o.label) {case 0:
              return [4, this._getLibrary(e.name)];case 1:
              return t = o.sent(), !1 === t ? [2, { dispose: function dispose() {} }] : [2, monaco.languages.typescript.typescriptDefaults.addExtraLib(t, e.name + ".ts")];}
        });
      });
    }, t.prototype._registerLibraries = function (e) {
      return __awaiter(this, void 0, void 0, function () {
        var t = this;return __generator(this, function (o) {
          switch (o.label) {case 0:
              return [4, Promise.all(e.map(function (e) {
                return t._registerLibrary(e);
              }))];case 1:
              return [2, o.sent()];}
        });
      });
    }, t.getSettings = function () {
      return {};
    }, t;
  }(a);e.MonacoEditorTSLibrariesMetaMods = d;var p,
      c = function () {
    function e(e, t) {
      this._options = t, this._models = [], this.__textarea = !0;var o = t.model;o && (this._model = o, this._models = "original" in o ? [o.original, o.modified] : [o]), this._genBaseElements(e), o && ("original" in o ? (this._addModelListenersBase(o.original), this._addModelListenersBase(o.modified)) : this._addModelListenersBase(o));
    }return e.prototype._genBaseElements = function (e) {
      var t = document.createElement("div");t.classList.add("monacoTextareaContainer"), e.appendChild(t), this._baseElements = { container: t };
    }, e.prototype._totalCharIndexToPosition = function (e, t) {
      var o = e.split("\n");for (var s in o) {
        var r = o[s];if (0 >= t - r.length) return { line: ~~s, char: t - r.length };
      }return { line: o.length - 1, char: o[o.length - 1].length };
    }, e.prototype._addModelListenersBase = function (e) {
      this._models.push(e), this._addModelListeners(e);
    }, e.prototype._assertModelAdded = function (e) {
      -1 === this._models.indexOf(e) && (this._models.push(e), this._addModelListeners(e));
    }, e.prototype._genTextarea = function () {
      var e = document.createElement("textarea");return e.classList.add("monacoEditorTextarea"), e.setAttribute("spellcheck", "false"), e.setAttribute("autocomplete", "off"), e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), "vs-dark" === this._options.theme && e.classList.add("dark-theme"), e;
    }, e.prototype.updateOptions = function () {}, e.prototype.getValue = function () {
      return this._getValue();
    }, e.prototype.saveViewState = function () {
      return "original" in this._model ? this._model.modified : this._model;
    }, e.prototype.restoreViewState = function (e) {
      this._swapToModel(e);
    }, e.prototype.focus = function () {
      this._textareaElements[0] && this._textareaElements[0].focus();
    }, e.prototype.layout = function () {}, e.prototype.dispose = function () {
      this._textareaElements && this._textareaElements.forEach(function (e) {
        e && e.remove();
      }), this._textareaElements = [], this._models.forEach(function (e) {
        return e.dispose();
      }), this._models = [], this._baseElements.container && this._baseElements.container.remove(), this._baseElements = {};
    }, e.prototype.getDomNode = function () {
      return this._baseElements.container;
    }, e.prototype.getSelected = function () {
      for (var e, t = 0, o = this._textareaElements; t < o.length; t++) {
        if (e = o[t], !!e) {
          var i = e.selectionStart,
              s = e.selectionEnd,
              r = e.value.substring(i, s);return { from: __assign({}, this._totalCharIndexToPosition(e.value, i), { totalChar: i }), to: __assign({}, this._totalCharIndexToPosition(e.value, s), { totalChar: s }), content: r };
        }
      }return null;
    }, e;
  }(),
      u = function (e) {
    function t(t, o) {
      var i = e.call(this, t, o) || this;return i._genElements(t), i._textarea.addEventListener("keydown", function () {
        window.setTimeout(function () {
          i._model.setValue(i._textarea.value, i._textarea);
        }, 0);
      }), o.model && (i._textarea.value = o.model.getValue()), i;
    }return __extends(t, e), t.prototype._genElements = function (e) {
      this._textarea = this._genTextarea(), this._textareaElements = [this._textarea], e.appendChild(this._textarea);
    }, t.prototype._isActiveModel = function (e) {
      return this._model === e;
    }, t.prototype._addModelListeners = function (e) {
      var t = this;e.listen("change", function (o) {
        var i = o.newValue,
            s = o.src;t._isActiveModel(e) && s !== t._textarea && (t._textarea.value = i);
      });
    }, t.prototype._getValue = function () {
      return this._model.getValue();
    }, t.prototype._swapToModel = function (e) {
      this.setModel(e);
    }, t.prototype.getModel = function () {
      return this._model;
    }, t.prototype.setModel = function (e) {
      this._assertModelAdded(e), this._model = e, this._textarea.value = e.getValue();
    }, (t.prototype.setValue = function (e) {
      this._model.setValue(e);
    }, t);
  }(c),
      g = function (e) {
    function t(t, o) {
      var i = e.call(this, t, o) || this;return i.__diff = !0, i._genElements(), o.model && (i._textareas.original.value = o.model.original.getValue(), i._textareas.modified.value = o.model.modified.getValue()), i;
    }return __extends(t, e), t.prototype._genElements = function () {
      var e = this._genTextarea(),
          t = this._genTextarea();e.classList.add("monacoOriginalTextarea"), t.classList.add("monacoModifiedTextarea"), this._textareas = { original: e, modified: t }, this._textareaElements = [e, t], this._baseElements.container.classList.add("diffContainer"), this._baseElements.container.appendChild(e), this._baseElements.container.appendChild(t);
    }, t.prototype._setTextareaValues = function (e) {
      this._textareas.original.value = e.original.getValue(), this._textareas.modified.value = e.modified.getValue();
    }, t.prototype._isActiveOriginalModel = function (e) {
      return this._model.original === e;
    }, t.prototype._isActiveModifiedModel = function (e) {
      return this._model.modified === e;
    }, t.prototype._addModelListeners = function (e) {
      var t = this;e.listen("change", function (o) {
        var i = o.newValue,
            s = o.src;t._isActiveOriginalModel(e) ? s !== t._textareas.original && (t._textareas.original.value = i) : t._isActiveModifiedModel(e) && s !== t._textareas.modified && (t._textareas.modified.value = i);
      });
    }, t.prototype._getValue = function () {
      return this._model.modified.getValue();
    }, t.prototype._swapToModel = function (e) {
      this.setModel(e);
    }, t.prototype.getModel = function () {
      return this._model;
    }, t.prototype.setModel = function (e) {
      this._assertModelAdded(e.original), this._assertModelAdded(e.modified), this._model = e, this._setTextareaValues(e);
    }, t;
  }(c),
      _ = function (e) {
    function t(t) {
      var o = e.call(this) || this;return o.setValue(t), o;
    }return __extends(t, e), t.prototype.getValue = function () {
      return this._value;
    }, t.prototype.setValue = function (e, t) {
      var o = this._value;this._value = e, this._value !== o && this._firePublic("change", [{ oldValue: o, newValue: this._value, src: t }]);
    }, t.prototype.dispose = function () {}, t;
  }(o),
      h = { noSpinner: { type: Boolean, notify: !0, value: !1 } };(function (e) {
    e[e.CSS = 0] = "CSS", e[e.JS = 1] = "JS", e[e.TS = 2] = "TS", e[e.JSON = 3] = "JSON", e[e.JSON_OPTIONS = 4] = "JSON_OPTIONS", e[e.JS_META = 5] = "JS_META", e[e.TS_META = 6] = "TS_META", e[e.CSS_META = 7] = "CSS_META", e[e.LESS = 8] = "LESS", e[e.LESS_META = 9] = "LESS_META", e[e.PLAIN_TEXT = 10] = "PLAIN_TEXT";
  })(p || (p = {}));var m;(function (e) {
    e[e.TS_LIBRARIES_META = 0] = "TS_LIBRARIES_META";
  })(m || (m = {}));var y = function () {
    function e() {}return e._typeIsCss = function (e) {
      return e === p.CSS || e === p.CSS_META || e === p.LESS || e === p.LESS_META;
    }, e._typeIsTS = function (e) {
      return e === p.TS || e === p.TS_META;
    }, e._typeIsLESS = function (e) {
      return e === p.LESS || e === p.LESS_META;
    }, e._typeIsJS = function (e) {
      return e === p.JS || e === p.JS_META;
    }, e._typeIsJSON = function (e) {
      return e === p.JSON || e === p.JSON_OPTIONS;
    }, e._getSettings = function (e) {
      switch (e) {case p.CSS_META:case p.LESS_META:
          return n.getSettings();case p.TS_META:
          return a.getSettings();case p.JSON_OPTIONS:
          return l.getSettings();}if ("object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e))) switch (e.mode) {case m.TS_LIBRARIES_META:
          return d.getSettings();}return {};
    }, e._getTypeHandler = function (e, t, o) {
      switch (e) {case p.CSS_META:case p.LESS_META:
          return new n(t, o);case p.JS_META:case p.TS_META:
          return new a(t, o);case p.JSON_OPTIONS:
          return new l(t, o);}if ("object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e))) switch (e.mode) {case m.TS_LIBRARIES_META:
          return new d(t, o, e.config);}return null;
    }, e._getLanguage = function (e) {
      return this._typeIsCss(e) ? "css" : this._typeIsJS(e) ? "javascript" : this._typeIsTS(e) ? "typescript" : this._typeIsJSON(e) ? "json" : "text/plain";
    }, e.initTSLibrariesMode = function (e, t) {
      return { custom: !0, config: { node: e, isBackground: t }, mode: m.TS_LIBRARIES_META };
    }, e._mergeArrays = function (e, t) {
      for (var o = 0; o < t.length; o++) {
        e[o] = e[o] && "object" === babelHelpers["typeof"](t[o]) && void 0 !== e[o] && null !== e[o] ? Array.isArray(t[o]) ? this._mergeArrays(e[o], t[o]) : this._mergeObjects(e[o], t[o]) : t[o];
      }return e;
    }, e._mergeObjects = function (e, t) {
      for (var o in t) {
        t.hasOwnProperty(o) && (e[o] = "object" === babelHelpers["typeof"](t[o]) && "object" === babelHelpers["typeof"](e[o]) && void 0 !== e[o] && null !== e[o] ? Array.isArray(t[o]) ? this._mergeArrays(e[o], t[o]) : this._mergeObjects(e[o], t[o]) : t[o]);
      }return e;
    }, (e.setMonacoEditorScopes = function (e) {
      return __awaiter(this, void 0, void 0, function () {
        var t;return __generator(this, function (o) {
          switch (o.label) {case 0:
              return this._supportsMonaco() ? [4, f.monacoReady] : [3, 2];case 1:
              o.sent(), f.setScope(this), o.label = 2;case 2:
              return t = e(), this._supportsMonaco() && (f.registerScope(this, this.editor), f.StyleHack.copyThemeScope(this)), this._hideSpinner(), [2, t];}
        });
      });
    }, e._getChromeVersion = function () {
      return "chrome" === BrowserAPI.getBrowser() ? parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10) : 1e3;
    }, e._supportsMonaco = function () {
      return 30 <= this._getChromeVersion();
    }, e.create = function (e, t, o) {
      return __awaiter(this, void 0, void 0, function () {
        var i,
            s,
            r,
            a = this;return __generator(this, function (n) {
          switch (n.label) {case 0:
              return i = this._getLanguage(e), this._createInfo = { method: "create", options: t, override: o }, this._isTypescript = this._typeIsTS(e), this._isLess = this._typeIsLESS(e), this.options = t, [4, this.setMonacoEditorScopes(function () {
                if (a._supportsMonaco()) {
                  var e = monaco.editor.createModel(t.value, i);return a.editor = window.monaco.editor.create(a.$.editorElement, a._mergeObjects({ model: e }, t), o), e;
                }var s = new _(t.value);return a.editor = new u(a.$.editorElement, { model: s }), s;
              })];case 1:
              return s = n.sent(), this.editor.updateOptions(this._getSettings(e)), r = this._getTypeHandler(e, this.editor, s), this._models["default"] = { models: [this.editor.getModel()], handlers: [r], state: null, editorType: e }, [2, this];}
        });
      });
    }, e.createDiff = function (e, t, o, i) {
      var s = e[0],
          r = e[1];return __awaiter(this, void 0, void 0, function () {
        var e,
            a,
            n,
            l,
            d = this;return __generator(this, function (p) {
          switch (p.label) {case 0:
              return e = this._getLanguage(t), this._createInfo = { method: "diff", values: [s, r], language: e, editorType: t, options: o, override: i }, this._isTypescript = this._typeIsTS(t), this._isLess = this._typeIsLESS(t), this.options = o, [4, this.setMonacoEditorScopes(function () {
                d.editor = d._supportsMonaco() ? monaco.editor.createDiffEditor(d.$.editorElement, o, i) : new g(d.$.editorElement, {});
              })];case 1:
              return p.sent(), this._supportsMonaco() ? (a = monaco.editor.createModel(s, e), n = monaco.editor.createModel(r, e)) : (a = new _(s), n = new _(r)), this.editor.updateOptions(this._getSettings(t)), this.editor.setModel({ original: a, modified: n }), l = [this._getTypeHandler(t, this.editor, a), this._getTypeHandler(t, this.editor, n)], this._models["default"] = { editorType: t, handlers: l, models: [a, n], state: null }, [2, this];}
        });
      });
    }, e.createFrom = function (e) {
      return __awaiter(this, void 0, void 0, function () {
        var t,
            o,
            i,
            s = this;return __generator(this, function (r) {
          switch (r.label) {case 0:
              return this._createInfo && "from" === this._createInfo.method && this._createInfo.from.removeChild(this), t = e.editor, o = e.getCurrentModel().editorType, this._createInfo = { method: "from", from: e, modelId: e.getCurrentModelId() }, this._isTypescript = this._typeIsTS(o), this._isLess = this._typeIsLESS(o), [4, this.setMonacoEditorScopes(function () {
                s.editor = s._supportsMonaco() ? window.monaco.editor.create(s.$.editorElement, s._mergeObjects({ model: t.getModel() }, s.options)) : new u(s.$.editorElement, { model: t.getModel() });
              })];case 1:
              return r.sent(), this.editor.updateOptions(this._getSettings(o)), i = this._getTypeHandler(o, this.editor, this.editor.getModel()), this._models["default"] = { models: [this.editor.getModel()], handlers: [i], state: null, editorType: o }, e.addChild(this), [2, this];}
        });
      });
    }, e.isDiff = function () {
      return "diff" === this._createInfo.method;
    }, e.isTextarea = function () {
      return "__textarea" in this.editor;
    }, e.getEditorAsMonaco = function () {
      return this.editor;
    }, e.setValue = function (e) {
      this.isDiff(this.editor) || this.editor.setValue(e);
    }, e.reset = function () {
      return __awaiter(this, void 0, void 0, function () {
        var e, t, o;return __generator(this, function (i) {
          switch (i.label) {case 0:
              return (e = this._createInfo, t = this.getCurrentModel(), !t) ? [2, null] : (o = t.editorType, this.destroy(), "create" === e.method ? [4, this.create(o, e.options, e.override)] : [3, 2]);case 1:
              return [2, i.sent()];case 2:
              return "diff" === e.method ? [4, this.createDiff(e.values, e.editorType, e.options, e.override)] : [3, 4];case 3:
              return [2, i.sent()];case 4:
              return [4, this.createFrom(e.from)];case 5:
              return [2, i.sent()];}
        });
      });
    }, e.addChild = function (e) {
      this._children.push(e);
    }, e.removeChild = function (e) {
      this._children.splice(this._children.indexOf(e), 1);
    }, e.setNewModels = function (e) {
      var t = this.editor;this.isDiff(t) ? t.setModel({ original: e[0], modified: e[1] }) : t.setModel(e[0]);
    }, e.setLess = function (e) {
      var t = this;if (this._isLess !== e) {
        if ("from" === this._createInfo.method) return void this._createInfo.from.setLess(e);var o = this.getCurrentModelId(),
            i = this.getCurrentModel(),
            s = e ? "less" : "javascript",
            r = i.models;i.handlers.forEach(function (e) {
          e.destroy();
        });var a = r.map(function (e) {
          return monaco.editor.createModel(e.getValue(), s);
        });for (var n in f.hasScope(this) ? this.setNewModels(a) : (this.setNewModels([f.getNullModel()]), f.onHasScope(this, function () {
          t.setNewModels(a);
        })), r.forEach(function (e) {
          return e.dispose();
        }), i.handlers = a.map(function (e) {
          return t._getTypeHandler(i.editorType, t.editor, e);
        }), i.models = a, this._models) {
          n !== o && delete this._models[n];
        }this._isLess = e, this._children.forEach(function (o) {
          o._isLess = e;var i = o._createInfo.modelId,
              s = t.getModel(i);t.isDiff(o.editor) || o.editor.setModel(s.models[0]);
        });
      }
    }, e.setTypescript = function (e) {
      var t = this;if (this._isTypescript !== e) {
        if ("from" === this._createInfo.method) return void this._createInfo.from.setTypescript(e);var o = this.getCurrentModelId(),
            i = this.getCurrentModel(),
            s = e ? "typescript" : "javascript",
            r = i.models;i.handlers.forEach(function (e) {
          e.destroy();
        });var a = r.map(function (e) {
          return monaco.editor.createModel(e.getValue(), s);
        });for (var n in f.hasScope(this) ? this.setNewModels(a) : (this.setNewModels([f.getNullModel()]), f.onHasScope(this, function () {
          t.setNewModels(a);
        })), r.forEach(function (e) {
          return e.dispose();
        }), i.handlers = a.map(function (e) {
          return t._getTypeHandler(i.editorType, t.editor, e);
        }), i.models = a, this._models) {
          n !== o && delete this._models[n];
        }this._isTypescript = e, this._children.forEach(function (o) {
          o._isTypescript = e;var i = o._createInfo.modelId,
              s = t.getModel(i);t.isDiff(o.editor) || o.editor.setModel(s.models[0]);
        });
      }
    }, e.addModel = function (e, t, o) {
      if (!this.hasModel(e)) {
        var i = monaco.editor.createModel(t, this._getLanguage(o)),
            s = this._getTypeHandler(o, this.editor, i);this._models[e] = { models: [i], handlers: [s], state: null, editorType: o };
      }
    }, e.hasModel = function (e) {
      return e in this._models;
    }, e.getModel = function (e) {
      return this._models[e];
    }, e.switchToModel = function (e, t, o) {
      if (this.hasModel(e) || this.addModel(e, t, o), this.getCurrentModelId() !== e) {
        var i = this.editor.saveViewState(),
            s = this.getCurrentModelId();s in this._models && (this._models[s].state = i);var r = this._models[e];this.editor.setModel(r.models[0]), this.editor.restoreViewState(r.state), this.editor.focus();
      }
    }, e.getCurrentModelId = function () {
      for (var e in this._models) {
        var t = this._models[e].models[0];if (t === this.editor.getModel()) return e;
      }return null;
    }, e.getCurrentModel = function () {
      return this._models[this.getCurrentModelId()];
    }, e.destroy = function () {
      for (var e in this.editor.dispose(), this._models) {
        var t = this._models[e];t.handlers.forEach(function (e) {
          e.destroy();
        }), t.handlers = null, delete this._models[e];
      }this._showSpinner();
    }, e._runJsLint = function () {
      var e = this.getCurrentModel().models[0].getValue(),
          t = window.jslint(e, {}, window.app.jsLintGlobals.slice()).warnings;return t.map(function (e) {
        var t = e.column,
            o = e.line,
            i = e.message;return { col: t, line: o, message: i };
      });
    }, e._runCssLint = function () {
      var e = this.getCurrentModel().models[0].getValue(),
          t = window.CSSLint.verify(e).messages;return t.map(function (e) {
        var t = e.col,
            o = e.line,
            i = e.message;return { col: t, line: o, message: i };
      });
    }, e._showLintResults = function (e, t) {
      "__textarea" in this.editor || monaco.editor.setModelMarkers(this.getCurrentModel().models[0], e, t.map(function (e) {
        return { startLineNumber: e.line, endLineNumber: e.line, startColumn: e.col, endColumn: e.col, message: e.message, severity: 2 };
      }));
    }, e.runLinter = function () {
      return __awaiter(this, void 0, void 0, function () {
        var e;return __generator(this, function (t) {
          switch (t.label) {case 0:
              return e = this._models[this.getCurrentModelId()].editorType, this._typeIsJS(e) ? [4, f.Libraries.runFile("js/libraries/jslint.js")] : [3, 2];case 1:
              return t.sent(), this._showLintResults("jslint", this._runJsLint()), [3, 6];case 2:
              return this._typeIsTS(e) ? (alert("No linting possible in typescript mode"), [3, 6]) : [3, 3];case 3:
              return this._typeIsLESS(e) ? (alert("No linting possible in LESS/stylus mode"), [3, 6]) : [3, 4];case 4:
              return this._typeIsCss(e) ? [4, f.Libraries.runFile("js/libraries/csslint.js")] : [3, 6];case 5:
              t.sent(), this._showLintResults("csslint", this._runCssLint()), t.label = 6;case 6:
              return [2];}
        });
      });
    }, e.getTypeHandler = function () {
      return this._models[this.getCurrentModelId()].handlers;
    }, e._showSpinner = function () {
      window.setDisplayFlex(this.$.placeholder), this.$.spinner && (this.$.spinner.active = !0), this.$.placeholder.classList.remove("hidden");
    }, e._hideSpinner = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (e) {
          switch (e.label) {case 0:
              return this.$.spinner && (this.$.spinner.active = !1), this.$.placeholder.classList.add("hidden"), [4, new window.Promise(function (e) {
                window.setTimeout(function () {
                  e(null);
                }, 1e3);
              })];case 1:
              return e.sent(), this.$.placeholder.style.display = "none", [2];}
        });
      });
    }, e._getStylesheet = function () {
      if (this._stylesheet) return this._stylesheet;var e = document.createElement("style");return this.shadowRoot.appendChild(e), this._stylesheet = e;
    }, e.claimScope = function () {
      f.setScope(this);
    }, e.setDefaultHeight = function () {
      var e = this.$.editorElement.getBoundingClientRect().height;this._tempLayoutInfo && (e = this._tempLayoutInfo.previous), this._tempLayoutInfo = { previous: e, current: e };
    }, e.setTempLayout = function () {
      var e = this.$.editorElement.getBoundingClientRect().height,
          t = e;this._tempLayoutInfo && (t = this._tempLayoutInfo.previous), this._tempLayoutInfo = { previous: t, current: e }, this.editor && this.editor.layout();
    }, e.stopTempLayout = function () {
      if (this._tempLayoutInfo) {
        var e = this._tempLayoutInfo.previous;this.$.editorElement.style.maxHeight = e + "px", this.editor.layout(), this._tempLayoutInfo.current = e, this.$.editorElement.style.maxHeight = "none";
      }
    }, e.ready = function () {
      this._showSpinner(), this._models = {}, this._children = [], f.setup();
    }, e.is = "monaco-editor", e.EditorMode = p, e.CustomEditorModes = m, e.properties = h, e.options = null, e._createInfo = null, e._tempLayoutInfo = null, e);
  }(),
      f = function () {
    function e() {}e.setScope = function (e) {
      var t = this;this.currentScope = e, window.setTimeout(function () {
        e.editor.getDomNode() && e.editor.getDomNode().addEventListener("mouseover", function () {
          t.currentScope = e;
        });
      }, 500), this._scopeListeners = this._scopeListeners.filter(function (t) {
        var o = t.scope,
            i = t.listener;return o !== e || (i(), !1);
      });
    }, e.hasScope = function (e) {
      return this.currentScope === e;
    }, e.onHasScope = function (e, t) {
      return e === this.currentScope ? void t() : void this._scopeListeners.push({ scope: e, listener: t });
    }, e.registerScope = function (e, t) {
      this._scopes.push([e, t]);
    }, e._setupRequire = function () {
      var e = this;return new window.Promise(function (t) {
        return __awaiter(e, void 0, void 0, function () {
          var e;return __generator(this, function (o) {
            switch (o.label) {case 0:
                return [4, window.onExistsChain(window, "AMDLoader", "global", "require")];case 1:
                return e = o.sent(), e.config({ paths: { vs: "../elements/options/editpages/monaco-editor/src/min/vs" } }), e(["vs/editor/editor.main"], function () {
                  t(null);
                }), [2];}
          });
        });
      });
    }, e._getShadowRoot = function () {
      return this.currentScope.shadowRoot;
    }, e._defineProperties = function () {
      var e = this,
          o = [{ label: "==UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==UserScript==", detail: "UserScript start tag", documentation: "The start tag for a UserScript metadata block" }, { label: "==/UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==/UserScript==", detail: "UserScript end tag", documentation: "The end tag for a UserScript metadata block" }],
          i = { isIncomplete: !0, items: Object.getOwnPropertyNames(t).map(function (e) {
          var o = t[e];return { label: "@" + e, kind: monaco.languages.CompletionItemKind.Property, insertText: "@" + e, detail: "Metadata key", documentation: o };
        }) };Object.defineProperties(this, { getLocalBodyShadowRoot: { get: function get() {
            return e._getShadowRoot();
          } }, caretRangeFromPoint: { get: function get() {
            return function (t) {
              for (var o = 0, i = e._scopes; o < i.length; o++) {
                var s = i[o],
                    r = s[0],
                    a = s[1];if (t.viewDomNode === a.getDomNode()) return e.Caret.caretRangeFromPoint.bind(r.shadowRoot);
              }return document.caretRangeFromPoint.bind(document);
            };
          } }, _metaTagCompletions: { get: function get() {
            return o;
          } }, _metaKeyCompletions: { get: function get() {
            return i;
          } } });
    }, e._loadCRMAPI = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (e) {
          switch (e.label) {case 0:
              return [4, this.Libraries.readFile("js/libraries/crmapi.d.ts")];case 1:
              return [2, e.sent()];}
        });
      });
    }, e._setupCRMDefs = function () {
      return __awaiter(this, void 0, void 0, function () {
        var e;return __generator(this, function (t) {
          switch (t.label) {case 0:
              return [4, this._loadCRMAPI()];case 1:
              return e = t.sent(), monaco.languages.typescript.javascriptDefaults.addExtraLib(e, "crmapi.d.ts"), monaco.languages.typescript.typescriptDefaults.addExtraLib(e, "crmapi.d.ts"), [2];}
        });
      });
    }, e._captureMonacoErrors = function () {
      window.onerror = function (e, t) {
        return -1 < t.indexOf("vs/editor/editor.main.js") ? (console.log("Caught monaco editor error (ignore these)"), !0) : void 0;
      };
    }, e._createNullModel = function () {
      this._nullModel = monaco.editor.createModel("");
    }, e.getNullModel = function () {
      return this._nullModel;
    }, e.setup = function () {
      var e = this;this._setup || (this._setup = !0, this._captureMonacoErrors(), this.monacoReady = new window.Promise(function (t) {
        return __awaiter(e, void 0, void 0, function () {
          var e = this;return __generator(this, function () {
            return this._setupRequire(), window.onExists("monaco").then(function () {
              l.enableSchema(), e._defineProperties(), e._createNullModel(), e._setupCRMDefs(), t(null);
            }), [2];
          });
        });
      }));
    };var o, i, s, r;return e._setup = !1, e.monacoReady = null, e.currentScope = null, e._scopeListeners = [], e._nullModel = null, e._scopes = [], e.Caret = (o = function () {
      function t() {}return t.getCharWidth = function (e, t) {
        var o = e + t;if (this._charCache[o]) return this._charCache[o];var i = this._charCanvas.getContext("2d");i.font = t;var s = i.measureText(e),
            r = s.width;return this._charCache[o] = r, r;
      }, t.caretRangeFromPoint = function (t, o) {
        for (var s = this.elementFromPoint(t, o); s.firstChild.nodeType !== s.firstChild.TEXT_NODE;) {
          s = s.lastChild;
        }var r,
            a = s.getBoundingClientRect(),
            n = window.getComputedStyle(s, null).getPropertyValue("font"),
            l = s.innerText,
            d = a.left,
            p = 0;if (t > a.left + a.width) p = l.length;else for (var c = 0; c < l.length + 1; c++) {
          if (r = e.Caret.getCharWidth(l.charAt(c), n) / 2, d += r, t < d) {
            p = c;break;
          }d += r;
        }var i = document.createRange();return i.setStart(s.firstChild, p), i.setEnd(s.firstChild, p), i;
      }, t;
    }(), o._charCache = {}, o._charCanvas = document.createElement("canvas"), o), e.StyleHack = (i = function () {
      function e() {}return e.copyThemeScope = function (e) {
        if (this.monacoStyleElement = this.monacoStyleElement || document.getElementsByClassName("monaco-colors")[0], e.shadowRoot.children[0] !== this.monacoStyleElement) {
          var t = this.monacoStyleElement.cloneNode(!0);e.shadowRoot.insertBefore(t, e.shadowRoot.children[0]);
        }
      }, e;
    }(), i.monacoStyleElement = null, i), e.Completion = (s = function () {
      function e() {}return e.register = function (e, t) {
        this._enabledCompletions[e] = this._enabledCompletions[e] || [];for (var o, i = 0, s = this._enabledCompletions[e]; i < s.length; i++) {
          if (o = s[i], o.completion === t) return;
        }this._enabledCompletions[e].push({ completion: t, disposable: monaco.languages.registerCompletionItemProvider(e, t) });
      }, e.clearAll = function () {
        for (var e in this._enabledCompletions) {
          for (var t, o = 0, i = this._enabledCompletions[e]; o < i.length; o++) {
            t = i[o], t.disposable.dispose();
          }
        }
      }, e;
    }(), s._enabledCompletions = {}, s), e.Fetching = (r = function () {
      function e() {}return e._isWebPageEnv = function () {
        return "http:" === location.protocol || "https:" === location.protocol;
      }, e.loadFile = function (e) {
        var t = this;return new window.Promise(function (o, i) {
          var s = new window.XMLHttpRequest(),
              r = t._isWebPageEnv() ? "" + t.BASE + e : browserAPI.runtime.getURL(e);s.open("GET", r), s.onreadystatechange = function () {
            s.readyState === XMLHttpRequest.DONE && (200 === s.status ? (t._fetchedFiles[e] = s.responseText, o(s.responseText)) : i(new Error("Failed XHR")));
          }, s.send();
        });
      }, e.isLoaded = function (e) {
        return e in this._fetchedFiles;
      }, e.getLoadedFile = function (e) {
        return this._fetchedFiles[e];
      }, e;
    }(), r._fetchedFiles = {}, r.BASE = "../", r), e.Libraries = function () {
      function e() {}return e.readFile = function (e) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (t) {
            switch (t.label) {case 0:
                return this._parent().Fetching.isLoaded(e) ? [2, this._parent().Fetching.getLoadedFile(e)] : [4, this._parent().Fetching.loadFile(e)];case 1:
                return [2, t.sent()];}
          });
        });
      }, e.runFile = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
          var o;return __generator(this, function (i) {
            switch (i.label) {case 0:
                return this._parent().Fetching.isLoaded(e) ? [2] : (o = document.createElement("script"), o.src = browserAPI.runtime.getURL(e), document.body.appendChild(o), t ? [4, window.onExists(t)] : [3, 2]);case 1:
                i.sent(), i.label = 2;case 2:
                return [2];}
          });
        });
      }, e._parent = function () {
        return window.MonacoEditorHookManager;
      }, e;
    }(), e;
  }();e.MonacoEditorHookManager = f;window.MonacoEditorHookManager = f, window.objectify ? window.register(y) : window.addEventListener("RegisterReady", function () {
    window.register(y);
  });
})(MonacoEditorElement || (MonacoEditorElement = {}));
"use notstrict";var define,
    AMDLoader,
    _amdLoaderGlobal = undefined;!function (a) {
  a.global = _amdLoaderGlobal;var b = function () {
    function b(a) {
      this.isWindows = a.isWindows, this.isNode = a.isNode, this.isElectronRenderer = a.isElectronRenderer, this.isWebWorker = a.isWebWorker;
    }return b.detect = function () {
      return new b({ isWindows: this._isWindows(), isNode: "undefined" != typeof module && !!module.exports, isElectronRenderer: "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.electron && "renderer" === process.type, isWebWorker: "function" == typeof a.global.importScripts });
    }, b._isWindows = function () {
      return !!("undefined" != typeof navigator && navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows")) || "undefined" != typeof process && "win32" === process.platform;
    }, b;
  }();a.Environment = b;
}(AMDLoader || (AMDLoader = {})), function (a) {
  var b, c;(c = b = a.LoaderEventType || (a.LoaderEventType = {}))[c.LoaderAvailable = 1] = "LoaderAvailable", c[c.BeginLoadingScript = 10] = "BeginLoadingScript", c[c.EndLoadingScriptOK = 11] = "EndLoadingScriptOK", c[c.EndLoadingScriptError = 12] = "EndLoadingScriptError", c[c.BeginInvokeFactory = 21] = "BeginInvokeFactory", c[c.EndInvokeFactory = 22] = "EndInvokeFactory", c[c.NodeBeginEvaluatingScript = 31] = "NodeBeginEvaluatingScript", c[c.NodeEndEvaluatingScript = 32] = "NodeEndEvaluatingScript", c[c.NodeBeginNativeRequire = 33] = "NodeBeginNativeRequire", c[c.NodeEndNativeRequire = 34] = "NodeEndNativeRequire";var d = function d(a, b, c) {
    this.type = a, this.detail = b, this.timestamp = c;
  };a.LoaderEvent = d;var e = function () {
    function c(a) {
      this._events = [new d(b.LoaderAvailable, "", a)];
    }return c.prototype.record = function (b, c) {
      this._events.push(new d(b, c, a.Utilities.getHighPerformanceTimestamp()));
    }, c.prototype.getEvents = function () {
      return this._events;
    }, c;
  }();a.LoaderEventRecorder = e;var f = function () {
    function a() {}return a.prototype.record = function () {}, a.prototype.getEvents = function () {
      return [];
    }, a;
  }();f.INSTANCE = new f(), a.NullLoaderEventRecorder = f;
}(AMDLoader || (AMDLoader = {})), function (a) {
  var b = function () {
    function b() {}return b.fileUriToFilePath = function (a, b) {
      if (b = decodeURI(b), a) {
        if (/^file:\/\/\//.test(b)) return b.substr(8);if (/^file:\/\//.test(b)) return b.substr(5);
      } else if (/^file:\/\//.test(b)) return b.substr(7);return b;
    }, b.startsWith = function (a, b) {
      return a.length >= b.length && a.substr(0, b.length) === b;
    }, b.endsWith = function (a, b) {
      return a.length >= b.length && a.substr(a.length - b.length) === b;
    }, b.containsQueryString = function (a) {
      return (/^[^\#]*\?/gi.test(a)
      );
    }, b.isAbsolutePath = function (a) {
      return (/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(a)
      );
    }, b.forEachProperty = function (a, b) {
      if (a) {
        for (var c in a) {
          a.hasOwnProperty(c) && b(c, a[c]);
        }
      }
    }, b.isEmpty = function (a) {
      var c = !0;return b.forEachProperty(a, function () {
        c = !1;
      }), c;
    }, b.recursiveClone = function (a) {
      if (!a || "object" != ("undefined" === typeof a ? "undefined" : babelHelpers["typeof"](a))) return a;var c = Array.isArray(a) ? [] : {};return b.forEachProperty(a, function (a, d) {
        c[a] = d && "object" == ("undefined" === typeof d ? "undefined" : babelHelpers["typeof"](d)) ? b.recursiveClone(d) : d;
      }), c;
    }, b.generateAnonymousModule = function () {
      return "===anonymous" + b.NEXT_ANONYMOUS_ID++ + "===";
    }, b.isAnonymousModule = function (a) {
      return (/^===anonymous/.test(a)
      );
    }, b.getHighPerformanceTimestamp = function () {
      return this.PERFORMANCE_NOW_PROBED || (this.PERFORMANCE_NOW_PROBED = !0, this.HAS_PERFORMANCE_NOW = a.global.performance && "function" == typeof a.global.performance.now), this.HAS_PERFORMANCE_NOW ? a.global.performance.now() : Date.now();
    }, b;
  }();b.NEXT_ANONYMOUS_ID = 1, b.PERFORMANCE_NOW_PROBED = !1, b.HAS_PERFORMANCE_NOW = !1, a.Utilities = b;
}(AMDLoader || (AMDLoader = {})), function (a) {
  var b = Math.max,
      c = function () {
    function b() {}return b.validateConfigurationOptions = function (b, c) {
      return "string" != typeof (c = c || {}).baseUrl && (c.baseUrl = ""), "boolean" != typeof c.isBuild && (c.isBuild = !1), "object" != babelHelpers["typeof"](c.paths) && (c.paths = {}), "object" != babelHelpers["typeof"](c.config) && (c.config = {}), void 0 === c.catchError && (c.catchError = b), "string" != typeof c.urlArgs && (c.urlArgs = ""), "function" != typeof c.onError && (c.onError = function (a) {
        return "load" === a.errorCode ? (console.error("Loading \"" + a.moduleId + "\" failed"), console.error("Detail: ", a.detail), a.detail && a.detail.stack && console.error(a.detail.stack), console.error("Here are the modules that depend on it:"), void console.error(a.neededBy)) : "factory" === a.errorCode ? (console.error("The factory method of \"" + a.moduleId + "\" has thrown an exception"), console.error(a.detail), void (a.detail && a.detail.stack && console.error(a.detail.stack))) : void 0;
      }), "object" == babelHelpers["typeof"](c.ignoreDuplicateModules) && Array.isArray(c.ignoreDuplicateModules) || (c.ignoreDuplicateModules = []), 0 < c.baseUrl.length && (a.Utilities.endsWith(c.baseUrl, "/") || (c.baseUrl += "/")), Array.isArray(c.nodeModules) || (c.nodeModules = []), ("number" != typeof c.nodeCachedDataWriteDelay || 0 > c.nodeCachedDataWriteDelay) && (c.nodeCachedDataWriteDelay = 7e3), "function" != typeof c.onNodeCachedData && (c.onNodeCachedData = function (a) {
        a && ("cachedDataRejected" === a.errorCode ? console.warn("Rejected cached data from file: " + a.path) : "unlink" === a.errorCode || "writeFile" === a.errorCode ? (console.error("Problems writing cached data file: " + a.path), console.error(a.detail)) : console.error(a));
      }), c;
    }, b.mergeConfigurationOptions = function (c, d, e) {
      void 0 === d && (d = null), void 0 === e && (e = null);var f = a.Utilities.recursiveClone(e || {});return a.Utilities.forEachProperty(d, function (b, c) {
        "ignoreDuplicateModules" === b && void 0 !== f.ignoreDuplicateModules ? f.ignoreDuplicateModules = f.ignoreDuplicateModules.concat(c) : "paths" === b && void 0 !== f.paths ? a.Utilities.forEachProperty(c, function (a, b) {
          return f.paths[a] = b;
        }) : "config" === b && void 0 !== f.config ? a.Utilities.forEachProperty(c, function (a, b) {
          return f.config[a] = b;
        }) : f[b] = a.Utilities.recursiveClone(c);
      }), b.validateConfigurationOptions(c, f);
    }, b;
  }();a.ConfigurationOptionsUtil = c;var d = function () {
    function d(a, d) {
      if (this._env = a, this.options = c.mergeConfigurationOptions(this._env.isWebWorker, d), this._createIgnoreDuplicateModulesMap(), this._createNodeModulesMap(), this._createSortedPathsRules(), "" === this.options.baseUrl) {
        if (this._env.isNode && this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename) {
          var e = this.options.nodeRequire.main.filename,
              f = b(e.lastIndexOf("/"), e.lastIndexOf("\\"));this.options.baseUrl = e.substring(0, f + 1);
        }this._env.isNode && this.options.nodeMain && (e = this.options.nodeMain, f = b(e.lastIndexOf("/"), e.lastIndexOf("\\")), this.options.baseUrl = e.substring(0, f + 1));
      }
    }return d.prototype._createIgnoreDuplicateModulesMap = function () {
      this.ignoreDuplicateModulesMap = {};for (var a = 0; a < this.options.ignoreDuplicateModules.length; a++) {
        this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[a]] = !0;
      }
    }, d.prototype._createNodeModulesMap = function () {
      this.nodeModulesMap = Object.create(null);for (var a, b = 0, c = this.options.nodeModules; b < c.length; b++) {
        a = c[b], this.nodeModulesMap[a] = !0;
      }
    }, d.prototype._createSortedPathsRules = function () {
      var b = this;this.sortedPathsRules = [], a.Utilities.forEachProperty(this.options.paths, function (a, c) {
        Array.isArray(c) ? b.sortedPathsRules.push({ from: a, to: c }) : b.sortedPathsRules.push({ from: a, to: [c] });
      }), this.sortedPathsRules.sort(function (a, b) {
        return b.from.length - a.from.length;
      });
    }, d.prototype.cloneAndMerge = function (a) {
      return new d(this._env, c.mergeConfigurationOptions(this._env.isWebWorker, a, this.options));
    }, d.prototype.getOptionsLiteral = function () {
      return this.options;
    }, d.prototype._applyPaths = function (b) {
      for (var c, d = 0, e = this.sortedPathsRules.length; d < e; d++) {
        if (c = this.sortedPathsRules[d], a.Utilities.startsWith(b, c.from)) {
          for (var f = [], g = 0, h = c.to.length; g < h; g++) {
            f.push(c.to[g] + b.substr(c.from.length));
          }return f;
        }
      }return [b];
    }, d.prototype._addUrlArgsToUrl = function (b) {
      return a.Utilities.containsQueryString(b) ? b + "&" + this.options.urlArgs : b + "?" + this.options.urlArgs;
    }, d.prototype._addUrlArgsIfNecessaryToUrl = function (a) {
      return this.options.urlArgs ? this._addUrlArgsToUrl(a) : a;
    }, d.prototype._addUrlArgsIfNecessaryToUrls = function (a) {
      if (this.options.urlArgs) for (var b = 0, c = a.length; b < c; b++) {
        a[b] = this._addUrlArgsToUrl(a[b]);
      }return a;
    }, d.prototype.moduleIdToPaths = function (b) {
      if (!0 === this.nodeModulesMap[b]) return this.isBuild() ? ["empty:"] : ["node|" + b];var c,
          d = b;if (a.Utilities.endsWith(d, ".js") || a.Utilities.isAbsolutePath(d)) a.Utilities.endsWith(d, ".js") || a.Utilities.containsQueryString(d) || (d += ".js"), c = [d];else for (var e = 0, f = (c = this._applyPaths(d)).length; e < f; e++) {
        this.isBuild() && "empty:" === c[e] || (a.Utilities.isAbsolutePath(c[e]) || (c[e] = this.options.baseUrl + c[e]), a.Utilities.endsWith(c[e], ".js") || a.Utilities.containsQueryString(c[e]) || (c[e] += ".js"));
      }return this._addUrlArgsIfNecessaryToUrls(c);
    }, d.prototype.requireToUrl = function (b) {
      var c = b;return a.Utilities.isAbsolutePath(c) || (c = this._applyPaths(c)[0], a.Utilities.isAbsolutePath(c) || (c = this.options.baseUrl + c)), this._addUrlArgsIfNecessaryToUrl(c);
    }, d.prototype.isBuild = function () {
      return this.options.isBuild;
    }, d.prototype.isDuplicateMessageIgnoredFor = function (a) {
      return this.ignoreDuplicateModulesMap.hasOwnProperty(a);
    }, d.prototype.getConfigForModule = function (a) {
      if (this.options.config) return this.options.config[a];
    }, d.prototype.shouldCatchError = function () {
      return this.options.catchError;
    }, d.prototype.shouldRecordStats = function () {
      return this.options.recordStats;
    }, d.prototype.onError = function (a) {
      this.options.onError(a);
    }, d;
  }();a.Configuration = d;
}(AMDLoader || (AMDLoader = {})), function (b) {
  var a = function () {
    function a(a) {
      this.actualScriptLoader = a, this.callbackMap = {};
    }return a.prototype.load = function (a, b, c, d) {
      var f = this,
          e = { callback: c, errorback: d };this.callbackMap.hasOwnProperty(b) ? this.callbackMap[b].push(e) : (this.callbackMap[b] = [e], this.actualScriptLoader.load(a, b, function () {
        return f.triggerCallback(b);
      }, function (a) {
        return f.triggerErrorback(b, a);
      }));
    }, a.prototype.triggerCallback = function (a) {
      var b = this.callbackMap[a];delete this.callbackMap[a];for (var c = 0; c < b.length; c++) {
        b[c].callback();
      }
    }, a.prototype.triggerErrorback = function (a, b) {
      var c = this.callbackMap[a];delete this.callbackMap[a];for (var d = 0; d < c.length; d++) {
        c[d].errorback(b);
      }
    }, a;
  }(),
      c = function () {
    function a() {}return a.prototype.attachListeners = function (a, b, c) {
      var d = function d() {
        a.removeEventListener("load", e), a.removeEventListener("error", f);
      },
          e = function e() {
        d(), b();
      },
          f = function f(a) {
        d(), c(a);
      };a.addEventListener("load", e), a.addEventListener("error", f);
    }, a.prototype.load = function (a, b, c, d) {
      var e = document.createElement("script");e.setAttribute("async", "async"), e.setAttribute("type", "text/javascript"), this.attachListeners(e, c, d), e.setAttribute("src", b), document.getElementsByTagName("head")[0].appendChild(e);
    }, a;
  }(),
      d = function () {
    function a() {}return a.prototype.load = function (a, b, c, d) {
      try {
        importScripts(b), c();
      } catch (a) {
        d(a);
      }
    }, a;
  }(),
      f = function () {
    function c(a) {
      this._env = a, this._didInitialize = !1, this._didPatchNodeRequire = !1;
    }return c.prototype._init = function (a) {
      if (!this._didInitialize) {
        this._didInitialize = !0, this._fs = a("fs"), this._vm = a("vm"), this._path = a("path"), this._crypto = a("crypto"), this._jsflags = "";for (var b, c = 0, d = process.argv; c < d.length; c++) {
          if (b = d[c], 0 === b.indexOf("--js-flags=")) {
            this._jsflags = b;break;
          }
        }
      }
    }, c.prototype._initNodeRequire = function (a, j) {
      var f = j.getConfig().getOptionsLiteral().nodeCachedDataDir;if (f && !this._didPatchNodeRequire) {
        this._didPatchNodeRequire = !0;var g = this,
            k = a("module");k.prototype._compile = function (m, e) {
          m = m.replace(/^#!.*/, "");var q = k.wrap(m),
              n = g._getCachedDataPath(f, e),
              r = { filename: e };try {
            r.cachedData = g._fs.readFileSync(n);
          } catch (a) {
            r.produceCachedData = !0;
          }var o,
              i,
              s,
              d = new g._vm.Script(q, r),
              a = d.runInThisContext(r),
              l = g._path.dirname(e),
              u = (i = (o = this).constructor, (s = function s(a) {
            try {
              return o.require(a);
            } finally {}
          }).resolve = function (a) {
            return i._resolveFilename(a, o);
          }, s.main = process.mainModule, s.extensions = i._extensions, s.cache = i._cache, s),
              c = [this.exports, u, this, e, l, process, b.global, Buffer],
              h = a.apply(this.exports, c);return g._processCachedData(j, d, n), h;
        };
      }
    }, c.prototype.load = function (j, a, k, l) {
      var m = this,
          h = j.getConfig().getOptionsLiteral(),
          d = h.nodeRequire || b.global.nodeRequire,
          e = h.nodeInstrumenter || function (a) {
        return a;
      };this._init(d), this._initNodeRequire(d, j);var f = j.getRecorder();if (/^node\|/.test(a)) {
        var g = a.split("|"),
            i = null;try {
          i = d(g[1]);
        } catch (a) {
          return void l(a);
        }j.enqueueDefineAnonymousModule([], function () {
          return i;
        }), k();
      } else a = b.Utilities.fileUriToFilePath(this._env.isWindows, a), this._fs.readFile(a, { encoding: "utf8" }, function (b, g) {
        if (b) l(b);else {
          var p = m._path.normalize(a),
              q = p;if (m._env.isElectronRenderer) {
            var n = q.match(/^([a-z])\:(.*)/i);q = n ? "file:///" + (n[1].toUpperCase() + ":" + n[2]).replace(/\\/g, "/") : "file://" + q;
          }var u,
              i = "(function (require, define, __filename, __dirname) { ";if (u = g.charCodeAt(0) === c._BOM ? i + g.substring(1) + "\n});" : i + g + "\n});", u = e(u, p), h.nodeCachedDataDir) {
            var s = m._getCachedDataPath(h.nodeCachedDataDir, a);m._fs.readFile(s, function (b, c) {
              var d = { filename: q, produceCachedData: void 0 === c, cachedData: c },
                  e = m._loadAndEvalScript(j, a, q, u, d, f);k(), m._processCachedData(j, e, s);
            });
          } else m._loadAndEvalScript(j, a, q, u, { filename: q }, f), k();
        }
      });
    }, c.prototype._loadAndEvalScript = function (a, c, d, e, f, g) {
      g.record(b.LoaderEventType.NodeBeginEvaluatingScript, c);var h = new this._vm.Script(e, f);return h.runInThisContext(f).call(b.global, a.getGlobalAMDRequireFunc(), a.getGlobalAMDDefineFunc(), d, this._path.dirname(c)), g.record(b.LoaderEventType.NodeEndEvaluatingScript, c), h;
    }, c.prototype._getCachedDataPath = function (a, b) {
      var c = this._crypto.createHash("md5").update(b, "utf8").update(this._jsflags, "utf8").digest("hex"),
          d = this._path.basename(b).replace(/\.js$/, "");return this._path.join(a, d + "-" + c + ".code");
    }, c.prototype._processCachedData = function (a, b, d) {
      var e = this;b.cachedDataRejected ? (a.getConfig().getOptionsLiteral().onNodeCachedData({ errorCode: "cachedDataRejected", path: d }), c._runSoon(function () {
        return e._fs.unlink(d, function (b) {
          b && a.getConfig().getOptionsLiteral().onNodeCachedData({ errorCode: "unlink", path: d, detail: b });
        });
      }, a.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay)) : b.cachedDataProduced && (a.getConfig().getOptionsLiteral().onNodeCachedData(void 0, { path: d, length: b.cachedData.length }), c._runSoon(function () {
        return e._fs.writeFile(d, b.cachedData, function (b) {
          b && a.getConfig().getOptionsLiteral().onNodeCachedData({ errorCode: "writeFile", path: d, detail: b });
        });
      }, a.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay));
    }, c._runSoon = function (a, b) {
      var c = b + Math.ceil(Math.random() * b);setTimeout(a, c);
    }, c;
  }();f._BOM = 65279, b.createScriptLoader = function (b) {
    return new a(b.isWebWorker ? new d() : b.isNode ? new f(b) : new c());
  };
}(AMDLoader || (AMDLoader = {})), function (a) {
  var b = function () {
    function b(a) {
      var b = a.lastIndexOf("/");this.fromModulePath = -1 === b ? "" : a.substr(0, b + 1);
    }return b._normalizeModuleId = function (a) {
      var b,
          c = a;for (b = /\/\.\//; b.test(c);) {
        c = c.replace(b, "/");
      }for (c = c.replace(/^\.\//g, ""), b = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; b.test(c);) {
        c = c.replace(b, "/");
      }return c.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, "");
    }, b.prototype.resolveModule = function (c) {
      var d = c;return a.Utilities.isAbsolutePath(d) || (a.Utilities.startsWith(d, "./") || a.Utilities.startsWith(d, "../")) && (d = b._normalizeModuleId(this.fromModulePath + d)), d;
    }, b;
  }();b.ROOT = new b(""), a.ModuleIdResolver = b;var f = function () {
    function b(a, b, c, d, e, f) {
      this.id = a, this.strId = b, this.dependencies = c, this._callback = d, this._errorback = e, this.moduleIdResolver = f, this.exports = {}, this.exportsPassedIn = !1, this.unresolvedDependenciesCount = this.dependencies.length, this._isComplete = !1;
    }return b._safeInvokeFunction = function (b, c) {
      try {
        return { returnedValue: b.apply(a.global, c), producedError: null };
      } catch (a) {
        return { returnedValue: null, producedError: a };
      }
    }, b._invokeFactory = function (b, c, d, e) {
      return b.isBuild() && !a.Utilities.isAnonymousModule(c) ? { returnedValue: null, producedError: null } : b.shouldCatchError() ? this._safeInvokeFunction(d, e) : { returnedValue: d.apply(a.global, e), producedError: null };
    }, b.prototype.complete = function (c, d, e) {
      this._isComplete = !0;var f = null;if (this._callback) if ("function" == typeof this._callback) {
        c.record(a.LoaderEventType.BeginInvokeFactory, this.strId);var g = b._invokeFactory(d, this.strId, this._callback, e);f = g.producedError, c.record(a.LoaderEventType.EndInvokeFactory, this.strId), f || void 0 === g.returnedValue || this.exportsPassedIn && !a.Utilities.isEmpty(this.exports) || (this.exports = g.returnedValue);
      } else this.exports = this._callback;f && d.onError({ errorCode: "factory", moduleId: this.strId, detail: f }), this.dependencies = null, this._callback = null, this._errorback = null, this.moduleIdResolver = null;
    }, b.prototype.onDependencyError = function (a) {
      return !!this._errorback && (this._errorback(a), !0);
    }, b.prototype.isComplete = function () {
      return this._isComplete;
    }, b;
  }();a.Module = f;var c = function () {
    function a() {
      this._nextId = 0, this._strModuleIdToIntModuleId = new Map(), this._intModuleIdToStrModuleId = [], this.getModuleId("exports"), this.getModuleId("module"), this.getModuleId("require");
    }return a.prototype.getMaxModuleId = function () {
      return this._nextId;
    }, a.prototype.getModuleId = function (a) {
      var b = this._strModuleIdToIntModuleId.get(a);return void 0 === b && (b = this._nextId++, this._strModuleIdToIntModuleId.set(a, b), this._intModuleIdToStrModuleId[b] = a), b;
    }, a.prototype.getStrModuleId = function (a) {
      return this._intModuleIdToStrModuleId[a];
    }, a;
  }(),
      g = function g(a) {
    this.id = a;
  };g.EXPORTS = new g(0), g.MODULE = new g(1), g.REQUIRE = new g(2), a.RegularDependency = g;var j = function j(a, b, c) {
    this.id = a, this.pluginId = b, this.pluginParam = c;
  };a.PluginDependency = j;var d = function () {
    function h(b, d, e, f, g) {
      void 0 === g && (g = 0), this._env = b, this._scriptLoader = d, this._loaderAvailableTimestamp = g, this._defineFunc = e, this._requireFunc = f, this._moduleIdProvider = new c(), this._config = new a.Configuration(this._env), this._modules2 = [], this._knownModules2 = [], this._inverseDependencies2 = [], this._inversePluginDependencies2 = new Map(), this._currentAnnonymousDefineCall = null, this._recorder = null, this._buildInfoPath = [], this._buildInfoDefineStack = [], this._buildInfoDependencies = [];
    }return h.prototype.reset = function () {
      return new h(this._env, this._scriptLoader, this._defineFunc, this._requireFunc, this._loaderAvailableTimestamp);
    }, h.prototype.getGlobalAMDDefineFunc = function () {
      return this._defineFunc;
    }, h.prototype.getGlobalAMDRequireFunc = function () {
      return this._requireFunc;
    }, h._findRelevantLocationInStack = function (b, e) {
      for (var f, g = function g(a) {
        return a.replace(/\\/g, "/");
      }, h = g(b), j = e.split(/\n/), k = 0; k < j.length; k++) {
        if (f = j[k].match(/(.*):(\d+):(\d+)\)?$/), f) {
          var i = f[1],
              d = f[2],
              a = f[3],
              l = Math.max(i.lastIndexOf(" ") + 1, i.lastIndexOf("(") + 1);if ((i = g(i = i.substr(l))) === h) {
            var m = { line: parseInt(d, 10), col: parseInt(a, 10) };return 1 === m.line && (m.col -= 53), m;
          }
        }
      }throw new Error("Could not correlate define call site for needle " + b);
    }, h.prototype.getBuildInfo = function () {
      if (!this._config.isBuild()) return null;for (var a, b = [], c = 0, e = 0, f = this._modules2.length; e < f; e++) {
        if (a = this._modules2[e], a) {
          var g = this._buildInfoPath[a.id] || null,
              j = this._buildInfoDefineStack[a.id] || null,
              k = this._buildInfoDependencies[a.id];b[c++] = { id: a.strId, path: g, defineLocation: g && j ? h._findRelevantLocationInStack(g, j) : null, dependencies: k, shim: null, exports: a.exports };
        }
      }return b;
    }, h.prototype.getRecorder = function () {
      return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new a.LoaderEventRecorder(this._loaderAvailableTimestamp) : this._recorder = a.NullLoaderEventRecorder.INSTANCE), this._recorder;
    }, h.prototype.getLoaderEvents = function () {
      return this.getRecorder().getEvents();
    }, h.prototype.enqueueDefineAnonymousModule = function (a, b) {
      if (null !== this._currentAnnonymousDefineCall) throw new Error("Can only have one anonymous define call per script file");var c = null;this._config.isBuild() && (c = new Error("StackLocation").stack), this._currentAnnonymousDefineCall = { stack: c, dependencies: a, callback: b };
    }, h.prototype.defineModule = function (c, e, g, h, j, k) {
      var i = this;void 0 === k && (k = new b(c));var l = this._moduleIdProvider.getModuleId(c);if (this._modules2[l]) this._config.isDuplicateMessageIgnoredFor(c) || console.warn("Duplicate definition of module '" + c + "'");else {
        var d = new f(l, c, this._normalizeDependencies(e, k), g, h, k);this._modules2[l] = d, this._config.isBuild() && (this._buildInfoDefineStack[l] = j, this._buildInfoDependencies[l] = d.dependencies.map(function (a) {
          return i._moduleIdProvider.getStrModuleId(a.id);
        })), this._resolve(d);
      }
    }, h.prototype._normalizeDependency = function (a, b) {
      if ("exports" === a) return g.EXPORTS;if ("module" === a) return g.MODULE;if ("require" === a) return g.REQUIRE;var c = a.indexOf("!");if (0 <= c) {
        var d = b.resolveModule(a.substr(0, c)),
            e = b.resolveModule(a.substr(c + 1)),
            f = this._moduleIdProvider.getModuleId(d + "!" + e),
            h = this._moduleIdProvider.getModuleId(d);return new j(f, h, e);
      }return new g(this._moduleIdProvider.getModuleId(b.resolveModule(a)));
    }, h.prototype._normalizeDependencies = function (a, b) {
      for (var c = [], d = 0, e = 0, f = a.length; e < f; e++) {
        c[d++] = this._normalizeDependency(a[e], b);
      }return c;
    }, h.prototype._relativeRequire = function (b, c, d, e) {
      return "string" == typeof c ? this.synchronousRequire(c, b) : void this.defineModule(a.Utilities.generateAnonymousModule(), c, d, e, null, b);
    }, h.prototype.synchronousRequire = function (a, c) {
      void 0 === c && (c = new b(a));var d = this._normalizeDependency(a, c),
          e = this._modules2[d.id];if (!e) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + a + "'. This is the first mention of this module!");if (!e.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + a + "'. This module has not been resolved completely yet.");return e.exports;
    }, h.prototype.configure = function (b, c) {
      var d = this._config.shouldRecordStats();this._config = c ? new a.Configuration(this._env, b) : this._config.cloneAndMerge(b), this._config.shouldRecordStats() && !d && (this._recorder = null);
    }, h.prototype.getConfig = function () {
      return this._config;
    }, h.prototype._onLoad = function (a) {
      if (null !== this._currentAnnonymousDefineCall) {
        var b = this._currentAnnonymousDefineCall;this._currentAnnonymousDefineCall = null, this.defineModule(this._moduleIdProvider.getStrModuleId(a), b.dependencies, b.callback, null, b.stack);
      }
    }, h.prototype._createLoadError = function (a, b) {
      var c = this;return { errorCode: "load", moduleId: this._moduleIdProvider.getStrModuleId(a), neededBy: (this._inverseDependencies2[a] || []).map(function (a) {
          return c._moduleIdProvider.getStrModuleId(a);
        }), detail: b };
    }, h.prototype._onLoadError = function (b, e) {
      for (var f = this._createLoadError(b, e), g = [], h = 0, j = this._moduleIdProvider.getMaxModuleId(); h < j; h++) {
        g[h] = !1;
      }var i = !1,
          k = [];for (k.push(b), g[b] = !0; 0 < k.length;) {
        var d = k.shift(),
            a = this._modules2[d];a && (i = a.onDependencyError(f) || i);var l = this._inverseDependencies2[d];if (l) for (h = 0, j = l.length; h < j; h++) {
          var m = l[h];g[m] || (k.push(m), g[m] = !0);
        }
      }i || this._config.onError(f);
    }, h.prototype._hasDependencyPath = function (b, c) {
      var e = this._modules2[b];if (!e) return !1;for (var f = [], g = 0, h = this._moduleIdProvider.getMaxModuleId(); g < h; g++) {
        f[g] = !1;
      }var i = [];for (i.push(e), f[b] = !0; 0 < i.length;) {
        var j = i.shift().dependencies;if (j) for (g = 0, h = j.length; g < h; g++) {
          var d = j[g];if (d.id === c) return !0;var a = this._modules2[d.id];a && !f[d.id] && (f[d.id] = !0, i.push(a));
        }
      }return !1;
    }, h.prototype._findCyclePath = function (a, b, c) {
      if (a === b || 50 === c) return [a];var e = this._modules2[a];if (!e) return null;for (var f, d = e.dependencies, g = 0, h = d.length; g < h; g++) {
        if (f = this._findCyclePath(d[g].id, b, c + 1), null !== f) return f.push(a), f;
      }return null;
    }, h.prototype._createRequire = function (b) {
      var c = this,
          d = function d(a, _d2, e) {
        return c._relativeRequire(b, a, _d2, e);
      };return d.toUrl = function (a) {
        return c._config.requireToUrl(b.resolveModule(a));
      }, d.getStats = function () {
        return c.getLoaderEvents();
      }, d.__$__nodeRequire = a.global.nodeRequire, d;
    }, h.prototype._loadModule = function (b) {
      var c = this;if (!this._modules2[b] && !this._knownModules2[b]) {
        this._knownModules2[b] = !0;var f = this._moduleIdProvider.getStrModuleId(b),
            g = this._config.moduleIdToPaths(f);this._env.isNode && -1 === f.indexOf("/") && g.push("node|" + f);var h = -1,
            e = function f(d) {
          if (++h >= g.length) c._onLoadError(b, d);else {
            var i = g[h],
                j = c.getRecorder();if (c._config.isBuild() && "empty:" === i) return c._buildInfoPath[b] = i, c.defineModule(c._moduleIdProvider.getStrModuleId(b), [], null, null, null), void c._onLoad(b);j.record(a.LoaderEventType.BeginLoadingScript, i), c._scriptLoader.load(c, i, function () {
              c._config.isBuild() && (c._buildInfoPath[b] = i), j.record(a.LoaderEventType.EndLoadingScriptOK, i), c._onLoad(b);
            }, function (b) {
              j.record(a.LoaderEventType.EndLoadingScriptError, i), f(b);
            });
          }
        };e(null);
      }
    }, h.prototype._loadPluginDependency = function (a, c) {
      var d = this;if (!this._modules2[c.id] && !this._knownModules2[c.id]) {
        this._knownModules2[c.id] = !0;var e = function e(a) {
          d.defineModule(d._moduleIdProvider.getStrModuleId(c.id), [], a, null, null);
        };e.error = function (a) {
          d._config.onError(d._createLoadError(c.id, a));
        }, a.load(c.pluginParam, this._createRequire(b.ROOT), e, this._config.getOptionsLiteral());
      }
    }, h.prototype._resolve = function (b) {
      for (var c, f = this, e = b.dependencies, h = 0, i = e.length; h < i; h++) {
        if (c = e[h], c === g.EXPORTS) b.exportsPassedIn = !0, b.unresolvedDependenciesCount--;else if (c === g.MODULE) b.unresolvedDependenciesCount--;else if (c !== g.REQUIRE) {
          var k = this._modules2[c.id];if (k && k.isComplete()) b.unresolvedDependenciesCount--;else if (this._hasDependencyPath(c.id, b.id)) {
            console.warn("There is a dependency cycle between '" + this._moduleIdProvider.getStrModuleId(c.id) + "' and '" + this._moduleIdProvider.getStrModuleId(b.id) + "'. The cyclic path follows:");var m = this._findCyclePath(c.id, b.id, 0);m.reverse(), m.push(c.id), console.warn(m.map(function (a) {
              return f._moduleIdProvider.getStrModuleId(a);
            }).join(" => \n")), b.unresolvedDependenciesCount--;
          } else if (this._inverseDependencies2[c.id] = this._inverseDependencies2[c.id] || [], this._inverseDependencies2[c.id].push(b.id), c instanceof j) {
            var d = this._modules2[c.pluginId];if (d && d.isComplete()) {
              this._loadPluginDependency(d.exports, c);continue;
            }var a = this._inversePluginDependencies2.get(c.pluginId);a || (a = [], this._inversePluginDependencies2.set(c.pluginId, a)), a.push(c), this._loadModule(c.pluginId);
          } else this._loadModule(c.id);
        } else b.unresolvedDependenciesCount--;
      }0 === b.unresolvedDependenciesCount && this._onModuleComplete(b);
    }, h.prototype._onModuleComplete = function (b) {
      var e = this,
          f = this.getRecorder();if (!b.isComplete()) {
        for (var j, d = b.dependencies, k = [], m = 0, i = d.length; m < i; m++) {
          if (j = d[m], j === g.EXPORTS) k[m] = b.exports;else if (j === g.MODULE) k[m] = { id: b.strId, config: function config() {
              return e._config.getConfigForModule(b.strId);
            } };else if (j !== g.REQUIRE) {
            var n = this._modules2[j.id];k[m] = n ? n.exports : null;
          } else k[m] = this._createRequire(b.moduleIdResolver);
        }b.complete(f, this._config, k);var a = this._inverseDependencies2[b.id];if (this._inverseDependencies2[b.id] = null, a) for (m = 0, i = a.length; m < i; m++) {
          var l = a[m],
              o = this._modules2[l];o.unresolvedDependenciesCount--, 0 === o.unresolvedDependenciesCount && this._onModuleComplete(o);
        }var c = this._inversePluginDependencies2.get(b.id);if (c) for (this._inversePluginDependencies2["delete"](b.id), m = 0, i = c.length; m < i; m++) {
          this._loadPluginDependency(b.exports, c[m]);
        }
      }
    }, h;
  }();a.ModuleManager = d;
}(AMDLoader || (AMDLoader = {})), function (a) {
  function b() {
    !function () {
      (f = function f(a, b, d) {
        "string" != typeof a && (d = b, b = a, a = null), "object" == ("undefined" === typeof b ? "undefined" : babelHelpers["typeof"](b)) && Array.isArray(b) || (d = b, b = null), b || (b = ["require", "exports", "module"]), a ? c.defineModule(a, b, d, null, null) : c.enqueueDefineAnonymousModule(b, d);
      }).amd = { jQuery: !0 };var b = function b(a, _b2) {
        void 0 === _b2 && (_b2 = !1), c.configure(a, _b2);
      };(g = function g() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) return void b(arguments[0]);if ("string" == typeof arguments[0]) return c.synchronousRequire(arguments[0]);
        }if (2 !== arguments.length && 3 !== arguments.length || !Array.isArray(arguments[0])) throw new Error("Unrecognized require call");c.defineModule(a.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null);
      }).config = b, g.getConfig = function () {
        return c.getConfig().getOptionsLiteral();
      }, g.reset = function () {
        c = c.reset();
      }, g.getBuildInfo = function () {
        return c.getBuildInfo();
      }, g.getStats = function () {
        return c.getLoaderEvents();
      };
    }();var b = a.Environment.detect(),
        d = a.createScriptLoader(b);if (c = new a.ModuleManager(b, d, f, g, a.Utilities.getHighPerformanceTimestamp()), b.isNode) {
      var h = a.global.require || require,
          i = function i(b) {
        c.getRecorder().record(a.LoaderEventType.NodeBeginNativeRequire, b);try {
          return h(b);
        } finally {
          c.getRecorder().record(a.LoaderEventType.NodeEndNativeRequire, b);
        }
      };a.global.nodeRequire = i, g.nodeRequire = i;
    }b.isNode && !b.isElectronRenderer ? (module.exports = g, define = function define() {
      f.apply(null, arguments);
    }, require = g) : (void 0 !== a.global.require && "function" != typeof a.global.require && g.config(a.global.require), b.isElectronRenderer ? define = function define() {
      f.apply(null, arguments);
    } : a.global.define = define = f, a.global.require = g, a.global.require.__$__nodeRequire = i);
  }var c = null,
      f = null,
      g = null;a.init = b, "undefined" != typeof doNotInitLoader || "function" == typeof (a.global = a.global || {}).define && a.global.define.amd || b();
}(AMDLoader || (AMDLoader = {}));var InstallConfirmElement,
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = 2 & c[0] ? f["return"] : c[0] ? f["throw"] || ((h = f["return"]) && h.call(f), 0) : f.next) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [2 & c[0], h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
};(function (a) {
  a.installConfirmProperties = { script: { type: String, notify: !0, value: "" }, permissions: { type: Array, notify: !0, value: [] } };var b = function () {
    function b() {}return b.lengthIs = function (a, b) {
      return 1 === a.length && "none" === a[0] ? 0 === b : a.length === b;
    }, b._getCheckboxes = function () {
      return Array.prototype.slice.apply(this.shadowRoot.querySelectorAll("paper-checkbox"));
    }, b._setChecked = function (a) {
      this._getCheckboxes().forEach(function (b) {
        b.checked = a;
      });
    }, b.toggleAll = function () {
      var a = this;this.async(function () {
        a._setChecked(a.$.permissionsToggleAll.checked);
      }, 0);
    }, b._createArray = function (a) {
      for (var b = [], c = 0; c < a; c++) {
        b[c] = void 0;
      }return b;
    }, b._loadSettings = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a = this;return __generator(this, function () {
          return [2, new Promise(function (b) {
            return __awaiter(a, void 0, void 0, function () {
              var a, c, d, e, f, g, h, d, i, f, g;return __generator(this, function (j) {
                switch (j.label) {case 0:
                    return [4, browserAPI.storage.local.get()];case 1:
                    return a = j.sent(), a.useStorageSync && "sync" in BrowserAPI.getSrc().storage && "get" in BrowserAPI.getSrc().storage.sync ? [4, browserAPI.storage.sync.get()] : [3, 3];case 2:
                    return c = j.sent(), d = c.indexes, null === d || -1 === d || void 0 === d ? (browserAPI.storage.local.set({ useStorageSync: !1 }), this._settings = a.settings) : (e = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                      e.push(c["section" + b]);
                    }), g = e.join(""), this._settings = JSON.parse(g)), [3, 6];case 3:
                    return a.settings ? [3, 5] : (browserAPI.storage.local.set({ useStorageSync: !0 }), [4, browserAPI.storage.sync.get()]);case 4:
                    return h = j.sent(), d = h.indexes, i = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                      i.push(h["section" + b]);
                    }), g = i.join(""), this._settings = JSON.parse(g), [3, 6];case 5:
                    this._settings = a.settings, j.label = 6;case 6:
                    return b(null), [2];}
              });
            });
          })];
        });
      });
    }, b.getDescription = function (a) {
      var b = { alarms: this.___("permissions_alarms"), activeTab: this.___("permissions_activeTab"), background: this.___("permissions_background"), bookmarks: this.___("permissions_bookmarks"), browsingData: this.___("permissions_browsingData"), clipboardRead: this.___("permissions_clipboardRead"), clipboardWrite: this.___("permissions_clipboardWrite"), cookies: this.___("permissions_cookies"), contentSettings: this.___("permissions_contentSettings"), contextMenus: this.___("permissions_contextMenus"), declarativeContent: this.___("permissions_declarativeContent"), desktopCapture: this.___("permissions_desktopCapture"), downloads: this.___("permissions_downloads"), history: this.___("permissions_history"), identity: this.___("permissions_identity"), idle: this.___("permissions_idle"), management: this.___("permissions_management"), notifications: this.___("permissions_notifications"), pageCapture: this.___("permissions_pageCapture"), power: this.___("permissions_power"), privacy: this.___("permissions_privacy"), printerProvider: this.___("permissions_printerProvider"), sessions: this.___("permissions_sessions"), "system.cpu": this.___("permissions_systemcpu"), "system.memory": this.___("permissions_systemmemory"), "system.storage": this.___("permissions_systemstorage"), topSites: this.___("permissions_topSites"), tabCapture: this.___("permissions_tabCapture"), tabs: this.___("permissions_tabs"), tts: this.___("permissions_tts"), webNavigation: this.___("permissions_webNavigation") + " (https://developer.chrome.com/extensions/webNavigation)", webRequest: this.___("permissions_webRequest"), webRequestBlocking: this.___("permissions_webRequestBlocking"), crmGet: this.___("permissions_crmGet"), crmWrite: this.___("permissions_crmWrite"), crmRun: this.___("permissions_crmRun"), crmContextmenu: this.___("permissions_crmContextmenu"), chrome: this.___("permissions_chrome"), browser: this.___("permissions_browser"), GM_addStyle: this.___("permissions_GM_addStyle"), GM_deleteValue: this.___("permissions_GM_deleteValue"), GM_listValues: this.___("permissions_GM_listValues"), GM_addValueChangeListener: this.___("permissions_GM_addValueChangeListener"), GM_removeValueChangeListener: this.___("permissions_GM_removeValueChangeListener"), GM_setValue: this.___("permissions_GM_setValue"), GM_getValue: this.___("permissions_GM_getValue"), GM_log: this.___("permissions_GM_log"), GM_getResourceText: this.___("permissions_GM_getResourceText"), GM_getResourceURL: this.___("permissions_GM_getResourceURL"), GM_registerMenuCommand: this.___("permissions_GM_registerMenuCommand"), GM_unregisterMenuCommand: this.___("permissions_GM_unregisterMenuCommand"), GM_openInTab: this.___("permissions_GM_openInTab"), GM_xmlhttpRequest: this.___("permissions_GM_xmlhttpRequest"), GM_download: this.___("permissions_GM_download"), GM_getTab: this.___("permissions_GM_getTab"), GM_saveTab: this.___("permissions_GM_saveTab"), GM_getTabs: this.___("permissions_GM_getTabs"), GM_notification: this.___("permissions_GM_notification"), GM_setClipboard: this.___("permissions_GM_setClipboard"), GM_info: this.___("permissions_GM_info"), unsafeWindow: this.___("permissions_unsafeWindow") };return b[a];
    }, b.showPermissionDescription = function (a) {
      var b = a.target;"div" === b.tagName.toLowerCase() ? b = b.children[0] : "path" === b.tagName.toLowerCase() && (b = b.parentElement);var c = b.parentElement.parentElement.parentElement.children,
          d = c[c.length - 1];b.classList.contains("shown") ? $(d).stop().animate({ height: 0 }, { duration: 250, complete: function complete() {
          window.installConfirm._editorManager.editor.layout();
        } }) : $(d).stop().animate({ height: d.scrollHeight + 7 + "px" }, { duration: 250, complete: function complete() {
          window.installConfirm._editorManager.editor.layout();
        } }), b.classList.toggle("shown");
    }, b._isManifestPermissions = function (a) {
      return -1 < ["alarms", "activeTab", "background", "bookmarks", "browsingData", "clipboardRead", "clipboardWrite", "contentSettings", "cookies", "contentSettings", "contextMenus", "declarativeContent", "desktopCapture", "downloads", "history", "identity", "idle", "management", "pageCapture", "power", "privacy", "printerProvider", "sessions", "system.cpu", "system.memory", "system.storage", "topSites", "tabs", "tabCapture", "tts", "webNavigation", "webRequest", "webRequestBlocking"].indexOf(a);
    }, b.checkPermission = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        var b, c, d, e, f, g, h;return __generator(this, function (i) {
          switch (i.label) {case 0:
              for (b = a.target; "paper-checkbox" !== b.tagName.toLowerCase();) {
                b = b.parentElement;
              }return (c = b, !c.checked) ? [3, 7] : (d = c.getAttribute("permission"), this._isManifestPermissions(d) ? browserAPI.permissions ? [4, browserAPI.permissions.getAll()] : [3, 2] : [3, 7]);case 1:
              return f = i.sent(), [3, 3];case 2:
              f = { permissions: [] }, i.label = 3;case 3:
              if (e = f.permissions, -1 !== e.indexOf(d)) return [3, 7];i.label = 4;case 4:
              return i.trys.push([4, 6,, 7]), browserAPI.permissions ? [4, browserAPI.permissions.request({ permissions: [d] })] : (window.app.util.showToast(this.___("install_confirm_not_asking", d)), [2]);case 5:
              return g = i.sent(), g || (c.checked = !1), [3, 7];case 6:
              return h = i.sent(), [3, 7];case 7:
              return [2];}
        });
      });
    }, b.cancelInstall = function () {
      window.close();
    }, b.completeInstall = function () {
      var a = [];this._getCheckboxes().forEach(function (b) {
        b.checked && a.push(b.getAttribute("permission"));
      }), browserAPI.runtime.sendMessage({ type: "installUserScript", data: { metaTags: this._metaTags, script: this.script, downloadURL: window.installPage.getInstallSource(), allowedPermissions: a } }), this.$.installButtons.classList.add("installed"), this.$.scriptInstalled.classList.add("visible");
    }, b.acceptAndCompleteInstall = function () {
      var a = this;this._setChecked(!0), this.$.permissionsToggleAll.checked = !0, this.async(function () {
        a.completeInstall();
      }, 250);
    }, b._setMetaTag = function (a, b) {
      var c;c = b ? b[b.length - 1] : "-", this.$[a].innerText = c + "";
    }, b._setMetaInformation = function (a) {
      this._setMetaTag("descriptionValue", a.description), this._setMetaTag("authorValue", a.author), window.installPage.$.title.innerHTML = "Installing <b>" + (a.name && a.name[0]) + "</b>", this.$.sourceValue.innerText = window.installPage.userscriptUrl;var b = a.grant;this.permissions = b, this._metaTags = a, this._editorManager.editor.layout();
    }, b._editorLoaded = function (a) {
      var b = this,
          c = document.createElement("style");c.id = "editorZoomStyle", c.innerText = ".CodeMirror, .CodeMirror-focused {\n\t\t\t\tfont-size: " + 1.25 * ~~window.installConfirm._settings.editor.zoom + "'%!important;\n\t\t\t}";var d = window.setInterval(function () {
        var c = a.getTypeHandler()[0];if (c.getMetaBlock) {
          window.clearInterval(d);var e = c.getMetaBlock();e && e.content && b._setMetaInformation(e.content);
        }
      }, 25);
    }, b._loadEditor = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a, b;return __generator(this, function (c) {
          switch (c.label) {case 0:
              return this._settings.editor || (this._settings.editor = { theme: "dark", zoom: "100", keyBindings: { goToDef: "Ctrl-F12", rename: "Ctrl-F2" }, cssUnderlineDisabled: !1, disabledMetaDataHighlight: !1 }), b = this, [4, this.$.editorCont.create(this.$.editorCont.EditorMode.JS_META, { value: this.script, language: "javascript", theme: "dark" === this._settings.editor.theme ? "vs-dark" : "vs", wordWrap: "off", readOnly: !0, fontSize: 14 * (~~this._settings.editor.zoom / 100), folding: !0 })];case 1:
              return a = b._editorManager = c.sent(), window.addEventListener("resize", function () {
                a.editor.layout();
              }), this._editorLoaded(a), [2];}
        });
      });
    }, (b.ready = function () {
      var a = this;this._loadSettings().then(function () {
        a._loadEditor();
      }), window.installConfirm = this;
    }, b.is = "install-confirm", b._metaTags = {}, b.properties = a.installConfirmProperties, b);
  }();a.IC = b, window.objectify ? window.register(b) : window.addEventListener("RegisterReady", function () {
    window.register(b);
  });
})(InstallConfirmElement || (InstallConfirmElement = {}));
Polymer.AppLayout = Polymer.AppLayout || {}, Polymer.AppLayout._scrollEffects = {}, Polymer.AppLayout._scrollTimer = null, Polymer.AppLayout.scrollTimingFunction = function (a, e, b, f) {
  return a /= f, -b * a * (a - 2) + e;
}, Polymer.AppLayout.registerEffect = function (a, b) {
  if (null != Polymer.AppLayout._scrollEffects[a]) throw new Error('effect `' + a + '` is already registered.');Polymer.AppLayout._scrollEffects[a] = b;
}, Polymer.AppLayout.queryAllRoot = function (a, b) {
  for (var c = [b], d = []; 0 < c.length;) {
    var e = c.shift();d.push.apply(d, e.querySelectorAll(a));for (var f = 0; e.children[f]; f++) {
      e.children[f].shadowRoot && c.push(e.children[f].shadowRoot);
    }
  }return d;
}, Polymer.AppLayout.scroll = function (a) {
  a = a || {};var b = document.documentElement,
      c = a.target || b,
      d = 'scrollBehavior' in c.style && c.scroll,
      e = a.top || 0,
      f = a.left || 0,
      g = c === b ? window.scrollTo : function (a, b) {
    c.scrollLeft = a, c.scrollTop = b;
  };if ('smooth' === a.behavior) {
    if (d) c.scroll(a);else {
      var h = Polymer.AppLayout.scrollTimingFunction,
          i = Date.now(),
          j = c === b ? window.pageYOffset : c.scrollTop,
          k = c === b ? window.pageXOffset : c.scrollLeft,
          l = 300,
          m = function a() {
        var b = Date.now(),
            c = b - i;c < l ? (g(h(c, k, f - k, l), h(c, j, e - j, l)), requestAnimationFrame(a)) : g(f, e);
      }.bind(this);m();
    }
  } else if ('silent' === a.behavior) {
    var n = Polymer.AppLayout.queryAllRoot('app-header', document.body);n.forEach(function (a) {
      a.setAttribute('silent-scroll', '');
    }), Polymer.AppLayout._scrollTimer && window.cancelAnimationFrame(Polymer.AppLayout._scrollTimer), Polymer.AppLayout._scrollTimer = window.requestAnimationFrame(function () {
      n.forEach(function (a) {
        a.removeAttribute('silent-scroll');
      }), Polymer.AppLayout._scrollTimer = null;
    }), g(f, e);
  } else g(f, e);
};
Polymer({ is: 'app-drawer', properties: { opened: { type: Boolean, value: !1, notify: !0, reflectToAttribute: !0 }, persistent: { type: Boolean, value: !1, reflectToAttribute: !0 }, transitionDuration: { type: Number, value: 200 }, align: { type: String, value: 'left' }, position: { type: String, readOnly: !0, reflectToAttribute: !0 }, swipeOpen: { type: Boolean, value: !1, reflectToAttribute: !0 }, noFocusTrap: { type: Boolean, value: !1 }, disableSwipe: { type: Boolean, value: !1 } }, observers: ['resetLayout(position, isAttached)', '_resetPosition(align, isAttached)', '_styleTransitionDuration(transitionDuration)', '_openedPersistentChanged(opened, persistent)'], _translateOffset: 0, _trackDetails: null, _drawerState: 0, _boundEscKeydownHandler: null, _firstTabStop: null, _lastTabStop: null, attached: function attached() {
    Polymer.RenderStatus.afterNextRender(this, function () {
      this._boundEscKeydownHandler = this._escKeydownHandler.bind(this), this.addEventListener('keydown', this._tabKeydownHandler.bind(this)), this.listen(this, 'track', '_track'), this.setScrollDirection('y');
    }), this.fire('app-reset-layout');
  }, detached: function detached() {
    document.removeEventListener('keydown', this._boundEscKeydownHandler);
  }, open: function open() {
    this.opened = !0;
  }, close: function close() {
    this.opened = !1;
  }, toggle: function toggle() {
    this.opened = !this.opened;
  }, getWidth: function getWidth() {
    return this._savedWidth || this.$.contentContainer.offsetWidth;
  }, _isRTL: function _isRTL() {
    return 'rtl' === window.getComputedStyle(this).direction;
  }, _resetPosition: function _resetPosition() {
    switch (this.align) {case 'start':
        return void this._setPosition(this._isRTL() ? 'right' : 'left');case 'end':
        return void this._setPosition(this._isRTL() ? 'left' : 'right');}this._setPosition(this.align);
  }, _escKeydownHandler: function _escKeydownHandler(a) {
    a.keyCode === 27 && (a.preventDefault(), this.close());
  }, _track: function _track(a) {
    if (!(this.persistent || this.disableSwipe)) switch (a.preventDefault(), a.detail.state) {case 'start':
        this._trackStart(a);break;case 'track':
        this._trackMove(a);break;case 'end':
        this._trackEnd(a);}
  }, _trackStart: function _trackStart() {
    this._drawerState = this._DRAWER_STATE.TRACKING;var a = this.$.contentContainer.getBoundingClientRect();this._savedWidth = a.width, this._translateOffset = 'left' === this.position ? a.left : a.right - window.innerWidth, this._trackDetails = [], this._styleTransitionDuration(0), this.style.visibility = 'visible';
  }, _trackMove: function _trackMove(a) {
    this._translateDrawer(a.detail.dx + this._translateOffset), this._trackDetails.push({ dx: a.detail.dx, timeStamp: Date.now() });
  }, _trackEnd: function _trackEnd(a) {
    var b = a.detail.dx + this._translateOffset,
        c = this.getWidth(),
        d = 'left' === this.position,
        e = d ? 0 <= b || b <= -c : 0 >= b || b >= c;if (!e) {
      var f = this._trackDetails;if (this._trackDetails = null, this._flingDrawer(a, f), this._drawerState === this._DRAWER_STATE.FLINGING) return;
    }var g = c / 2;a.detail.dx < -g ? this.opened = 'right' === this.position : a.detail.dx > g && (this.opened = 'left' === this.position), e ? this.debounce('_resetDrawerState', this._resetDrawerState) : this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration), this._styleTransitionDuration(this.transitionDuration), this._resetDrawerTranslate(), this.style.visibility = '';
  }, _calculateVelocity: function _calculateVelocity(a, b) {
    for (var c, e = Date.now(), f = 0, g = b.length - 1; f <= g;) {
      var h = f + g >> 1,
          i = b[h];i.timeStamp >= e - 100 ? (c = i, g = h - 1) : f = h + 1;
    }if (c) {
      var d = a.detail.dx - c.dx,
          j = e - c.timeStamp || 1;return d / j;
    }return 0;
  }, _flingDrawer: function _flingDrawer(a, b) {
    var c = this._calculateVelocity(a, b);if (!(Math.abs(c) < this._MIN_FLING_THRESHOLD)) {
      this._drawerState = this._DRAWER_STATE.FLINGING;var d,
          e = a.detail.dx + this._translateOffset,
          f = this.getWidth(),
          g = 'left' === this.position,
          h = 0 < c;d = !h && g ? -(e + f) : h && !g ? f - e : -e, h ? (c = Math.max(c, this._MIN_TRANSITION_VELOCITY), this.opened = 'left' === this.position) : (c = Math.min(c, -this._MIN_TRANSITION_VELOCITY), this.opened = 'right' === this.position);var i = this._FLING_INITIAL_SLOPE * d / c;this._styleTransitionDuration(i), this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION), this._resetDrawerTranslate(), this.debounce('_resetDrawerState', this._resetDrawerState, i);
    }
  }, _styleTransitionDuration: function _styleTransitionDuration(a) {
    this.style.transitionDuration = a + 'ms', this.$.contentContainer.style.transitionDuration = a + 'ms', this.$.scrim.style.transitionDuration = a + 'ms';
  }, _styleTransitionTimingFunction: function _styleTransitionTimingFunction(a) {
    this.$.contentContainer.style.transitionTimingFunction = a, this.$.scrim.style.transitionTimingFunction = a;
  }, _translateDrawer: function _translateDrawer(a) {
    var b = Math.min,
        c = Math.max,
        d = this.getWidth();'left' === this.position ? (a = c(-d, b(a, 0)), this.$.scrim.style.opacity = 1 + a / d) : (a = c(0, b(a, d)), this.$.scrim.style.opacity = 1 - a / d), this.translate3d(a + 'px', '0', '0', this.$.contentContainer);
  }, _resetDrawerTranslate: function _resetDrawerTranslate() {
    this.$.scrim.style.opacity = '', this.transform('', this.$.contentContainer);
  }, _resetDrawerState: function _resetDrawerState() {
    var a = this._drawerState;a === this._DRAWER_STATE.FLINGING && (this._styleTransitionDuration(this.transitionDuration), this._styleTransitionTimingFunction(''), this.style.visibility = ''), this._savedWidth = null, this._drawerState = this.opened ? this.persistent ? this._DRAWER_STATE.OPENED_PERSISTENT : this._DRAWER_STATE.OPENED : this._DRAWER_STATE.CLOSED, a !== this._drawerState && (this._drawerState === this._DRAWER_STATE.OPENED ? (this._setKeyboardFocusTrap(), document.addEventListener('keydown', this._boundEscKeydownHandler), document.body.style.overflow = 'hidden') : (document.removeEventListener('keydown', this._boundEscKeydownHandler), document.body.style.overflow = ''), a !== this._DRAWER_STATE.INIT && this.fire('app-drawer-transitioned'));
  }, resetLayout: function resetLayout() {
    this.fire('app-reset-layout');
  }, _setKeyboardFocusTrap: function _setKeyboardFocusTrap() {
    if (!this.noFocusTrap) {
      var a = Polymer.dom(this).querySelectorAll('a[href]:not([tabindex="-1"]),area[href]:not([tabindex="-1"]),input:not([disabled]):not([tabindex="-1"]),select:not([disabled]):not([tabindex="-1"]),textarea:not([disabled]):not([tabindex="-1"]),button:not([disabled]):not([tabindex="-1"]),iframe:not([tabindex="-1"]),[tabindex]:not([tabindex="-1"]),[contentEditable=true]:not([tabindex="-1"])');0 < a.length ? (this._firstTabStop = a[0], this._lastTabStop = a[a.length - 1]) : (this._firstTabStop = null, this._lastTabStop = null);var b = this.getAttribute('tabindex');b && -1 < parseInt(b, 10) ? this.focus() : this._firstTabStop && this._firstTabStop.focus();
    }
  }, _tabKeydownHandler: function _tabKeydownHandler(a) {
    if (!this.noFocusTrap) {
      this._drawerState === this._DRAWER_STATE.OPENED && a.keyCode === 9 && (a.shiftKey ? this._firstTabStop && Polymer.dom(a).localTarget === this._firstTabStop && (a.preventDefault(), this._lastTabStop.focus()) : this._lastTabStop && Polymer.dom(a).localTarget === this._lastTabStop && (a.preventDefault(), this._firstTabStop.focus()));
    }
  }, _openedPersistentChanged: function _openedPersistentChanged(a, b) {
    this.toggleClass('visible', a && !b, this.$.scrim), this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration);
  }, _MIN_FLING_THRESHOLD: 0.2, _MIN_TRANSITION_VELOCITY: 1.2, _FLING_TIMING_FUNCTION: 'cubic-bezier(0.667, 1, 0.667, 1)', _FLING_INITIAL_SLOPE: 1.5, _DRAWER_STATE: { INIT: 0, OPENED: 1, OPENED_PERSISTENT: 2, CLOSED: 3, TRACKING: 4, FLINGING: 5 } });
Polymer({ is: 'iron-media-query', properties: { queryMatches: { type: Boolean, value: !1, readOnly: !0, notify: !0 }, query: { type: String, observer: 'queryChanged' }, full: { type: Boolean, value: !1 }, _boundMQHandler: { value: function value() {
        return this.queryHandler.bind(this);
      } }, _mq: { value: null } }, attached: function attached() {
    this.style.display = 'none', this.queryChanged();
  }, detached: function detached() {
    this._remove();
  }, _add: function _add() {
    this._mq && this._mq.addListener(this._boundMQHandler);
  }, _remove: function _remove() {
    this._mq && this._mq.removeListener(this._boundMQHandler), this._mq = null;
  }, queryChanged: function queryChanged() {
    this._remove();var a = this.query;a && (!this.full && '(' !== a[0] && (a = '(' + a + ')'), this._mq = window.matchMedia(a), this._add(), this.queryHandler(this._mq));
  }, queryHandler: function queryHandler(a) {
    this._setQueryMatches(a.matches);
  } });
Polymer.IronResizableBehavior = { properties: { _parentResizable: { type: Object, observer: '_parentResizableChanged' }, _notifyingDescendant: { type: Boolean, value: !1 } }, listeners: { "iron-request-resize-notifications": '_onIronRequestResizeNotifications' }, created: function created() {
    this._interestedResizables = [], this._boundNotifyResize = this.notifyResize.bind(this);
  }, attached: function attached() {
    this._requestResizeNotifications();
  }, detached: function detached() {
    this._parentResizable ? this._parentResizable.stopResizeNotificationsFor(this) : window.removeEventListener('resize', this._boundNotifyResize), this._parentResizable = null;
  }, notifyResize: function notifyResize() {
    this.isAttached && (this._interestedResizables.forEach(function (a) {
      this.resizerShouldNotify(a) && this._notifyDescendant(a);
    }, this), this._fireResize());
  }, assignParentResizable: function assignParentResizable(a) {
    this._parentResizable = a;
  }, stopResizeNotificationsFor: function stopResizeNotificationsFor(a) {
    var b = this._interestedResizables.indexOf(a);-1 < b && (this._interestedResizables.splice(b, 1), this.unlisten(a, 'iron-resize', '_onDescendantIronResize'));
  }, resizerShouldNotify: function resizerShouldNotify() {
    return !0;
  }, _onDescendantIronResize: function _onDescendantIronResize(a) {
    return this._notifyingDescendant ? void a.stopPropagation() : void (!Polymer.Settings.useShadow && this._fireResize());
  }, _fireResize: function _fireResize() {
    this.fire('iron-resize', null, { node: this, bubbles: !1 });
  }, _onIronRequestResizeNotifications: function _onIronRequestResizeNotifications(a) {
    var b = Polymer.dom(a).rootTarget;b === this || (-1 === this._interestedResizables.indexOf(b) && (this._interestedResizables.push(b), this.listen(b, 'iron-resize', '_onDescendantIronResize')), b.assignParentResizable(this), this._notifyDescendant(b), a.stopPropagation());
  }, _parentResizableChanged: function _parentResizableChanged(a) {
    a && window.removeEventListener('resize', this._boundNotifyResize);
  }, _notifyDescendant: function _notifyDescendant(a) {
    this.isAttached && (this._notifyingDescendant = !0, a.notifyResize(), this._notifyingDescendant = !1);
  }, _requestResizeNotifications: function _requestResizeNotifications() {
    if (this.isAttached) if ('loading' === document.readyState) {
      var a = this._requestResizeNotifications.bind(this);document.addEventListener('readystatechange', function b() {
        document.removeEventListener('readystatechange', b), a();
      });
    } else this.fire('iron-request-resize-notifications', null, { node: this, bubbles: !0, cancelable: !0 }), this._parentResizable || (window.addEventListener('resize', this._boundNotifyResize), this.notifyResize());
  } };
Polymer.AppLayoutBehavior = [Polymer.IronResizableBehavior, { listeners: { "app-reset-layout": '_appResetLayoutHandler', "iron-resize": 'resetLayout' }, attached: function attached() {
    this.fire('app-reset-layout');
  }, _appResetLayoutHandler: function _appResetLayoutHandler(a) {
    Polymer.dom(a).path[0] === this || (this.resetLayout(), a.stopPropagation());
  }, _updateLayoutStates: function _updateLayoutStates() {
    console.error('unimplemented');
  }, resetLayout: function resetLayout() {
    var a = this,
        b = this._updateLayoutStates.bind(this);Polymer.Async && Polymer.Async.animationFrame ? (this._layoutDebouncer = Polymer.Debouncer.debounce(this._layoutDebouncer, Polymer.Async.animationFrame, b), Polymer.enqueueDebouncer(this._layoutDebouncer)) : this.debounce('resetLayout', b), this._notifyDescendantResize();
  }, _notifyLayoutChanged: function _notifyLayoutChanged() {
    var a = this;requestAnimationFrame(function () {
      a.fire('app-reset-layout');
    });
  }, _notifyDescendantResize: function _notifyDescendantResize() {
    this.isAttached && this._interestedResizables.forEach(function (a) {
      this.resizerShouldNotify(a) && this._notifyDescendant(a);
    }, this);
  } }];
Polymer(Object.defineProperties({ is: 'app-drawer-layout', behaviors: [Polymer.AppLayoutBehavior], properties: { forceNarrow: { type: Boolean, value: !1 }, responsiveWidth: { type: String, value: '640px' }, narrow: { type: Boolean, reflectToAttribute: !0, readOnly: !0, notify: !0 }, openedWhenNarrow: { type: Boolean, value: !1 }, _drawerPosition: { type: String } }, listeners: { click: '_clickHandler' }, observers: ['_narrowChanged(narrow)'], attached: function attached() {
    var a = this.drawer;a && a.setAttribute('no-transition', '');
  }, _clickHandler: function _clickHandler(a) {
    var b = Polymer.dom(a).localTarget;if (b && b.hasAttribute('drawer-toggle')) {
      var c = this.drawer;c && !c.persistent && c.toggle();
    }
  }, _updateLayoutStates: function _updateLayoutStates() {
    var a = this.drawer;this.isAttached && a && (this._drawerPosition = this.narrow ? null : a.position, this._drawerNeedsReset && (this.narrow ? (a.opened = this.openedWhenNarrow, a.persistent = !1) : a.opened = a.persistent = !0, a.hasAttribute('no-transition') && Polymer.RenderStatus.afterNextRender(this, function () {
      a.removeAttribute('no-transition');
    }), this._drawerNeedsReset = !1));
  }, _narrowChanged: function _narrowChanged() {
    this._drawerNeedsReset = !0, this.resetLayout();
  }, _onQueryMatchesChanged: function _onQueryMatchesChanged(a) {
    this._setNarrow(a.detail.value);
  }, _computeMediaQuery: function _computeMediaQuery(a, b) {
    return a ? '(min-width: 0px)' : '(max-width: ' + b + ')';
  } }, { drawer: { get: function get() {
      return Polymer.dom(this.$.drawerSlot).getDistributedNodes()[0];
    }, configurable: !0, enumerable: !0 } }));
Polymer.IronScrollTargetBehavior = Object.defineProperties({ properties: { scrollTarget: { type: HTMLElement, value: function value() {
        return this._defaultScrollTarget;
      } } }, observers: ['_scrollTargetChanged(scrollTarget, isAttached)'], _shouldHaveListener: !0, _scrollTargetChanged: function _scrollTargetChanged(a, b) {
    if (this._oldScrollTarget && (this._toggleScrollListener(!1, this._oldScrollTarget), this._oldScrollTarget = null), !!b) if ('document' === a) this.scrollTarget = this._doc;else if ('string' === typeof a) {
      var c = this.domHost;this.scrollTarget = c && c.$ ? c.$[a] : Polymer.dom(this.ownerDocument).querySelector('#' + a);
    } else this._isValidScrollTarget() && (this._oldScrollTarget = a, this._toggleScrollListener(this._shouldHaveListener, a));
  }, _scrollHandler: function _scrollHandler() {}, scroll: function scroll(a, b) {
    this.scrollTarget === this._doc ? window.scrollTo(a, b) : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = a, this.scrollTarget.scrollTop = b);
  }, _isValidScrollTarget: function _isValidScrollTarget() {
    return this.scrollTarget instanceof HTMLElement;
  }, _toggleScrollListener: function _toggleScrollListener(a, b) {
    var c = b === this._doc ? window : b;a ? !this._boundScrollHandler && (this._boundScrollHandler = this._scrollHandler.bind(this), c.addEventListener('scroll', this._boundScrollHandler)) : this._boundScrollHandler && (c.removeEventListener('scroll', this._boundScrollHandler), this._boundScrollHandler = null);
  }, toggleScrollListener: function toggleScrollListener(a) {
    this._shouldHaveListener = a, this._toggleScrollListener(a, this.scrollTarget);
  } }, { _defaultScrollTarget: { get: function get() {
      return this._doc;
    }, configurable: !0, enumerable: !0 }, _doc: { get: function get() {
      return this.ownerDocument.documentElement;
    }, configurable: !0, enumerable: !0 }, _scrollTop: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop : 0;
    }, set: function set(a) {
      this.scrollTarget === this._doc ? window.scrollTo(window.pageXOffset, a) : this._isValidScrollTarget() && (this.scrollTarget.scrollTop = a);
    }, configurable: !0, enumerable: !0 }, _scrollLeft: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft : 0;
    }, set: function set(a) {
      this.scrollTarget === this._doc ? window.scrollTo(a, window.pageYOffset) : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = a);
    }, configurable: !0, enumerable: !0 }, _scrollTargetWidth: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth : 0;
    }, configurable: !0, enumerable: !0 }, _scrollTargetHeight: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight : 0;
    }, configurable: !0, enumerable: !0 } });
Polymer.AppScrollEffectsBehavior = [Polymer.IronScrollTargetBehavior, Object.defineProperties({ properties: { effects: { type: String }, effectsConfig: { type: Object, value: function value() {
        return {};
      } }, disabled: { type: Boolean, reflectToAttribute: !0, value: !1 }, threshold: { type: Number, value: 0 }, thresholdTriggered: { type: Boolean, notify: !0, readOnly: !0, reflectToAttribute: !0 } }, observers: ['_effectsChanged(effects, effectsConfig, isAttached)'], _updateScrollState: function _updateScrollState() {}, isOnScreen: function isOnScreen() {
    return !1;
  }, isContentBelow: function isContentBelow() {
    return !1;
  }, _effectsRunFn: null, _effects: null, detached: function detached() {
    this._tearDownEffects();
  }, createEffect: function createEffect(a, b) {
    var c = Polymer.AppLayout._scrollEffects[a];if (!c) throw new ReferenceError(this._getUndefinedMsg(a));var d = this._boundEffect(c, b || {});return d.setUp(), d;
  }, _effectsChanged: function _effectsChanged(a, b, c) {
    this._tearDownEffects();a && c && (a.split(' ').forEach(function (a) {
      var c;'' !== a && ((c = Polymer.AppLayout._scrollEffects[a]) ? this._effects.push(this._boundEffect(c, b[a])) : console.warn(this._getUndefinedMsg(a)));
    }, this), this._setUpEffect());
  }, _layoutIfDirty: function _layoutIfDirty() {
    return this.offsetWidth;
  }, _boundEffect: function _boundEffect(a, b) {
    b = b || {};var c = parseFloat(b.startsAt || 0),
        d = parseFloat(b.endsAt || 1),
        e = function e() {},
        f = 0 === c && 1 === d ? a.run : function (b, e) {
      a.run.call(this, Math.max(0, (b - c) / (d - c)), e);
    };return { setUp: a.setUp ? a.setUp.bind(this, b) : e, run: a.run ? f.bind(this) : e, tearDown: a.tearDown ? a.tearDown.bind(this) : e };
  }, _setUpEffect: function _setUpEffect() {
    this.isAttached && this._effects && (this._effectsRunFn = [], this._effects.forEach(function (a) {
      !1 !== a.setUp() && this._effectsRunFn.push(a.run);
    }, this));
  }, _tearDownEffects: function _tearDownEffects() {
    this._effects && this._effects.forEach(function (a) {
      a.tearDown();
    }), this._effectsRunFn = [], this._effects = [];
  }, _runEffects: function _runEffects(a, b) {
    this._effectsRunFn && this._effectsRunFn.forEach(function (c) {
      c(a, b);
    });
  }, _scrollHandler: function _scrollHandler() {
    if (!this.disabled) {
      var a = this._clampedScrollTop;this._updateScrollState(a), 0 < this.threshold && this._setThresholdTriggered(a >= this.threshold);
    }
  }, _getDOMRef: function _getDOMRef(a) {
    console.warn('_getDOMRef', '`' + a + '` is undefined');
  }, _getUndefinedMsg: function _getUndefinedMsg(a) {
    return 'Scroll effect `' + a + '` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/' + a + '.html ?';
  } }, { _clampedScrollTop: { get: function get() {
      return Math.max(0, this._scrollTop);
    }, configurable: !0, enumerable: !0 } })];
Polymer(Object.defineProperties({ is: 'app-header', behaviors: [Polymer.AppScrollEffectsBehavior, Polymer.AppLayoutBehavior], properties: { condenses: { type: Boolean, value: !1 }, fixed: { type: Boolean, value: !1 }, reveals: { type: Boolean, value: !1 }, shadow: { type: Boolean, reflectToAttribute: !0, value: !1 } }, observers: ['_configChanged(isAttached, condenses, fixed)'], _height: 0, _dHeight: 0, _stickyElTop: 0, _stickyElRef: null, _top: 0, _progress: 0, _wasScrollingDown: !1, _initScrollTop: 0, _initTimestamp: 0, _lastTimestamp: 0, _lastScrollTop: 0, _configChanged: function _configChanged() {
    this.resetLayout(), this._notifyLayoutChanged();
  }, _updateLayoutStates: function _updateLayoutStates() {
    if (0 !== this.offsetWidth || 0 !== this.offsetHeight) {
      var a = this._clampedScrollTop,
          b = 0 === this._height || 0 === a,
          c = this.disabled;this._height = this.offsetHeight, this._stickyElRef = null, this.disabled = !0, b || this._updateScrollState(0, !0), this._dHeight = this._mayMove() ? this._stickyEl ? this._height - this._stickyEl.offsetHeight : 0 : 0, this._stickyElTop = this._stickyEl ? this._stickyEl.offsetTop : 0, this._setUpEffect(), b ? this._updateScrollState(a, !0) : (this._updateScrollState(this._lastScrollTop, !0), this._layoutIfDirty()), this.disabled = c;
    }
  }, _updateScrollState: function _updateScrollState(a, b) {
    var c = Math.abs;if (0 !== this._height) {
      var d = 0,
          e = 0,
          f = this._top,
          g = this._lastScrollTop,
          h = this._maxHeaderTop,
          i = a - this._lastScrollTop,
          j = c(i),
          k = a > this._lastScrollTop,
          l = performance.now();if (this._mayMove() && (e = this._clamp(this.reveals ? f + i : a, 0, h)), a >= this._dHeight && (e = this.condenses && !this.fixed ? Math.max(this._dHeight, e) : e, this.style.transitionDuration = '0ms'), this.reveals && !this.disabled && 100 > j && ((300 < l - this._initTimestamp || this._wasScrollingDown !== k) && (this._initScrollTop = a, this._initTimestamp = l), a >= h)) if (30 < c(this._initScrollTop - a) || 10 < j) {
        k && a >= h ? e = h : !k && a >= this._dHeight && (e = this.condenses && !this.fixed ? this._dHeight : 0);var m = i / (l - this._lastTimestamp);this.style.transitionDuration = this._clamp((e - f) / m, 0, 300) + 'ms';
      } else e = this._top;d = 0 === this._dHeight ? 0 < a ? 1 : 0 : e / this._dHeight, b || (this._lastScrollTop = a, this._top = e, this._wasScrollingDown = k, this._lastTimestamp = l), (b || d !== this._progress || f !== e || 0 === a) && (this._progress = d, this._runEffects(d, e), this._transformHeader(e));
    }
  }, _mayMove: function _mayMove() {
    return this.condenses || !this.fixed;
  }, willCondense: function willCondense() {
    return 0 < this._dHeight && this.condenses;
  }, isOnScreen: function isOnScreen() {
    return 0 !== this._height && this._top < this._height;
  }, isContentBelow: function isContentBelow() {
    return 0 === this._top ? 0 < this._clampedScrollTop : 0 <= this._clampedScrollTop - this._maxHeaderTop;
  }, _transformHeader: function _transformHeader(a) {
    this.translate3d(0, -a + 'px', 0), this._stickyEl && this.translate3d(0, this.condenses && a >= this._stickyElTop ? Math.min(a, this._dHeight) - this._stickyElTop + 'px' : 0, 0, this._stickyEl);
  }, _clamp: function _clamp(a, b, c) {
    return Math.min(c, Math.max(b, a));
  }, _ensureBgContainers: function _ensureBgContainers() {
    this._bgContainer || (this._bgContainer = document.createElement('div'), this._bgContainer.id = 'background', this._bgRear = document.createElement('div'), this._bgRear.id = 'backgroundRearLayer', this._bgContainer.appendChild(this._bgRear), this._bgFront = document.createElement('div'), this._bgFront.id = 'backgroundFrontLayer', this._bgContainer.appendChild(this._bgFront), Polymer.dom(this.root).insertBefore(this._bgContainer, this.$.contentContainer));
  }, _getDOMRef: function _getDOMRef(a) {
    return 'backgroundFrontLayer' === a ? (this._ensureBgContainers(), this._bgFront) : 'backgroundRearLayer' === a ? (this._ensureBgContainers(), this._bgRear) : 'background' === a ? (this._ensureBgContainers(), this._bgContainer) : 'mainTitle' === a ? Polymer.dom(this).querySelector('[main-title]') : 'condensedTitle' === a ? Polymer.dom(this).querySelector('[condensed-title]') : null;
  }, getScrollState: function getScrollState() {
    return { progress: this._progress, top: this._top };
  } }, { _maxHeaderTop: { get: function get() {
      return this.fixed ? this._dHeight : this._height + 5;
    }, configurable: !0, enumerable: !0 }, _stickyEl: { get: function get() {
      if (this._stickyElRef) return this._stickyElRef;for (var a, b = Polymer.dom(this.$.slot).getDistributedNodes(), c = 0; a = b[c]; c++) {
        if (a.nodeType === Node.ELEMENT_NODE) if (a.hasAttribute('sticky')) {
          this._stickyElRef = a;break;
        } else this._stickyElRef || (this._stickyElRef = a);
      }return this._stickyElRef;
    }, configurable: !0, enumerable: !0 } }));
Polymer(Object.defineProperties({ is: 'app-header-layout', behaviors: [Polymer.AppLayoutBehavior], properties: { hasScrollingRegion: { type: Boolean, value: !1, reflectToAttribute: !0 } }, observers: ['resetLayout(isAttached, hasScrollingRegion)'], _updateLayoutStates: function _updateLayoutStates() {
    var a = this.header;if (this.isAttached && a) {
      this.$.wrapper.classList.remove('initializing'), a.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement;var b = a.offsetHeight;this.hasScrollingRegion ? (a.style.left = '', a.style.right = '') : requestAnimationFrame(function () {
        var b = this.getBoundingClientRect(),
            c = document.documentElement.clientWidth - b.right;a.style.left = b.left + 'px', a.style.right = c + 'px';
      }.bind(this));var c = this.$.contentContainer.style;a.fixed && !a.condenses && this.hasScrollingRegion ? (c.marginTop = b + 'px', c.paddingTop = '') : (c.paddingTop = b + 'px', c.marginTop = '');
    }
  } }, { header: { get: function get() {
      return Polymer.dom(this.$.headerSlot).getDistributedNodes()[0];
    }, configurable: !0, enumerable: !0 } }));
Polymer({ is: 'app-toolbar' });
Polymer({ is: 'app-box', behaviors: [Polymer.AppScrollEffectsBehavior, Polymer.IronResizableBehavior], listeners: { "iron-resize": '_resizeHandler' }, _progress: 0, attached: function attached() {
    this.resetLayout();
  }, _debounceRaf: function _debounceRaf(a) {
    var b = this;this._raf && window.cancelAnimationFrame(this._raf), this._raf = window.requestAnimationFrame(function () {
      b._raf = null, a.call(b);
    });
  }, resetLayout: function resetLayout() {
    this._debounceRaf(function () {
      if (0 !== this.offsetWidth || 0 !== this.offsetHeight) {
        var a = this._clampedScrollTop,
            b = this.disabled;this.disabled = !0, this._elementTop = this._getElementTop(), this._elementHeight = this.offsetHeight, this._cachedScrollTargetHeight = this._scrollTargetHeight, this._setUpEffect(), this._updateScrollState(a), this.disabled = b;
      }
    });
  }, _getElementTop: function _getElementTop() {
    for (var a = this, b = 0; a && a !== this.scrollTarget;) {
      b += a.offsetTop, a = a.offsetParent;
    }return b;
  }, _updateScrollState: function _updateScrollState(a) {
    if (this.isOnScreen()) {
      var b = this._elementTop - a;this._progress = 1 - (b + this._elementHeight) / this._cachedScrollTargetHeight, this._runEffects(this._progress, a);
    }
  }, isOnScreen: function isOnScreen() {
    return this._elementTop < this._scrollTop + this._cachedScrollTargetHeight && this._elementTop + this._elementHeight > this._scrollTop;
  }, _resizeHandler: function _resizeHandler() {
    this.resetLayout();
  }, _getDOMRef: function _getDOMRef(a) {
    return 'background' === a ? this.$.background : 'backgroundFrontLayer' === a ? this.$.backgroundFrontLayer : void 0;
  }, getScrollState: function getScrollState() {
    return { progress: this._progress };
  } });
Polymer.AppLayout.registerEffect('blend-background', { setUp: function setUp() {
    var a = {};a.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), a.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), a.backgroundFrontLayer.style.willChange = 'opacity', a.backgroundFrontLayer.style.transform = 'translateZ(0)', a.backgroundRearLayer.style.willChange = 'opacity', a.backgroundRearLayer.style.transform = 'translateZ(0)', a.backgroundRearLayer.style.opacity = 0, this._fxBlendBackground = a;
  }, run: function run(a) {
    var b = this._fxBlendBackground;b.backgroundFrontLayer.style.opacity = 1 - a, b.backgroundRearLayer.style.opacity = a;
  }, tearDown: function tearDown() {
    delete this._fxBlendBackground;
  } });
Polymer.AppLayout.registerEffect('fade-background', { setUp: function setUp(a) {
    var b = {},
        c = a.duration || '0.5s';b.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), b.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), b.backgroundFrontLayer.style.willChange = 'opacity', b.backgroundFrontLayer.style.webkitTransform = 'translateZ(0)', b.backgroundFrontLayer.style.transitionProperty = 'opacity', b.backgroundFrontLayer.style.transitionDuration = c, b.backgroundRearLayer.style.willChange = 'opacity', b.backgroundRearLayer.style.webkitTransform = 'translateZ(0)', b.backgroundRearLayer.style.transitionProperty = 'opacity', b.backgroundRearLayer.style.transitionDuration = c, this._fxFadeBackground = b;
  }, run: function run(a) {
    var b = this._fxFadeBackground;1 <= a ? (b.backgroundFrontLayer.style.opacity = 0, b.backgroundRearLayer.style.opacity = 1) : (b.backgroundFrontLayer.style.opacity = 1, b.backgroundRearLayer.style.opacity = 0);
  }, tearDown: function tearDown() {
    delete this._fxFadeBackground;
  } });
Polymer.AppLayout.registerEffect('waterfall', { run: function run() {
    this.shadow = this.isOnScreen() && this.isContentBelow();
  } });
(function () {
  function a(a, b, c, d) {
    c.apply(d, b.map(function (b) {
      return b[0] + (b[1] - b[0]) * a;
    }));
  }Polymer.AppLayout.registerEffect('resize-title', { setUp: function setUp() {
      var a = this._getDOMRef('mainTitle'),
          b = this._getDOMRef('condensedTitle');if (!b) return console.warn('Scroll effect `resize-title`: undefined `condensed-title`'), !1;if (!a) return console.warn('Scroll effect `resize-title`: undefined `main-title`'), !1;b.style.willChange = 'opacity', b.style.webkitTransform = 'translateZ(0)', b.style.transform = 'translateZ(0)', b.style.webkitTransformOrigin = 'left top', b.style.transformOrigin = 'left top', a.style.willChange = 'opacity', a.style.webkitTransformOrigin = 'left top', a.style.transformOrigin = 'left top', a.style.webkitTransform = 'translateZ(0)', a.style.transform = 'translateZ(0)';var c = a.getBoundingClientRect(),
          d = b.getBoundingClientRect(),
          e = {};e.scale = parseInt(window.getComputedStyle(b)['font-size'], 10) / parseInt(window.getComputedStyle(a)['font-size'], 10), e.titleDX = c.left - d.left, e.titleDY = c.top - d.top, e.condensedTitle = b, e.title = a, this._fxResizeTitle = e;
    }, run: function run(b, c) {
      var d = this._fxResizeTitle;this.condenses || (c = 0), 1 <= b ? (d.title.style.opacity = 0, d.condensedTitle.style.opacity = 1) : (d.title.style.opacity = 1, d.condensedTitle.style.opacity = 0), a(Math.min(1, b), [[1, d.scale], [0, -d.titleDX], [c, c - d.titleDY]], function (a, b, c) {
        this.transform('translate(' + b + 'px, ' + c + 'px) scale3d(' + a + ', ' + a + ', 1)', d.title);
      }, this);
    }, tearDown: function tearDown() {
      delete this._fxResizeTitle;
    } });
})();
Polymer.AppLayout.registerEffect('parallax-background', { setUp: function setUp(a) {
    var b = {},
        c = parseFloat(a.scalar);b.background = this._getDOMRef('background'), b.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), b.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), b.deltaBg = b.backgroundFrontLayer.offsetHeight - b.background.offsetHeight, 0 === b.deltaBg ? (isNaN(c) && (c = 0.8), b.deltaBg = (this._dHeight || 0) * c) : (isNaN(c) && (c = 1), b.deltaBg *= c), this._fxParallaxBackground = b;
  }, run: function run(a) {
    var b = Math.min,
        c = this._fxParallaxBackground;this.transform('translate3d(0px, ' + c.deltaBg * b(1, a) + 'px, 0px)', c.backgroundFrontLayer), c.backgroundRearLayer && this.transform('translate3d(0px, ' + c.deltaBg * b(1, a) + 'px, 0px)', c.backgroundRearLayer);
  }, tearDown: function tearDown() {
    delete this._fxParallaxBackground;
  } });
Polymer.AppLayout.registerEffect('material', { setUp: function setUp() {
    return this.effects = 'waterfall resize-title blend-background parallax-background', !1;
  } });
Polymer.AppLayout.registerEffect('resize-snapped-title', { setUp: function setUp(a) {
    var b = this._getDOMRef('mainTitle'),
        c = this._getDOMRef('condensedTitle'),
        d = a.duration || '0.2s',
        e = {};return c ? b ? void (b.style.transitionProperty = 'opacity', b.style.transitionDuration = d, c.style.transitionProperty = 'opacity', c.style.transitionDuration = d, e.condensedTitle = c, e.title = b, this._fxResizeSnappedTitle = e) : (console.warn('Scroll effect `resize-snapped-title`: undefined `main-title`'), !1) : (console.warn('Scroll effect `resize-snapped-title`: undefined `condensed-title`'), !1);
  }, run: function run(a) {
    var b = this._fxResizeSnappedTitle;0 < a ? (b.title.style.opacity = 0, b.condensedTitle.style.opacity = 1) : (b.title.style.opacity = 1, b.condensedTitle.style.opacity = 0);
  }, tearDown: function tearDown() {
    var a = this._fxResizeSnappedTitle;a.title.style.transition = '', a.condensedTitle.style.transition = '', delete this._fxResizeSnappedTitle;
  } });
var CenterElementElement;(function (a) {
  a.centerElementProperties = { width: { type: String, value: null, observer: 'recalculateStyles' }, height: { type: String, value: null, observer: 'recalculateStyles' }, fill: { type: Boolean, value: !1, observer: 'recalculateStyles' }, fullscreenoverlay: { type: Boolean, value: !1, observer: 'recalculateStyles' }, hide: { type: Boolean, value: !1, notify: !0 }, requestedPermissions: { type: Array, value: [], notify: !0 }, otherPermissions: { type: Array, value: [], notify: !0 }, nostyle: { type: Boolean, value: !1, notify: !0 } };var b = function () {
    function b() {}return b.recalculateStyles = function () {
      this.nostyle || !this._isReady || (this.fullscreenoverlay ? (this.style.position = 'fixed', this.style.top = this.style.left = '0', this.style.zIndex = '9999', this.style.width = '100vw', this.style.height = '100vh') : (this.style.position = 'static', this.style.top = this.style.left = 'auto', this.style.zIndex = 'auto', this.fill ? (this.style.width = '100%', this.style.height = '100%') : (this.width && (this.style.width = this.width), this.height && (this.style.height = this.height))));
    }, b.ready = function () {
      this._isReady = !0, this.recalculateStyles();
    }, (b.is = 'center-element', b.properties = a.centerElementProperties, b._isReady = !1, b);
  }();a.CE = b, window.objectify ? window.register(b) : window.addEventListener('RegisterReady', function () {
    window.register(b);
  });
})(CenterElementElement || (CenterElementElement = {}));
Polymer.PaperSpinnerBehavior = { properties: { active: { type: Boolean, value: !1, reflectToAttribute: !0, observer: '__activeChanged' }, alt: { type: String, value: 'loading', observer: '__altChanged' }, __coolingDown: { type: Boolean, value: !1 } }, __computeContainerClasses: function __computeContainerClasses(a, b) {
    return [a || b ? 'active' : '', b ? 'cooldown' : ''].join(' ');
  }, __activeChanged: function __activeChanged(a, b) {
    this.__setAriaHidden(!a), this.__coolingDown = !a && b;
  }, __altChanged: function __altChanged(a) {
    'loading' === a ? this.alt = this.getAttribute('aria-label') || a : (this.__setAriaHidden('' === a), this.setAttribute('aria-label', a));
  }, __setAriaHidden: function __setAriaHidden(a) {
    var b = 'aria-hidden';a ? this.setAttribute(b, 'true') : this.removeAttribute(b);
  }, __reset: function __reset() {
    this.active = !1, this.__coolingDown = !1;
  } };
Polymer({ is: 'paper-spinner', behaviors: [Polymer.PaperSpinnerBehavior] });
var BrowserAPINS,
    __extends = undefined && undefined.__extends || function () {
  var _a3 = function a(c, d) {
    return _a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) {
      a.__proto__ = c;
    } || function (a, c) {
      for (var b in c) {
        c.hasOwnProperty(b) && (a[b] = c[b]);
      }
    }, _a3(c, d);
  };return function (c, d) {
    function b() {
      this.constructor = c;
    }_a3(c, d), c.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b());
  };
}(),
    __assign = undefined && undefined.__assign || function () {
  return __assign = Object.assign || function (a) {
    for (var b, c = 1, d = arguments.length; c < d; c++) {
      for (var e in b = arguments[c], b) {
        Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
      }
    }return a;
  }, __assign.apply(this, arguments);
},
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = 2 & c[0] ? f["return"] : c[0] ? f["throw"] || ((h = f["return"]) && h.call(f), 0) : f.next) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [2 & c[0], h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
};if (function (a) {
  function b(a) {
    return !!p.runtime.lastError && (a(p.runtime.lastError), !0);
  }function c(a, b) {
    var c = b.resolve,
        d = b.reject,
        e = function e() {
      for (var b = [], e = 0; e < arguments.length; e++) {
        b[e] = arguments[e];
      }p.runtime.lastError ? d(new q(p.runtime.lastError, a)) : c(b[0]);
    };return e.__resolve = c, e.__reject = d, e.__stack = a, e;
  }function d(a) {
    return new Promise(function (b, d) {
      a(c(new Error(), { resolve: b, reject: d }));
    });
  }function e(a) {
    return { set: function set(b) {
        return d(function (c) {
          p.storage[a].set(b, c);
        });
      }, remove: function remove(c) {
        return d(function (d) {
          Array.isArray(c) ? Promise.all(c.map(function (c) {
            return new Promise(function (e) {
              p.storage[a].remove(c, function () {
                b(d.__reject) || e(null);
              });
            });
          })).then(d) : p.storage[a].remove(c, d);
        });
      }, clear: function clear() {
        return d(function (b) {
          p.storage[a].clear(b);
        });
      } };
  }function f(a) {
    if ("browser" === a) return r;if ("chrome" === a) return s;if ("undefined" === typeof location || "undefined" === typeof location.host) return !1;throw new Error("Unsupported browser API support queried");
  }function g() {
    var a = window,
        b = !!a.opr && !!a.opr.addons || !!a.opera || 0 <= navigator.userAgent.indexOf(" OPR/");if ("undefined" !== typeof a.InstallTrigger) return "firefox";if (a.StyleMedia) return "edge";if (!b && f("chrome")) return "chrome";if (b) return "opera";if ("undefined" === typeof location || "undefined" === typeof location.host) return "node";throw new Error("Unsupported browser");
  }function h() {
    return t ? t : t = g();
  }function i() {
    return -1 === location.href.indexOf("backgroun");
  }function j() {
    return -1 < p.runtime.getManifest().short_name.indexOf("dev");
  }function k(c, a) {
    return c + "" === a + "";
  }function l(a, b, c) {
    for (var d = 0; d < a.length; d++) {
      var e = a[d],
          f = e.id,
          g = e.children;if (k(f, b)) return c(e, d, a), !0;if (g && l(g, b, c)) return !0;
    }return !1;
  }function m() {
    v._lastSpecialCall = null, v._currentContextMenu = [], v._activeTabs = [], v._executedScripts = [], v._fakeTabs = {}, v._activatedBackgroundPages = [], v._tabUpdateListeners = [];
  }function n() {
    return p.downloads ? { download: function download(a) {
        return u && (v._lastSpecialCall = { api: "downloads.download", args: [a] }), d(function (b) {
          p.downloads.download(a, b);
        });
      } } : void 0;
  }var o = window,
      p = o.StyleMedia ? o.browser : o.chrome,
      q = function (a) {
    function b(b, c) {
      var d = b.message,
          e = c.stack,
          f = a.call(this, d) || this;return f.stack = e, f.message = d, f;
    }return __extends(b, a), b;
  }(Error),
      r = "browser" in window,
      s = "chrome" in window;a.isBrowserAPISupported = f;var t = null;a.getBrowser = h, a.getSrc = function () {
    return p;
  };var u = !1;a.resetLogData = m, a.enableLogging = function () {
    u || m(), u = !0;
  }, a.isLoggingEnabled = function () {
    return u;
  }, a.disableLogging = function () {
    u = !1, v._lastSpecialCall = null, v._currentContextMenu = null, v._activeTabs = null, v._executedScripts = null, v._fakeTabs = null, v._activatedBackgroundPages = null, v._tabUpdateListeners = null;
  };var v = { _lastSpecialCall: null, _currentContextMenu: null, _activeTabs: null, _executedScripts: null, _fakeTabs: null, _activatedBackgroundPages: null, _tabUpdateListeners: null, _clearExecutedScripts: function _clearExecutedScripts() {
      for (; v._executedScripts.pop();) {}
    } };a.getTestData = function () {
    return i() || j() ? v : void 0;
  }, a.getDownloadAPI = n, a.polyfill = p ? { commands: p.commands ? { getAll: function getAll() {
        return d(function (a) {
          p.commands.getAll(a);
        });
      }, onCommand: p.commands.onCommand } : void 0, contextMenus: p.contextMenus ? { create: function create(b, c) {
        var d = p.contextMenus.create(b, function () {
          c && (p.runtime.lastError ? (a.polyfill.runtime.lastError = p.runtime.lastError.message, c(), a.polyfill.runtime.lastError = null) : c());
        }),
            e = { id: d, createProperties: b, currentProperties: b, children: [] };return u && (b.parentId ? l(v._currentContextMenu, b.parentId, function (a) {
          a.children.push(e);
        }) : v._currentContextMenu.push(e)), Promise.resolve(d);
      }, update: function update(a, b) {
        return u && l(v._currentContextMenu, a, function (a) {
          var c = a.currentProperties;for (var d in b) {
            c[d] = b[d];
          }
        }), d(function (c) {
          p.contextMenus.update(a + "", b, function () {
            p.runtime.lastError ? p.contextMenus.update(~~a, b, c) : c();
          });
        });
      }, remove: function remove(a) {
        return u && l(v._currentContextMenu, a, function (a, b, c) {
          c.splice(b, 1);
        }), d(function (b) {
          p.contextMenus.remove(a + "", function () {
            p.runtime.lastError ? p.contextMenus.remove(~~a, b) : b();
          });
        });
      }, removeAll: function removeAll() {
        if (u) for (; v._currentContextMenu.length;) {
          v._currentContextMenu.pop();
        }return d(function (a) {
          var b = p.contextMenus.removeAll(function () {
            "edge" === h() && p.runtime.lastError && a.__resolve(void 0), p.runtime.lastError ? a.__reject(new q(p.runtime.lastError, a.__stack)) : a.__resolve(void 0);
          });b && "undefined" !== typeof window && window.Promise && b instanceof window.Promise && b.then(a.__resolve, a.__reject);
        });
      } } : void 0, downloads: n(), extension: p.extension ? { isAllowedFileSchemeAccess: function isAllowedFileSchemeAccess() {
        return d(function (a) {
          p.extension.isAllowedFileSchemeAccess(a);
        });
      } } : void 0, i18n: p.i18n ? { getAcceptLanguages: function getAcceptLanguages() {
        return d(function (a) {
          p.i18n.getAcceptLanguages(a);
        });
      }, getMessage: function getMessage(a, b) {
        return p.i18n.getMessage(a, b);
      }, getUILanguage: function getUILanguage() {
        return p.i18n.getUILanguage();
      } } : void 0, notifications: p.notifications ? { onClicked: p.notifications.onClicked, onClosed: p.notifications.onClosed } : void 0, permissions: p.permissions ? { contains: function contains(a) {
        return d(function (b) {
          p.permissions.contains(a, b);
        });
      }, getAll: function getAll() {
        return d(function (a) {
          p.permissions.getAll(a);
        });
      }, request: function request(a) {
        return d(function (b) {
          p.permissions.request(a, b);
        });
      }, remove: function remove(a) {
        return d(function (b) {
          p.permissions.remove(a, b);
        });
      } } : void 0, runtime: p.runtime ? { connect: function connect(a, b) {
        return b ? p.runtime.connect(a, b) : a ? p.runtime.connect(a) : p.runtime.connect();
      }, getBackgroundPage: function getBackgroundPage() {
        return d(function (a) {
          p.runtime.getBackgroundPage(a);
        });
      }, getManifest: function getManifest() {
        return Promise.resolve(p.runtime.getManifest());
      }, getURL: function getURL(a) {
        return p.runtime.getURL(a);
      }, getPlatformInfo: function getPlatformInfo() {
        return d(function (a) {
          p.runtime.getPlatformInfo(a);
        });
      }, openOptionsPage: function openOptionsPage() {
        return d(function (b) {
          "edge" === a.getBrowser() ? a.polyfill.tabs.create({ url: a.polyfill.runtime.getURL("html/options.html") }).then(function () {
            b();
          }) : p.runtime.openOptionsPage(b);
        });
      }, reload: function reload() {
        return Promise.resolve(p.runtime.reload());
      }, sendMessage: function sendMessage(a, b, c) {
        return d(function (d) {
          c ? p.runtime.sendMessage(a, b, c, d) : b ? p.runtime.sendMessage(a, b, d) : p.runtime.sendMessage(a, d);
        });
      }, onInstalled: p.runtime.onInstalled, onConnectExternal: p.runtime.onConnectExternal, onConnect: p.runtime.onConnect, onMessage: p.runtime.onMessage, lastError: null, id: p.runtime.id } : void 0, storage: p.storage ? { local: __assign({}, e("local"), { get: function get(a) {
          return d(function (b) {
            a ? p.storage.local.get(a, b) : p.storage.local.get(b);
          });
        } }), sync: __assign({}, e("sync"), { get: function get(a) {
          return d(function (b) {
            a ? p.storage.sync.get(a, b) : p.storage.sync.get(b);
          });
        } }), onChanged: p.storage.onChanged } : void 0, tabs: p.tabs ? { create: function create(a) {
        return d(function (b) {
          p.tabs.create(a, function (c) {
            var d = c.id;u && v._activeTabs.push({ type: "create", data: a, id: d }), b(c);
          });
        });
      }, get: function get(a) {
        return d(function (b) {
          p.tabs.get(a, b);
        });
      }, getCurrent: function getCurrent() {
        return d(function (a) {
          p.tabs.getCurrent(a);
        });
      }, captureVisibleTab: function captureVisibleTab(a, b) {
        return d(function (c) {
          b ? p.tabs.captureVisibleTab(a, b, c) : a ? p.tabs.captureVisibleTab(a, c) : p.tabs.captureVisibleTab(c);
        });
      }, update: function update(a, b) {
        return __awaiter(this, void 0, void 0, function () {
          var c = this;return __generator(this, function () {
            return [2, d(function (d) {
              return __awaiter(c, void 0, void 0, function () {
                return __generator(this, function () {
                  return b ? p.tabs.update(a, b, d) : p.tabs.update(a, d), u && v._activeTabs.push({ type: "create", data: "number" === typeof a ? b : a, id: "number" === typeof a ? a : void 0 }), [2];
                });
              });
            })];
          });
        });
      }, query: function query(a) {
        return d(function (b) {
          p.tabs.query(a, b);
        });
      }, executeScript: function executeScript(a, b) {
        var c = this;return d(function (d) {
          return __awaiter(c, void 0, void 0, function () {
            var c, e, f;return __generator(this, function (g) {
              switch (g.label) {case 0:
                  return (b ? p.tabs.executeScript(a, b, d) : p.tabs.executeScript(a, d), c = "number" === typeof a ? b : a, !c.code) ? [3, 4] : (e = void 0, "number" !== typeof a) ? [3, 1] : (e = a, [3, 3]);case 1:
                  return [4, browserAPI.tabs.getCurrent()];case 2:
                  f = g.sent(), f && (e = f.id), g.label = 3;case 3:
                  u && v._executedScripts.push({ id: e, code: c.code }), g.label = 4;case 4:
                  return [2];}
            });
          });
        });
      }, sendMessage: function sendMessage(a, c) {
        return d(function (d) {
          var e = d.__resolve,
              f = d.__reject;p.tabs.sendMessage(a, c, function (a) {
            b(f) || e(a);
          });
        });
      }, onUpdated: p.tabs.onUpdated, onRemoved: p.tabs.onRemoved, onHighlighted: p.tabs.onHighlighted } : void 0, webRequest: p.webRequest ? { onBeforeRequest: p.webRequest.onBeforeRequest } : void 0 } : {};
}(BrowserAPINS || (BrowserAPINS = {})), window.BrowserAPIInstances = window.BrowserAPIInstances || [], window.BrowserAPIInstances.push(BrowserAPINS), !window.browserAPI || window.__isVirtual) {
  window.BrowserAPINS = window.BrowserAPI = BrowserAPINS, window.browserAPI = "edge" !== BrowserAPINS.getBrowser() && window.browser ? window.browser : __assign({}, BrowserAPINS.polyfill, { __isProxied: !0 });var menusBrowserAPI = window.browserAPI;menusBrowserAPI.contextMenus ? !menusBrowserAPI.menus && (menusBrowserAPI.menus = menusBrowserAPI.contextMenus) : menusBrowserAPI.contextMenus = menusBrowserAPI.menus;
}var BrowserAPI = window.BrowserAPINS,
    browserAPI = window.browserAPI;
var __assign = undefined && undefined.__assign || function () {
  return __assign = Object.assign || function (a) {
    for (var b, c = 1, d = arguments.length; c < d; c++) {
      for (var e in b = arguments[c], b) {
        Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
      }
    }return a;
  }, __assign.apply(this, arguments);
},
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = 2 & c[0] ? f["return"] : c[0] ? f["throw"] || ((h = f["return"]) && h.call(f), 0) : f.next) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [2 & c[0], h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
},
    _this = undefined;(function () {
  function a(a) {
    return "undefined" === typeof a || null === a;
  }function b(a) {
    a.properties = a.properties || {}, a.properties.lang = { type: String, notify: !0, value: null }, a.properties.langReady = { type: Boolean, notify: !0, value: !1 };
  }function c(a, b) {
    var c = document.createElement("div");return c.style[a] = b, c.style[a] === b;
  }function d(a, b, c) {
    var d = null,
        e = { onfinish: null, oncancel: null, cancel: function cancel() {
        d && d.cancel(), this.oncancel && this.oncancel.apply(this, { currentTime: Date.now(), timelineTime: null });
      }, play: function play() {
        var e = this;d && d.cancel(), d = c(a, b, function () {
          e.onfinish && e.onfinish.apply(e, { currentTime: Date.now(), timelineTime: null });
        });
      }, reverse: function reverse() {
        var e = this;d && d.cancel(), d = c(b, a, function () {
          e.onfinish && e.onfinish.apply(e, { currentTime: Date.now(), timelineTime: null });
        });
      }, pause: function pause() {}, finish: function finish() {}, currentTime: 0, effect: { getTiming: function getTiming() {
          return { delay: 0, direction: "normal", fill: "both" };
        }, updateTiming: function updateTiming() {}, getComputedTiming: function getComputedTiming() {
          return { endTime: 0, activeDuration: 0, currentIteration: 0, localTime: 0, progress: null };
        } }, updatePlaybackRate: function updatePlaybackRate() {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, dispatchEvent: function dispatchEvent() {
        return !0;
      }, finished: Promise.resolve(e), pending: !1, startTime: Date.now(), id: "", ready: Promise.resolve(e), playState: "finished", playbackRate: 1, timeline: { currentTime: Date.now() } };return c(a, b, function () {
      e.onfinish && e.onfinish.apply(e, { currentTime: Date.now(), timelineTime: null });
    }), e;
  }if (!window.onExists) {
    var e = function () {
      function a(a) {
        var b = this;this._val = null, this._state = "pending", this._done = !1, this._resolveListeners = [], this._rejectListeners = [], a(function (a) {
          b._done || (b._done = !0, b._val = a, b._state = "resolved", b._resolveListeners.forEach(function (b) {
            b(a);
          }));
        }, function (a) {
          b._done || (b._done = !0, b._val = a, b._state = "rejected", b._rejectListeners.forEach(function (b) {
            b(a);
          }));
        });
      }return a.prototype.then = function (a, b) {
        return a ? (this._done && "resolved" === this._state ? a(this._val) : this._resolveListeners.push(a), !b) ? this : (this._done && "rejected" === this._state ? b(this._val) : this._rejectListeners.push(b), this) : this;
      }, a.chain = function (b) {
        return new a(function (c) {
          return b[0] ? void b[0]().then(function (d) {
            b[1] ? a.chain(b.slice(1)).then(function (a) {
              c(a);
            }) : c(d);
          }) : void c(null);
        });
      }, a;
    }();window.onExists = function (b, c) {
      c || (c = window);var d = window.Promise || e;return new d(function (d) {
        if (b in c && !a(c[b])) return void d(c[b]);var e = window.setInterval(function () {
          b in c && !a(c[b]) && (window.clearInterval(e), d(c[b]));
        }, 50);
      });
    };var f = function f(a) {
      var b = {};return Object.getOwnPropertyNames(a).forEach(function (c) {
        b[c] = a[c];
      }), b;
    },
        g = function () {
      var a = function () {
        function a() {
          var a,
              b = this;this._currentLangFile = null, this._lang = null, this._listeners = [], this._languageChangeListeners = [], this.ready = function () {
            return __awaiter(b, void 0, void 0, function () {
              var a,
                  b,
                  c = this;return __generator(this, function (d) {
                switch (d.label) {case 0:
                    return a = this, [4, this.fetchLang()];case 1:
                    return a._lang = d.sent(), b = this, [4, this.Files.loadLang(this._lang)];case 2:
                    return b._currentLangFile = d.sent(), this._listeners.forEach(function (a) {
                      a.langReady = !0, a.onLangChanged && a.onLangChanged.call(a, c._lang, null);
                    }), [2];}
              });
            });
          }(), this.Files = (a = function () {
            function a() {}return a._isWebPageEnv = function () {
              return "http:" === location.protocol || "https:" === location.protocol;
            }, a._loadFile = function (a) {
              var b = this;return new window.Promise(function (c, d) {
                var e = new window.XMLHttpRequest(),
                    f = b._isWebPageEnv() ? "../" + a : browserAPI.runtime.getURL(a);e.open("GET", f), e.onreadystatechange = function () {
                  e.readyState === window.XMLHttpRequest.DONE && (200 === e.status ? c(e.responseText) : d(new Error("Failed XHR")));
                }, e.send();
              });
            }, a._parseLang = function (a) {
              var b = JSON.parse(a),
                  c = {};for (var d in b) {
                if ("$schema" !== d && "comments" !== d) {
                  var e = b[d],
                      f = [];for (var g in e.placeholders || {}) {
                    var h = e.placeholders[g].content;f.push({ index: f.length, content: h, expr: new RegExp("\\$" + g + "\\$", "gi") });
                  }c[d] = { message: e.message || "{{" + d + "}}", placeholders: f };
                }
              }return c;
            }, a.loadLang = function (a) {
              return __awaiter(this, void 0, void 0, function () {
                var b, c, d;return __generator(this, function (e) {
                  switch (e.label) {case 0:
                      if (this._loadedLangs[a]) return [2, this._loadedLangs[a]];e.label = 1;case 1:
                      return e.trys.push([1, 3,, 4]), [4, this._loadFile("_locales/" + a + "/messages.json")];case 2:
                      return b = e.sent(), c = this._parseLang(b), this._loadedLangs[a] = c, [2, c];case 3:
                      throw d = e.sent(), d;case 4:
                      return [2];}
                });
              });
            }, a.getLangFile = function (a) {
              return this._loadedLangs[a];
            }, a;
          }(), a._loadedLangs = {}, a);
        }return a.prototype._getDefaultLang = function () {
          return __awaiter(this, void 0, void 0, function () {
            var b, c;return __generator(this, function (d) {
              switch (d.label) {case 0:
                  return [4, browserAPI.i18n.getAcceptLanguages()];case 1:
                  return (b = d.sent(), -1 < b.indexOf(a.DEFAULT_LANG)) ? [2, a.DEFAULT_LANG] : (c = b.filter(function (b) {
                    return -1 !== a.SUPPORTED_LANGS.indexOf(b);
                  }), [2, c[0] || a.DEFAULT_LANG]);}
            });
          });
        }, a.prototype.fetchLang = function () {
          return __awaiter(this, void 0, void 0, function () {
            var a, b;return __generator(this, function (c) {
              switch (c.label) {case 0:
                  return [4, window.onExists("browserAPI")];case 1:
                  return c.sent(), [4, browserAPI.storage.local.get("lang")];case 2:
                  return a = c.sent().lang, a ? [3, 4] : [4, this._getDefaultLang()];case 3:
                  return b = c.sent(), browserAPI.storage.local.set({ lang: b }), [2, b];case 4:
                  return [2, a];}
            });
          });
        }, a.prototype.getLang = function () {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
              return this._lang ? [2, this._lang] : [2, this.fetchLang()];
            });
          });
        }, a.prototype.setLang = function (a) {
          return __awaiter(this, void 0, void 0, function () {
            var b,
                c = this;return __generator(this, function (d) {
              switch (d.label) {case 0:
                  return [4, this.getLang()];case 1:
                  return b = d.sent(), [4, browserAPI.storage.local.set({ lang: a })];case 2:
                  return d.sent(), this._listeners.forEach(function (c) {
                    return c.onLangChange && c.onLangChange.call(c, a, b);
                  }), this.ready = function () {
                    return __awaiter(c, void 0, void 0, function () {
                      var c,
                          d = this;return __generator(this, function (e) {
                        switch (e.label) {case 0:
                            return c = this, [4, this.Files.loadLang(a)];case 1:
                            return c._currentLangFile = e.sent(), this._listeners.forEach(function (c) {
                              d._lang = a, c.lang = a, c.langReady = !0, d._languageChangeListeners.forEach(function (a) {
                                return a();
                              }), d._listeners.forEach(function (c) {
                                return c.onLangChanged && c.onLangChanged.call(c, a, b);
                              });
                            }), [2];}
                      });
                    });
                  }(), [2];}
            });
          });
        }, a.prototype.langReady = function (a) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function () {
              return [2, void 0 !== this.Files.getLangFile(a)];
            });
          });
        }, a.prototype._getMessage = function (b) {
          for (var c = [], d = 1; d < arguments.length; d++) {
            c[d - 1] = arguments[d];
          }var e = this._currentLangFile[b];if (!e) return "{{" + b + "}}";var f = e.message,
              g = e.placeholders,
              h = g.map(function (a) {
            return a.content;
          });if (!f) return "{{" + b + "}}";for (var j = function j(b) {
            var d = a.INDEX_REGEXPS[b];f = f.replace(d, c[b]), h = h.map(function (a) {
              return a.replace(d, c[b]);
            });
          }, k = 0; k < c.length; k++) {
            j(k);
          }for (var i = 0, l = g; i < l.length; i++) {
            var m = l[i],
                n = m.expr,
                o = m.index;f = f.replace(n, h[o]);
          }return f;
        }, a.prototype.__sync = function (a) {
          for (var b = [], c = 1; c < arguments.length; c++) {
            b[c - 1] = arguments[c];
          }return this._lang && this._currentLangFile ? this._getMessage.apply(this, [a].concat(b.map(function (a) {
            return a + "";
          }))) : "{{" + a + "}}";
        }, a.prototype.__ = function (a) {
          for (var b = [], c = 1; c < arguments.length; c++) {
            b[c - 1] = arguments[c];
          }return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (c) {
              switch (c.label) {case 0:
                  return [4, this.ready];case 1:
                  return c.sent(), [2, this._getMessage.apply(this, [a].concat(b.map(function (a) {
                    return a + "";
                  })))];}
            });
          });
        }, a.prototype.addLoadListener = function (a) {
          -1 !== this._listeners.indexOf(a) || (this._listeners.push(a), this._lang && (a.lang = this._lang, this.Files.getLangFile(this._lang) && (a.langReady = !0)));
        }, a.prototype.addLanguageChangeListener = function (a) {
          this._languageChangeListeners.push(a);
        }, a.DEFAULT_LANG = "en", a.SUPPORTED_LANGS = ["en"], a.INDEX_REGEXPS = [new RegExp(/\$1/g), new RegExp(/\$2/g), new RegExp(/\$3/g), new RegExp(/\$4/g), new RegExp(/\$5/g), new RegExp(/\$6/g), new RegExp(/\$7/g), new RegExp(/\$8/g), new RegExp(/\$9/g)], a;
      }(),
          b = new a(),
          c = b.__.bind(b),
          d = function d(a) {
        for (var b = [], d = 1; d < arguments.length; d++) {
          b[d - 1] = arguments[d];
        }return c.apply(void 0, [a].concat(b));
      };d.sync = b.__sync.bind(b), d.getLang = b.getLang.bind(b), d.setLang = b.setLang.bind(b), d.SUPPORTED_LANGS = a.SUPPORTED_LANGS, d.addListener = b.addLanguageChangeListener.bind(b), d.ready = function () {
        return b.ready;
      }, window.__ = d;var e = function () {
        function a() {}return a.__ = function (a, b, c) {
          for (var d, e = [], f = 3; f < arguments.length; f++) {
            e[f - 3] = arguments[f];
          }return this.instance.addLoadListener(this), (d = this.instance).__sync.apply(d, [c].concat(e));
        }, a.__exec = function (a, b, c) {
          for (var d, e = [], f = 3; f < arguments.length; f++) {
            e[f - 3] = arguments[f];
          }for (var g, h = [], j = 0; j < e.length; j++) {
            if (g = e[j], "string" === typeof g) h.push(g);else if ("function" === typeof g) {
              var i = g.bind(this).apply(void 0, e.slice(j + 1, j + 1 + g.length));h.push(i);
            }
          }return this.instance.addLoadListener(this), (d = this.instance).__sync.apply(d, [c].concat(h));
        }, a.__async = function (a) {
          for (var b, c = [], d = 1; d < arguments.length; d++) {
            c[d - 1] = arguments[d];
          }return this.instance.addLoadListener(this), (b = this.instance).__.apply(b, [a].concat(c));
        }, a.___ = function (a) {
          for (var b, c = [], d = 1; d < arguments.length; d++) {
            c[d - 1] = arguments[d];
          }return this.instance.addLoadListener(this), (b = this.instance).__sync.apply(b, [a].concat(c));
        }, a.instance = b, a;
      }();return e;
    }(),
        h = function h(a) {
      var c = __assign({}, a, g),
          d = c.ready;b(c), window.Polymer(__assign({}, c, { ready: function ready() {
          this.classList.add("browser-" + BrowserAPI.getBrowser()), d && "function" === typeof d && d.apply(this, []);
        } }));
    };window.withAsync = function (a, b) {
      return __awaiter(_this, void 0, void 0, function () {
        var c, d;return __generator(this, function (e) {
          switch (e.label) {case 0:
              return [4, a()];case 1:
              return c = e.sent(), [4, b()];case 2:
              return d = e.sent(), [4, c()];case 3:
              return e.sent(), [2, d];}
        });
      });
    }, window["with"] = function (a, b) {
      var c = a(),
          d = b();return c(), d;
    };var i = null,
        j = window.getComputedStyle && "transform" in window.getComputedStyle(document.documentElement, "");window.setDisplayFlex = function (a) {
      null === i && (i = c("display", "flex")), a.style.display = i ? "flex" : "-webkit-flex";
    }, window.setTransform = function (a, b) {
      j ? a.style.transform = b : a.style.webkitTransform = b;
    }, window.animateTransform = function (a, b, c) {
      var e = b.from,
          f = b.propName,
          g = b.to,
          h = b.postfix;if (j && !a.__isAnimationJqueryPolyfill) return a.animate([{ transform: f + "(" + e + h + ")" }, { transform: f + "(" + g + h + ")" }], c);a.style.webkitTransform = f + "(" + e + h + ")";var i = document.createElement("div");return d("0px", "100px", function (b, d, j) {
        return i.style.height = b, $(i).animate({ height: d }, { duration: c.duration || 500, step: function step(b) {
            a.style.webkitTransform = f + "(" + (e + (g - e) / 100 * b) + h + ")";
          }, complete: function complete() {
            a.style.webkitTransform = f + "(" + d + h + ")", j();
          } }), { cancel: function cancel() {
            $(i).stop();
          } };
      });
    }, "undefined" !== typeof Event && -1 === location.href.indexOf("background.html") && window.onExists("Promise").then(function () {
      window.onExists("Polymer").then(function () {
        window.objectify = f, window.register = h;var a = new Event("RegisterReady");window.dispatchEvent(a);
      });
    }), window.onExistsChain = function (a, b, c, d, f, g) {
      var h = window.Promise || e;return new h(function (i) {
        var j = a;e.chain([b, c, d, f, g].filter(function (a) {
          return !!a;
        }).map(function (a) {
          return function () {
            return new h(function (b) {
              window.onExists(a, j).then(function (a) {
                j = a, b(a);
              });
            });
          };
        })).then(function (a) {
          i(a);
        });
      });
    };
  }
})();
(function (e, t) {
  "use notstrict";
  "object" === ("undefined" === typeof module ? "undefined" : babelHelpers["typeof"](module)) && "object" === babelHelpers["typeof"](module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
})("undefined" === typeof window ? undefined : window, function (e, t) {
  "use notstrict";
  function n(e, t, n) {
    t = t || de;var a,
        o = t.createElement("script");if (o.text = e, n) for (a in Te) {
      n[a] && (o[a] = n[a]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function a(e) {
    return null == e ? e + "" : "object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) || "function" === typeof e ? fe[he.call(e)] || "object" : "undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e);
  }function o(e) {
    var t = !!e && "length" in e && e.length,
        n = a(e);return be(e) || ve(e) ? !1 : "array" === n || 0 === t || "number" === typeof t && 0 < t && t - 1 in e;
  }function s(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }function i(e, t, n) {
    return be(t) ? Ce.grep(e, function (e, a) {
      return !!t.call(e, a, e) !== n;
    }) : t.nodeType ? Ce.grep(e, function (e) {
      return e === t !== n;
    }) : "string" === typeof t ? Ce.filter(t, e, n) : Ce.grep(e, function (e) {
      return -1 < ue.call(t, e) !== n;
    });
  }function d(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }function r(e) {
    var t = {};return Ce.each(e.match(Oe) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function l(e) {
    return e;
  }function p(e) {
    throw e;
  }function c(e, t, n, a) {
    var o;try {
      e && be(o = e.promise) ? o.call(e).done(t).fail(n) : e && be(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(a));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }function u() {
    de.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), Ce.ready();
  }function f(e, t) {
    return t.toUpperCase();
  }function h(e) {
    return e.replace(Be, "ms-").replace(Re, f);
  }function m() {
    this.expando = Ce.expando + m.uid++;
  }function g(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Xe.test(e) ? JSON.parse(e) : e);
  }function y(e, t, n) {
    var a;if (void 0 === n && 1 === e.nodeType) if (a = "data-" + t.replace($e, "-$&").toLowerCase(), n = e.getAttribute(a), "string" === typeof n) {
      try {
        n = g(n);
      } catch (t) {}Ue.set(e, t, n);
    } else n = void 0;return n;
  }function x(e, t, n, a) {
    var o,
        i,
        s = 20,
        d = a ? function () {
      return a.cur();
    } : function () {
      return Ce.css(e, t, "");
    },
        r = d(),
        l = n && n[3] || (Ce.cssNumber[t] ? "" : "px"),
        p = (Ce.cssNumber[t] || "px" !== l && +r) && Ve.exec(Ce.css(e, t));if (p && p[3] !== l) {
      for (r /= 2, l = l || p[3], p = +r || 1; s--;) {
        Ce.style(e, t, p + l), 0 >= (1 - i) * (1 - (i = d() / r || 0.5)) && (s = 0), p /= i;
      }p *= 2, Ce.style(e, t, p + l), n = n || [];
    }return n && (p = +p || +r || 0, o = n[1] ? p + (n[1] + 1) * n[2] : +n[2], a && (a.unit = l, a.start = p, a.end = o)), o;
  }function b(e) {
    var t,
        n = e.ownerDocument,
        a = e.nodeName,
        o = Ke[a];return o ? o : (t = n.body.appendChild(n.createElement(a)), o = Ce.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ke[a] = o, o);
  }function v(e, t) {
    for (var n, a, o = [], i = 0, s = e.length; i < s; i++) {
      (a = e[i], !!a.style) && (n = a.style.display, t ? ("none" === n && (o[i] = Fe.get(a, "display") || null, !o[i] && (a.style.display = "")), "" === a.style.display && Ge(a) && (o[i] = b(a))) : "none" !== n && (o[i] = "none", Fe.set(a, "display", n)));
    }for (i = 0; i < s; i++) {
      null != o[i] && (e[i].style.display = o[i]);
    }return e;
  }function T(e, t) {
    var n;return n = "undefined" === typeof e.getElementsByTagName ? "undefined" === typeof e.querySelectorAll ? [] : e.querySelectorAll(t || "*") : e.getElementsByTagName(t || "*"), void 0 === t || t && s(e, t) ? Ce.merge([e], n) : n;
  }function w(e, t) {
    for (var n = 0, a = e.length; n < a; n++) {
      Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"));
    }
  }function C(e, t, n, o, s) {
    for (var d, r, p, c, u, f, h = t.createDocumentFragment(), m = [], g = 0, i = e.length; g < i; g++) {
      if (d = e[g], d || 0 === d) if ("object" === a(d)) Ce.merge(m, d.nodeType ? [d] : d);else if (!nt.test(d)) m.push(t.createTextNode(d));else {
        for (r = r || h.appendChild(t.createElement("div")), p = (Ze.exec(d) || ["", ""])[1].toLowerCase(), c = tt[p] || tt._default, r.innerHTML = c[1] + Ce.htmlPrefilter(d) + c[2], f = c[0]; f--;) {
          r = r.lastChild;
        }Ce.merge(m, r.childNodes), r = h.firstChild, r.textContent = "";
      }
    }for (h.textContent = "", g = 0; d = m[g++];) {
      if (o && -1 < Ce.inArray(d, o)) {
        s && s.push(d);continue;
      }if (u = Ce.contains(d.ownerDocument, d), r = T(h.appendChild(d), "script"), u && w(r), n) for (f = 0; d = r[f++];) {
        et.test(d.type || "") && n.push(d);
      }
    }return h;
  }function N() {
    return !0;
  }function k() {
    return !1;
  }function S() {
    try {
      return de.activeElement;
    } catch (e) {}
  }function j(e, t, n, a, o, i) {
    var s, d;if ("object" === ("undefined" === typeof t ? "undefined" : babelHelpers["typeof"](t))) {
      for (d in "string" !== typeof n && (a = a || n, n = void 0), t) {
        j(e, d, n, a, t[d], i);
      }return e;
    }if (null == a && null == o ? (o = n, a = n = void 0) : null == o && ("string" === typeof n ? (o = a, a = void 0) : (o = a, a = n, n = void 0)), !1 === o) o = k;else if (!o) return e;return 1 === i && (s = o, o = function o(e) {
      return Ce().off(e), s.apply(this, arguments);
    }, o.guid = s.guid || (s.guid = Ce.guid++)), e.each(function () {
      Ce.event.add(this, t, o, a, n);
    });
  }function D(e, t) {
    return s(e, "table") && s(11 === t.nodeType ? t.firstChild : t, "tr") ? Ce(e).children("tbody")[0] || e : e;
  }function E(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function A(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function L(e, t) {
    var n, a, o, i, s, d, r, l;if (1 === t.nodeType) {
      if (Fe.hasData(e) && (i = Fe.access(e), s = Fe.set(t, i), l = i.events, l)) for (o in delete s.handle, s.events = {}, l) {
        for (n = 0, a = l[o].length; n < a; n++) {
          Ce.event.add(t, o, l[o][n]);
        }
      }Ue.hasData(e) && (d = Ue.access(e), r = Ce.extend({}, d), Ue.set(t, r));
    }
  }function q(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && Je.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }function H(e, t, a, o) {
    t = pe.apply([], t);var s,
        d,
        r,
        p,
        c,
        u,
        f = 0,
        i = e.length,
        l = t[0],
        h = be(l);if (h || 1 < i && "string" === typeof l && !xe.checkClone && lt.test(l)) return e.each(function (n) {
      var i = e.eq(n);h && (t[0] = l.call(this, n, i.html())), H(i, t, a, o);
    });if (i && (s = C(t, e[0].ownerDocument, !1, e, o), d = s.firstChild, 1 === s.childNodes.length && (s = d), d || o)) {
      for (r = Ce.map(T(s, "script"), E), p = r.length; f < i; f++) {
        c = s, f !== i - 1 && (c = Ce.clone(c, !0, !0), p && Ce.merge(r, T(c, "script"))), a.call(e[f], c, f);
      }if (p) for (u = r[r.length - 1].ownerDocument, Ce.map(r, A), f = 0; f < p; f++) {
        c = r[f], et.test(c.type || "") && !Fe.access(c, "globalEval") && Ce.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? Ce._evalUrl && Ce._evalUrl(c.src) : n(c.textContent.replace(pt, ""), u, c));
      }
    }return e;
  }function P(e, t, n) {
    for (var a, o = t ? Ce.filter(t, e) : e, s = 0; null != (a = o[s]); s++) {
      n || 1 !== a.nodeType || Ce.cleanData(T(a)), a.parentNode && (n && Ce.contains(a.ownerDocument, a) && w(T(a, "script")), a.parentNode.removeChild(a));
    }return e;
  }function O(e, t, n) {
    var a,
        o,
        i,
        s,
        d = e.style;return n = n || ut(e), n && (s = n.getPropertyValue(t) || n[t], "" === s && !Ce.contains(e.ownerDocument, e) && (s = Ce.style(e, t)), !xe.pixelBoxStyles() && ct.test(s) && ft.test(t) && (a = d.width, o = d.minWidth, i = d.maxWidth, d.minWidth = d.maxWidth = d.width = s, s = n.width, d.width = a, d.minWidth = o, d.maxWidth = i)), void 0 === s ? s : s + "";
  }function I(e, t) {
    return { get: function get() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      } };
  }function M(e) {
    if (e in bt) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = xt.length; n--;) {
      if (e = xt[n] + t, e in bt) return e;
    }
  }function W(e) {
    var t = Ce.cssProps[e];return t || (t = Ce.cssProps[e] = M(e) || e), t;
  }function B(e, t, n) {
    var a = Ve.exec(t);return a ? ie(0, a[2] - (n || 0)) + (a[3] || "px") : t;
  }function R(e, t, n, a, o, s) {
    var d = "width" === t ? 1 : 0,
        i = 0,
        r = 0;if (n === (a ? "border" : "content")) return 0;for (; 4 > d; d += 2) {
      "margin" === n && (r += Ce.css(e, n + Ye[d], !0, o)), a ? ("content" === n && (r -= Ce.css(e, "padding" + Ye[d], !0, o)), "margin" !== n && (r -= Ce.css(e, "border" + Ye[d] + "Width", !0, o))) : (r += Ce.css(e, "padding" + Ye[d], !0, o), "padding" === n ? i += Ce.css(e, "border" + Ye[d] + "Width", !0, o) : r += Ce.css(e, "border" + Ye[d] + "Width", !0, o));
    }return !a && 0 <= s && (r += ie(0, oe(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - r - i - 0.5))), r;
  }function _(e, t, n) {
    var a = ut(e),
        o = O(e, t, a),
        i = "border-box" === Ce.css(e, "boxSizing", !1, a),
        s = i;if (ct.test(o)) {
      if (!n) return o;o = "auto";
    }return s = s && (xe.boxSizingReliable() || o === e.style[t]), "auto" !== o && (parseFloat(o) || "inline" !== Ce.css(e, "display", !1, a)) || (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), o = parseFloat(o) || 0, o + R(e, t, n || (i ? "border" : "content"), s, a, o) + "px";
  }function F(e, t, n, a, o) {
    return new F.prototype.init(e, t, n, a, o);
  }function U() {
    Tt && (!1 === de.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(U) : e.setTimeout(U, Ce.fx.interval), Ce.fx.tick());
  }function X() {
    return e.setTimeout(function () {
      vt = void 0;
    }), vt = Date.now();
  }function $(e, t) {
    var n,
        a = 0,
        o = { height: e };for (t = t ? 1 : 0; 4 > a; a += 2 - t) {
      n = Ye[a], o["margin" + n] = o["padding" + n] = e;
    }return t && (o.opacity = o.width = e), o;
  }function z(e, t, n) {
    for (var a, o = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), i = 0, s = o.length; i < s; i++) {
      if (a = o[i].call(n, t, e)) return a;
    }
  }function V(e, t) {
    var n, a, o, i, s;for (n in e) {
      if (a = h(n), o = t[a], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== a && (e[a] = i, delete e[n]), s = Ce.cssHooks[a], s && "expand" in s) for (n in i = s.expand(i), delete e[a], i) {
        n in e || (e[n] = i[n], t[n] = o);
      } else t[a] = o;
    }
  }function Y(e, t, n) {
    var a,
        o,
        i = 0,
        s = Y.prefilters.length,
        d = Ce.Deferred().always(function () {
      delete r.elem;
    }),
        r = function r() {
      if (o) return !1;for (var t = vt || X(), n = ie(0, l.startTime + l.duration - t), a = n / l.duration || 0, i = 1 - a, s = 0, r = l.tweens.length; s < r; s++) {
        l.tweens[s].run(i);
      }return (d.notifyWith(e, [l, i, n]), 1 > i && r) ? n : (r || d.notifyWith(e, [l, 1, 0]), d.resolveWith(e, [l]), !1);
    },
        l = d.promise({ elem: e, props: Ce.extend({}, t), opts: Ce.extend(!0, { specialEasing: {}, easing: Ce.easing._default }, n), originalProperties: t, originalOptions: n, startTime: vt || X(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var a = Ce.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(a), a;
      }, stop: function stop(t) {
        var n = 0,
            a = t ? l.tweens.length : 0;if (o) return this;for (o = !0; n < a; n++) {
          l.tweens[n].run(1);
        }return t ? (d.notifyWith(e, [l, 1, 0]), d.resolveWith(e, [l, t])) : d.rejectWith(e, [l, t]), this;
      } }),
        p = l.props;for (V(p, l.opts.specialEasing); i < s; i++) {
      if (a = Y.prefilters[i].call(l, e, p, l.opts), a) return be(a.stop) && (Ce._queueHooks(l.elem, l.opts.queue).stop = a.stop.bind(a)), a;
    }return Ce.map(p, z, l), be(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ce.fx.timer(Ce.extend(r, { elem: e, anim: l, queue: l.opts.queue })), l;
  }function G(e) {
    var t = e.match(Oe) || [];return t.join(" ");
  }function Q(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function K(e) {
    return Array.isArray(e) ? e : "string" === typeof e ? e.match(Oe) || [] : [];
  }function J(e, t, n, o) {
    if (Array.isArray(t)) Ce.each(t, function (t, a) {
      n || Pt.test(e) ? o(e, a) : J(e + "[" + ("object" === ("undefined" === typeof a ? "undefined" : babelHelpers["typeof"](a)) && null != a ? t : "") + "]", a, n, o);
    });else if (!n && "object" === a(t)) for (var i in t) {
      J(e + "[" + i + "]", t[i], n, o);
    } else o(e, t);
  }function Z(e) {
    return function (t, n) {
      "string" !== typeof t && (n = t, t = "*");var a,
          o = 0,
          i = t.toLowerCase().match(Oe) || [];if (be(n)) for (; a = i[o++];) {
        "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n);
      }
    };
  }function ee(e, t, n, a) {
    function o(d) {
      var r;return i[d] = !0, Ce.each(e[d] || [], function (e, d) {
        var l = d(t, n, a);return "string" !== typeof l || s || i[l] ? s ? !(r = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1);
      }), r;
    }var i = {},
        s = e === zt;return o(t.dataTypes[0]) || !i["*"] && o("*");
  }function te(e, t) {
    var n,
        a,
        o = Ce.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : a || (a = {}))[n] = t[n]);
    }return a && Ce.extend(!0, e, a), e;
  }function ne(e, t, n) {
    for (var a, o, i, s, d = e.contents, r = e.dataTypes; "*" === r[0];) {
      r.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (a) for (o in d) {
      if (d[o] && d[o].test(a)) {
        r.unshift(o);break;
      }
    }if (r[0] in n) i = r[0];else {
      for (o in n) {
        if (!r[0] || e.converters[o + " " + r[0]]) {
          i = o;break;
        }s || (s = o);
      }i = i || s;
    }return i ? (i !== r[0] && r.unshift(i), n[i]) : void 0;
  }function ae(e, t, n, a) {
    var o,
        i,
        s,
        d,
        r,
        l = {},
        p = e.dataTypes.slice();if (p[1]) for (s in e.converters) {
      l[s.toLowerCase()] = e.converters[s];
    }for (i = p.shift(); i;) {
      if (e.responseFields[i] && (n[e.responseFields[i]] = t), !r && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), r = i, i = p.shift(), i) if ("*" === i) i = r;else if ("*" !== r && r !== i) {
        if (s = l[r + " " + i] || l["* " + i], !s) for (o in l) {
          if (d = o.split(" "), d[1] === i && (s = l[r + " " + d[0]] || l["* " + d[0]], s)) {
            !0 === s ? s = l[o] : !0 !== l[o] && (i = d[0], p.unshift(d[1]));break;
          }
        }if (!0 !== s) if (s && e.throws) t = s(t);else try {
          t = s(t);
        } catch (t) {
          return { state: "parsererror", error: s ? t : "No conversion from " + r + " to " + i };
        }
      }
    }return { state: "success", data: t };
  }var oe = Math.ceil,
      ie = Math.max,
      se = [],
      de = e.document,
      re = Object.getPrototypeOf,
      le = se.slice,
      pe = se.concat,
      ce = se.push,
      ue = se.indexOf,
      fe = {},
      he = fe.toString,
      me = fe.hasOwnProperty,
      ge = me.toString,
      ye = ge.call(Object),
      xe = {},
      be = function be(e) {
    return "function" === typeof e && "number" !== typeof e.nodeType;
  },
      ve = function ve(e) {
    return null != e && e === e.window;
  },
      Te = { type: !0, src: !0, noModule: !0 },
      we = "3.3.1",
      Ce = function e(t, n) {
    return new e.fn.init(t, n);
  },
      Ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;Ce.fn = Ce.prototype = { jquery: we, constructor: Ce, length: 0, toArray: function toArray() {
      return le.call(this);
    }, get: function get(e) {
      return null == e ? le.call(this) : 0 > e ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = Ce.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return Ce.each(this, e);
    }, map: function map(e) {
      return this.pushStack(Ce.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(le.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: ce, sort: se.sort, splice: se.splice }, Ce.extend = Ce.fn.extend = function () {
    var e,
        t,
        n,
        a,
        o,
        s,
        d = arguments[0] || {},
        r = 1,
        i = arguments.length,
        l = !1;for ("boolean" === typeof d && (l = d, d = arguments[r] || {}, r++), "object" === ("undefined" === typeof d ? "undefined" : babelHelpers["typeof"](d)) || be(d) || (d = {}), r === i && (d = this, r--); r < i; r++) {
      if (null != (e = arguments[r])) for (t in e) {
        (n = d[t], a = e[t], d !== a) && (l && a && (Ce.isPlainObject(a) || (o = Array.isArray(a))) ? (o ? (o = !1, s = n && Array.isArray(n) ? n : []) : s = n && Ce.isPlainObject(n) ? n : {}, d[t] = Ce.extend(l, s, a)) : void 0 !== a && (d[t] = a));
      }
    }return d;
  }, Ce.extend({ expando: "jQuery" + (we + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return e && "[object Object]" === he.call(e) && ((t = re(e), !!!t) || (n = me.call(t, "constructor") && t.constructor, "function" === typeof n && ge.call(n) === ye));
    }, isEmptyObject: function isEmptyObject(e) {
      for (var t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      n(e);
    }, each: function each(e, t) {
      var n,
          a = 0;if (o(e)) for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++) {} else for (a in e) {
        if (!1 === t.call(e[a], a, e[a])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(Ne, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (o(Object(e)) ? Ce.merge(n, "string" === typeof e ? [e] : e) : ce.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : ue.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, a = 0, o = e.length; a < n; a++) {
        e[o++] = t[a];
      }return e.length = o, e;
    }, grep: function grep(e, t, n) {
      for (var a, o = [], s = 0, i = e.length; s < i; s++) {
        a = !t(e[s], s), a !== !n && o.push(e[s]);
      }return o;
    }, map: function map(e, t, n) {
      var a,
          s,
          d = 0,
          i = [];if (o(e)) for (a = e.length; d < a; d++) {
        s = t(e[d], d, n), null != s && i.push(s);
      } else for (d in e) {
        s = t(e[d], d, n), null != s && i.push(s);
      }return pe.apply([], i);
    }, guid: 1, support: xe }), "function" === typeof Symbol && (Ce.fn[Symbol.iterator] = se[Symbol.iterator]), Ce.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"], function (e, t) {
    fe["[object " + t + "]"] = t.toLowerCase();
  });var ke = function (e) {
    function t(e, t, n, a) {
      var o,
          s,
          i,
          d,
          r,
          l,
          p,
          c = t && t.ownerDocument,
          f = t ? t.nodeType : 9;if (n = n || [], "string" !== typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;if (!a && ((t ? t.ownerDocument || t : _) !== H && q(t), t = t || H, O)) {
        if (11 !== f && (r = me.exec(e))) if (!(o = r[1])) {
          if (r[2]) return J.apply(n, t.getElementsByTagName(e)), n;if ((o = r[3]) && C.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n;
        } else if (9 === f) {
          if (!(i = t.getElementById(o))) return n;if (i.id === o) return n.push(i), n;
        } else if (c && (i = c.getElementById(o)) && B(t, i) && i.id === o) return n.push(i), n;if (C.qsa && !z[e + " "] && (!I || !I.test(e))) {
          if (1 !== f) c = t, p = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((d = t.getAttribute("id")) ? d = d.replace(be, ve) : t.setAttribute("id", d = R), l = S(e), s = l.length; s--;) {
              l[s] = "#" + d + " " + h(l[s]);
            }p = l.join(","), c = ge.test(e) && u(t.parentNode) || t;
          }if (p) try {
            return J.apply(n, c.querySelectorAll(p)), n;
          } catch (e) {} finally {
            d === R && t.removeAttribute("id");
          }
        }
      }return D(e.replace(ie, "$1"), t, n, a);
    }function n() {
      function e(n, a) {
        return t.push(n + " ") > N.cacheLength && delete e[t.shift()], e[n + " "] = a;
      }var t = [];return e;
    }function a(e) {
      return e[R] = !0, e;
    }function o(e) {
      var t = H.createElement("fieldset");try {
        return !!e(t);
      } catch (t) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function s(e, t) {
      for (var n = e.split("|"), a = n.length; a--;) {
        N.attrHandle[n[a]] = t;
      }
    }function d(e, t) {
      var n = t && e,
          a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (a) return a;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function r(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
      };
    }function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function p(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && we(t) === e : t.disabled === e : !!("label" in t) && t.disabled === e;
      };
    }function c(e) {
      return a(function (t) {
        return t = +t, a(function (n, a) {
          for (var o, s = e([], n.length, t), d = s.length; d--;) {
            n[o = s[d]] && (n[o] = !(a[o] = n[o]));
          }
        });
      });
    }function u(e) {
      return e && "undefined" !== typeof e.getElementsByTagName && e;
    }function f() {}function h(e) {
      for (var t = 0, n = e.length, a = ""; t < n; t++) {
        a += e[t].value;
      }return a;
    }function m(e, t, n) {
      var a = t.dir,
          o = t.next,
          i = o || a,
          s = n && "parentNode" === i,
          d = U++;return t.first ? function (t, n, o) {
        for (; t = t[a];) {
          if (1 === t.nodeType || s) return e(t, n, o);
        }return !1;
      } : function (t, n, r) {
        var l,
            p,
            c,
            u = [F, d];if (r) {
          for (; t = t[a];) {
            if ((1 === t.nodeType || s) && e(t, n, r)) return !0;
          }
        } else for (; t = t[a];) {
          if (1 === t.nodeType || s) if (c = t[R] || (t[R] = {}), p = c[t.uniqueID] || (c[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[a] || t;else {
            if ((l = p[i]) && l[0] === F && l[1] === d) return u[2] = l[2];if (p[i] = u, u[2] = e(t, n, r)) return !0;
          }
        }return !1;
      };
    }function g(e) {
      return 1 < e.length ? function (t, n, a) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, a)) return !1;
        }return !0;
      } : e[0];
    }function y(e, n, a) {
      for (var o = 0, i = n.length; o < i; o++) {
        t(e, n[o], a);
      }return a;
    }function x(e, t, n, a, o) {
      for (var s, d = [], r = 0, i = e.length; r < i; r++) {
        (s = e[r]) && (!n || n(s, a, o)) && (d.push(s), null != t && t.push(r));
      }return d;
    }function b(e, t, n, o, s, i) {
      return o && !o[R] && (o = b(o)), s && !s[R] && (s = b(s, i)), a(function (a, d, r, l) {
        var p,
            c,
            i,
            u = [],
            f = [],
            h = d.length,
            m = a || y(t || "*", r.nodeType ? [r] : r, []),
            g = e && (a || !t) ? x(m, u, e, r, l) : m,
            b = n ? s || (a ? e : h || o) ? [] : d : g;if (n && n(g, b, r, l), o) for (p = x(b, f), o(p, [], r, l), c = p.length; c--;) {
          (i = p[c]) && (b[f[c]] = !(g[f[c]] = i));
        }if (!a) b = x(b === d ? b.splice(h, b.length) : b), s ? s(null, d, b, l) : J.apply(d, b);else if (s || e) {
          if (s) {
            for (p = [], c = b.length; c--;) {
              (i = b[c]) && p.push(g[c] = i);
            }s(null, b = [], p, l);
          }for (c = b.length; c--;) {
            (i = b[c]) && -1 < (p = s ? ee(a, i) : u[c]) && (a[p] = !(d[p] = i));
          }
        }
      });
    }function v(e) {
      for (var t, n, a, o = e.length, s = N.relative[e[0].type], d = s || N.relative[" "], r = s ? 1 : 0, i = m(function (e) {
        return e === t;
      }, d, !0), l = m(function (e) {
        return -1 < ee(t, e);
      }, d, !0), p = [function (e, n, a) {
        var o = !s && (a || n !== E) || ((t = n).nodeType ? i(e, n, a) : l(e, n, a));return t = null, o;
      }]; r < o; r++) {
        if (n = N.relative[e[r].type]) p = [m(g(p), n)];else {
          if (n = N.filter[e[r].type].apply(null, e[r].matches), n[R]) {
            for (a = ++r; a < o && !N.relative[e[a].type]; a++) {}return b(1 < r && g(p), 1 < r && h(e.slice(0, r - 1).concat({ value: " " === e[r - 2].type ? "*" : "" })).replace(ie, "$1"), n, r < a && v(e.slice(r, a)), a < o && v(e = e.slice(a)), a < o && h(e));
          }p.push(n);
        }
      }return g(p);
    }function T(e, n) {
      var o = 0 < n.length,
          s = 0 < e.length,
          i = function i(a, d, r, l, p) {
        var c,
            u,
            f,
            h = 0,
            m = "0",
            i = a && [],
            g = [],
            y = E,
            b = a || s && N.find.TAG("*", p),
            v = F += null == y ? 1 : Math.random() || 0.1,
            T = b.length;for (p && (E = d === H || d || p); m !== T && null != (c = b[m]); m++) {
          if (s && c) {
            for (u = 0, d || c.ownerDocument === H || (q(c), r = !O); f = e[u++];) {
              if (f(c, d || H, r)) {
                l.push(c);break;
              }
            }p && (F = v);
          }o && ((c = !f && c) && h--, a && i.push(c));
        }if (h += m, o && m !== h) {
          for (u = 0; f = n[u++];) {
            f(i, g, d, r);
          }if (a) {
            if (0 < h) for (; m--;) {
              i[m] || g[m] || (g[m] = Q.call(l));
            }g = x(g);
          }J.apply(l, g), p && !a && 0 < g.length && 1 < h + n.length && t.uniqueSort(l);
        }return p && (F = v, E = y), i;
      };return o ? a(i) : i;
    }var w,
        C,
        N,
        k,
        i,
        S,
        j,
        D,
        E,
        A,
        L,
        q,
        H,
        P,
        O,
        I,
        M,
        W,
        B,
        R = "sizzle" + 1 * new Date(),
        _ = e.document,
        F = 0,
        U = 0,
        X = n(),
        $ = n(),
        z = n(),
        V = function V(e, t) {
      return e === t && (L = !0), 0;
    },
        Y = {}.hasOwnProperty,
        G = [],
        Q = G.pop,
        K = G.push,
        J = G.push,
        Z = G.slice,
        ee = function ee(e, t) {
      for (var n = 0, a = e.length; n < a; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ae = "(?:\\\\.|[\\w-]|[^\\0-\\xa0])+",
        oe = /[\x20\t\r\n\f]+/g,
        ie = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        se = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        de = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        re = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        le = /:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
        pe = /^(?:\\.|[\w-]|[^\0-\xa0])+$/,
        ce = { ID: /^#((?:\\.|[\w-]|[^\0-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\0-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i },
        ue = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        he = /^[^{]+\{\s*\[native \w/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /[+~]/,
        ye = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        xe = function xe(e, t, n) {
      var a = String.fromCharCode,
          o = "0x" + t - 65536;return o !== o || n ? t : 0 > o ? a(o + 65536) : a(55296 | o >> 10, 56320 | 1023 & o);
    },
        be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ve = function ve(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        Te = function Te() {
      q();
    },
        we = m(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      J.apply(G = Z.call(_.childNodes), _.childNodes), G[_.childNodes.length].nodeType;
    } catch (t) {
      J = { apply: G.length ? function (e, t) {
          K.apply(e, Z.call(t));
        } : function (e, t) {
          for (var n = e.length, a = 0; e[n++] = t[a++];) {}e.length = n - 1;
        } };
    }for (w in C = t.support = {}, i = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, q = t.setDocument = function (e) {
      var t,
          n,
          a = e ? e.ownerDocument || e : _;return a !== H && 9 === a.nodeType && a.documentElement ? (H = a, P = H.documentElement, O = !i(H), _ !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), C.attributes = o(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), C.getElementsByTagName = o(function (e) {
        return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length;
      }), C.getElementsByClassName = he.test(H.getElementsByClassName), C.getById = o(function (e) {
        return P.appendChild(e).id = R, !H.getElementsByName || !H.getElementsByName(R).length;
      }), C.getById ? (N.filter.ID = function (e) {
        var t = e.replace(ye, xe);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, N.find.ID = function (e, t) {
        if ("undefined" !== typeof t.getElementById && O) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (N.filter.ID = function (e) {
        var t = e.replace(ye, xe);return function (e) {
          var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, N.find.ID = function (e, t) {
        if ("undefined" !== typeof t.getElementById && O) {
          var n,
              a,
              o,
              i = t.getElementById(e);if (i) {
            if (n = i.getAttributeNode("id"), n && n.value === e) return [i];for (o = t.getElementsByName(e), a = 0; i = o[a++];) {
              if (n = i.getAttributeNode("id"), n && n.value === e) return [i];
            }
          }return [];
        }
      }), N.find.TAG = C.getElementsByTagName ? function (e, t) {
        return "undefined" === typeof t.getElementsByTagName ? C.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e);
      } : function (e, t) {
        var n,
            a = [],
            o = 0,
            i = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = i[o++];) {
            1 === n.nodeType && a.push(n);
          }return a;
        }return i;
      }, N.find.CLASS = C.getElementsByClassName && function (e, t) {
        if ("undefined" !== typeof t.getElementsByClassName && O) return t.getElementsByClassName(e);
      }, M = [], I = [], (C.qsa = he.test(H.querySelectorAll)) && (o(function (e) {
        P.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || I.push(".#.+[+~]");
      }), o(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = H.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:");
      })), (C.matchesSelector = he.test(W = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (e) {
        C.disconnectedMatch = W.call(e, "*"), W.call(e, "[s!='']:x"), M.push("!=", ":(" + ae + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ("\\[" + ne + "*(" + ae + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]") + ")*)|.*)\\)|)");
      }), I = I.length && new RegExp(I.join("|")), M = M.length && new RegExp(M.join("|")), t = he.test(P.compareDocumentPosition), B = t || he.test(P.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            a = t && t.parentNode;return e === a || !!(a && 1 === a.nodeType && (n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, V = t ? function (e, t) {
        if (e === t) return L = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === _ && B(_, e) ? -1 : t === H || t.ownerDocument === _ && B(_, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return L = !0, 0;var n,
            a = 0,
            o = e.parentNode,
            i = t.parentNode,
            s = [e],
            r = [t];if (!o || !i) return e === H ? -1 : t === H ? 1 : o ? -1 : i ? 1 : A ? ee(A, e) - ee(A, t) : 0;if (o === i) return d(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          r.unshift(n);
        }for (; s[a] === r[a];) {
          a++;
        }return a ? d(s[a], r[a]) : s[a] === _ ? -1 : r[a] === _ ? 1 : 0;
      }, H) : H;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== H && q(e), n = n.replace(re, "='$1']"), C.matchesSelector && O && !z[n + " "] && (!M || !M.test(n)) && (!I || !I.test(n))) try {
        var a = W.call(e, n);if (a || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a;
      } catch (t) {}return 0 < t(n, H, null, [e]).length;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== H && q(e), B(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== H && q(e);var n = N.attrHandle[t.toLowerCase()],
          a = n && Y.call(N.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;return void 0 === a ? C.attributes || !O ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null : a;
    }, t.escape = function (e) {
      return (e + "").replace(be, ve);
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          a = 0,
          o = 0;if (L = !C.detectDuplicates, A = !C.sortStable && e.slice(0), e.sort(V), L) {
        for (; t = e[o++];) {
          t === e[o] && (a = n.push(o));
        }for (; a--;) {
          e.splice(n[a], 1);
        }
      }return A = null, e;
    }, k = t.getText = function (e) {
      var t,
          n = "",
          a = 0,
          o = e.nodeType;if (!o) for (; t = e[a++];) {
        n += k(t);
      } else if (1 === o || 9 === o || 11 === o) {
        if ("string" === typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
          n += k(e);
        }
      } else if (3 === o || 4 === o) return e.nodeValue;return n;
    }, N = t.selectors = { cacheLength: 50, createPseudo: a, match: ce, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(ye, xe).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = X[e + " "];return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && X(e, function (e) {
            return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, n, a) {
          return function (o) {
            var i = t.attr(o, e);return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === a : "!=" === n ? i !== a : "^=" === n ? a && 0 === i.indexOf(a) : "*=" === n ? a && -1 < i.indexOf(a) : "$=" === n ? a && i.slice(-a.length) === a : "~=" === n ? -1 < (" " + i.replace(oe, " ") + " ").indexOf(a) : "|=" === n && (i === a || i.slice(0, a.length + 1) === a + "-"));
          };
        }, CHILD: function CHILD(e, t, n, a, o) {
          var i = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              d = "of-type" === t;return 1 === a && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, r) {
            var l,
                p,
                c,
                u,
                f,
                h,
                m = i === s ? "previousSibling" : "nextSibling",
                g = t.parentNode,
                y = d && t.nodeName.toLowerCase(),
                x = !r && !d,
                b = !1;if (g) {
              if (i) {
                for (; m;) {
                  for (u = t; u = u[m];) {
                    if (d ? u.nodeName.toLowerCase() === y : 1 === u.nodeType) return !1;
                  }h = m = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [s ? g.firstChild : g.lastChild], s && x) {
                for (u = g, c = u[R] || (u[R] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), l = p[e] || [], f = l[0] === F && l[1], b = f && l[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (b = f = 0) || h.pop();) {
                  if (1 === u.nodeType && ++b && u === t) {
                    p[e] = [F, f, b];break;
                  }
                }
              } else if (x && (u = t, c = u[R] || (u[R] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), l = p[e] || [], f = l[0] === F && l[1], b = f), !1 === b) for (; (u = ++f && u && u[m] || (b = f = 0) || h.pop()) && !((d ? u.nodeName.toLowerCase() === y : 1 === u.nodeType) && ++b && (x && (c = u[R] || (u[R] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), p[e] = [F, b]), u === t));) {}return b -= o, b === a || 0 === b % a && 0 <= b / a;
            }
          };
        }, PSEUDO: function PSEUDO(e, n) {
          var o,
              s = N.pseudos[e] || N.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return s[R] ? s(n) : 1 < s.length ? (o = [e, e, "", n], N.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function (e, t) {
            for (var a, o = s(e, n), d = o.length; d--;) {
              a = ee(e, o[d]), e[a] = !(t[a] = o[d]);
            }
          }) : function (e) {
            return s(e, 0, o);
          }) : s;
        } }, pseudos: { not: a(function (e) {
          var t = [],
              n = [],
              o = j(e.replace(ie, "$1"));return o[R] ? a(function (e, t, n, a) {
            for (var s, d = o(e, null, a, []), r = e.length; r--;) {
              (s = d[r]) && (e[r] = !(t[r] = s));
            }
          }) : function (e, a, i) {
            return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop();
          };
        }), has: a(function (e) {
          return function (n) {
            return 0 < t(e, n).length;
          };
        }), contains: a(function (e) {
          return e = e.replace(ye, xe), function (t) {
            return -1 < (t.textContent || t.innerText || k(t)).indexOf(e);
          };
        }), lang: a(function (e) {
          return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(), function (t) {
            var n;do {
              if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === P;
        }, focus: function focus(e) {
          return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: p(!1), disabled: p(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (6 > e.nodeType) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !N.pseudos.empty(e);
        }, header: function header(e) {
          return fe.test(e.nodeName);
        }, input: function input(e) {
          return ue.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: c(function () {
          return [0];
        }), last: c(function (e, t) {
          return [t - 1];
        }), eq: c(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), even: c(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: c(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: c(function (e, t, n) {
          for (var a = 0 > n ? n + t : n; 0 <= --a;) {
            e.push(a);
          }return e;
        }), gt: c(function (e, t, n) {
          for (var a = 0 > n ? n + t : n; ++a < t;) {
            e.push(a);
          }return e;
        }) } }, N.pseudos.nth = N.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      N.pseudos[w] = r(w);
    }for (w in { submit: !0, reset: !0 }) {
      N.pseudos[w] = l(w);
    }return f.prototype = N.filters = N.pseudos, N.setFilters = new f(), S = t.tokenize = function (e, n) {
      var a,
          o,
          i,
          s,
          d,
          r,
          l,
          p = $[e + " "];if (p) return n ? 0 : p.slice(0);for (d = e, r = [], l = N.preFilter; d;) {
        for (s in (!a || (o = se.exec(d))) && (o && (d = d.slice(o[0].length) || d), r.push(i = [])), a = !1, (o = de.exec(d)) && (a = o.shift(), i.push({ value: a, type: o[0].replace(ie, " ") }), d = d.slice(a.length)), N.filter) {
          (o = ce[s].exec(d)) && (!l[s] || (o = l[s](o))) && (a = o.shift(), i.push({ value: a, type: s, matches: o }), d = d.slice(a.length));
        }if (!a) break;
      }return n ? d.length : d ? t.error(e) : $(e, r).slice(0);
    }, j = t.compile = function (e, t) {
      var n,
          a = [],
          o = [],
          i = z[e + " "];if (!i) {
        for (t || (t = S(e)), n = t.length; n--;) {
          i = v(t[n]), i[R] ? a.push(i) : o.push(i);
        }i = z(e, T(o, a)), i.selector = e;
      }return i;
    }, D = t.select = function (e, t, n, a) {
      var o,
          i,
          s,
          d,
          r,
          l = "function" === typeof e && e,
          p = !a && S(e = l.selector || e);if (n = n || [], 1 === p.length) {
        if (i = p[0] = p[0].slice(0), 2 < i.length && "ID" === (s = i[0]).type && 9 === t.nodeType && O && N.relative[i[1].type]) {
          if (t = (N.find.ID(s.matches[0].replace(ye, xe), t) || [])[0], !t) return n;l && (t = t.parentNode), e = e.slice(i.shift().value.length);
        }for (o = ce.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o], !N.relative[d = s.type]);) {
          if ((r = N.find[d]) && (a = r(s.matches[0].replace(ye, xe), ge.test(i[0].type) && u(t.parentNode) || t))) {
            if (i.splice(o, 1), e = a.length && h(i), !e) return J.apply(n, a), n;break;
          }
        }
      }return (l || j(e, p))(a, t, !O, n, !t || ge.test(e) && u(t.parentNode) || t), n;
    }, C.sortStable = R.split("").sort(V).join("") === R, C.detectDuplicates = !!L, q(), C.sortDetached = o(function (e) {
      return 1 & e.compareDocumentPosition(H.createElement("fieldset"));
    }), o(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || s("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), C.attributes && o(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || s("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), o(function (e) {
      return null == e.getAttribute("disabled");
    }) || s(te, function (e, t, n) {
      var a;if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
    }), t;
  }(e);Ce.find = ke, Ce.expr = ke.selectors, Ce.expr[":"] = Ce.expr.pseudos, Ce.uniqueSort = Ce.unique = ke.uniqueSort, Ce.text = ke.getText, Ce.isXMLDoc = ke.isXML, Ce.contains = ke.contains, Ce.escapeSelector = ke.escape;var Se = function Se(e, t, n) {
    for (var a = []; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (void 0 !== n && Ce(e).is(n)) break;a.push(e);
      }
    }return a;
  },
      je = function je(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      De = Ce.expr.match.needsContext,
      Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;Ce.filter = function (e, t, n) {
    var a = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? Ce.find.matchesSelector(a, e) ? [a] : [] : Ce.find.matches(e, Ce.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, Ce.fn.extend({ find: function find(e) {
      var t,
          n,
          a = this.length,
          o = this;if ("string" !== typeof e) return this.pushStack(Ce(e).filter(function () {
        for (t = 0; t < a; t++) {
          if (Ce.contains(o[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < a; t++) {
        Ce.find(e, o[t], n);
      }return 1 < a ? Ce.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(i(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(i(this, e || [], !0));
    }, is: function is(e) {
      return !!i(this, "string" === typeof e && De.test(e) ? Ce(e) : e || [], !1).length;
    } });var Ae,
      Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      qe = Ce.fn.init = function (e, t, n) {
    var a, o;if (!e) return this;if (n = n || Ae, "string" === typeof e) {
      if (a = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Le.exec(e), a && (a[1] || !t)) {
        if (a[1]) {
          if (t = t instanceof Ce ? t[0] : t, Ce.merge(this, Ce.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : de, !0)), Ee.test(a[1]) && Ce.isPlainObject(t)) for (a in t) {
            be(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
          }return this;
        }return o = de.getElementById(a[2]), o && (this[0] = o, this.length = 1), this;
      }return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : be(e) ? void 0 === n.ready ? e(Ce) : n.ready(e) : Ce.makeArray(e, this);
  };qe.prototype = Ce.fn, Ae = Ce(de);var He = /^(?:parents|prev(?:Until|All))/,
      Pe = { children: !0, contents: !0, next: !0, prev: !0 };Ce.fn.extend({ has: function has(e) {
      var t = Ce(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (Ce.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          a = 0,
          o = this.length,
          i = [],
          s = "string" !== typeof e && Ce(e);if (!De.test(e)) for (; a < o; a++) {
        for (n = this[a]; n && n !== t; n = n.parentNode) {
          if (11 > n.nodeType && (s ? -1 < s.index(n) : 1 === n.nodeType && Ce.find.matchesSelector(n, e))) {
            i.push(n);break;
          }
        }
      }return this.pushStack(1 < i.length ? Ce.uniqueSort(i) : i);
    }, index: function index(e) {
      return e ? "string" === typeof e ? ue.call(Ce(e), this[0]) : ue.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(), Ce(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), Ce.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return Se(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return Se(e, "parentNode", n);
    }, next: function next(e) {
      return d(e, "nextSibling");
    }, prev: function prev(e) {
      return d(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return Se(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return Se(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return Se(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return Se(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return je((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return je(e.firstChild);
    }, contents: function contents(e) {
      return s(e, "iframe") ? e.contentDocument : (s(e, "template") && (e = e.content || e), Ce.merge([], e.childNodes));
    } }, function (e, t) {
    Ce.fn[e] = function (n, a) {
      var o = Ce.map(this, t, n);return "Until" !== e.slice(-5) && (a = n), a && "string" === typeof a && (o = Ce.filter(a, o)), 1 < this.length && (!Pe[e] && Ce.uniqueSort(o), He.test(e) && o.reverse()), this.pushStack(o);
    };
  });var Oe = /[^\x20\t\r\n\f]+/g;Ce.Callbacks = function (e) {
    e = "string" === typeof e ? r(e) : Ce.extend({}, e);var t,
        n,
        o,
        i,
        s = [],
        d = [],
        l = -1,
        p = function p() {
      for (i = i || e.once, o = t = !0; d.length; l = -1) {
        for (n = d.shift(); ++l < s.length;) {
          !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (n ? s = [] : s = "");
    },
        c = { add: function add() {
        return s && (n && !t && (l = s.length - 1, d.push(n)), function t(n) {
          Ce.each(n, function (n, o) {
            be(o) ? (!e.unique || !c.has(o)) && s.push(o) : o && o.length && "string" !== a(o) && t(o);
          });
        }(arguments), n && !t && p()), this;
      }, remove: function remove() {
        return Ce.each(arguments, function (e, t) {
          for (var n; -1 < (n = Ce.inArray(t, s, n));) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      }, has: function has(e) {
        return e ? -1 < Ce.inArray(e, s) : 0 < s.length;
      }, empty: function empty() {
        return s && (s = []), this;
      }, disable: function disable() {
        return i = d = [], s = n = "", this;
      }, disabled: function disabled() {
        return !s;
      }, lock: function lock() {
        return i = d = [], n || t || (s = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], d.push(n), !t && p()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!o;
      } };return c;
  }, Ce.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", Ce.Callbacks("memory"), Ce.Callbacks("memory"), 2], ["resolve", "done", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 1, "rejected"]],
          a = "pending",
          o = { state: function state() {
          return a;
        }, always: function always() {
          return s.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return o.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return Ce.Deferred(function (t) {
            Ce.each(n, function (n, a) {
              var o = be(e[a[4]]) && e[a[4]];s[a[1]](function () {
                var e = o && o.apply(this, arguments);e && be(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[a[0] + "With"](this, o ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, a, o) {
          function i(t, n, a, o) {
            return function () {
              var d = this,
                  r = arguments,
                  c = function c() {
                var e, c;if (!(t < s)) {
                  if (e = a.apply(d, r), e === n.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) || "function" === typeof e) && e.then, be(c) ? o ? c.call(e, i(s, n, l, o), i(s, n, p, o)) : (s++, c.call(e, i(s, n, l, o), i(s, n, p, o), i(s, n, l, n.notifyWith))) : (a !== l && (d = void 0, r = [e]), (o || n.resolveWith)(d, r));
                }
              },
                  u = o ? c : function () {
                try {
                  c();
                } catch (o) {
                  Ce.Deferred.exceptionHook && Ce.Deferred.exceptionHook(o, u.stackTrace), t + 1 >= s && (a !== p && (d = void 0, r = [o]), n.rejectWith(d, r));
                }
              };t ? u() : (Ce.Deferred.getStackHook && (u.stackTrace = Ce.Deferred.getStackHook()), e.setTimeout(u));
            };
          }var s = 0;return Ce.Deferred(function (e) {
            n[0][3].add(i(0, e, be(o) ? o : l, e.notifyWith)), n[1][3].add(i(0, e, be(t) ? t : l)), n[2][3].add(i(0, e, be(a) ? a : p));
          }).promise();
        }, promise: function promise(e) {
          return null == e ? o : Ce.extend(e, o);
        } },
          s = {};return Ce.each(n, function (e, t) {
        var i = t[2],
            d = t[5];o[t[1]] = i.add, d && i.add(function () {
          a = d;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), i.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = i.fireWith;
      }), o.promise(s), t && t.call(s, s), s;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          a = Array(n),
          o = le.call(arguments),
          s = Ce.Deferred(),
          i = function i(e) {
        return function (n) {
          a[e] = this, o[e] = 1 < arguments.length ? le.call(arguments) : n, --t || s.resolveWith(a, o);
        };
      };if (1 >= t && (c(e, s.done(i(n)).resolve, s.reject, !t), "pending" === s.state() || be(o[n] && o[n].then))) return s.then();for (; n--;) {
        c(o[n], i(n), s.reject);
      }return s.promise();
    } });var Ie = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;Ce.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && Ie.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, Ce.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var Me = Ce.Deferred();Ce.fn.ready = function (e) {
    return Me.then(e)["catch"](function (e) {
      Ce.readyException(e);
    }), this;
  }, Ce.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? ! --Ce.readyWait : !Ce.isReady) && (Ce.isReady = !0, !0 !== e && 0 < --Ce.readyWait || Me.resolveWith(de, [Ce]));
    } }), Ce.ready.then = Me.then, "complete" !== de.readyState && ("loading" === de.readyState || de.documentElement.doScroll) ? (de.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u)) : e.setTimeout(Ce.ready);var We = function e(t, n, o, s, d, r, l) {
    var p = 0,
        i = t.length,
        c = null == o;if ("object" === a(o)) for (p in d = !0, o) {
      e(t, n, p, o[p], !0, r, l);
    } else if (void 0 !== s && (d = !0, be(s) || (l = !0), c && (l ? (n.call(t, s), n = null) : (c = n, n = function n(e, t, _n) {
      return c.call(Ce(e), _n);
    })), n)) for (; p < i; p++) {
      n(t[p], o, l ? s : s.call(t[p], p, n(t[p], o)));
    }return d ? t : c ? n.call(t) : i ? n(t[0], o) : r;
  },
      Be = /^-ms-/,
      Re = /-([a-z])/g,
      _e = function _e(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };m.uid = 1, m.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, _e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var a,
          o = this.cache(e);if ("string" === typeof t) o[h(t)] = n;else for (a in t) {
        o[h(a)] = t[a];
      }return o;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" === typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 === n ? t : n);
    }, remove: function remove(e, t) {
      var n,
          a = e[this.expando];if (void 0 !== a) {
        if (void 0 !== t) for (Array.isArray(t) ? t = t.map(h) : (t = h(t), t = (t in a) ? [t] : t.match(Oe) || []), n = t.length; n--;) {
          delete a[t[n]];
        }(void 0 === t || Ce.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !Ce.isEmptyObject(t);
    } };var Fe = new m(),
      Ue = new m(),
      Xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      $e = /[A-Z]/g;Ce.extend({ hasData: function hasData(e) {
      return Ue.hasData(e) || Fe.hasData(e);
    }, data: function data(e, t, n) {
      return Ue.access(e, t, n);
    }, removeData: function removeData(e, t) {
      Ue.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Fe.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Fe.remove(e, t);
    } }), Ce.fn.extend({ data: function data(e, t) {
      var n,
          a,
          o,
          i = this[0],
          s = i && i.attributes;if (void 0 === e) {
        if (this.length && (o = Ue.get(i), 1 === i.nodeType && !Fe.get(i, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && (a = s[n].name, 0 === a.indexOf("data-") && (a = h(a.slice(5)), y(i, a, o[a])));
          }Fe.set(i, "hasDataAttrs", !0);
        }return o;
      }return "object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) ? this.each(function () {
        Ue.set(this, e);
      }) : We(this, function (t) {
        var n;return i && void 0 === t ? (n = Ue.get(i, e), void 0 !== n) ? n : (n = y(i, e), void 0 === n ? void 0 : n) : void this.each(function () {
          Ue.set(this, e, t);
        });
      }, null, t, 1 < arguments.length, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        Ue.remove(this, e);
      });
    } }), Ce.extend({ queue: function queue(e, t, n) {
      var a;if (e) return t = (t || "fx") + "queue", a = Fe.get(e, t), n && (!a || Array.isArray(n) ? a = Fe.access(e, t, Ce.makeArray(n)) : a.push(n)), a || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = Ce.queue(e, t),
          a = n.length,
          o = n.shift(),
          i = Ce._queueHooks(e, t);"inprogress" === o && (o = n.shift(), a--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
        Ce.dequeue(e, t);
      }, i)), !a && i && i.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Fe.get(e, n) || Fe.access(e, n, { empty: Ce.Callbacks("once memory").add(function () {
          Fe.remove(e, [t + "queue", n]);
        }) });
    } }), Ce.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" !== typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ce.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = Ce.queue(this, e, t);Ce._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ce.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        Ce.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          a = 1,
          o = Ce.Deferred(),
          s = this,
          d = this.length,
          i = function i() {
        --a || o.resolveWith(s, [s]);
      };for ("string" !== typeof e && (t = e, e = void 0), e = e || "fx"; d--;) {
        n = Fe.get(s[d], e + "queueHooks"), n && n.empty && (a++, n.empty.add(i));
      }return i(), o.promise(t);
    } });var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ve = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
      Ye = ["Top", "Right", "Bottom", "Left"],
      Ge = function Ge(e, t) {
    return e = t || e, "none" === e.style.display || "" === e.style.display && Ce.contains(e.ownerDocument, e) && "none" === Ce.css(e, "display");
  },
      Qe = function Qe(e, t, n, a) {
    var o,
        i,
        s = {};for (i in t) {
      s[i] = e.style[i], e.style[i] = t[i];
    }for (i in o = n.apply(e, a || []), t) {
      e.style[i] = s[i];
    }return o;
  },
      Ke = {};Ce.fn.extend({ show: function show() {
      return v(this, !0);
    }, hide: function hide() {
      return v(this);
    }, toggle: function toggle(e) {
      return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Ge(this) ? Ce(this).show() : Ce(this).hide();
      });
    } });var Je = /^(?:checkbox|radio)$/i,
      Ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      et = /^$|^module$|\/(?:java|ecma)script/i,
      tt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };tt.optgroup = tt.option, tt.tbody = tt.tfoot = tt.colgroup = tt.caption = tt.thead, tt.th = tt.td;var nt = /<|&#?\w+;/;(function () {
    var e = de.createDocumentFragment(),
        t = e.appendChild(de.createElement("div")),
        n = de.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), xe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", xe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
  })();var at = de.documentElement,
      ot = /^key/,
      it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      st = /^([^.]*)(?:\.(.+)|)/;Ce.event = { global: {}, add: function add(n, e, a, o, i) {
      var s,
          d,
          r,
          l,
          p,
          t,
          c,
          u,
          f,
          h,
          m,
          g = Fe.get(n);if (g) for (a.handler && (s = a, a = s.handler, i = s.selector), i && Ce.find.matchesSelector(at, i), a.guid || (a.guid = Ce.guid++), (l = g.events) || (l = g.events = {}), (d = g.handle) || (d = g.handle = function (t) {
        return "undefined" !== typeof Ce && Ce.event.triggered !== t.type ? Ce.event.dispatch.apply(n, arguments) : void 0;
      }), e = (e || "").match(Oe) || [""], p = e.length; p--;) {
        (r = st.exec(e[p]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), !!f) && (c = Ce.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = Ce.event.special[f] || {}, t = Ce.extend({ type: f, origType: m, data: o, handler: a, guid: a.guid, selector: i, needsContext: i && Ce.expr.match.needsContext.test(i), namespace: h.join(".") }, s), (u = l[f]) || (u = l[f] = [], u.delegateCount = 0, (!c.setup || !1 === c.setup.call(n, o, h, d)) && n.addEventListener && n.addEventListener(f, d)), c.add && (c.add.call(n, t), !t.handler.guid && (t.handler.guid = a.guid)), i ? u.splice(u.delegateCount++, 0, t) : u.push(t), Ce.event.global[f] = !0);
      }
    }, remove: function remove(e, n, a, o, i) {
      var s,
          d,
          r,
          l,
          p,
          t,
          c,
          u,
          f,
          h,
          m,
          g = Fe.hasData(e) && Fe.get(e);if (g && (l = g.events)) {
        for (n = (n || "").match(Oe) || [""], p = n.length; p--;) {
          if (r = st.exec(n[p]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), !f) {
            for (f in l) {
              Ce.event.remove(e, f + n[p], a, o, !0);
            }continue;
          }for (c = Ce.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, u = l[f] || [], r = r[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), d = s = u.length; s--;) {
            t = u[s], (i || m === t.origType) && (!a || a.guid === t.guid) && (!r || r.test(t.namespace)) && (!o || o === t.selector || "**" === o && t.selector) && (u.splice(s, 1), t.selector && u.delegateCount--, c.remove && c.remove.call(e, t));
          }d && !u.length && ((!c.teardown || !1 === c.teardown.call(e, h, g.handle)) && Ce.removeEvent(e, f, g.handle), delete l[f]);
        }Ce.isEmptyObject(l) && Fe.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          a,
          o,
          i,
          s,
          d = Ce.event.fix(e),
          r = Array(arguments.length),
          l = (Fe.get(this, "events") || {})[d.type] || [],
          p = Ce.event.special[d.type] || {};for (r[0] = d, t = 1; t < arguments.length; t++) {
        r[t] = arguments[t];
      }if (d.delegateTarget = this, !(p.preDispatch && !1 === p.preDispatch.call(this, d))) {
        for (s = Ce.event.handlers.call(this, d, l), t = 0; (o = s[t++]) && !d.isPropagationStopped();) {
          for (d.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !d.isImmediatePropagationStopped();) {
            (!d.rnamespace || d.rnamespace.test(i.namespace)) && (d.handleObj = i, d.data = i.data, a = ((Ce.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, r), void 0 !== a && !1 === (d.result = a) && (d.preventDefault(), d.stopPropagation()));
          }
        }return p.postDispatch && p.postDispatch.call(this, d), d.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          a,
          o,
          i,
          s,
          d = [],
          r = t.delegateCount,
          l = e.target;if (r && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (i = [], s = {}, n = 0; n < r; n++) {
            a = t[n], o = a.selector + " ", void 0 === s[o] && (s[o] = a.needsContext ? -1 < Ce(o, this).index(l) : Ce.find(o, this, null, [l]).length), s[o] && i.push(a);
          }i.length && d.push({ elem: l, handlers: i });
        }
      }return l = this, r < t.length && d.push({ elem: l, handlers: t.slice(r) }), d;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(Ce.Event.prototype, e, { enumerable: !0, configurable: !0, get: be(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[Ce.expando] ? e : new Ce.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== S() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === S() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && s(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return s(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, Ce.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, Ce.Event = function (e, t) {
    return this instanceof Ce.Event ? void (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? N : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ce.expando] = !0) : new Ce.Event(e, t);
  }, Ce.Event.prototype = { constructor: Ce.Event, isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k, isSimulated: !1, preventDefault: function preventDefault() {
      var t = this.originalEvent;this.isDefaultPrevented = N, t && !this.isSimulated && t.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var t = this.originalEvent;this.isPropagationStopped = N, t && !this.isSimulated && t.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var t = this.originalEvent;this.isImmediatePropagationStopped = N, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    } }, Ce.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && ot.test(e.type) ? null == e.charCode ? e.keyCode : e.charCode : !e.which && void 0 !== t && it.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, Ce.event.addProp), Ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    Ce.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            a = this,
            o = e.relatedTarget,
            i = e.handleObj;return o && (o === a || Ce.contains(a, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
      } };
  }), Ce.fn.extend({ on: function on(e, t, n, a) {
      return j(this, e, t, n, a);
    }, one: function one(e, t, n, a) {
      return j(this, e, t, n, a, 1);
    }, off: function off(e, t, n) {
      var a, o;if (e && e.preventDefault && e.handleObj) return a = e.handleObj, Ce(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;if ("object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e))) {
        for (o in e) {
          this.off(o, t, e[o]);
        }return this;
      }return (!1 === t || "function" === typeof t) && (n = t, t = void 0), !1 === n && (n = k), this.each(function () {
        Ce.event.remove(this, e, n, t);
      });
    } });var dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      rt = /<script|<style|<link/i,
      lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;Ce.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(dt, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var a,
          o,
          i,
          s,
          d = e.cloneNode(!0),
          r = Ce.contains(e.ownerDocument, e);if (!xe.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !Ce.isXMLDoc(e)) for (s = T(d), i = T(e), (a = 0, o = i.length); a < o; a++) {
        q(i[a], s[a]);
      }if (t) if (n) for (i = i || T(e), s = s || T(d), (a = 0, o = i.length); a < o; a++) {
        L(i[a], s[a]);
      } else L(e, d);return s = T(d, "script"), 0 < s.length && w(s, !r && T(e, "script")), d;
    }, cleanData: function cleanData(e) {
      for (var t, n, a, o = Ce.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if (_e(n)) {
          if (t = n[Fe.expando]) {
            if (t.events) for (a in t.events) {
              o[a] ? Ce.event.remove(n, a) : Ce.removeEvent(n, a, t.handle);
            }n[Fe.expando] = void 0;
          }n[Ue.expando] && (n[Ue.expando] = void 0);
        }
      }
    } }), Ce.fn.extend({ detach: function detach(e) {
      return P(this, e, !0);
    }, remove: function remove(e) {
      return P(this, e);
    }, text: function text(e) {
      return We(this, function (e) {
        return void 0 === e ? Ce.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return H(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = D(this, e);t.appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return H(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = D(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return H(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return H(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (Ce.cleanData(T(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return Ce.clone(this, e, t);
      });
    }, html: function html(e) {
      return We(this, function (e) {
        var t = this[0] || {},
            n = 0,
            a = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" === typeof e && !rt.test(e) && !tt[(Ze.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = Ce.htmlPrefilter(e);try {
            for (; n < a; n++) {
              t = this[n] || {}, 1 === t.nodeType && (Ce.cleanData(T(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (t) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return H(this, arguments, function (t) {
        var n = this.parentNode;0 > Ce.inArray(this, e) && (Ce.cleanData(T(this)), n && n.replaceChild(t, this));
      }, e);
    } }), Ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    Ce.fn[e] = function (e) {
      for (var n, a = [], o = Ce(e), s = o.length - 1, d = 0; d <= s; d++) {
        n = d === s ? this : this.clone(!0), Ce(o[d])[t](n), ce.apply(a, n.get());
      }return this.pushStack(a);
    };
  });var ct = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
      ut = function ut(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      ft = new RegExp(Ye.join("|"), "i");(function () {
    function t() {
      if (l) {
        r.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(r).appendChild(l);var t = e.getComputedStyle(l);a = "1%" !== t.top, d = 12 === n(t.marginLeft), l.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", at.removeChild(r), l = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var a,
        o,
        i,
        s,
        d,
        r = de.createElement("div"),
        l = de.createElement("div");l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", xe.clearCloneStyle = "content-box" === l.style.backgroundClip, Ce.extend(xe, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), a;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), d;
      }, scrollboxSize: function scrollboxSize() {
        return t(), i;
      } }));
  })();var ht = /^(none|table(?!-c[ea]).+)/,
      mt = /^--/,
      gt = { position: "absolute", visibility: "hidden", display: "block" },
      yt = { letterSpacing: "0", fontWeight: "400" },
      xt = ["Webkit", "Moz", "ms"],
      bt = de.createElement("div").style;Ce.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = O(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, a) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            i,
            s,
            d = h(t),
            r = mt.test(t),
            l = e.style;if (r || (t = W(d)), s = Ce.cssHooks[t] || Ce.cssHooks[d], void 0 !== n) {
          if (i = "undefined" === typeof n ? "undefined" : babelHelpers["typeof"](n), "string" === i && (o = Ve.exec(n)) && o[1] && (n = x(e, t, o), i = "number"), null == n || n !== n) return;"number" === i && (n += o && o[3] || (Ce.cssNumber[d] ? "" : "px")), xe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, a)) || (r ? l.setProperty(t, n) : l[t] = n);
        } else return s && "get" in s && void 0 !== (o = s.get(e, !1, a)) ? o : l[t];
      }
    }, css: function css(e, t, n, a) {
      var o,
          i,
          s,
          d = h(t),
          r = mt.test(t);return r || (t = W(d)), s = Ce.cssHooks[t] || Ce.cssHooks[d], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = O(e, t, a)), "normal" === o && t in yt && (o = yt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o;
    } }), Ce.each(["height", "width"], function (e, t) {
    Ce.cssHooks[t] = { get: function get(e, n, a) {
        if (n) return !ht.test(Ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? _(e, t, a) : Qe(e, gt, function () {
          return _(e, t, a);
        });
      }, set: function set(e, n, a) {
        var o,
            i = ut(e),
            s = "border-box" === Ce.css(e, "boxSizing", !1, i),
            d = a && R(e, t, a, s, i);return s && xe.scrollboxSize() === i.position && (d -= oe(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - R(e, t, "border", !1, i) - 0.5)), d && (o = Ve.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = Ce.css(e, t)), B(e, n, d);
      } };
  }), Ce.cssHooks.marginLeft = I(xe.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), Ce.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    Ce.cssHooks[e + t] = { expand: function expand(n) {
        for (var a = 0, o = {}, i = "string" === typeof n ? n.split(" ") : [n]; 4 > a; a++) {
          o[e + Ye[a] + t] = i[a] || i[a - 2] || i[0];
        }return o;
      } }, "margin" !== e && (Ce.cssHooks[e + t].set = B);
  }), Ce.fn.extend({ css: function css(e, t) {
      return We(this, function (e, t, n) {
        var a,
            o,
            s = {},
            d = 0;if (Array.isArray(t)) {
          for (a = ut(e), o = t.length; d < o; d++) {
            s[t[d]] = Ce.css(e, t[d], !1, a);
          }return s;
        }return void 0 === n ? Ce.css(e, t) : Ce.style(e, t, n);
      }, e, t, 1 < arguments.length);
    } }), Ce.Tween = F, F.prototype = { constructor: F, init: function init(e, t, n, a, o, i) {
      this.elem = e, this.prop = n, this.easing = o || Ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = i || (Ce.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = F.propHooks[this.prop];return e && e.get ? e.get(this) : F.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = F.propHooks[this.prop];return this.pos = this.options.duration ? t = Ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this;
    } }, F.prototype.init.prototype = F.prototype, F.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
      }, set: function set(e) {
        Ce.fx.step[e.prop] ? Ce.fx.step[e.prop](e) : 1 === e.elem.nodeType && (null != e.elem.style[Ce.cssProps[e.prop]] || Ce.cssHooks[e.prop]) ? Ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, F.propHooks.scrollTop = F.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, Ce.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, Ce.fx = F.prototype.init, Ce.fx.step = {};var vt,
      Tt,
      wt = /^(?:toggle|show|hide)$/,
      Ct = /queueHooks$/;Ce.Animation = Ce.extend(Y, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return x(n.elem, e, Ve.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      be(e) ? (t = e, e = ["*"]) : e = e.match(Oe);for (var n, a = 0, o = e.length; a < o; a++) {
        n = e[a], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var a,
          o,
          i,
          s,
          d,
          r,
          l,
          p,
          c = this,
          u = {},
          f = e.style,
          h = e.nodeType && Ge(e),
          m = Fe.get(e, "fxshow");for (a in n.queue || (s = Ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, d = s.empty.fire, s.empty.fire = function () {
        s.unqueued || d();
      }), s.unqueued++, c.always(function () {
        c.always(function () {
          s.unqueued--, Ce.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (o = t[a], wt.test(o)) {
          if (delete t[a], i = i || "toggle" === o, o === (h ? "hide" : "show")) if ("show" === o && m && void 0 !== m[a]) h = !0;else continue;u[a] = m && m[a] || Ce.style(e, a);
        }
      }if (r = !Ce.isEmptyObject(t), r || !Ce.isEmptyObject(u)) for (a in ("width" in t || "height" in t) && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = m && m.display, null == l && (l = Fe.get(e, "display")), p = Ce.css(e, "display"), "none" === p && (l ? p = l : (v([e], !0), l = e.style.display || l, p = Ce.css(e, "display"), v([e]))), ("inline" === p || "inline-block" === p && null != l) && "none" === Ce.css(e, "float") && (!r && (c.done(function () {
        f.display = l;
      }), null == l && (p = f.display, l = "none" === p ? "" : p)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function () {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
      })), r = !1, u) {
        r || (m ? "hidden" in m && (h = m.hidden) : m = Fe.access(e, "fxshow", { display: l }), i && (m.hidden = !h), h && v([e], !0), c.done(function () {
          for (a in h || v([e]), Fe.remove(e, "fxshow"), u) {
            Ce.style(e, a, u[a]);
          }
        })), r = z(h ? m[a] : 0, a, c), a in m || (m[a] = r.start, h && (r.end = r.start, r.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? Y.prefilters.unshift(e) : Y.prefilters.push(e);
    } }), Ce.speed = function (e, t, n) {
    var a = e && "object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) ? Ce.extend({}, e) : { complete: n || !n && t || be(e) && e, duration: e, easing: n && t || t && !be(t) && t };return Ce.fx.off ? a.duration = 0 : "number" !== typeof a.duration && (a.duration in Ce.fx.speeds ? a.duration = Ce.fx.speeds[a.duration] : a.duration = Ce.fx.speeds._default), (null == a.queue || !0 === a.queue) && (a.queue = "fx"), a.old = a.complete, a.complete = function () {
      be(a.old) && a.old.call(this), a.queue && Ce.dequeue(this, a.queue);
    }, a;
  }, Ce.fn.extend({ fadeTo: function fadeTo(e, t, n, a) {
      return this.filter(Ge).css("opacity", 0).show().end().animate({ opacity: t }, e, n, a);
    }, animate: function animate(e, t, n, a) {
      var o = Ce.isEmptyObject(e),
          i = Ce.speed(t, n, a),
          s = function s() {
        var t = Y(this, Ce.extend({}, e), i);(o || Fe.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
    }, stop: function stop(e, t, n) {
      var a = function a(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" !== typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            i = Ce.timers,
            s = Fe.get(this);if (o) s[o] && s[o].stop && a(s[o]);else for (o in s) {
          s[o] && s[o].stop && Ct.test(o) && a(s[o]);
        }for (o = i.length; o--;) {
          i[o].elem === this && (null == e || i[o].queue === e) && (i[o].anim.stop(n), t = !1, i.splice(o, 1));
        }(t || !n) && Ce.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Fe.get(this),
            a = n[e + "queue"],
            o = n[e + "queueHooks"],
            i = Ce.timers,
            s = a ? a.length : 0;for (n.finish = !0, Ce.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) {
          i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
        }for (t = 0; t < s; t++) {
          a[t] && a[t].finish && a[t].finish.call(this);
        }delete n.finish;
      });
    } }), Ce.each(["toggle", "show", "hide"], function (e, t) {
    var n = Ce.fn[t];Ce.fn[t] = function (e, a, o) {
      return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, a, o);
    };
  }), Ce.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    Ce.fn[e] = function (e, n, a) {
      return this.animate(t, e, n, a);
    };
  }), Ce.timers = [], Ce.fx.tick = function () {
    var e,
        t = 0,
        n = Ce.timers;for (vt = Date.now(); t < n.length; t++) {
      e = n[t], e() || n[t] !== e || n.splice(t--, 1);
    }n.length || Ce.fx.stop(), vt = void 0;
  }, Ce.fx.timer = function (e) {
    Ce.timers.push(e), Ce.fx.start();
  }, Ce.fx.interval = 13, Ce.fx.start = function () {
    Tt || (Tt = !0, U());
  }, Ce.fx.stop = function () {
    Tt = null;
  }, Ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, Ce.fn.delay = function (t, n) {
    return t = Ce.fx ? Ce.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, a) {
      var o = e.setTimeout(n, t);a.stop = function () {
        e.clearTimeout(o);
      };
    });
  }, function () {
    var e = de.createElement("input"),
        t = de.createElement("select"),
        n = t.appendChild(de.createElement("option"));e.type = "checkbox", xe.checkOn = "" !== e.value, xe.optSelected = n.selected, e = de.createElement("input"), e.value = "t", e.type = "radio", xe.radioValue = "t" === e.value;
  }();var Nt,
      kt = Ce.expr.attrHandle;Ce.fn.extend({ attr: function attr(e, t) {
      return We(this, Ce.attr, e, t, 1 < arguments.length);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        Ce.removeAttr(this, e);
      });
    } }), Ce.extend({ attr: function attr(e, t, n) {
      var a,
          o,
          i = e.nodeType;if (3 !== i && 8 !== i && 2 !== i) return "undefined" === typeof e.getAttribute ? Ce.prop(e, t, n) : (1 === i && Ce.isXMLDoc(e) || (o = Ce.attrHooks[t.toLowerCase()] || (Ce.expr.match.bool.test(t) ? Nt : void 0)), void 0 !== n) ? null === n ? void Ce.removeAttr(e, t) : o && "set" in o && void 0 !== (a = o.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (a = o.get(e, t)) ? a : (a = Ce.find.attr(e, t), null == a ? void 0 : a);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!xe.radioValue && "radio" === t && s(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          a = 0,
          o = t && t.match(Oe);if (o && 1 === e.nodeType) for (; n = o[a++];) {
        e.removeAttribute(n);
      }
    } }), Nt = { set: function set(e, t, n) {
      return !1 === t ? Ce.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, Ce.each(Ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = kt[t] || Ce.find.attr;kt[t] = function (e, t, a) {
      var o,
          i,
          s = t.toLowerCase();return a || (i = kt[s], kt[s] = o, o = null == n(e, t, a) ? null : s, kt[s] = i), o;
    };
  });var St = /^(?:input|select|textarea|button)$/i,
      jt = /^(?:a|area)$/i;Ce.fn.extend({ prop: function prop(e, t) {
      return We(this, Ce.prop, e, t, 1 < arguments.length);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[Ce.propFix[e] || e];
      });
    } }), Ce.extend({ prop: function prop(e, t, n) {
      var a,
          o,
          i = e.nodeType;if (3 !== i && 8 !== i && 2 !== i) return 1 === i && Ce.isXMLDoc(e) || (t = Ce.propFix[t] || t, o = Ce.propHooks[t]), void 0 === n ? o && "get" in o && null !== (a = o.get(e, t)) ? a : e[t] : o && "set" in o && void 0 !== (a = o.set(e, n, t)) ? a : e[t] = n;
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = Ce.find.attr(e, "tabindex");return t ? parseInt(t, 10) : St.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), xe.optSelected || (Ce.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), Ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    Ce.propFix[this.toLowerCase()] = this;
  }), Ce.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          a,
          o,
          s,
          d,
          r,
          l = 0;if (be(e)) return this.each(function (t) {
        Ce(this).addClass(e.call(this, t, Q(this)));
      });if (t = K(e), t.length) for (; n = this[l++];) {
        if (o = Q(n), a = 1 === n.nodeType && " " + G(o) + " ", a) {
          for (d = 0; s = t[d++];) {
            0 > a.indexOf(" " + s + " ") && (a += s + " ");
          }r = G(a), o !== r && n.setAttribute("class", r);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          a,
          o,
          s,
          d,
          r,
          l = 0;if (be(e)) return this.each(function (t) {
        Ce(this).removeClass(e.call(this, t, Q(this)));
      });if (!arguments.length) return this.attr("class", "");if (t = K(e), t.length) for (; n = this[l++];) {
        if (o = Q(n), a = 1 === n.nodeType && " " + G(o) + " ", a) {
          for (d = 0; s = t[d++];) {
            for (; -1 < a.indexOf(" " + s + " ");) {
              a = a.replace(" " + s + " ", " ");
            }
          }r = G(a), o !== r && n.setAttribute("class", r);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = "undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e),
          a = "string" === n || Array.isArray(e);return "boolean" === typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : be(e) ? this.each(function (n) {
        Ce(this).toggleClass(e.call(this, n, Q(this), t), t);
      }) : this.each(function () {
        var t, o, i, s;if (a) for (o = 0, i = Ce(this), s = K(e); t = s[o++];) {
          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        } else (void 0 === e || "boolean" === n) && (t = Q(this), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          a = 0;for (t = " " + e + " "; n = this[a++];) {
        if (1 === n.nodeType && -1 < (" " + G(Q(n)) + " ").indexOf(t)) return !0;
      }return !1;
    } });var Dt = /\r/g;Ce.fn.extend({ val: function val(e) {
      var t,
          n,
          a,
          o = this[0];return arguments.length ? (a = be(e), this.each(function (n) {
        var o;1 !== this.nodeType || (o = a ? e.call(this, n, Ce(this).val()) : e, null == o ? o = "" : "number" === typeof o ? o += "" : Array.isArray(o) && (o = Ce.map(o, function (e) {
          return null == e ? "" : e + "";
        })), t = Ce.valHooks[this.type] || Ce.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || void 0 === t.set(this, o, "value")) && (this.value = o));
      })) : o ? (t = Ce.valHooks[o.type] || Ce.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value"))) ? n : (n = o.value, "string" === typeof n ? n.replace(Dt, "") : null == n ? "" : n) : void 0;
    } }), Ce.extend({ valHooks: { option: { get: function get(e) {
          var t = Ce.find.attr(e, "value");return null == t ? G(Ce.text(e)) : t;
        } }, select: { get: function get(e) {
          var t,
              n,
              a,
              o = e.options,
              i = e.selectedIndex,
              d = "select-one" === e.type,
              r = d ? null : [],
              l = d ? i + 1 : o.length;for (a = 0 > i ? l : d ? i : 0; a < l; a++) {
            if (n = o[a], (n.selected || a === i) && !n.disabled && (!n.parentNode.disabled || !s(n.parentNode, "optgroup"))) {
              if (t = Ce(n).val(), d) return t;r.push(t);
            }
          }return r;
        }, set: function set(e, t) {
          for (var n, a, o = e.options, s = Ce.makeArray(t), d = o.length; d--;) {
            a = o[d], (a.selected = -1 < Ce.inArray(Ce.valHooks.option.get(a), s)) && (n = !0);
          }return n || (e.selectedIndex = -1), s;
        } } } }), Ce.each(["radio", "checkbox"], function () {
    Ce.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < Ce.inArray(Ce(e).val(), t);
      } }, xe.checkOn || (Ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), xe.focusin = "onfocusin" in e;var Et = /^(?:focusinfocus|focusoutblur)$/,
      At = function At(t) {
    t.stopPropagation();
  };Ce.extend(Ce.event, { trigger: function trigger(t, n, a, o) {
      var s,
          i,
          d,
          r,
          l,
          p,
          c,
          u,
          f = [a || de],
          h = me.call(t, "type") ? t.type : t,
          m = me.call(t, "namespace") ? t.namespace.split(".") : [];if ((i = u = d = a = a || de, 3 !== a.nodeType && 8 !== a.nodeType) && !Et.test(h + Ce.event.triggered) && (-1 < h.indexOf(".") && (m = h.split("."), h = m.shift(), m.sort()), l = 0 > h.indexOf(":") && "on" + h, t = t[Ce.expando] ? t : new Ce.Event(h, "object" === ("undefined" === typeof t ? "undefined" : babelHelpers["typeof"](t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : Ce.makeArray(n, [t]), c = Ce.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(a, n))) {
        if (!o && !c.noBubble && !ve(a)) {
          for (r = c.delegateType || h, Et.test(r + h) || (i = i.parentNode); i; i = i.parentNode) {
            f.push(i), d = i;
          }d === (a.ownerDocument || de) && f.push(d.defaultView || d.parentWindow || e);
        }for (s = 0; (i = f[s++]) && !t.isPropagationStopped();) {
          u = i, t.type = 1 < s ? r : c.bindType || h, p = (Fe.get(i, "events") || {})[t.type] && Fe.get(i, "handle"), p && p.apply(i, n), p = l && i[l], p && p.apply && _e(i) && (t.result = p.apply(i, n), !1 === t.result && t.preventDefault());
        }return t.type = h, o || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), n) || !_e(a) || !l || !be(a[h]) || ve(a) || (d = a[l], d && (a[l] = null), Ce.event.triggered = h, t.isPropagationStopped() && u.addEventListener(h, At), a[h](), t.isPropagationStopped() && u.removeEventListener(h, At), Ce.event.triggered = void 0, d && (a[l] = d)), t.result;
      }
    }, simulate: function simulate(t, n, a) {
      var o = Ce.extend(new Ce.Event(), a, { type: t, isSimulated: !0 });Ce.event.trigger(o, null, n);
    } }), Ce.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        Ce.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return Ce.event.trigger(e, t, n, !0);
    } }), xe.focusin || Ce.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      Ce.event.simulate(t, e.target, Ce.event.fix(e));
    };Ce.event.special[t] = { setup: function setup() {
        var a = this.ownerDocument || this,
            o = Fe.access(a, t);o || a.addEventListener(e, n, !0), Fe.access(a, t, (o || 0) + 1);
      }, teardown: function teardown() {
        var a = this.ownerDocument || this,
            o = Fe.access(a, t) - 1;o ? Fe.access(a, t, o) : (a.removeEventListener(e, n, !0), Fe.remove(a, t));
      } };
  });var Lt = e.location,
      qt = Date.now(),
      Ht = /\?/;Ce.parseXML = function (t) {
    var n;if (!t || "string" !== typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      n = void 0;
    }return (!n || n.getElementsByTagName("parsererror").length) && Ce.error("Invalid XML: " + t), n;
  };var Pt = /\[\]$/,
      Ot = /\r?\n/g,
      It = /^(?:submit|button|image|reset|file)$/i,
      Mt = /^(?:input|select|textarea|keygen)/i;Ce.param = function (e, t) {
    var n,
        a = [],
        o = function o(e, t) {
      var n = be(t) ? t() : t;a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !Ce.isPlainObject(e)) Ce.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      J(n, e[n], t, o);
    }return a.join("&");
  }, Ce.fn.extend({ serialize: function serialize() {
      return Ce.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = Ce.prop(this, "elements");return e ? Ce.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !Ce(this).is(":disabled") && Mt.test(this.nodeName) && !It.test(e) && (this.checked || !Je.test(e));
      }).map(function (e, t) {
        var n = Ce(this).val();return null == n ? null : Array.isArray(n) ? Ce.map(n, function (e) {
          return { name: t.name, value: e.replace(Ot, "\r\n") };
        }) : { name: t.name, value: n.replace(Ot, "\r\n") };
      }).get();
    } });var Wt = /%20/g,
      Bt = /#.*$/,
      Rt = /([?&])_=[^&]*/,
      _t = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ut = /^(?:GET|HEAD)$/,
      Xt = /^\/\//,
      $t = {},
      zt = {},
      Vt = "*/".concat("*"),
      Yt = de.createElement("a");Yt.href = Lt.href, Ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Lt.href, type: "GET", isLocal: Ft.test(Lt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Vt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": Ce.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? te(te(e, Ce.ajaxSettings), t) : te(Ce.ajaxSettings, e);
    }, ajaxPrefilter: Z($t), ajaxTransport: Z(zt), ajax: function ajax(t, n) {
      function a(t, n, a, i) {
        var l,
            c,
            h,
            v,
            T,
            w = n;u || (u = !0, p && e.clearTimeout(p), o = void 0, r = i || "", C.readyState = 0 < t ? 4 : 0, l = 200 <= t && 300 > t || 304 === t, a && (v = ne(m, C, a)), v = ae(m, v, C, l), l ? (m.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (Ce.lastModified[d] = T), T = C.getResponseHeader("etag"), T && (Ce.etag[d] = T)), 204 === t || "HEAD" === m.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = v.state, c = v.data, h = v.error, l = !h)) : (h = w, (t || !w) && (w = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || w) + "", l ? y.resolveWith(s, [c, w, C]) : y.rejectWith(s, [C, w, h]), C.statusCode(b), b = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, m, l ? c : h]), x.fireWith(s, [C, w]), f && (g.trigger("ajaxComplete", [C, m]), ! --Ce.active && Ce.event.trigger("ajaxStop")));
      }"object" === ("undefined" === typeof t ? "undefined" : babelHelpers["typeof"](t)) && (n = t, t = void 0), n = n || {};var o,
          d,
          r,
          l,
          p,
          c,
          u,
          f,
          h,
          i,
          m = Ce.ajaxSetup({}, n),
          s = m.context || m,
          g = m.context && (s.nodeType || s.jquery) ? Ce(s) : Ce.event,
          y = Ce.Deferred(),
          x = Ce.Callbacks("once memory"),
          b = m.statusCode || {},
          v = {},
          T = {},
          w = "canceled",
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (u) {
            if (!l) for (l = {}; t = _t.exec(r);) {
              l[t[1].toLowerCase()] = t[2];
            }t = l[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? r : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, v[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == u && (m.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          if (e) if (u) C.always(e[C.status]);else for (var t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || w;return o && o.abort(t), a(0, t), this;
        } };if (y.promise(C), m.url = ((t || m.url || Lt.href) + "").replace(Xt, Lt.protocol + "//"), m.type = n.method || n.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(Oe) || [""], null == m.crossDomain) {
        c = de.createElement("a");try {
          c.href = m.url, c.href = c.href, m.crossDomain = Yt.protocol + "//" + Yt.host !== c.protocol + "//" + c.host;
        } catch (t) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" !== typeof m.data && (m.data = Ce.param(m.data, m.traditional)), ee($t, m, n, C), u) return C;for (h in f = Ce.event && m.global, f && 0 === Ce.active++ && Ce.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ut.test(m.type), d = m.url.replace(Bt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Wt, "+")) : (i = m.url.slice(d.length), m.data && (m.processData || "string" === typeof m.data) && (d += (Ht.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Rt, "$1"), i = (Ht.test(d) ? "&" : "?") + "_=" + qt++ + i), m.url = d + i), m.ifModified && (Ce.lastModified[d] && C.setRequestHeader("If-Modified-Since", Ce.lastModified[d]), Ce.etag[d] && C.setRequestHeader("If-None-Match", Ce.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || n.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" === m.dataTypes[0] ? "" : ", " + Vt + "; q=0.01") : m.accepts["*"]), m.headers) {
        C.setRequestHeader(h, m.headers[h]);
      }if (m.beforeSend && (!1 === m.beforeSend.call(s, C, m) || u)) return C.abort();if (w = "abort", x.add(m.complete), C.done(m.success), C.fail(m.error), o = ee(zt, m, n, C), !o) a(-1, "No Transport");else {
        if (C.readyState = 1, f && g.trigger("ajaxSend", [C, m]), u) return C;m.async && 0 < m.timeout && (p = e.setTimeout(function () {
          C.abort("timeout");
        }, m.timeout));try {
          u = !1, o.send(v, a);
        } catch (t) {
          if (u) throw t;a(-1, t);
        }
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return Ce.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return Ce.get(e, void 0, t, "script");
    } }), Ce.each(["get", "post"], function (e, t) {
    Ce[t] = function (e, n, a, o) {
      return be(n) && (o = o || a, a = n, n = void 0), Ce.ajax(Ce.extend({ url: e, type: t, dataType: o, data: n, success: a }, Ce.isPlainObject(e) && e));
    };
  }), Ce._evalUrl = function (e) {
    return Ce.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, Ce.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (be(e) && (e = e.call(this[0])), t = Ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return be(e) ? this.each(function (t) {
        Ce(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = Ce(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = be(e);return this.each(function (n) {
        Ce(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        Ce(this).replaceWith(this.childNodes);
      }), this;
    } }), Ce.expr.pseudos.hidden = function (e) {
    return !Ce.expr.pseudos.visible(e);
  }, Ce.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, Ce.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  };var Gt = { 0: 200, 1223: 204 },
      Qt = Ce.ajaxSettings.xhr();xe.cors = !!Qt && "withCredentials" in Qt, xe.ajax = Qt = !!Qt, Ce.ajaxTransport(function (t) {
    var _n2, a;if (xe.cors || Qt && !t.crossDomain) return { send: function send(o, s) {
        var d,
            i = t.xhr();if (i.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (d in t.xhrFields) {
          i[d] = t.xhrFields[d];
        }for (d in t.mimeType && i.overrideMimeType && i.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          i.setRequestHeader(d, o[d]);
        }_n2 = function n(e) {
          return function () {
            _n2 && (_n2 = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" === typeof i.status ? s(i.status, i.statusText) : s(0, "error") : s(Gt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" !== typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders()));
          };
        }, i.onload = _n2(), a = i.onerror = i.ontimeout = _n2("error"), void 0 === i.onabort ? i.onreadystatechange = function () {
          4 === i.readyState && e.setTimeout(function () {
            _n2 && a();
          });
        } : i.onabort = a, _n2 = _n2("abort");try {
          i.send(t.hasContent && t.data || null);
        } catch (t) {
          if (_n2) throw t;
        }
      }, abort: function abort() {
        _n2 && _n2();
      } };
  }), Ce.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), Ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return Ce.globalEval(e), e;
      } } }), Ce.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), Ce.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n3;return { send: function send(a, o) {
          t = Ce("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n3 = function n(e) {
            t.remove(), _n3 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), de.head.appendChild(t[0]);
        }, abort: function abort() {
          _n3 && _n3();
        } };
    }
  });var Kt = [],
      Jt = /(=)\?(?=&|$)|\?\?/;Ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Kt.pop() || Ce.expando + "_" + qt++;return this[e] = !0, e;
    } }), Ce.ajaxPrefilter("json jsonp", function (t, n, a) {
    var o,
        i,
        s,
        d = !1 !== t.jsonp && (Jt.test(t.url) ? "url" : "string" === typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(t.data) && "data");if (d || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = be(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, d ? t[d] = t[d].replace(Jt, "$1" + o) : !1 !== t.jsonp && (t.url += (Ht.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || Ce.error(o + " was not called"), s[0];
    }, t.dataTypes[0] = "json", i = e[o], e[o] = function () {
      s = arguments;
    }, a.always(function () {
      void 0 === i ? Ce(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Kt.push(o)), s && be(i) && i(s[0]), s = i = void 0;
    }), "script";
  }), xe.createHTMLDocument = function () {
    var e = de.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), Ce.parseHTML = function (e, t, n) {
    if ("string" !== typeof e) return [];"boolean" === typeof t && (n = t, t = !1);var a, o, i;return (t || (xe.createHTMLDocument ? (t = de.implementation.createHTMLDocument(""), a = t.createElement("base"), a.href = de.location.href, t.head.appendChild(a)) : t = de), o = Ee.exec(e), i = !n && [], o) ? [t.createElement(o[1])] : (o = C([e], t, i), i && i.length && Ce(i).remove(), Ce.merge([], o.childNodes));
  }, Ce.fn.load = function (e, t, n) {
    var a,
        o,
        i,
        s = this,
        d = e.indexOf(" ");return -1 < d && (a = G(e.slice(d)), e = e.slice(0, d)), be(t) ? (n = t, t = void 0) : t && "object" === ("undefined" === typeof t ? "undefined" : babelHelpers["typeof"](t)) && (o = "POST"), 0 < s.length && Ce.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function (e) {
      i = arguments, s.html(a ? Ce("<div>").append(Ce.parseHTML(e)).find(a) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, i || [e.responseText, t, e]);
      });
    }), this;
  }, Ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    Ce.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), Ce.expr.pseudos.animated = function (e) {
    return Ce.grep(Ce.timers, function (t) {
      return e === t.elem;
    }).length;
  }, Ce.offset = { setOffset: function setOffset(e, t, n) {
      var a,
          o,
          i,
          s,
          d,
          r,
          l,
          p = Ce.css(e, "position"),
          c = Ce(e),
          u = {};"static" === p && (e.style.position = "relative"), d = c.offset(), i = Ce.css(e, "top"), r = Ce.css(e, "left"), l = ("absolute" === p || "fixed" === p) && -1 < (i + r).indexOf("auto"), l ? (a = c.position(), s = a.top, o = a.left) : (s = parseFloat(i) || 0, o = parseFloat(r) || 0), be(t) && (t = t.call(e, n, Ce.extend({}, d))), null != t.top && (u.top = t.top - d.top + s), null != t.left && (u.left = t.left - d.left + o), "using" in t ? t.using.call(e, u) : c.css(u);
    } }, Ce.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        Ce.offset.setOffset(this, e, t);
      });var t,
          n,
          a = this[0];if (a) return a.getClientRects().length ? (t = a.getBoundingClientRect(), n = a.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            a = this[0],
            o = { top: 0, left: 0 };if ("fixed" === Ce.css(a, "position")) t = a.getBoundingClientRect();else {
          for (t = this.offset(), n = a.ownerDocument, e = a.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ce.css(e, "position");) {
            e = e.parentNode;
          }e && e !== a && 1 === e.nodeType && (o = Ce(e).offset(), o.top += Ce.css(e, "borderTopWidth", !0), o.left += Ce.css(e, "borderLeftWidth", !0));
        }return { top: t.top - o.top - Ce.css(a, "marginTop", !0), left: t.left - o.left - Ce.css(a, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === Ce.css(e, "position");) {
          e = e.offsetParent;
        }return e || at;
      });
    } }), Ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;Ce.fn[e] = function (a) {
      return We(this, function (e, a, o) {
        var i;return ve(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o ? i ? i[t] : e[a] : void (i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[a] = o);
      }, e, a, arguments.length);
    };
  }), Ce.each(["top", "left"], function (e, t) {
    Ce.cssHooks[t] = I(xe.pixelPosition, function (e, n) {
      if (n) return n = O(e, t), ct.test(n) ? Ce(e).position()[t] + "px" : n;
    });
  }), Ce.each({ Height: "height", Width: "width" }, function (e, t) {
    Ce.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, a) {
      Ce.fn[a] = function (o, i) {
        var s = arguments.length && (n || "boolean" !== typeof o),
            d = n || (!0 === o || !0 === i ? "margin" : "border");return We(this, function (t, n, o) {
          var i;return ve(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, ie(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? Ce.css(t, n, d) : Ce.style(t, n, o, d);
        }, t, s ? o : void 0, s);
      };
    });
  }), Ce.each(["blur", "focus", "focusin", "focusout", "resize", "scroll", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "contextmenu"], function (e, t) {
    Ce.fn[t] = function (e, n) {
      return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), Ce.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), Ce.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, a) {
      return this.on(t, e, n, a);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), Ce.proxy = function (e, t) {
    var n, a, o;if ("string" === typeof t && (n = e[t], t = e, e = n), !!be(e)) return a = le.call(arguments, 2), o = function o() {
      return e.apply(t || this, a.concat(le.call(arguments)));
    }, o.guid = e.guid = e.guid || Ce.guid++, o;
  }, Ce.holdReady = function (e) {
    e ? Ce.readyWait++ : Ce.ready(!0);
  }, Ce.isArray = Array.isArray, Ce.parseJSON = JSON.parse, Ce.nodeName = s, Ce.isFunction = be, Ce.isWindow = ve, Ce.camelCase = h, Ce.type = a, Ce.now = Date.now, Ce.isNumeric = function (e) {
    var t = Ce.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" === typeof define && define.amd && define("jquery", [], function () {
    return Ce;
  });var Zt = e.jQuery,
      en = e.$;return Ce.noConflict = function (t) {
    return e.$ === Ce && (e.$ = en), t && e.jQuery === Ce && (e.jQuery = Zt), Ce;
  }, t || (e.jQuery = e.$ = Ce), Ce;
});
var InstallPageElement,
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = 2 & c[0] ? f["return"] : c[0] ? f["throw"] || ((h = f["return"]) && h.call(f), 0) : f.next) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [2 & c[0], h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
};(function (a) {
  a.installPageProperties = { fetchFailed: { type: Boolean, value: !1, notify: !0 }, fetchCompleted: { type: Boolean, value: !1, notify: !0 }, fetchedData: { type: String, value: "", notify: !0 }, userscriptUrlCalculated: { type: Boolean, notify: !1, value: !1 }, userscriptUrl: { type: String, computed: "getUserscriptUrl(userscriptUrlCalculated)" }, isLoading: { type: Boolean, value: !1, notify: !0, computed: "isPageLoading(fetchFailed, fetchCompleted)" } };var b = function () {
    function b() {}return b.isPageLoading = function (a, b) {
      return !a && !b;
    }, b.getInstallSource = function () {
      var a = this._getSearchParams(location.href);return a.s;
    }, b._getSearchParams = function (a) {
      for (var b = a.split("?").slice(1).join("?"), c = b.split("&").map(function (a) {
        var b = a.split("=");return { key: b[0], val: decodeURIComponent(b[1]) };
      }), d = {}, e = 0; e < c.length; e++) {
        d[c[e].key] = c[e].val;
      }return d;
    }, b.getUserscriptUrl = function () {
      this.userscriptUrlCalculated = !0;var a = this._getSearchParams(location.href);return a.i;
    }, b.displayFetchedUserscript = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (b) {
          switch (b.label) {case 0:
              return [4, this.settingsReady];case 1:
              return b.sent(), this.fetchCompleted = !0, this.fetchedData = a, [2];}
        });
      });
    }, b.notifyFetchError = function (a) {
      var b = this;this.fetchFailed = !0, this.async(function () {
        b.$$("install-error").$.errCode.innerText = a + "";
      }, 50);
    }, b._xhr = function (a) {
      return new Promise(function (b, c) {
        var d = new window.XMLHttpRequest();d.open("GET", a), d.onreadystatechange = function () {
          d.readyState === window.XMLHttpRequest.DONE && (200 <= d.status && 300 > d.status ? b(d.responseText) : c(new Error("install_page_failed_xhr")));
        }, d.send();
      });
    }, b.fetchUserscript = function (a) {
      var b = this;this._xhr(a + "?noInstall").then(function (a) {
        b.displayFetchedUserscript(a);
      })["catch"](function (a) {
        b.notifyFetchError(a);
      });
    }, (b._createArray = function (a) {
      for (var b = [], c = 0; c < a; c++) {
        b[c] = void 0;
      }return b;
    }, b._initSettings = function () {
      var a = this;this.settingsReady = new Promise(function (b) {
        return __awaiter(a, void 0, void 0, function () {
          var a, c, d, e, f, g, h, d, i, f, g;return __generator(this, function (j) {
            switch (j.label) {case 0:
                return [4, browserAPI.storage.local.get()];case 1:
                return a = j.sent(), a.useStorageSync && "sync" in BrowserAPI.getSrc().storage && "get" in BrowserAPI.getSrc().storage.sync ? [4, browserAPI.storage.sync.get()] : [3, 3];case 2:
                return c = j.sent(), d = c.indexes, null === d || -1 === d || void 0 === d ? (browserAPI.storage.local.set({ useStorageSync: !1 }), this.settings = a.settings) : (e = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                  e.push(c["section" + b]);
                }), g = e.join(""), this.settings = JSON.parse(g)), [3, 6];case 3:
                return a.settings ? [3, 5] : (browserAPI.storage.local.set({ useStorageSync: !0 }), [4, browserAPI.storage.sync.get()]);case 4:
                return h = j.sent(), d = h.indexes, i = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                  i.push(h["section" + b]);
                }), g = i.join(""), this.settings = JSON.parse(g), [3, 6];case 5:
                this.settings = a.settings, j.label = 6;case 6:
                return b(null), [2];}
          });
        });
      });
    }, b.onLangChanged = function () {
      this.$.title.innerHTML = this.___("install_page_installing", this.userscriptUrl);
    }, b.ready = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a;return __generator(this, function (b) {
          switch (b.label) {case 0:
              return this.userscriptUrl = this.getUserscriptUrl(), this.fetchUserscript(this.userscriptUrl), window.installPage = this, this._initSettings(), a = this.$.title, [4, this.__async("install_page_installing", this.userscriptUrl)];case 1:
              return a.innerHTML = b.sent(), [2];}
        });
      });
    }, b.is = "install-page", b.properties = a.installPageProperties, b);
  }();a.IP = b, window.objectify ? window.register(b) : window.addEventListener("RegisterReady", function () {
    window.register(b);
  });
})(InstallPageElement || (InstallPageElement = {}));
'use notstrict';window.CRMLoaded = window.CRMLoaded || { listener: null, register: function register(a) {
    window.CRMLoaded.listener = a;
  } }, window.CRMLoaded.register(function () {
  function a(a) {
    var b = [],
        c = a.split('}');return c.slice(0, -1).forEach(function (a) {
      var c = a.indexOf('{'),
          d = a.slice(0, c).trim(),
          e = a.slice(c + 1).trim();b.push({ elements: d, ruleText: e });
    }), b;
  }function b(a) {
    if ('number' === typeof a) return a;var b = a.split('.'),
        c = ~~a;return 1 < b.length && (c += ~~b[1] / 10), c;
  }function c(a) {
    var d;return -1 < (d = a.indexOf('*')) ? c(a.slice(0, d - 1).concat([b(a[d - 1]) * b(a[d + 1])]).concat(a.slice(d + 2))) : -1 < (d = a.indexOf('/')) ? c(a.slice(0, d - 1).concat([b(a[d - 1]) / b(a[d + 1])]).concat(a.slice(d + 2))) : -1 < a.indexOf('-') || -1 < a.indexOf('+') ? (a.forEach(function (c, d) {
      '-' === c && (a[d + 1] = -1 * b(a[d + 1]), a[d] = '+');
    }), 0 === a.length ? 0 : 1 === a.length ? b(a[0]) : a.reduce(function (a, c) {
      return b(a) + b(c);
    })) : b(a[0]);
  }function d(a) {
    var b = 0;return -1 < (b = a.indexOf('+')) ? [].concat(d(a.slice(0, b))).concat(['+']).concat(d(a.slice(b + 1))) : -1 < (b = a.indexOf('-')) ? [].concat(d(a.slice(0, b))).concat(['-']).concat(d(a.slice(b + 1))) : -1 < (b = a.indexOf('*')) ? [].concat(d(a.slice(0, b))).concat(['*']).concat(d(a.slice(b + 1))) : -1 < (b = a.indexOf('/')) ? [].concat(d(a.slice(0, b))).concat(['/']).concat(d(a.slice(b + 1))) : [a];
  }function e(a) {
    var b = /\((.*)\)/,
        f = null;return (f = b.exec(a)) ? e(a.replace(f[0], e(f[1]) + '')) : c(d(a).map(function (a) {
      return a.trim();
    }));
  }function f() {
    if (o) return o;var a = document.documentElement;return o = [a].concat(i(a.children)), o;
  }function g(a) {
    return j(f().map(function (b) {
      return b.querySelectorAll(a);
    }));
  }function h(a, b) {
    if (b(a), a.children) for (var c = 0; c < a.children.length; c++) {
      h(a.children[c], b);
    }
  }function i(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      h(a[c], function (a) {
        a.shadowRoot && b.push(a.shadowRoot);
      });
    }return b;
  }function j(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      for (var d = 0; d < a[c].length; d++) {
        b.push(a[c][d]);
      }
    }return b;
  }function k(a) {
    for (var b = a.split(' '), c = g(b[0]), d = function d(a) {
      c = j(c.map(function (a) {
        return a.shadowRoot ? a.shadowRoot : a.shadowRoot;
      }).map(function (c) {
        return c.querySelectorAll(b[a]);
      }));
    }, e = 1; e < b.length; e++) {
      d(e);
    }return c;
  }function l(a) {
    return Array.prototype.slice.apply(a);
  }function m() {
    p.forEach(function (a) {
      var b = e(a.calculation.replace('vw', ' * ' + window.innerWidth / 100).replace('vh', ' * ' + window.innerHeight / 100).replace('em', ' * 16').replace('px', ''));a.elements.forEach(function (c) {
        'length' !== a.key && 'parentRule' !== a.key && (c.style[a.key] = b + 'px');
      });
    });
  }var n,
      o = null,
      p = [];window.addCalcFn = function (a, b, c, d) {
    if (n && !d && 'length' !== b && 'parentRule' !== b) return void (a.style[b] = 'calc(' + c + ')');for (var e = 0; e < p.length; e++) {
      if (-1 < p[e].elements.indexOf(a) && p[e].key === b) {
        p.splice(e, 1);break;
      }
    }if (!d) {
      p.push({ elements: [a], calculation: c, key: b }), m();
    }
  }, function () {
    var b = document.createElement('div');b.style.cssText = 'width: calc(100vw - 100px)', n = !!b.style.length, n || function (a) {
      a.forEach(function (a) {
        for (var b, c = a.key; -1 < (b = c.indexOf('-'));) {
          c = c.slice(0, b) + c[b + 1].toUpperCase() + c.slice(b + 2);
        }if (a.elements = k(a.elements), !a.elements) return null;var d = l(a.elements);(-1 < a.calculation.indexOf('vh') || -1 < a.calculation.indexOf('vw')) && p.push({ calculation: a.calculation, elements: d, key: c });var f = a.calculation.replace('vw', ' * ' + window.innerWidth / 100).replace('vh', ' * ' + window.innerHeight / 100).replace('em', ' * 16').replace('px', ''),
            g = e(f);d.forEach(function (a) {
          'length' !== c && 'parentRule' !== c && (a.style[c] = g + 'px');
        });
      }), window.onresize = function () {
        m();
      };
    }(function (a) {
      var b = [],
          c = /calc\((.+)\)/;return a.forEach(function (a) {
        a && a.rules && a.rules.forEach(function (d) {
          var e = null;(e = c.exec(d.value)) && (-1 < e[1].indexOf('vh') || -1 < e[1].indexOf('vw')) && b.push({ elements: a.elements, key: d.key, calculation: e[1] });
        });
      }), b;
    }(function (a) {
      var b = /(\s*)((\w|-)+)(\s*):(\s*)((\w|%|\/|\*|\+|\(|\)|-|,|\s)+);(\s*)/;return a.map(function (a) {
        if (-1 === a.ruleText.indexOf('calc') || -1 === a.ruleText.indexOf('vh') && -1 === a.ruleText.indexOf('vw')) return null;var c = [],
            d = a.ruleText.match(/(\s*)((\w|-)+)(\s*):(\s*)((\w|%|\/|\*|\+|\(|\)|-|,|\s)+);(\s*)/g);return d ? (d.forEach(function (a) {
          var d = a.match(b);c.push({ key: d[2], value: d[6] });
        }), { rules: c, elements: a.elements }) : null;
      }).filter(function (a) {
        return null !== a;
      });
    }(function (b) {
      var c = [];return b.forEach(function (b) {
        return -1 === b.indexOf('calc(') || -1 === b.indexOf('vh') && -1 === b.indexOf('vw') ? null : void (c = c.concat(a(b)));
      }), c;
    }(function (a) {
      return a.map(function (a) {
        if ('STYLE' === a.tagName) return a.textContent;var b = new XMLHttpRequest();return b.open('GET', a.sheet.href, !1), b.send(), 200 === b.status ? b.responseText : '';
      });
    }(g('style, link[rel="stylesheet"]')))))), b.remove();
  }();
});