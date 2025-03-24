import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {};

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return <TextInput style={styles.inputField} {...props} />;
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 7,
    alignSelf: "stretch",
    marginBottom: 15,
    fontSize: 16,
    color: Colors.black,
  },
});
