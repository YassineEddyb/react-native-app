import React from "react";
import { useFormikContext } from "formik";

import AppInput from "../components/AppInput";
import InputError from "../components/InputError";

function FormInput({ name, ...props }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <AppInput
        {...props}
        autoCapitalize="none"
        autoCorrect={false}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <InputError visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormInput;
