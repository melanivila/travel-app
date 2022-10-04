import React from 'react';
import { Image, Text, View } from 'react-native';
import { screenWidth, SIZES } from '../theme/theme';

export const LoguedCard = ({ item }) => {

  return (
                <View
                    style={{
                    flexDirection: "row",
                    borderRadius: SIZES.radius,
                    width: 240 ,
                    marginHorizontal: 20,
                    justifyContent: 'center',
                    }}
                    >
                            <Image
                            source={{
                                uri: item.images[0].sizes.original.url
                            }}
                            style={{
                                width: 250,
                                height: 210,
                                borderRadius: SIZES.radius,
                                position: 'absolute'
                            }}
                            resizeMode="cover"
                            />
                            <View style={{
                                            flexDirection: "column",
                                            top: 105
                                        }}>
                                    <View style={{ 
                                        backgroundColor:"#05050599",
                                        width: 250,
                                        alignItems: "center",
                                        height: 105,
                                        borderRadius: SIZES.radius,
                                     }}>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{ item.name }</Text>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>{ item.snippet }</Text>
                                    </View>
                            </View>
                </View>
  )
};

