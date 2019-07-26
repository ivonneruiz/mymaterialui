var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import MuiButton from '@material-ui/core/Button';
const Button = (props) => {
    const { children } = props, rest = __rest(props, ["children"]);
    return (React.createElement(MuiButton, Object.assign({ className: "mystyle" }, rest), children));
};
export default Button;
