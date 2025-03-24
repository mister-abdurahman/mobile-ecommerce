import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import InputField from "@/components/InputField";
import SocialLoginButtons from "@/components/SocialLoginButtons";

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign In",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Log In To Your Account</Text>
        <InputField
          placeholderTextColor={Colors.gray}
          placeholder="Email Address"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.dismissAll();
            router.push("/(tabs)");
          }}
        >
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.loginTextBox}>
          <Text style={styles.loginText}>Don't have an account? {""}</Text>
          <Link href={"/signup"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTextSpan}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.divider} />

        <SocialLoginButtons emailHref={"/signin"} />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: Colors.white,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
    alignSelf: "stretch",
    marginBottom: 15,
    fontSize: 16,
    color: Colors.black,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 7,
    alignSelf: "stretch",
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: "center",
  },
  loginTextBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  loginText: {
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTextSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider: {
    borderTopColor: Colors.lightGray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: "30%",
    marginBottom: 30,
  },
});
