import { Tabs } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

const Layout = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs />
    </NavigationContainer>
  );
};

export default Layout;

// NavigationContainer independent={true}
// NavigatioonContainer이 중첩되었다는 내용이 있는데 아무리 봐도 여기 말고는 쓴 곳이 안 보임...
// independent={true} 이걸 넣으니까 해결되긴 함.
