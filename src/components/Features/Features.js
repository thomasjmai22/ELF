import React from "react";

import FeatureCategory from "../FeatureCategory/FeatureCategory";

export default function Features(props) {
  const { features } = props;

  const featuresHTML = Object.keys(features).map((feature, idx) => (
    <FeatureCategory {...props} feature={feature} idx={idx} />
  ));

  return featuresHTML;
}
