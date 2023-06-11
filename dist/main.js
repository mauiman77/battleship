/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Create div element with id 'board'
// Create array 'vertical' with characters 'A' to 'J'
// Create array 'horizontal' with with integers 0 to 9
//
// Outer Loop starting at 0, ending at 9, increment by 1
//   Inner loop starting at 0, ending at 9, increment by 1
//    Create div element with id 'cell'
//    Append class vertical[outer loop increment]
//    Append class horizontal[inner loop increment]
//    Append div cell to board
const ui = (function () {
  const vertical = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  const initialSetup = () => {
    const main = document.createElement('main')
    return document.querySelector('body').appendChild(main)
  }

  const makeGrid = (element) => {
    for (let outer = 0; outer <= 9; outer += 1) {
      for (let inner = 0; inner <= 9; inner += 1) {
        const cell = document.createElement('div')
        cell.setAttribute('id', 'cell')
        cell.classList.add(vertical[outer])
        cell.classList.add(inner.toString())
        element.appendChild(cell)
      }
    }
    return element
  }
  return { makeGrid, initialSetup }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);

// function make () {
//   const board = document.createElement('div')
//   board.setAttribute('id', 'board')
//   ui.makeGrid(board)
//   return board
// }

// const main = document.querySelector('main')
// main.appendChild(make())
// main.appendChild(make())

// document.querySelector('#cell.A').classList.add('miss')
// document.querySelector('#cell.B').classList.add('hit')
// document.querySelector('#cell.C').classList.add('ship')


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


_ui__WEBPACK_IMPORTED_MODULE_0__["default"].initialSetup()

function make () {
  const board = document.createElement('div')
  board.setAttribute('id', 'board')
  _ui__WEBPACK_IMPORTED_MODULE_0__["default"].makeGrid(board)
  return board
}

const main = document.querySelector('main')
main.appendChild(make())
main.appendChild(make())

document.querySelector('#cell.A').classList.add('miss')
document.querySelector('#cell.B').classList.add('hit')
document.querySelector('#cell.C').classList.add('ship')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBLGlFQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7QUFDckI7QUFDQSwyQ0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyQ0FBRTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGUgZGl2IGVsZW1lbnQgd2l0aCBpZCAnYm9hcmQnXHJcbi8vIENyZWF0ZSBhcnJheSAndmVydGljYWwnIHdpdGggY2hhcmFjdGVycyAnQScgdG8gJ0onXHJcbi8vIENyZWF0ZSBhcnJheSAnaG9yaXpvbnRhbCcgd2l0aCB3aXRoIGludGVnZXJzIDAgdG8gOVxyXG4vL1xyXG4vLyBPdXRlciBMb29wIHN0YXJ0aW5nIGF0IDAsIGVuZGluZyBhdCA5LCBpbmNyZW1lbnQgYnkgMVxyXG4vLyAgIElubmVyIGxvb3Agc3RhcnRpbmcgYXQgMCwgZW5kaW5nIGF0IDksIGluY3JlbWVudCBieSAxXHJcbi8vICAgIENyZWF0ZSBkaXYgZWxlbWVudCB3aXRoIGlkICdjZWxsJ1xyXG4vLyAgICBBcHBlbmQgY2xhc3MgdmVydGljYWxbb3V0ZXIgbG9vcCBpbmNyZW1lbnRdXHJcbi8vICAgIEFwcGVuZCBjbGFzcyBob3Jpem9udGFsW2lubmVyIGxvb3AgaW5jcmVtZW50XVxyXG4vLyAgICBBcHBlbmQgZGl2IGNlbGwgdG8gYm9hcmRcclxuY29uc3QgdWkgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHZlcnRpY2FsID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ11cclxuXHJcbiAgY29uc3QgaW5pdGlhbFNldHVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChtYWluKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFrZUdyaWQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZm9yIChsZXQgb3V0ZXIgPSAwOyBvdXRlciA8PSA5OyBvdXRlciArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGlubmVyID0gMDsgaW5uZXIgPD0gOTsgaW5uZXIgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsICdjZWxsJylcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodmVydGljYWxbb3V0ZXJdKVxyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChpbm5lci50b1N0cmluZygpKVxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuIHsgbWFrZUdyaWQsIGluaXRpYWxTZXR1cCB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVpXHJcblxyXG4vLyBmdW5jdGlvbiBtYWtlICgpIHtcclxuLy8gICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdib2FyZCcpXHJcbi8vICAgdWkubWFrZUdyaWQoYm9hcmQpXHJcbi8vICAgcmV0dXJuIGJvYXJkXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcclxuLy8gbWFpbi5hcHBlbmRDaGlsZChtYWtlKCkpXHJcbi8vIG1haW4uYXBwZW5kQ2hpbGQobWFrZSgpKVxyXG5cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbGwuQScpLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2VsbC5CJykuY2xhc3NMaXN0LmFkZCgnaGl0JylcclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbGwuQycpLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB1aSBmcm9tICcuL3VpJ1xyXG5cclxudWkuaW5pdGlhbFNldHVwKClcclxuXHJcbmZ1bmN0aW9uIG1ha2UgKCkge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvYXJkJylcclxuICB1aS5tYWtlR3JpZChib2FyZClcclxuICByZXR1cm4gYm9hcmRcclxufVxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxyXG5tYWluLmFwcGVuZENoaWxkKG1ha2UoKSlcclxubWFpbi5hcHBlbmRDaGlsZChtYWtlKCkpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2VsbC5BJykuY2xhc3NMaXN0LmFkZCgnbWlzcycpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZWxsLkInKS5jbGFzc0xpc3QuYWRkKCdoaXQnKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2VsbC5DJykuY2xhc3NMaXN0LmFkZCgnc2hpcCcpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==