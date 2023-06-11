/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js")
const Gameboard = function (name) {
  const shipCoords = []
  const hitCoords = []
  const shipsOnBoard = []

  function getVertical (coord) {
    if (coord >= 'A' && coord <= 'J') return coord
    else return false
  }

  function getHorizontalLength (initial, size) {
    if (initial < 1 || initial > 10 || initial + size > 10) { return false }
    return [initial, initial + size - 1]
  }

  const receiveAttack = (vertical, horizontal) => {
    if (hitCoords.find(i => i.vert === vertical && i.horiz === horizontal)) return 'Already hit.'
    const attackCoord = { vert: vertical, horiz: horizontal }
    hitCoords.push(attackCoord)

    const lookUpShipCoords = shipCoords.find(x => x.vertical === vertical && (horizontal >= x.horizontal[0] && horizontal <= x.horizontal[1]))
    if (lookUpShipCoords) {
      const shipToHit = shipsOnBoard.find(y => y.name === lookUpShipCoords.title)
      shipToHit.hit()
    }
    return attackCoord
  }

  const getHitCoords = () => {
    return hitCoords
  }

  const placeShip = function (name, size, coords) {
    const shipToPlace = {
      title: name,
      length: size,
      vertical: getVertical(coords[0]),
      horizontal: getHorizontalLength(coords[1], size)
    }

    if (shipCoords.find(y => y.vertical === shipToPlace.vertical && (shipToPlace.horizontal[0] >= y.horizontal[0] && shipToPlace.horizontal[1] <= y.horizontal[1]))) return 'Overlaps'

    if (shipToPlace.horizontal && shipToPlace.vertical) {
      shipCoords.push(shipToPlace)
    }
  }

  const storeShipVariable = (variable) => {
    shipsOnBoard.push(variable)
  }

  const getShipsOnBoard = (name = null) => {
    if (!name) return shipsOnBoard
    const toGet = shipsOnBoard.find(o => o.name === name)
    return toGet
  }

  const getCoords = function () {
    return shipCoords
  }

  const checkSunk = (current) => current.isSunk() === true

  const allSunk = () => {
    return shipsOnBoard.every(checkSunk)
  }

  return { name, placeShip, getCoords, receiveAttack, getHitCoords, storeShipVariable, getShipsOnBoard, allSunk }
}
// module.exports = Gameboard
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

const player = (name, computer = false) => {
  const randomAttack = () => {
    const vert = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return [vert[Math.floor(Math.random() * vert.length)], Math.floor(Math.random() * 10)]
  }

  let isTurn = false

  const toggleTurn = () => {
    isTurn = !isTurn
    return isTurn
  }

  const attack = (coords = []) => {
    return 0
  }

  return { name, computer, randomAttack, attack, toggleTurn }
}

module.exports = player


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = function (name, size) {
  if (size > 10 || size < 1 || name.length < 1) { return 'Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.' }
  let lives = size
  let sunk = false
  const hit = function () {
    return lives--
  }
  const getLives = function () {
    return lives
  }
  const isSunk = function () {
    if (lives < 1) sunk = true
    return lives < 1
  }
  return { name, size, hit, getLives, isSunk }
}
// module.exports = Ship
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    for (let outer = 1; outer <= 10; outer += 1) {
      for (let inner = 1; inner <= 10; inner += 1) {
        const cell = document.createElement('div')
        cell.setAttribute('id', 'cell')
        cell.classList.add(vertical[outer - 1])
        cell.classList.add('N' + inner.toString())
        element.appendChild(cell)
      }
    }
    return element
  }
  return { makeGrid, initialSetup }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_3__);





_ui__WEBPACK_IMPORTED_MODULE_0__["default"].initialSetup()

function make (gameBoard = '') {
  const board = document.createElement('div')
  board.setAttribute('id', 'board')
  board.classList.add(gameBoard)
  _ui__WEBPACK_IMPORTED_MODULE_0__["default"].makeGrid(board)
  return board
}

const playerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])('Player')
const computerBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"])('Computer')

const main = document.querySelector('main')
main.appendChild(make(playerBoard.name))
main.appendChild(make(computerBoard.name))

document.querySelector('#cell.A').classList.add('miss')
document.querySelector('#cell.B').classList.add('hit')
document.querySelector('#cell.C').classList.add('ship')

const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])('Submarine', 3)

playerBoard.placeShip(submarine.name, submarine.size, ['D', 4])
playerBoard.storeShipVariable(submarine)

