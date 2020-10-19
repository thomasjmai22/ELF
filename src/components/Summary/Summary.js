import React from "react";

import SummaryItem from "../SummaryItem/SummaryItem";

export default function Summary(props) {
  const { selected } = props;

  const summaryHTML = Object.keys(selected).map((feature, idx) => (
    <SummaryItem {...props} feature={feature} idx={idx} />
  ));

  return summaryHTML;
}
