import React from "react";

import FeatureItem from "../FeatureItem/FeatureItem";

export default function FeatureCategory(props) {
  const { features, feature, idx } = props;

  const featureHash = feature + "-" + idx;
  const options = features[feature].map((item) => (
    <FeatureItem {...props} item={item} />
  ));

  return (
    <fieldset className='feature' key={featureHash}>
      <legend className='feature__name'>
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
