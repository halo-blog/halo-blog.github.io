function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import React, {
useRef,
useEffect,
Fragment,
useState } from
'https://cdn.skypack.dev/react';
import Prism from 'https://cdn.skypack.dev/prismjs';
import { Range } from 'https://cdn.skypack.dev/react-range';
import { render } from 'https://cdn.skypack.dev/react-dom';

// const { Prism } = window

const ROOT_NODE = document.querySelector('#app');

const getCode = (checked, values, sibling) => {
  let RESULT = `/* CSS */\n`;
  RESULT += `:checked ${sibling} .box${
  checked ? `:nth-of-type(${values})` : ''
  } {\n`;
  RESULT += `  --hue: 280;\n`;
  RESULT += `  animation: jump 1s infinite;\n`;
  return RESULT += '}';
};

const getCodeMarkup = code => {
  return Prism.highlight(code, Prism.languages.css, 'css');
};

const MARKUP = `
<!-- HTML -->
<input id="check" type="checkbox"/>
<div class="box"/>
<div class="box"/>
<div class="box"/>
<label for="check">Label</label>
`;

const HTML = Prism.highlight(MARKUP, Prism.languages.html, 'html');

const App = () => {
  const [values, setValues] = useState([1]);
  const [checked, setChecked] = useState(false);
  const [sibling, setSibling] = useState('+');
  const cssString = useRef(getCode(checked, values, sibling));
  const cssRef = useRef(getCodeMarkup(cssString.current));

  // useEffect(() => {
  //   cssRef.current = getCode(checked, values, sibling)
  // }, [checked, sibling, values])

  return /*#__PURE__*/(
    React.createElement("div", { className: "scene" }, /*#__PURE__*/
    React.createElement("div", { className: "result" }, /*#__PURE__*/
    React.createElement("pre", null, /*#__PURE__*/
    React.createElement("code", {
      className: "language-css",
      dangerouslySetInnerHTML: { __html: cssRef.current } }), /*#__PURE__*/

    React.createElement("code", {
      className: "language-html",
      dangerouslySetInnerHTML: { __html: HTML } })), /*#__PURE__*/


    React.createElement("div", { className: "result__render" }, /*#__PURE__*/
    React.createElement("input", { id: "check", type: "checkbox" }),
    new Array(3).fill().map((box, index) => /*#__PURE__*/
    React.createElement("div", { className: "box", key: index })), /*#__PURE__*/

    React.createElement("label", { className: "label-button", htmlFor: "check" }, "Label"))), /*#__PURE__*/




    React.createElement("div", { className: "controls" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "sibling" }, "Sibling Combinator"), /*#__PURE__*/
    React.createElement("select", {
      id: "sibling",
      onChange: e => {
        cssString.current = getCode(checked, values, e.target.value);
        cssRef.current = getCodeMarkup(cssString.current);
        setSibling(e.target.value);
      },
      value: sibling }, /*#__PURE__*/
    React.createElement("option", { value: "+" }, "Adjacent (+)"), /*#__PURE__*/
    React.createElement("option", { value: "~" }, "Sibling (~)")), /*#__PURE__*/

    React.createElement("label", { htmlFor: "select" }, "Select Sibling?"), /*#__PURE__*/
    React.createElement("input", {
      type: "checkbox",
      id: "select",
      checked: checked,
      onChange: e => {
        cssString.current = getCode(e.target.checked, values, sibling);
        cssRef.current = getCodeMarkup(cssString.current);
        setChecked(e.target.checked);
      } }),

    checked && /*#__PURE__*/
    React.createElement(Fragment, null, /*#__PURE__*/
    React.createElement("label", { htmlFor: "which" }, "Which Sibling?"), /*#__PURE__*/
    React.createElement(Range, {
      step: 1,
      min: 1,
      max: 3,
      id: "which",
      values: values,
      onChange: values => {
        cssString.current = getCode(checked, values, sibling);
        cssRef.current = getCodeMarkup(cssString.current);
        setValues(values);
      },
      renderTrack: ({ props, children }) => /*#__PURE__*/
      React.createElement("div", _extends({},
      props, {
        className: "slider-track",
        style: {
          ...props.style } }),

      children),


      renderThumb: ({ props }) => /*#__PURE__*/
      React.createElement("div", _extends({},
      props, {
        className: "slider-thumb",
        style: {
          ...props.style,
          borderRadius: '50%',
          outline: 'transparent',
          height: '44px',
          width: '44px' } })) }))), /*#__PURE__*/







    React.createElement("style", { dangerouslySetInnerHTML: { __html: cssString.current } })));


};

render( /*#__PURE__*/React.createElement(App, null), ROOT_NODE);