webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);


/***/ },

/***/ 42:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcMenu = __webpack_require__(3);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	__webpack_require__(39);
	
	__webpack_require__(42);
	
	var children = [];
	for (var i = 0; i < 20; i++) {
	  children.push(_react2['default'].createElement(
	    _rcMenu.Item,
	    { key: i + "" },
	    i
	  ));
	}
	_react2['default'].render(_react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(
	    'h2',
	    null,
	    'keyboard scrollable menu'
	  ),
	  _react2['default'].createElement(
	    _rcMenu2['default'],
	    { style: {
	        width: 200,
	        height: 200,
	        overflow: 'auto'
	      } },
	    children
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=scrollable.js.map