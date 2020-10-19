import React from "react";

export default function SummaryItem(props) {
  const { USCurrencyFormat, selected, feature, idx } = props;
  const featureHash = feature + "-" + idx;
  const selectedOption = selected[feature];

  return (
    <div className='summary__option' key={featureHash}>
      <div className='summary__option__label'>{feature} </div>
      <div className='summary__option__value'>{selectedOption.name}</div>
      <div className='summary__option__cost'>
        {USCurrencyFormat.format(selectedOption.cost)}
      </div>
    </div>
  );
}
