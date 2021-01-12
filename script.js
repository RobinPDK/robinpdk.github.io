window.onload = function () {
  var huts = document.getElementById("SubmitConfirm");
  huts.style.display = "none";
};

// SCROLL TO TOP BUTTON

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//begin contactformulier

function Submitted() {
  console.log("Submit Succesful");
  var bo = document.getElementById("Contactform");
  bo.style.display = "none";
  var huts = document.getElementById("SubmitConfirm");
  huts.style.display = "block";
}

"./website/components/structures/whatsapp-button/whatsapp-button.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  "use strict";
  __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
    default: () => WhatsappButtonComponent
  });
  __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");
  var _assets_scripts_modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./website/assets/scripts/modules/component.js");
  class WhatsappButtonComponent extends _assets_scripts_modules_component__WEBPACK_IMPORTED_MODULE_1__.Z {
    init() {
      this.button = this.element.querySelector('.whatsapp-button__close'), this.timeout = null, 
      this.button && (this.focusableElements = [ ...this.element.querySelectorAll('a[href], button, input, select') ], 
      this.focusableElements.forEach((element => element.setAttribute('tabindex', -1))), 
      this.button.addEventListener('click', (() => this.hideButton())), 'true' === sessionStorage.getItem('whatsapp-button') ? this.showButton() : 'false' === sessionStorage.getItem('whatsapp-button') ? this.hideButton() : (window.clearTimeout(this.timeout), 
      this.timeout = window.setTimeout((() => this.showButton()), 3e4)));
    }
    showButton() {
      this.focusableElements.forEach((element => element.removeAttribute('tabindex'))), 
      window.requestAnimationFrame((() => this.element.classList.add('whatsapp-button--visible'))), 
      sessionStorage.setItem('whatsapp-button', 'true');
    }
    hideButton() {
      this.focusableElements.forEach((element => element.setAttribute('tabindex', -1))), 
      window.requestAnimationFrame((() => this.element.classList.remove('whatsapp-button--visible'))), 
      sessionStorage.setItem('whatsapp-button', 'false');
    }
  }
  window.addEventListener('init-load', (() => document.querySelectorAll('.whatsapp-button').forEach((element => {
    element.instance = element.instance || new WhatsappButtonComponent(element);
  }

//goedenavond
