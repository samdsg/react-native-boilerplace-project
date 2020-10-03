import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/* Utils */
import theme from './src/components/theme';
import {createStackNavigator} from '@react-navigation/stack';

/* Routes */
import {ProductNavigator} from './src/components/Products';

enableScreens();

type SharedStackParams = {
  Product: undefined;
};

const AppStack = createStackNavigator<SharedStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider {...{theme}}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Product" component={ProductNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
