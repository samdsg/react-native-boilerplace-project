import * as React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

export type QuizRoutes = {
  ProductList: undefined;
  ProductDetails: undefined;
  ProductCart: undefined;
};

export const ProductStack = createSharedElementStackNavigator<QuizRoutes>();

export const ProductNavigator = () => (
  <ProductStack.Navigator initialRouteName="ProductList">
    <ProductStack.Screen
      name="ProductList"
      options={{headerShown: false}}
      component={ProductList}
    />
    <ProductStack.Screen name="ProductDetails" component={ProductDetails} />
  </ProductStack.Navigator>
);
