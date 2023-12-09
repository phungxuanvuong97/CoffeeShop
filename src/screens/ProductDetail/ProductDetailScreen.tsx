import CartIcon from "@/components/icons/CartIcon";
import LargeCupIcon from "@/components/icons/LargeCupIcon";
import LargeSugarCupIcon from "@/components/icons/LargeSugarCupIcon";
import { SIZES, icons, images } from "@/constants";
import React, { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SceneMap, TabView } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <Text>aasaaa</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <Text>aasaaa</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function ProductImageList() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: SIZES.width, height: SIZES.height }}
    />
  );
}

function ProductDetailScreen({ navigation, route }: any) {
  const { id, title } = route.params;
  const [quanlity, setQuanlity] = useState(0);
  const [sugar, setSugar] = useState(1);
  const [size, setSize] = useState(1);

  function addQuanlity() {
    setQuanlity(quanlity + 1);
  }

  function minusQuanlity() {
    if (quanlity > 0) {
      setQuanlity(quanlity - 1);
    }
  }

  function getSizeText(sizeIndex: any) {
    switch (sizeIndex) {
      case 1: {
        return "Small";
      }
      case 2: {
        return "Medium";
      }
      case 3: {
        return "Large";
      }
      default: {
        return "Small";
      }
    }
  }
  function getSugarPercentText(sizeIndex: any) {
    switch (sizeIndex) {
      case 1: {
        return "20%";
      }
      case 2: {
        return "30%";
      }
      case 3: {
        return "40%";
      }
      default: {
        return "Small";
      }
    }
  }

  function renderSizeSelection(quanlity: any) {
    let startingSize = 32;
    let steping = 8;
    const numberOfSize = 3;
    const listItem = [];

    for (let i = 1; i <= numberOfSize; i++) {
      let addedStyle = StyleSheet.create({
        productSizeIconItem: {
          borderColor: "#B98875",
          borderRadius: 10,
          borderWidth: 1,
          margin: 5,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      });

      if (quanlity == i) {
        listItem.push(
          <TouchableOpacity
            style={addedStyle.productSizeIconItem}
            onPress={() => {
              setSize(i);
            }}
          >
            <LargeCupIcon width={32} height={startingSize}></LargeCupIcon>
            <Text style={styles.productSizeIconItemText}>{getSizeText(i)}</Text>
          </TouchableOpacity>
        );
      } else {
        listItem.push(
          <TouchableOpacity
            style={styles.productSizeIconItem}
            onPress={() => {
              setSize(i);
            }}
          >
            <LargeCupIcon width={32} height={startingSize}></LargeCupIcon>
            <Text style={styles.productSizeIconItemText}>{getSizeText(i)}</Text>
          </TouchableOpacity>
        );
      }

      startingSize = startingSize + steping;
    }

    return <View style={styles.productIngradientIcon}>{listItem}</View>;
  }

  function renderSugarSelection(sugar: any) {
    let startingSize = 32;
    let steping = 8;
    const numberOfSize = 3;
    const listItem = [];

    for (let i = 1; i <= numberOfSize; i++) {
      let addedStyle = StyleSheet.create({
        productSizeIconItem: {
          borderColor: "#B98875",
          borderRadius: 10,
          borderWidth: 1,
          margin: 5,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      });

      if (sugar == i) {
        listItem.push(
          <TouchableOpacity
            style={addedStyle.productSizeIconItem}
            onPress={() => {
              setSugar(i);
            }}
          >
            <LargeSugarCupIcon
              width={32}
              height={startingSize}
            ></LargeSugarCupIcon>
            <Text style={styles.productSizeIconItemText}>
              {getSugarPercentText(i)}
            </Text>
          </TouchableOpacity>
        );
      } else {
        listItem.push(
          <TouchableOpacity
            style={styles.productIngradientIconItem}
            onPress={() => {
              setSugar(i);
            }}
          >
            <LargeSugarCupIcon
              width={32}
              height={startingSize}
            ></LargeSugarCupIcon>
            <Text style={styles.productSizeIconItemText}>
              {getSugarPercentText(i)}
            </Text>
          </TouchableOpacity>
        );
      }

      startingSize = startingSize + steping;
    }

    return <View style={styles.productSizeIcon}>{listItem}</View>;
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.productHeader}>
        <View style={styles.productHeaderTitle}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.productHeaderTitleIconBack}
          >
            <Image
              source={icons.left_icon}
              style={{ width: 28, height: 28 }}
            ></Image>
          </TouchableOpacity>
          <View style={styles.productHeaderTitleTextContainer}>
            <Text style={styles.productHeaderTitleTextContainerText}>
              {title}
            </Text>
          </View>
          <TouchableOpacity
            style={{ marginRight: SIZES.padding }}
            onPress={() => console.log("Pressed")}
          >
            <CartIcon width={28} height={28}></CartIcon>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.productDetails}>
        <View style={styles.productHeaderImageContainer}>
          <ImageBackground
            source={images.productBackground}
            style={styles.productHeaderImageContainerImagebackground}
          >
            <Image
              source={images.cabuchinoImage}
              resizeMode="contain"
              style={styles.productHeaderImageContainerImage}
            ></Image>
          </ImageBackground>
        </View>
        <View style={styles.productTitleContainer}>
          <Text style={styles.productTitleText}>{title}</Text>
          <View style={styles.productQuantity}>
            <TouchableOpacity
              style={styles.buttonContainerLeft}
              onPress={() => {
                minusQuanlity();
              }}
            >
              <Text style={styles.plusButtonText}>-</Text>
            </TouchableOpacity>
            <View style={styles.productQuanlityTextContainer}>
              <Text style={styles.productQuanlityText}>{quanlity}</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonContainerRight}
              onPress={() => {
                addQuanlity();
              }}
            >
              <Text style={styles.plusButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.productPriceText}>$ 5.59</Text>
        </View>
        <View>
          <Text style={styles.productSizeText}>Size</Text>
          {renderSizeSelection(size)}
        </View>
        <View>
          <Text style={styles.productIngradientText}>Sugar</Text>
          {renderSugarSelection(sugar)}
        </View>
        <TouchableOpacity style={styles.addToCartButtonContainer}>
          <Text style={styles.addToCartButtonText}>Add to card</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const tabBarHeight = SIZES.height / 16;

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FAF4EE",
    height: "100%",
    width: "100%",
    paddingTop: tabBarHeight,
  },
  productHeader: {
    display: "flex",
    flexDirection: "column",
  },
  productHeaderTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productHeaderTitleIconBack: {
    paddingLeft: SIZES.width / 30,
    flexGrow: 1,
  },
  productHeaderTitleTextContainer: {
    flexGrow: 9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: SIZES.width / 30,
  },
  productHeaderTitleTextContainerText: {
    color: "#000",
    fontSize: 22,
    fontstyle: "normal",
    fontweight: "500",
    lineheight: 32,
    letterSpacing: -0.32,
  },
  productHeaderImageContainer: {
    height: SIZES.height / 3,
    width: "100%",
    padding: 10,
  },
  productHeaderImageContainerImagebackground: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  productHeaderImageContainerImage: {
    width: SIZES.width / 2,
    height: SIZES.width / 3,
    marginTop: SIZES.height / 12,
    marginRight: SIZES.width / 4,
    marginBottom: SIZES.height / 12,
    marginLeft: SIZES.width / 4,
  },
  productDetails: {
    display: "flex",
    flexDirection: "column",
  },
  productTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.height / 22,
    alignItems: "center",
  },
  productTitleText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: -0.32,
    paddingLeft: SIZES.width / 20,
    paddingTop: SIZES.width / 22,
  },
  productQuantity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: SIZES.width / 22,
    //backgroundColor: "#B98875",
    borderRadius: 30,
    marginRight: 10,
    paddingRight: SIZES.width / 20,
    paddingLeft: SIZES.width / 20,
    alignContent: "center",
    alignItems: "center",
  },
  buttonContainerLeft: {
    padding: 3,
    backgroundColor: "#B98875",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  buttonContainerRight: {
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "#B98875",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  productQuanlityText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: -0.32,
    backgroundColor: "#D9D9D9",
    marginRight: 10,
    marginLeft: 10,
  },

  productQuanlityTextContainer: {
    fontFamily: "Inter",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: -0.32,
    backgroundColor: "#D9D9D9",
    padding: 3,
  },

  plusButtonText: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: -0.32,
    paddingLeft: 10,
    paddingRight: 10,
  },
  productPriceText: {
    color: "#B98875",
    fontFamily: "Inter",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 32,
    letterSpacing: -0.32,
    paddingLeft: SIZES.width / 20,
  },
  productSize: {
    display: "flex",
    flexDirection: "column",
  },
  productSizeText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 32,
    letterSpacing: -0.32,
    paddingLeft: SIZES.width / 20,
  },
  productSizeIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: SIZES.width / 20,
    alignItems: "flex-end",
  },
  productSizeIconItem: {
    margin: 5,
    padding: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  productSizeIconItemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#572908",
  },
  productIngradientText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 32,
    letterSpacing: -0.32,
    paddingLeft: SIZES.width / 20,
  },
  productIngradientIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: SIZES.width / 20,
    alignItems: "flex-end",
  },
  productIngradientIconItem: {
    margin: 5,
    padding: 2,
  },
  addToCartButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: SIZES.width / 20,
    backgroundColor: "#B98875",
    borderRadius: 40,
    marginLeft: SIZES.width / 5,
    marginRight: SIZES.width / 5,
  },
  addToCartButtonText: {
    padding: SIZES.width / 24,
    borderRadius: 10,
    color: "#fff",
    fontWeight: "400",
  },
});

export default ProductDetailScreen;
