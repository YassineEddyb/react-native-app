import React from "react";
import { View, StyleSheet } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri, idx) => (
        <ImageInput
          key={idx}
          imageUri={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}
      {imageUris.length < 3 && (
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
});

export default ImageInputList;
