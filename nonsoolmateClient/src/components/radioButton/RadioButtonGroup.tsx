import RadioButton, { RadioButtonProps, RadioButtonWrapper } from "@components/radioButton/RadioButton";
import { ChangeEvent } from "react";

interface RadioButtonGroupProps {
  options: RadioButtonProps[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButtonGroup({ options, onChange }: RadioButtonGroupProps) {
  function renderRadioButton() {
    return options.map(({ label, value, name }: RadioButtonProps) => {
      return <RadioButton label={label} name={name} value={value} onChange={onChange} checked={value === value} />;
    });
  }
  return <RadioButtonWrapper>{renderRadioButton()}</RadioButtonWrapper>;
}
