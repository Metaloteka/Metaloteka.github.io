/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/layout/assets/images/icon-pin-map.svg
var icon_pin_map_namespaceObject = __webpack_require__.p + "images/icon-pin-map.svg";
;// CONCATENATED MODULE: ./src/layout/assets/images/icon-qr.svg
var icon_qr_namespaceObject = __webpack_require__.p + "images/icon-qr.svg";
;// CONCATENATED MODULE: ./src/layout/assets/images/map.jpg
var map_namespaceObject = __webpack_require__.p + "images/map.jpg";
;// CONCATENATED MODULE: ./src/pages/contacts/contact.js



var tabs = document.querySelectorAll('.js-tab');
var tabContents = document.querySelectorAll('.js-tab-content');
var btn = document.getElementById('btn');
tabs.forEach(function (tab, index) {
  tab.addEventListener('click', function (event) {
    tabContents.forEach(function (tabContent) {
      return tabContent.classList.remove('active');
    });
    tabs.forEach(function (tab) {
      return tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    tabContents[index].classList.add('active');
  });
});
btn.addEventListener('click', function () {
  var activeTabContent = document.querySelector('.js-tab-content.active');

  if (activeTabContent.classList.contains('opened')) {
    btn.innerHTML = 'Скрыть';
  } else {
    btn.innerHTML = 'Развернуть';
  }

  activeTabContent.classList.toggle('opened');
});
;// CONCATENATED MODULE: ./src/app/app.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Game = /*#__PURE__*/_createClass(function Game() {
  _classCallCheck(this, Game);

  _defineProperty(this, "name", 'Violin Charades');
});

new Game();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixDQUFiO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFwQjtBQUNBLElBQU1FLEdBQUcsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFFQUwsSUFBSSxDQUFDTSxPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0VBQzVCRCxHQUFHLENBQUNFLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFVBQUNDLEtBQUQsRUFBVztJQUN4Q1AsV0FBVyxDQUFDRyxPQUFaLENBQW9CLFVBQUNLLFVBQUQ7TUFBQSxPQUFnQkEsVUFBVSxDQUFDQyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixRQUE1QixDQUFoQjtJQUFBLENBQXBCO0lBQ0FiLElBQUksQ0FBQ00sT0FBTCxDQUFhLFVBQUNDLEdBQUQ7TUFBQSxPQUFTQSxHQUFHLENBQUNLLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixRQUFyQixDQUFUO0lBQUEsQ0FBYjtJQUVBSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JGLFNBQXBCLENBQThCRyxHQUE5QixDQUFrQyxRQUFsQztJQUNBWixXQUFXLENBQUNLLEtBQUQsQ0FBWCxDQUFtQkksU0FBbkIsQ0FBNkJHLEdBQTdCLENBQWlDLFFBQWpDO0VBQ0EsQ0FORDtBQU9BLENBUkQ7QUFVQVgsR0FBRyxDQUFDSyxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO0VBQ25DLElBQU1PLGdCQUFnQixHQUFHZixRQUFRLENBQUNnQixhQUFULENBQXVCLHdCQUF2QixDQUF6Qjs7RUFDQSxJQUFJRCxnQkFBZ0IsQ0FBQ0osU0FBakIsQ0FBMkJNLFFBQTNCLENBQW9DLFFBQXBDLENBQUosRUFBbUQ7SUFDbERkLEdBQUcsQ0FBQ2UsU0FBSixHQUFnQixRQUFoQjtFQUNBLENBRkQsTUFFTztJQUNOZixHQUFHLENBQUNlLFNBQUosR0FBZ0IsWUFBaEI7RUFDQTs7RUFDREgsZ0JBQWdCLENBQUNKLFNBQWpCLENBQTJCUSxNQUEzQixDQUFrQyxRQUFsQztBQUNBLENBUkQ7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7SUFDTUM7OztnQ0FDRTs7O0FBRVIsSUFBSUEsSUFBSixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YWxvdGVrYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRhbG90ZWthL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21ldGFsb3Rla2EvLi9zcmMvcGFnZXMvY29udGFjdHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9tZXRhbG90ZWthLy4vc3JjL2FwcC9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCAnLi4vLi4vbGF5b3V0L2Fzc2V0cy9pbWFnZXMvaWNvbi1waW4tbWFwLnN2Zyc7XG5pbXBvcnQgJy4uLy4uL2xheW91dC9hc3NldHMvaW1hZ2VzL2ljb24tcXIuc3ZnJztcbmltcG9ydCAnLi4vLi4vbGF5b3V0L2Fzc2V0cy9pbWFnZXMvbWFwLmpwZyc7XG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRhYicpO1xuY29uc3QgdGFiQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdGFiLWNvbnRlbnQnKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcblxudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG5cdHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdHRhYkNvbnRlbnRzLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHRhYkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXHRcdHRhYnMuZm9yRWFjaCgodGFiKSA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG5cdFx0ZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHR0YWJDb250ZW50c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdH0pO1xufSk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y29uc3QgYWN0aXZlVGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10YWItY29udGVudC5hY3RpdmUnKTtcblx0aWYgKGFjdGl2ZVRhYkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xuXHRcdGJ0bi5pbm5lckhUTUwgPSAn0KHQutGA0YvRgtGMJztcblx0fSBlbHNlIHtcblx0XHRidG4uaW5uZXJIVE1MID0gJ9Cg0LDQt9Cy0LXRgNC90YPRgtGMJztcblx0fVxuXHRhY3RpdmVUYWJDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xufSk7XG4iLCJpbXBvcnQgJy4vYXBwLnNjc3MnO1xuaW1wb3J0ICcuLi9wYWdlcy9jb250YWN0cy9jb250YWN0JztcbmNsYXNzIEdhbWUge1xuXHRuYW1lID0gJ1Zpb2xpbiBDaGFyYWRlcyc7XG59XG5uZXcgR2FtZSgpO1xuIl0sIm5hbWVzIjpbInRhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWJDb250ZW50cyIsImJ0biIsImdldEVsZW1lbnRCeUlkIiwiZm9yRWFjaCIsInRhYiIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFiQ29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJhY3RpdmVUYWJDb250ZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwiaW5uZXJIVE1MIiwidG9nZ2xlIiwiR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=