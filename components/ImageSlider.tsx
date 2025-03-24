import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ViewToken,
} from "react-native";
import Pagination from "./Pagination";

type Props = {
  ImageList: string[];
};

const width = Dimensions.get("screen").width;

function ImageSlider({ ImageList }: Props) {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index % ImageList.length);
    }
  };
  const viewabilityConfigPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View>
      <FlatList
        data={ImageList}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigPairs.current}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item }}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          </View>
        )}
      />
      <Pagination items={ImageList} paginationIndex={paginationIndex} />
    </View>
  );
}
const styles = StyleSheet.create({});

export default ImageSlider;
