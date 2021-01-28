import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICommonTypeProps } from '../../common-type';
import Autocode from '../../logos/autocode.svg';

const styles = {
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  scrollView: {
    width: '100%',
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export const FirstScreen: React.FC<ICommonTypeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Autocode style={styles.logo} />
    </SafeAreaView>
  );
};
