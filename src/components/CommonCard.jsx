import React from "react";
import { Image, Text, View } from "react-native";
// import { usePopularLocation } from "../hooks/usePopularLocation";
import { styles } from "../theme/styles";
// import { Loading } from "./Loading";

export const CommonCard = ({ item }) => {
  // const { isLoading } = usePopularLocation();
  return (
    <View style={styles.commonCardImgContainer}>
      {/* Se desactivó el loading porque realizaba más peticiones a la API que las permitidas en el plan gratuito */}
      {/* {isLoading ? (
        <View style={styles.commonCardImg}>
          <Loading />
        </View>
      ) : ( */}
      <Image
        source={{
          uri:
            item.images.length === 1
              ? item.images[0].source_url
              : item.images.length > 2
              ? item.images[0].sizes.medium.url
              : "https://www.quicideportes.com/assets/images/custom/no-image.png",
        }}
        style={styles.commonCardImg}
        resizeMode="cover"
      />
      {/* )} */}
      <View style={styles.commonCardContainer}>
<<<<<<< HEAD
        <Text
          style={styles.commonCardTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.name}
=======
        <Text style={styles.commonCardTitle}>
          {item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}
>>>>>>> e3863b0c805024addb6cffc722dedb4c839f4afb
        </Text>
        <Text style={styles.commonCardSnippet} numberOfLines={3}>
          {item.snippet}
        </Text>
      </View>
    </View>
  );
};
