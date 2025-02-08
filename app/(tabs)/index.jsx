import { useNavigation } from 'expo-router/build';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    // 각 tabs들의 헤더 안 보이게
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <Text>hello</Text>
      <Text>hihihihi</Text>
    </View>
  );
};

export default HomeScreen;
