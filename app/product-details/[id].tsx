import ImageSlider from "@/components/ImageSlider";
import { Colors } from "@/constants/Colors";
import { useProductById } from "@/hooks/useProductById";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";
import { MyContext } from "../store/store";
import { formatNaira } from "@/utils/helper";

const previewSliders = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeiLaGmYKxw-9b6rkVhPyLTfrU34-lRfZIw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6yf8TN1IjJp7GGSWaF0uTzH1FSKORJ7PyQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mND9ve-OMkHiBxbzN_5CGsfgmKb8yb5r3A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTbZZUZ86mZYVN9n5W1qFCfFiJBL5D-VamQ&s",
];

function ProductDetails() {
  const { id } = useLocalSearchParams();
  const { product, isLoading } = useProductById(+id);
  const { addItemToCart } = useContext(MyContext);

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );

  const headerHeight = useHeaderHeight();

  function handleAddToCart() {
    if (!product) return;
    addItemToCart({
      id: product?.id,
      name: product?.name,
      price: product?.price,
      img_url: product?.img_url,
      quantity: 1,
    });

    router.push("/cart");
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: product?.name,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView style={{ marginTop: headerHeight, marginBottom: 90 }}>
        <View>
          <Animated.View entering={FadeInDown.delay(300).duration(500)}>
            <ImageSlider ImageList={previewSliders} />
          </Animated.View>

          <View style={styles.container}>
            <Animated.View
              style={styles.ratingWrapper}
              entering={FadeInDown.delay(500).duration(500)}
            >
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={18} color={"#d4af37"} />
                <Text style={styles.rating}>
                  4.8 <Text style={styles.ratingNumber}>(35)</Text>
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={22} color={"#d4af37"} />
              </TouchableOpacity>
            </Animated.View>

            <Animated.Text
              style={styles.productName}
              entering={FadeInDown.delay(700).duration(500)}
            >
              {product?.name}
            </Animated.Text>

            <Animated.View
              entering={FadeInDown.delay(900).duration(500)}
              style={styles.priceWrapper}
            >
              <Text style={styles.price}>
                {formatNaira(Number(product?.price))}
              </Text>
              <View style={styles.priceDiscount}>
                <Text style={{ color: Colors.primary, fontSize: 12 }}>
                  20% off
                </Text>
              </View>
              <Text style={styles.oldPrice}>
                {formatNaira(
                  Number(product?.price) + Number(product?.price) * 0.2
                )}
              </Text>
            </Animated.View>

            <Animated.Text
              entering={FadeInDown.delay(1100).duration(500)}
              style={styles.description}
            >
              {product?.description}
            </Animated.Text>

            <Animated.View
              entering={FadeInDown.delay(1300).duration(500)}
              style={styles.productVariationWrapper}
            >
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Color</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={{
                      borderColor: Colors.primary,
                      borderWidth: 1,
                      borderRadius: 100,
                      padding: 2,
                    }}
                  >
                    <View
                      style={[
                        styles.productVariationColorValue,
                        { backgroundColor: "#007BFF" },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#FF5733" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#28C76F" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#8E44AD" },
                    ]}
                  />
                </View>
              </View>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Size</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={[
                      styles.productVariationSizeValue,
                      { borderColor: Colors.primary },
                    ]}
                  >
                    <Text
                      style={[
                        styles.productVariationSizeValueText,
                        { color: Colors.primary, fontWeight: "bold" },
                      ]}
                    >
                      S
                    </Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>M</Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>X</Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>XL</Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          </View>
        </View>
      </ScrollView>

      <Animated.View
        style={styles.buttonWrapper}
        entering={SlideInDown.delay(500).duration(500)}
      >
        <TouchableOpacity
          onPress={handleAddToCart}
          style={[
            styles.button,
            {
              backgroundColor: Colors.white,
              borderColor: Colors.primary,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: Colors.primary }]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ratingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray,
  },
  ratingNumber: {
    color: Colors.lightGray,
  },
  productName: {
    fontSize: 22,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  priceDiscount: {
    backgroundColor: Colors.extraLightGray,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  price: {
    fontSize: 14,
    color: Colors.black,
  },
  oldPrice: {
    fontSize: 14,
    color: Colors.lightGray,
    textDecorationLine: "line-through",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  productVariationWrapper: {
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
  },
  productVariationType: {
    width: "50%",
    gap: 5,
    marginBottom: 10,
  },
  productVariationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  productVariationValueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray,
  },
  productVariationSizeValue: {
    width: 40,
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.extraLightGray,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  productVariationSizeValueText: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.black,
  },
  buttonWrapper: {
    position: "absolute",
    height: 60,
    padding: 20,
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    gap: 5,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
});
