import React from "react";

import { FlatList, SafeAreaView, TextInput, View } from "react-native";

import ProductCard from "../../widgets/product-card";

import { ProductDummyData } from "../../fake";
import { styles } from "./style";

type Product = {
  id: string;
  productName: string;
  productPrice: number;
  productAddedDate?: string;
  productCategory: string;
};

const HomeScreen: React.FC<Product> = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const filterProductsByName = (products: Product[]): Product[] => {
    if (searchValue) {
      return products?.filter(product => product.productName.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return products;
  };

  const filteredProducts: Product[] = filterProductsByName(ProductDummyData);

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={searchValue}
        onChangeText={text => setSearchValue(text)}
      />

      <View style={styles.homeScreen}>
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductCard
              card="default"
              id={item.id}
              productName={item.productName}
              productPrice={item.productPrice}
              productAddedDate={item.productAddedDate}
              productCategory={item.productCategory}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
