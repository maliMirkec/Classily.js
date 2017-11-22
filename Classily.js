'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (root, factory) {
  var pluginName = 'Classily';

  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(pluginName);
  } else {
    window[pluginName] = factory(pluginName);
  }
})(undefined, function (pluginName) {
  var defaults = {
    selector: '.js-classily'
  };

  /**
   * Merge defaults with user options
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   */
  var extend = function extend(target, options) {
    var extended = {};

    Object.keys(defaults).forEach(function (prop) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    });

    Object.keys(options).forEach(function (prop) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    });

    return extended;
  };

  /**
   @private
   * Find target elements and toggle classes
   * @param {Object} cur Current element (that users clicks on)
   * @param {String} sel Selectors for finding target elements
   * @param {String} cl Classes ti toggle on target elements
   */
  var toggleFunction = function toggleFunction(cur, sel, cl) {
    var $tar = Array.prototype.slice.call(document.querySelectorAll(sel));

    if (sel.indexOf('this') !== -1) {
      $tar.push(cur);
    }

    if ($tar) {
      var cls = cl.split(' ');

      for (var i = 0; i < $tar.length; i += 1) {if (window.CP.shouldStopExecution(2)){break;}
        for (var j = 0; j < cls.length; j += 1) {if (window.CP.shouldStopExecution(1)){break;}
          $tar[i].classList.toggle(cls[j]);
        }
window.CP.exitedLoop(1);

      }
window.CP.exitedLoop(2);

    }
  };

  /**
   @private
   * Get config parameters from data attributes and pass them to toggle function
   * @param {Object} event Event object (click)
   */
  var toggleEvent = function toggleEvent(event) {
    if (event.currentTarget.getAttribute('data-prevent') === 'default') {
      event.preventDefault();
    }

    var selectors = event.currentTarget.getAttribute('data-target').split(',');
    var classes = event.currentTarget.getAttribute('data-class').split(',');

    if (selectors.length === classes.length) {
      selectors.forEach(function (currentSelector, j) {
        toggleFunction(event.currentTarget, currentSelector.trim(), classes[j].trim());
      });
    } else {
      var targetSelector = selectors.map(function (selectorItem) {
        return selectorItem.trim();
      }).join(',');
      var targetClass = classes.map(function (classItem) {
        return classItem.trim();
      }).join(' ');
      toggleFunction(event.currentTarget, targetSelector, targetClass);
    }
  };

  /**
   * Plugin Object
   * @param {Object} options User options
   * @constructor
   */
  function Classily(options) {
    this.options = extend(defaults, options);
    this.init();
  }

  /**
   * Classily prototype
   * @public
   * @constructor
   */
  Classily.prototype = {
    init: function init() {
      // Find all matching DOM elements
      this.selectors = document.querySelectorAll(this.options.selector);

      for (var i = 0; i < this.selectors.length; i += 1) {if (window.CP.shouldStopExecution(3)){break;}
        var selector = this.selectors[i];
        // Attach click event on matching DOM element and call toggle event
        selector.addEventListener('click', toggleEvent);
      }
window.CP.exitedLoop(3);

    },
    destroy: function destroy() {
      // Find all matching DOM elements
      this.selectors = document.querySelectorAll(this.options.selector);

      for (var i = 0; i < this.selectors.length; i += 1) {if (window.CP.shouldStopExecution(4)){break;}
        var selector = this.selectors[i];
        // Dettach click event on matching DOM element
        selector.removeEventListener('click', toggleEvent);
      }
window.CP.exitedLoop(4);

    }
  };
  return Classily;
});
