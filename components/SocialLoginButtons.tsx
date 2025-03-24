import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Google from "@/assets/images/google-logo.svg";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  emailHref: Href<string | object>;
};

const SocialLoginButtons = (props: Props) => {
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(500).duration(300)}>
        <Link href={props.emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(300)}>
        <Link href={props.emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Google width={20} height={20} />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(1100).duration(300)}>
        <Link href={props.emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-apple" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Continue with Apple</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </View>
  );
};

export default SocialLoginButtons;

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 15,
    gap: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
});
