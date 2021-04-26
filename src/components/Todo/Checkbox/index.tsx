import StyledCheckbox from "./styles";

const CheckBox = ({
  checked = false,
  readOnly = false,
  onChange,
}: {
  checked?: boolean;
  readOnly?: boolean;
  onChange?: (val: boolean) => void;
}) => (
  <StyledCheckbox>
    <input
      type="checkbox"
      checked={checked}
      readOnly={readOnly}
      onChange={(e: any) => !readOnly && onChange && onChange(e?.target?.checked)}
    />
    <span onClick={() => !readOnly && onChange && onChange(!checked)} />
  </StyledCheckbox>
);

export default CheckBox;
