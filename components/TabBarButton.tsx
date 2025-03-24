import { MyContext } from "@/app/store/store";
import { Colors } from "@/constants/Colors";
import { icon } from "@/constants/Icons";
import React, { useContext } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export type IconType =
  | "index"
  | "explore"
  | "notifications"
  | "cart"
  | "profile";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  isFocused: boolean;
  label: string;
  routeName: IconType;
};

function TabBarButton(props: Props) {
  const { onPress, onLongPress, isFocused, label, routeName } = props;
  const { cart } = useContext(MyContext);
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarBtn}
    >
      {routeName == "cart" && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>{cart.length}</Text>
        </View>
      )}
      {icon[routeName]({ color: isFocused ? Colors.primary : Colors.black })}
      <Text
        style={[styles.textStyle, { color: isFocused ? "#673ab7" : "#222" }]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  textStyle: {
    fontSize: 12,
  },
  badgeWrapper: {
    position: "absolute",
    backgroundColor: Colors.highlight,
    top: -7,
    right: 17,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10,
  },
  badgeText: {
    color: Colors.black,
    fontSize: 10,
  },
});
