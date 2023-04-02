// import "./form.input.styles.scss";
import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group >
        <Input {...otherProps} />
      {label && (
        <FormInputLabel
          // className={`${
          //   otherProps.value.length ? "shrink" : ""
          // } form-input-label`}
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
      
    </Group >
  );
};

export default FormInput;
