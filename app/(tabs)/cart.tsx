import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { router, Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import CartItem from "@/components/CartItem";
import { MyContext } from "../store/store";
import { formatNaira } from "@/utils/helper";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const CartScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const { cart, removeItemFromCart } = useContext(MyContext);

  function handleRemove(id: number) {
    removeItemFromCart(id);
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: "center",
        }}
      />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(300 + index * 100).duration(500)}
            >
              <CartItem
                key={item.id}
                id={item.id}
                onRemove={() => handleRemove(item.id)}
                image={item.img_url}
                name={item.name}
                price={item.price}
                quantity={item.quantity || 1}
              />
            </Animated.View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.priceInfoWrapper}>
          <Text style={styles.totalText}>Total: {formatNaira(total)}</Text>
        </View>
        {cart.length ? (
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => router.push("/")}
          >
            <Text style={styles.checkoutText}>Start Shopping</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "white",
  },
  priceInfoWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  totalText: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.black,
  },
  checkoutButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  checkoutText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
