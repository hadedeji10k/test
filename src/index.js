import React from "react";
import { NodeResizeControl } from "@xyflow/react";
import {
  jsx as _jsx,
  Fragment as _Fragment,
  jsxs as _jsxs,
} from "react/jsx-runtime";
const GroupNode = () => {
  const resizerStyle = {
    width: "12px",
    height: "12px",
    border: "none",
    cursor: "se-resize",
  };
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      /*#__PURE__*/ _jsx(NodeResizeControl, {
        style: resizerStyle,
        color: "transparent",
        position: "bottom-right",
        minWidth: 400,
        minHeight: 400,
      }),
      /*#__PURE__*/ _jsx("div", {
        style: {
          fontSize: 12,
          color: "gray",
          width: "400px",
          height: "400px",
        },
        className: "node_container",
        children: /*#__PURE__*/ _jsx("div", {
          className: "node_label_container",
          children: /*#__PURE__*/ _jsx("span", {
            className: "node_label",
            style: {
              color: "gray",
            },
            children: "Group",
          }),
        }),
      }),
    ],
  });
};
export default GroupNode;
