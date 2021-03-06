function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
    width: "1.5rem",
    height: "1.5rem"
  }} {...props}><path d="M18.6 11.4c-1.4.5-3 .4-4.4-.1l-10.5-4c-.5-.3-.9-.9-.6-1.5.2-.5 1-.8 1.5-.6l5.3 2.1 5.7-4c.5-.3 1.1-.4 1.6-.2l.6.2c.2.1.3.4.1.5l-4.7 4.8 3.7 1.4L19 9c.2-.1.4-.1.6 0l1.3.5c.2.1.3.4.1.6l-1.6 1.1c-.4 0-.6.2-.8.2zM15 19.3V18h4.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H15v-1.3c0-.8-.8-1.3-1.5-.9l-4.7 2.8c-.7.4-.7 1.3 0 1.7l4.7 2.8c.7.4 1.5-.1 1.5-.8z" /></svg>;
});