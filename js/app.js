/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Tabs/Tabs.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TabsControl = /*#__PURE__*/function () {
  function TabsControl(elem) {
    _classCallCheck(this, TabsControl);

    this.parent = '.tabs__';
    this.component = elem;
    this.tabsWrapButtons = this.component.querySelector("".concat(this.parent, "buttons"));
    this.tabsButtons = this.component.querySelectorAll('[data-tab-button]');
    this.tabContents = this.component.querySelectorAll('[data-tab-content]');
  } // Определяем активный tabs__button


  _createClass(TabsControl, [{
    key: "activeTabButton",
    value: function activeTabButton(dataTabButton) {
      this.tabsButtons.forEach(function (item) {
        item.classList.remove('js-active');
      });
      return this.component.querySelector("[data-tab-button='".concat(dataTabButton, "']")).classList.add('js-active');
    } // Определяем активный tabs__content

  }, {
    key: "activeTabContent",
    value: function activeTabContent(dataTabContent) {
      this.tabContents.forEach(function (item) {
        item.classList.remove('js-active');
      });
      return this.component.querySelector("[data-tab-content='".concat(dataTabContent, "']")).classList.add('js-active');
    } // Инициализация класса Tabs

  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.tabsWrapButtons.addEventListener('click', function (e) {
        var dataTabButton = e.target.dataset.tabButton;

        if (dataTabButton) {
          _this.activeTabButton(dataTabButton);

          _this.activeTabContent(dataTabButton);
        } // Горизонтальный подскролл к табу


        e.target.scrollIntoView({
          inline: 'center',
          block: 'nearest',
          behavior: 'smooth'
        });
      });
    }
  }]);

  return TabsControl;
}();

function Tabs() {
  var elem = document.querySelector('.tabs');

  if (elem) {
    new TabsControl(elem).init();
  }
}
;// CONCATENATED MODULE: ./src/app/app.js
 // подключение js компонентов

 // Вызов js после загрузки DOM дерева

