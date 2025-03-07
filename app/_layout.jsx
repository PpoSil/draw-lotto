import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import RandomDraw from './(tabs)/draw-lotto/randomDraw';

const RootSafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: #f5f4f2;
`;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootSafeView>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: 'transparent' },
          headerShown: false, // (tabs) 헤더 안 보이게
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="back" />
    </RootSafeView>
  );
}
