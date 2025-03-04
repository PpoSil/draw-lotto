import { Tabs } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

// const Layout = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Tabs />
//     </NavigationContainer>
//   );
// };

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: 'Home' }} />
      <Tabs.Screen
        name="draw-lotto/drawMain"
        options={{ tabBarLabel: 'Draw' }}
      />
      <Tabs.Screen
        name="draw-lotto/randomDraw"
        options={{ tabBarLabel: 'RandomDraw', href: null }}
        // href:null => 탭바에서 안 보이게 숨기기
      />
      <Tabs.Screen
        name="draw-lotto/selectDraw"
        options={{ tabBarLabel: 'RandomDraw', href: null }}
        // href:null => 탭바에서 안 보이게 숨기기
      />
      <Tabs.Screen
        name="draw-lotto/selectFiveDraw"
        options={{ tabBarLabel: 'RandomDraw', href: null }}
        // href:null => 탭바에서 안 보이게 숨기기
      />
      <Tabs.Screen
        name="settings/settings"
        options={{ tabBarLabel: 'Settings' }}
      />
    </Tabs>
  );
};

export default Layout;

// NavigationContainer independent={true}
// NavigatioonContainer이 중첩되었다는 내용이 있는데 아무리 봐도 여기 말고는 쓴 곳이 안 보임...
// independent={true} 이걸 넣으니까 해결되긴 함.
