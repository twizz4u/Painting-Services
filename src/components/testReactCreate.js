import React, { createElement } from "react";

export const Reactcre = React.createElement(
  "div",
  { style: { backgroundColor: "yellow" } },
  React.createElement("h1", null, "first Element"),
  React.createElement(
    "h2",
    { style: { color: "red" }, className: "subheading" },
    "second Element"
  )
);
