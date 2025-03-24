import { Colors } from "@/constants/Colors";
import { IProduct } from "@/utils/type";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductItem from "./ProductItem";

type Props = {
  products: IProduct[];
};
function FlashSale({ products }: Props) {
  const saleEndDate = new Date();
  // saleEndDate.setDate(saleEndDate.getDate() + 2);
  saleEndDate.setFullYear(2025, 2, 22);
  saleEndDate.setHours(23, 59, 59);
  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // useEffect(() => {
  //   const calculateTimeUnits = (timeDifference: number) => {
  //     const seconds = Math.floor(timeDifference / 1000);
  //     setTimeUnits({
  //       days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
  //       hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
  //       minutes: Math.floor((seconds % (60 * 60)) / 60),
  //       seconds: seconds % 60,
  //     });
  //   };

  //   const updateCountDown = () => {
  //     const currentDate = new Date().getTime();
  //     const expiryTime = saleEndDate.getTime();
  //     const timeDifference = expiryTime - currentDate;

  //     if (timeDifference == 0) {
  //       calculateTimeUnits(0);
  //     } else {
  //       calculateTimeUnits(timeDifference);
  //     }
  //   };

  //   updateCountDown();
  //   const interval = setInterval(updateCountDown, 1000);

  //   return () => clearInterval(interval);
  // }, [saleEndDate, setTimeUnits]);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };
  return (
    <View>
      <View style={styles.titleWrapper}>
        <View style={{ flexDirection: "row", gap: 3 }}>
          <Text style={styles.title}>Flash Sales</Text>
          <View style={styles.timer}>
            <Ionicons name="time-outline" />
            <Text>{`${formatTime(timeUnits.days)}:${formatTime(
              timeUnits.hours
            )}:${formatTime(timeUnits.minutes)}:${formatTime(
              timeUnits.seconds
            )}`}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 20, paddingRight: 20 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <ProductItem item={item} index={index} />
          </View>
        )}
      />
    </View>
  );
}

export default FlashSale;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  timer: {
    borderRadius: 12,
    padding: 6,
    backgroundColor: "orange",
    fontSize: 12,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  item: {
    marginVertical: 10,
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },
});
