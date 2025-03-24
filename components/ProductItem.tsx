import { Colors } from "@/constants/Colors";
import { IProduct } from "@/utils/type";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  item: IProduct;
  index: number;
};

const width = Dimensions.get("window").width - 40;

function ProductItem({ item, index }: Props) {
  return (
    <Link href={`/product-details/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.container}
          entering={FadeInDown.delay(300 + index * 100).duration(300)}
        >
          <Image source={{ uri: item.img_url }} style={styles.productImg} />
          <TouchableOpacity style={styles.bookmarkBtn}>
            <Ionicons name="heart-outline" size={22} color={Colors.black} />
          </TouchableOpacity>
          <View style={styles.productInfo}>
            <Text style={styles.price}></Text>
            <View style={styles.ratingWrapper}>
              <Ionicons name="star" size={20} color={"#D4AF37"} />
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>
          <Text style={styles.title}>{item.name}</Text>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  productImg: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.1,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    fontSize: 14,
    color: Colors.gray,
  },
});
