import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { FirstScreen } from './screen/first';
import { SecondScreen } from './screen/second';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props: {
  navigationProps: { toggleDrawer: () => void };
}) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const App = () => {
  const firstScreenStack = (navigation: any) => {
    return (
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{
            title: 'First Page', //Set Header Title
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: '#d82d8b', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  const secondScreenStack = (navigation: any) => {
    return (
      <Stack.Navigator
        initialRouteName="SecondScreen"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#d82d8b', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            title: 'Second Page', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        overlayColor="transparent"
        drawerStyle={{
          backgroundColor: 'white',
          width: 240,
        }}
        drawerContentOptions={{
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstScreen"
          options={{ drawerLabel: 'First' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondScreen"
          options={{ drawerLabel: 'Second' }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
