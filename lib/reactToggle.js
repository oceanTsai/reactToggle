'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalUtil = require('general-util');

var _behaviorProxyOc = require('behavior-proxy-oc');

var _enumFactory = require('enum-factory');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TYPE = exports.TYPE = (0, _enumFactory.prefixCreate)(['SINGLE_TITLE_TOGGLE', 'MUTIL_TITLE_TOGGLE', 'RADIO_TITLE', 'SINGLE_TOGGLE', 'MUTIL_TOGGLE', 'RADIO'], 'ToggleButton');

/**
 * @author ocean
 * @name
 * @class
 * @description    
 * 
 */

var ToggleButtons = function (_Component) {
  _inherits(ToggleButtons, _Component);

  function ToggleButtons(props, context) {
    _classCallCheck(this, ToggleButtons);

    var _this = _possibleConstructorReturn(this, (ToggleButtons.__proto__ || Object.getPrototypeOf(ToggleButtons)).call(this, props, context));

    _this.state = {};
    _this.defaultClass = {
      button: 'ui label mini',
      active: 'ui label mini blue'
    };
    _this.style = {
      outline: 'none'
    };
    _this.onClickHandl = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(ToggleButtons, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(nextProps, nextState) {}
  }, {
    key: 'onClick',
    value: function onClick(e) {
      var _props = this.props,
          type = _props.type,
          onClick = _props.onClick,
          provider = _props.provider,
          valueKey = _props.valueKey,
          activeKey = _props.activeKey,
          activeVal = _props.activeVal,
          unActiveVal = _props.unActiveVal;

      var val = e.currentTarget.value;
      type == TYPE.SINGLE_TITLE_TOGGLE && (0, _behaviorProxyOc.singleToggleByTile)(provider, valueKey, val, activeKey, activeVal, unActiveVal); //, , , selectAll, unSelectAll
      type == TYPE.MUTIL_TITLE_TOGGLE && (0, _behaviorProxyOc.mutilToggleByTile)(provider, valueKey, val, activeKey, activeVal, unActiveVal);
      type == TYPE.RADIO_TITLE && (0, _behaviorProxyOc.radioByTile)(provider, valueKey, val, activeKey, activeVal, unActiveVal);
      type == TYPE.SINGLE_TOGGLE && (0, _behaviorProxyOc.singleToggle)(provider, valueKey, val, activeKey, activeVal, unActiveVal);
      type == TYPE.MUTIL_TOGGLE && (0, _behaviorProxyOc.mutilToggle)(provider, valueKey, val, activeKey, activeVal, unActiveVal);
      type == TYPE.RADIO && (0, _behaviorProxyOc.radio)(provider, valueKey, val, activeKey, activeVal, unActiveVal);
      this.forceUpdate(function () {
        (0, _generalUtil.hasVal)(onClick) && onClick(val, e);
      });
    }
  }, {
    key: 'itemRender',
    value: function itemRender(item, index) {
      var _props2 = this.props,
          labelKey = _props2.labelKey,
          valueKey = _props2.valueKey,
          activeKey = _props2.activeKey,
          activeVal = _props2.activeVal,
          type = _props2.type,
          buttonClass = _props2.buttonClass,
          activeClass = _props2.activeClass;

      var className = item[activeKey] == activeVal ? (0, _generalUtil.hasVal)(activeClass) ? activeClass : this.defaultClass.active : (0, _generalUtil.hasVal)(buttonClass) ? buttonClass : this.defaultClass.button;
      switch (type) {
        case TYPE.SINGLE_TITLE_TOGGLE:
        case TYPE.MUTIL_TITLE_TOGGLE:
        case TYPE.RADIO_TITLE:
          return _react2.default.createElement(
            'button',
            { key: (0, _generalUtil.toStr)(index) + item.valueKey + '1',
              className: className,
              value: item[valueKey],
              style: this.style,
              onClick: this.onClickHandl
            },
            item[labelKey]
          );
        case TYPE.SINGLE_TOGGLE:
        case TYPE.MUTIL_TOGGLE:
        case TYPE.RADIO:
          return _react2.default.createElement(
            'button',
            { key: (0, _generalUtil.toStr)(index) + item.valueKey + '2',
              className: className,
              value: item.source[valueKey],
              style: this.style,
              onClick: this.onClickHandl
            },
            item.source[labelKey]
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          provider = _props3.provider,
          itemRender = _props3.itemRender,
          className = _props3.className,
          style = _props3.style;

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        (0, _generalUtil.hasVal)(provider) && Array.isArray(provider) && provider.length > 0 ? provider.map(function (item, index) {
          return (0, _generalUtil.hasVal)(itemRender) ? itemRender(item, index) : _this2.itemRender(item, index);
        }) : null
      );
    }
  }]);

  return ToggleButtons;
}(_react.Component);

exports.default = ToggleButtons;


ToggleButtons.propTypes = {
  type: _react.PropTypes.string,
  provider: _react.PropTypes.object, // option list
  itemRender: _react.PropTypes.func,
  labelKey: _react.PropTypes.string,
  valueKey: _react.PropTypes.object,
  activeKey: _react.PropTypes.string,
  activeVal: _react.PropTypes.object,
  unActiveVal: _react.PropTypes.object,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  buttonClass: _react.PropTypes.string, //
  activeClass: _react.PropTypes.string, //active className
  onClick: _react.PropTypes.func
};

ToggleButtons.TYPE = TYPE;

if (!window.ToggleButtons) {
  window.ToggleButtons = ToggleButtons;
}