import { MyContext } from "@/app/store/store";
import { Colors } from "@/constants/Colors";
import { formatNaira } from "@/utils/helper";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type Props = {
  id: number;
  image: string;
  name: string;
  price: number;
  onRemove: () => void;
  quantity: number;
};

function CartItem({ image, name, price, onRemove, id, quantity }: Props) {
  const { adjustQuantityOfAProduct } = useContext(MyContext);
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <View style={styles.itemInfoWrapper}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemText}>{formatNaira(price)}</Text>

        <View style={styles.itemControlWrapper}>
          <TouchableOpacity onPress={onRemove}>
            <Ionicons name="trash-outline" size={20} color={"red"} />
          </TouchableOpacity>

          <View style={styles.quantityControlWrapper}>
            <TouchableOpacity
              style={styles.quantityControl}
              onPress={() => adjustQuantityOfAProduct(id, false)}
            >
              <Ionicons name="remove-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityControl}
              onPress={() => adjustQuantityOfAProduct(id, true)}
            >
              <Ionicons name="add-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Ionicons name="heart-outline" size={22} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    padding: 10,
    borderColor: Colors.lightGray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    marginHorizontal: 6,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemInfoWrapper: {
    flex: 1,
    alignSelf: "flex-start",
    gap: 10,
  },
  itemControlWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  quantityControlWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  quantityControl: {
    borderColor: Colors.lightGray,
    borderWidth: 1,
    padding: 2,
    borderRadius: 4,
  },
});

export default CartItem;