function colorBoard () {
  const board = document.querySelector('div#board.Player')
  const colorMe = playerBoard.getCoords()[0]
  let rightSquare
  for (let i = colorMe.horizontal[0]; i <= colorMe.horizontal[1]; i += 1) {
    const rightSquare = document.querySelector(`div.${colorMe.vertical}.N${i}`)
    rightSquare.classList.add('ship')
  }
  return rightSquare
}

colorBoard()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7OztBQ3ZFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixhQUFhO0FBQ3JDLDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxFQUFFOzs7Ozs7O1VDakNqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDSTtBQUNVO0FBQ047QUFDN0I7QUFDQSwyQ0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJDQUFFO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFTO0FBQzdCLHNCQUFzQixzREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0QkFBNEI7QUFDbEUsc0RBQXNELGlCQUFpQixJQUFJLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJylcbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGNvbnN0IHNoaXBDb29yZHMgPSBbXVxuICBjb25zdCBoaXRDb29yZHMgPSBbXVxuICBjb25zdCBzaGlwc09uQm9hcmQgPSBbXVxuXG4gIGZ1bmN0aW9uIGdldFZlcnRpY2FsIChjb29yZCkge1xuICAgIGlmIChjb29yZCA+PSAnQScgJiYgY29vcmQgPD0gJ0onKSByZXR1cm4gY29vcmRcbiAgICBlbHNlIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SG9yaXpvbnRhbExlbmd0aCAoaW5pdGlhbCwgc2l6ZSkge1xuICAgIGlmIChpbml0aWFsIDwgMSB8fCBpbml0aWFsID4gMTAgfHwgaW5pdGlhbCArIHNpemUgPiAxMCkgeyByZXR1cm4gZmFsc2UgfVxuICAgIHJldHVybiBbaW5pdGlhbCwgaW5pdGlhbCArIHNpemUgLSAxXVxuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh2ZXJ0aWNhbCwgaG9yaXpvbnRhbCkgPT4ge1xuICAgIGlmIChoaXRDb29yZHMuZmluZChpID0+IGkudmVydCA9PT0gdmVydGljYWwgJiYgaS5ob3JpeiA9PT0gaG9yaXpvbnRhbCkpIHJldHVybiAnQWxyZWFkeSBoaXQuJ1xuICAgIGNvbnN0IGF0dGFja0Nvb3JkID0geyB2ZXJ0OiB2ZXJ0aWNhbCwgaG9yaXo6IGhvcml6b250YWwgfVxuICAgIGhpdENvb3Jkcy5wdXNoKGF0dGFja0Nvb3JkKVxuXG4gICAgY29uc3QgbG9va1VwU2hpcENvb3JkcyA9IHNoaXBDb29yZHMuZmluZCh4ID0+IHgudmVydGljYWwgPT09IHZlcnRpY2FsICYmIChob3Jpem9udGFsID49IHguaG9yaXpvbnRhbFswXSAmJiBob3Jpem9udGFsIDw9IHguaG9yaXpvbnRhbFsxXSkpXG4gICAgaWYgKGxvb2tVcFNoaXBDb29yZHMpIHtcbiAgICAgIGNvbnN0IHNoaXBUb0hpdCA9IHNoaXBzT25Cb2FyZC5maW5kKHkgPT4geS5uYW1lID09PSBsb29rVXBTaGlwQ29vcmRzLnRpdGxlKVxuICAgICAgc2hpcFRvSGl0LmhpdCgpXG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tDb29yZFxuICB9XG5cbiAgY29uc3QgZ2V0SGl0Q29vcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRDb29yZHNcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChuYW1lLCBzaXplLCBjb29yZHMpIHtcbiAgICBjb25zdCBzaGlwVG9QbGFjZSA9IHtcbiAgICAgIHRpdGxlOiBuYW1lLFxuICAgICAgbGVuZ3RoOiBzaXplLFxuICAgICAgdmVydGljYWw6IGdldFZlcnRpY2FsKGNvb3Jkc1swXSksXG4gICAgICBob3Jpem9udGFsOiBnZXRIb3Jpem9udGFsTGVuZ3RoKGNvb3Jkc1sxXSwgc2l6ZSlcbiAgICB9XG5cbiAgICBpZiAoc2hpcENvb3Jkcy5maW5kKHkgPT4geS52ZXJ0aWNhbCA9PT0gc2hpcFRvUGxhY2UudmVydGljYWwgJiYgKHNoaXBUb1BsYWNlLmhvcml6b250YWxbMF0gPj0geS5ob3Jpem9udGFsWzBdICYmIHNoaXBUb1BsYWNlLmhvcml6b250YWxbMV0gPD0geS5ob3Jpem9udGFsWzFdKSkpIHJldHVybiAnT3ZlcmxhcHMnXG5cbiAgICBpZiAoc2hpcFRvUGxhY2UuaG9yaXpvbnRhbCAmJiBzaGlwVG9QbGFjZS52ZXJ0aWNhbCkge1xuICAgICAgc2hpcENvb3Jkcy5wdXNoKHNoaXBUb1BsYWNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3JlU2hpcFZhcmlhYmxlID0gKHZhcmlhYmxlKSA9PiB7XG4gICAgc2hpcHNPbkJvYXJkLnB1c2godmFyaWFibGUpXG4gIH1cblxuICBjb25zdCBnZXRTaGlwc09uQm9hcmQgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBzaGlwc09uQm9hcmRcbiAgICBjb25zdCB0b0dldCA9IHNoaXBzT25Cb2FyZC5maW5kKG8gPT4gby5uYW1lID09PSBuYW1lKVxuICAgIHJldHVybiB0b0dldFxuICB9XG5cbiAgY29uc3QgZ2V0Q29vcmRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzaGlwQ29vcmRzXG4gIH1cblxuICBjb25zdCBjaGVja1N1bmsgPSAoY3VycmVudCkgPT4gY3VycmVudC5pc1N1bmsoKSA9PT0gdHJ1ZVxuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzT25Cb2FyZC5ldmVyeShjaGVja1N1bmspXG4gIH1cblxuICByZXR1cm4geyBuYW1lLCBwbGFjZVNoaXAsIGdldENvb3JkcywgcmVjZWl2ZUF0dGFjaywgZ2V0SGl0Q29vcmRzLCBzdG9yZVNoaXBWYXJpYWJsZSwgZ2V0U2hpcHNPbkJvYXJkLCBhbGxTdW5rIH1cbn1cbi8vIG1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmRcbiIsImNvbnN0IHBsYXllciA9IChuYW1lLCBjb21wdXRlciA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdmVydCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXHJcbiAgICByZXR1cm4gW3ZlcnRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmVydC5sZW5ndGgpXSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXVxyXG4gIH1cclxuXHJcbiAgbGV0IGlzVHVybiA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVR1cm4gPSAoKSA9PiB7XHJcbiAgICBpc1R1cm4gPSAhaXNUdXJuXHJcbiAgICByZXR1cm4gaXNUdXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBhdHRhY2sgPSAoY29vcmRzID0gW10pID0+IHtcclxuICAgIHJldHVybiAwXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBuYW1lLCBjb21wdXRlciwgcmFuZG9tQXR0YWNrLCBhdHRhY2ssIHRvZ2dsZVR1cm4gfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllclxyXG4iLCJjb25zdCBTaGlwID0gZnVuY3Rpb24gKG5hbWUsIHNpemUpIHtcbiAgaWYgKHNpemUgPiAxMCB8fCBzaXplIDwgMSB8fCBuYW1lLmxlbmd0aCA8IDEpIHsgcmV0dXJuICdCb2F0XFwncyBuYW1lIG11c3QgaGF2ZSBhIGNoYXJhY3Rlci4gQm9hdFxcJ3Mgc2l6ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAxIGFuZCBsZXNzIHRoYW4gMTEuJyB9XG4gIGxldCBsaXZlcyA9IHNpemVcbiAgbGV0IHN1bmsgPSBmYWxzZVxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxpdmVzLS1cbiAgfVxuICBjb25zdCBnZXRMaXZlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbGl2ZXNcbiAgfVxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpdmVzIDwgMSkgc3VuayA9IHRydWVcbiAgICByZXR1cm4gbGl2ZXMgPCAxXG4gIH1cbiAgcmV0dXJuIHsgbmFtZSwgc2l6ZSwgaGl0LCBnZXRMaXZlcywgaXNTdW5rIH1cbn1cbi8vIG1vZHVsZS5leHBvcnRzID0gU2hpcFxuZXhwb3J0IGRlZmF1bHQgU2hpcFxuIiwiLy8gQ3JlYXRlIGRpdiBlbGVtZW50IHdpdGggaWQgJ2JvYXJkJ1xyXG4vLyBDcmVhdGUgYXJyYXkgJ3ZlcnRpY2FsJyB3aXRoIGNoYXJhY3RlcnMgJ0EnIHRvICdKJ1xyXG4vLyBDcmVhdGUgYXJyYXkgJ2hvcml6b250YWwnIHdpdGggd2l0aCBpbnRlZ2VycyAwIHRvIDlcclxuLy9cclxuLy8gT3V0ZXIgTG9vcCBzdGFydGluZyBhdCAwLCBlbmRpbmcgYXQgOSwgaW5jcmVtZW50IGJ5IDFcclxuLy8gICBJbm5lciBsb29wIHN0YXJ0aW5nIGF0IDAsIGVuZGluZyBhdCA5LCBpbmNyZW1lbnQgYnkgMVxyXG4vLyAgICBDcmVhdGUgZGl2IGVsZW1lbnQgd2l0aCBpZCAnY2VsbCdcclxuLy8gICAgQXBwZW5kIGNsYXNzIHZlcnRpY2FsW291dGVyIGxvb3AgaW5jcmVtZW50XVxyXG4vLyAgICBBcHBlbmQgY2xhc3MgaG9yaXpvbnRhbFtpbm5lciBsb29wIGluY3JlbWVudF1cclxuLy8gICAgQXBwZW5kIGRpdiBjZWxsIHRvIGJvYXJkXHJcbmNvbnN0IHVpID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCB2ZXJ0aWNhbCA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddXHJcblxyXG4gIGNvbnN0IGluaXRpYWxTZXR1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQobWFpbilcclxuICB9XHJcblxyXG4gIGNvbnN0IG1ha2VHcmlkID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGZvciAobGV0IG91dGVyID0gMTsgb3V0ZXIgPD0gMTA7IG91dGVyICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaW5uZXIgPSAxOyBpbm5lciA8PSAxMDsgaW5uZXIgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsICdjZWxsJylcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodmVydGljYWxbb3V0ZXIgLSAxXSlcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ04nICsgaW5uZXIudG9TdHJpbmcoKSlcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNlbGwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiB7IG1ha2VHcmlkLCBpbml0aWFsU2V0dXAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1aVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHVpIGZyb20gJy4vdWknXHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCdcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVCb2FyZCdcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcidcclxuXHJcbnVpLmluaXRpYWxTZXR1cCgpXHJcblxyXG5mdW5jdGlvbiBtYWtlIChnYW1lQm9hcmQgPSAnJykge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvYXJkJylcclxuICBib2FyZC5jbGFzc0xpc3QuYWRkKGdhbWVCb2FyZClcclxuICB1aS5tYWtlR3JpZChib2FyZClcclxuICByZXR1cm4gYm9hcmRcclxufVxyXG5cclxuY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoJ1BsYXllcicpXHJcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoJ0NvbXB1dGVyJylcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcclxubWFpbi5hcHBlbmRDaGlsZChtYWtlKHBsYXllckJvYXJkLm5hbWUpKVxyXG5tYWluLmFwcGVuZENoaWxkKG1ha2UoY29tcHV0ZXJCb2FyZC5uYW1lKSlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZWxsLkEnKS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NlbGwuQicpLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZWxsLkMnKS5jbGFzc0xpc3QuYWRkKCdzaGlwJylcclxuXHJcbmNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ1N1Ym1hcmluZScsIDMpXHJcblxyXG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLm5hbWUsIHN1Ym1hcmluZS5zaXplLCBbJ0QnLCA0XSlcclxucGxheWVyQm9hcmQuc3RvcmVTaGlwVmFyaWFibGUoc3VibWFyaW5lKVxyXG5cclxuZnVuY3Rpb24gY29sb3JCb2FyZCAoKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjYm9hcmQuUGxheWVyJylcclxuICBjb25zdCBjb2xvck1lID0gcGxheWVyQm9hcmQuZ2V0Q29vcmRzKClbMF1cclxuICBsZXQgcmlnaHRTcXVhcmVcclxuICBmb3IgKGxldCBpID0gY29sb3JNZS5ob3Jpem9udGFsWzBdOyBpIDw9IGNvbG9yTWUuaG9yaXpvbnRhbFsxXTsgaSArPSAxKSB7XHJcbiAgICBjb25zdCByaWdodFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdi4ke2NvbG9yTWUudmVydGljYWx9Lk4ke2l9YClcclxuICAgIHJpZ2h0U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxyXG4gIH1cclxuICByZXR1cm4gcmlnaHRTcXVhcmVcclxufVxyXG5cclxuY29sb3JCb2FyZCgpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==