import * as React from 'react';
import { View, Text, Button, Animated, StyleSheet, ScrollView, RefreshControl, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICommonTypeProps } from '../../common-type';

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: '5%',
    width: '90%',
    marginTop: 40,
    height: 40,
    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    width: 70,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  card: {
    width: '90%',
    marginLeft: '5%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'yellow',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SecondScreen: React.FC<ICommonTypeProps> = ({ navigation }) => {

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const diffClamp = Animated.diffClamp(scrollY, 0, 100);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  const marginTop = diffClamp.interpolate({
    inputRange: [0, 100],
    outputRange: [100, -100],
    extrapolate: 'identity',
  });


  const opacity = diffClamp.interpolate({
    inputRange: [50, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.card}>
        <Text>{`Card ${item}`}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginBottom: 30 }}>
      <Animated.View
        style={{
          zIndex: 100,
          width: '100%',
          alignItems: 'center',
          alignSelf: 'center',
          position: 'absolute',
          transform: [{ translateY }],
        }}>
        <Animated.View style={[styles.searchBar, { opacity }]}>
          <Text>Search Bar</Text>
        </Animated.View>
      </Animated.View>
      <Animated.FlatList
        style={{ marginTop }}
        // contentContainerStyle={{paddingTop: 150}}
        refreshControl={
          <RefreshControl
            tintColor="#fff"
            onRefresh={() => {
            }}
            refreshing={false}
          />
        }
        bounces={true}
        data={data}
        keyExtractor={(item) => item}
        scrollEventThrottle={16}
        renderItem={renderItem}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 0 && e.nativeEvent.contentOffset.y < height - 100) {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }
        }}
      />
    </View>
  );
};
