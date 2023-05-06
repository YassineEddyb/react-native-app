import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import InputError from "./InputError";

function FormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelect={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <InputError error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;
