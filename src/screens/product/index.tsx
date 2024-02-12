import React from "react";
import { SafeAreaView, View } from "react-native";

import { AddToCartButton } from "../../features/cart/addToCart";

import Card from "../../widgets/product-card";

import { styles } from "./style";

type Product = {
  id: string;
  productName: string;
  productPrice: number;
  productAddedDate?: string;
  productCategory: string;
};

interface Props {
  route?: {
    params?: {
      product?: Product;
    };
  };
}

const ProductScreen: React.FC<Props> = ({ route }) => {
  const { product } = route?.params || {};

  return (
    <SafeAreaView>
      <View style={styles.productScreen}>
        {product && (
          <View style={styles.cardContainer}>
            <Card
              card="default"
              id={product.id}
              productName={product.productName}
              productPrice={product.productPrice}
              productAddedDate={product.productAddedDate}
              productCategory={product.productCategory}
            />

            <View>
              <AddToCartButton item={product} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
