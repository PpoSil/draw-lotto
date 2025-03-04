import { Link, useNavigation } from 'expo-router/build';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

// 전체 컨테이너
const Container = styled(View)`
  flex: 1;

  justify-content: center;
  align-items: center;

  gap: 50px;
`;

const SelectContainer = styled(TouchableOpacity)`
  width: 80%;
  height: 80px;

  padding: 10px;

  border: 1px solid black;
  border-radius: 15px;
`;

const DrawMainScreen = () => {
  const navigation = useNavigation();

  const goToRandomDraw = () => {
    navigation.navigate('draw-lotto/randomDraw');
  };

  const goToSelectDraw = () => {
    
  }

  return (
    <Container>
      <SelectContainer onPress={goToRandomDraw}>
        <Text>완전 랜덤으로 뽑기!</Text>
      </SelectContainer>
      <SelectContainer>
        <Text>내가 선택한 5개 이하 + 나머지 랜덤으로 뽑기!</Text>
      </SelectContainer>
      <SelectContainer>
        <Text>내가 선택한 숫자들 중 랜덤으로 뽑기!</Text>
      </SelectContainer>
    </Container>
  );
};

export default DrawMainScreen;
