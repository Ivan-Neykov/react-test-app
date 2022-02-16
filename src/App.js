import React, { useState, useEffect } from "react";
import DateFormatter from "./DateFormatter";
import Button from "@tinqin/tinqin-ui-components/src/button/Button";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <DateFormatter locale="en" />
      <br />
      <DateFormatter />
      <br />
      <br />
      <DateFormatter milliseconds={100033} locale="en" />
      <br />
      <DateFormatter milliseconds={100033} />
    </div>
  );
};

export default App;
