import React from "react";

const DateFormatter = ({ milliseconds, locale }) => {
  const d = milliseconds ? new Date(milliseconds) : new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const date = d.toLocaleDateString(locale, options);
  const time = d.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return <span>{`${date} at ${time}`}</span>;
};

DateFormatter.defaultProps = {
  locale: "fr",
};

export default DateFormatter;
