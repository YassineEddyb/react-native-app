import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

import Screen from "../components/Screen";
import FormInput from "../components/FormInput";
import AppButton from "../components/AppButton";
import FormPicker from "../components/FormPicker";
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Forniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function ListringEdit(props) {
  const location = useLocation();

  return (
    <Screen
      style={{
        padding: 10,
      }}
    >
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormImagePicker name="images" />
            <FormInput maxLen={255} name="title" placeholder="Title" />
            <FormInput
              keyboardType="numric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <FormPicker
              items={categories}
              name="category"
              placeholder="Category"
            />
            <FormInput
              multiline
              maxLength={255}
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />

            <AppButton onSubmit={handleSubmit}>Post</AppButton>
          </>
        )}
      </Formik>
    </Screen>
  );
}

export default ListringEdit;