window.addEventListener('DOMContentLoaded', function () {
  Tabs();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQU1BO0VBQ0wscUJBQVlDLElBQVosRUFBa0I7SUFBQTs7SUFDakIsS0FBS0MsTUFBTCxHQUFjLFNBQWQ7SUFDQSxLQUFLQyxTQUFMLEdBQWlCRixJQUFqQjtJQUNBLEtBQUtHLGVBQUwsR0FBdUIsS0FBS0QsU0FBTCxDQUFlRSxhQUFmLFdBQWdDLEtBQUtILE1BQXJDLGFBQXZCO0lBQ0EsS0FBS0ksV0FBTCxHQUFtQixLQUFLSCxTQUFMLENBQWVJLGdCQUFmLENBQWdDLG1CQUFoQyxDQUFuQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsS0FBS0wsU0FBTCxDQUFlSSxnQkFBZixDQUFnQyxvQkFBaEMsQ0FBbkI7RUFDQSxFQUVEOzs7OztXQUNBLHlCQUFnQkUsYUFBaEIsRUFBK0I7TUFDOUIsS0FBS0gsV0FBTCxDQUFpQkksT0FBakIsQ0FBeUIsVUFBQ0MsSUFBRCxFQUFVO1FBQ2xDQSxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixXQUF0QjtNQUNBLENBRkQ7TUFHQSxPQUFPLEtBQUtWLFNBQUwsQ0FBZUUsYUFBZiw2QkFBa0RJLGFBQWxELFNBQXFFRyxTQUFyRSxDQUErRUUsR0FBL0UsQ0FBbUYsV0FBbkYsQ0FBUDtJQUNBLEVBRUQ7Ozs7V0FDQSwwQkFBaUJDLGNBQWpCLEVBQWlDO01BQ2hDLEtBQUtQLFdBQUwsQ0FBaUJFLE9BQWpCLENBQXlCLFVBQUNDLElBQUQsRUFBVTtRQUNsQ0EsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsV0FBdEI7TUFDQSxDQUZEO01BR0EsT0FBTyxLQUFLVixTQUFMLENBQWVFLGFBQWYsOEJBQW1EVSxjQUFuRCxTQUF1RUgsU0FBdkUsQ0FBaUZFLEdBQWpGLENBQXFGLFdBQXJGLENBQVA7SUFDQSxFQUVEOzs7O1dBQ0EsZ0JBQU87TUFBQTs7TUFDTixLQUFLVixlQUFMLENBQXFCWSxnQkFBckIsQ0FBc0MsT0FBdEMsRUFBK0MsVUFBQ0MsQ0FBRCxFQUFPO1FBQ3JELElBQU1SLGFBQWEsR0FBR1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLFNBQXZDOztRQUVBLElBQUlYLGFBQUosRUFBbUI7VUFDbEIsS0FBSSxDQUFDWSxlQUFMLENBQXFCWixhQUFyQjs7VUFDQSxLQUFJLENBQUNhLGdCQUFMLENBQXNCYixhQUF0QjtRQUNBLENBTm9ELENBUXJEOzs7UUFDQVEsQ0FBQyxDQUFDQyxNQUFGLENBQVNLLGNBQVQsQ0FBd0I7VUFBRUMsTUFBTSxFQUFFLFFBQVY7VUFBb0JDLEtBQUssRUFBRSxTQUEzQjtVQUFzQ0MsUUFBUSxFQUFFO1FBQWhELENBQXhCO01BQ0EsQ0FWRDtJQVdBOzs7Ozs7QUFHSyxTQUFTQyxJQUFULEdBQWdCO0VBQ3RCLElBQU0xQixJQUFJLEdBQUcyQixRQUFRLENBQUN2QixhQUFULENBQXVCLE9BQXZCLENBQWI7O0VBRUEsSUFBSUosSUFBSixFQUFVO0lBQ1QsSUFBSUQsV0FBSixDQUFnQkMsSUFBaEIsRUFBc0I0QixJQUF0QjtFQUNBO0FBQ0Q7O0NDN0NEOztDQUdBOztBQUNBQyxNQUFNLENBQUNkLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0VBQ2pEVyxJQUFJO0FBQ0osQ0FGRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YWxvdGVrYS8uL3NyYy9jb21wb25lbnRzL1RhYnMvVGFicy5qcyIsIndlYnBhY2s6Ly9tZXRhbG90ZWthLy4vc3JjL2FwcC9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFic0NvbnRyb2wge1xuXHRjb25zdHJ1Y3RvcihlbGVtKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSAnLnRhYnNfXyc7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBlbGVtO1xuXHRcdHRoaXMudGFic1dyYXBCdXR0b25zID0gdGhpcy5jb21wb25lbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLnBhcmVudH1idXR0b25zYCk7XG5cdFx0dGhpcy50YWJzQnV0dG9ucyA9IHRoaXMuY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYi1idXR0b25dJyk7XG5cdFx0dGhpcy50YWJDb250ZW50cyA9IHRoaXMuY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRhYi1jb250ZW50XScpO1xuXHR9XG5cblx0Ly8g0J7Qv9GA0LXQtNC10LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSB0YWJzX19idXR0b25cblx0YWN0aXZlVGFiQnV0dG9uKGRhdGFUYWJCdXR0b24pIHtcblx0XHR0aGlzLnRhYnNCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnanMtYWN0aXZlJyk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYi1idXR0b249JyR7ZGF0YVRhYkJ1dHRvbn0nXWApLmNsYXNzTGlzdC5hZGQoJ2pzLWFjdGl2ZScpO1xuXHR9XG5cblx0Ly8g0J7Qv9GA0LXQtNC10LvRj9C10Lwg0LDQutGC0LjQstC90YvQuSB0YWJzX19jb250ZW50XG5cdGFjdGl2ZVRhYkNvbnRlbnQoZGF0YVRhYkNvbnRlbnQpIHtcblx0XHR0aGlzLnRhYkNvbnRlbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnanMtYWN0aXZlJyk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhYi1jb250ZW50PScke2RhdGFUYWJDb250ZW50fSddYCkuY2xhc3NMaXN0LmFkZCgnanMtYWN0aXZlJyk7XG5cdH1cblxuXHQvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQutC70LDRgdGB0LAgVGFic1xuXHRpbml0KCkge1xuXHRcdHRoaXMudGFic1dyYXBCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGNvbnN0IGRhdGFUYWJCdXR0b24gPSBlLnRhcmdldC5kYXRhc2V0LnRhYkJ1dHRvbjtcblxuXHRcdFx0aWYgKGRhdGFUYWJCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVUYWJCdXR0b24oZGF0YVRhYkJ1dHRvbik7XG5cdFx0XHRcdHRoaXMuYWN0aXZlVGFiQ29udGVudChkYXRhVGFiQnV0dG9uKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8g0JPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSDQv9C+0LTRgdC60YDQvtC70Lsg0Log0YLQsNCx0YNcblx0XHRcdGUudGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgaW5saW5lOiAnY2VudGVyJywgYmxvY2s6ICduZWFyZXN0JywgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJzKCkge1xuXHRjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMnKTtcblxuXHRpZiAoZWxlbSkge1xuXHRcdG5ldyBUYWJzQ29udHJvbChlbGVtKS5pbml0KCk7XG5cdH1cbn1cbiIsImltcG9ydCAnLi9hcHAuc2Nzcyc7XG5cbi8vINC/0L7QtNC60LvRjtGH0LXQvdC40LUganMg0LrQvtC80L/QvtC90LXQvdGC0L7QslxuaW1wb3J0IHsgVGFicyB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vLyDQktGL0LfQvtCyIGpzINC/0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCBET00g0LTQtdGA0LXQstCwXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0VGFicygpO1xufSk7XG4iXSwibmFtZXMiOlsiVGFic0NvbnRyb2wiLCJlbGVtIiwicGFyZW50IiwiY29tcG9uZW50IiwidGFic1dyYXBCdXR0b25zIiwicXVlcnlTZWxlY3RvciIsInRhYnNCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInRhYkNvbnRlbnRzIiwiZGF0YVRhYkJ1dHRvbiIsImZvckVhY2giLCJpdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZGF0YVRhYkNvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0YWJCdXR0b24iLCJhY3RpdmVUYWJCdXR0b24iLCJhY3RpdmVUYWJDb250ZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJpbmxpbmUiLCJibG9jayIsImJlaGF2aW9yIiwiVGFicyIsImRvY3VtZW50IiwiaW5pdCIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=