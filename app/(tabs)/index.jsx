import { Text, View } from 'react-native';

import styled from 'styled-components/native';

const Test = styled.Text`
  color: red;
`;

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <Test>hello</Test>
      <Text>hihihihi</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
