function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Alarm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alarmList: [
      {
        title: "Wake Up",
        time: "08:00",
        days: "Sun, Mon, Tue, Wed, Thu" },

      {
        title: "Lunch Time",
        time: "13:00",
        days: "Everyday" },

      {
        title: "Work",
        time: "16:30",
        days: "Fri, Sat" }] };



  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "background" }, /*#__PURE__*/
      React.createElement("div", { className: "app" }, /*#__PURE__*/
      React.createElement("div", { className: "app_header" }, /*#__PURE__*/
      React.createElement("div", { className: "bar" }), /*#__PURE__*/
      React.createElement("span", { className: "dot" })), /*#__PURE__*/

      React.createElement("div", { className: "alarms" }, /*#__PURE__*/
      React.createElement("label", null, "Your Alarms"), /*#__PURE__*/
      React.createElement("ul", { className: "alarm_list" },
      this.state.alarmList.map((item, index) => /*#__PURE__*/
      React.createElement(AlarmItem, {
        key: item.index,
        title: item.title,
        time: item.time,
        days: item.days })))), /*#__PURE__*/




      React.createElement("div", { className: "tabs_row" }, /*#__PURE__*/
      React.createElement("li", { className: "tab active" }, /*#__PURE__*/
      React.createElement("span", { className: "tab_name" }, "alarm")), /*#__PURE__*/

      React.createElement("li", { className: "tab" }, /*#__PURE__*/
      React.createElement("span", { className: "tab_name" }, "clock")), /*#__PURE__*/

      React.createElement("li", { className: "tab" }, /*#__PURE__*/
      React.createElement("span", { className: "tab_name" }, "timer"))))));





  }}


class AlarmItem extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handeToggle",





    () => {
      this.setState(prevState => ({
        status: !prevState.status }));

    });this.state = { status: false };}

  render() {
    return /*#__PURE__*/(
      React.createElement("li", { className: this.state.status ? "" : "off_style" }, /*#__PURE__*/
      React.createElement("p", { className: "title" }, this.props.title), /*#__PURE__*/
      React.createElement("div", { className: "time_row" }, /*#__PURE__*/
      React.createElement("span", { className: "time" }, this.props.time), /*#__PURE__*/
      React.createElement("button", { className: "switch", onClick: () => this.handeToggle() }, /*#__PURE__*/
      React.createElement("span", { className: "line" }, /*#__PURE__*/
      React.createElement("span", { className: this.state.status ? "circle on" : "circle" })))), /*#__PURE__*/



      React.createElement("p", { className: "days" }, this.props.days)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Alarm, null), document.getElementById("root"));