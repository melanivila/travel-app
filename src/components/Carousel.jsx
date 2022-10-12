import React from "react";
import { Image, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { styles } from "../theme/styles";
import { COLORS } from "../theme/theme";

export const Carousel = ({ carouselImages, children }) => {
  return (
    <View style={styles.carouselShadow}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        // keyExtractor={(item) => item.id}
        data={carouselImages}
        renderItem={({ item }) => (
          <View style={styles.carouselImgContainer} key={item.id}>
            <Image
              style={styles.carouselImg}
              source={{ uri: item.sizes.medium.url }}
              resizeMode="cover"
            />
          </View>
        )}
        showPagination
        paginationStyleItem={styles.pagination}
        paginationActiveColor={COLORS.white}
        paginationDefaultColor={COLORS.transparentWhite2}
      />
      {children}
    </View>
  );
};
