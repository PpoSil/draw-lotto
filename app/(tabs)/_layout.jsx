import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;

  justify-content: center;
  align-items: center;

  gap: 50px;
`;

const NumberContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DrawButton = styled(TouchableOpacity)`
  justify-content: center;

  padding: 0 20px;

  height: 50px;

  border-radius: 10px;

  background-color: skyblue;
`;

const DrawText = styled(Text)`
  text-align: center;

  color: white;
`;

const NumberBox = styled(View)`
  justify-content: center;
  align-items: center;

  margin: 0 10px;

  width: 50px;
  height: 50px;

  border-radius: 50px;

  background-color: yellowgreen;
`;

const NumberText = styled(Text)`
  color: white;
`;

const PlusText = styled(Text)`
  margin: 0 10px;
`;

const TabsLayout = () => {
  // 랜덤 숫자 6개 상태
  const [randomArr, setRandomArr] = useState([
    '행',
    '운',
    '을',
    '빌',
    '어',
    '요',
  ]);

  // 랜덤 보너스 숫자 상태
  const [bonusNumb, setBonusNumb] = useState('!');

  // const [randomArr, setRandomArr] = useState(Array(6).fill(null))  // null로 채워넣기!

  const drawNumHandler = () => {
    const newRandomArr = [];
    let newBonusNumb = Math.floor(Math.random() * 45) + 1;

    // 랜덤 숫자 6개 뽑기
    while (newRandomArr.length < 6) {
      const randomNumb = Math.floor(Math.random() * 45) + 1;

      if (newRandomArr.includes(randomNumb)) {
        continue;
      } else {
        newRandomArr.push(randomNumb);
      }
    }
    newRandomArr.sort((a, b) => a - b);
    setRandomArr(newRandomArr); // randomArr 상태 업데이트!

    // 랜덤 숫자 제외 보너스 숫자 뽑기
    while (newRandomArr.includes(newBonusNumb)) {
      newBonusNumb = Math.floor(Math.random() * 45) + 1;
    }
    setBonusNumb(newBonusNumb);
  };

  return (
    <Container>
      <NumberContainer>
        {randomArr.map((num, index) => (
          <NumberBox key={index}>
            <NumberText>{num}</NumberText>
          </NumberBox>
        ))}
        <PlusText>+</PlusText>
        <NumberBox>
          <NumberText>{bonusNumb}</NumberText>
        </NumberBox>
      </NumberContainer>

      <DrawButton onPress={drawNumHandler}>
        <DrawText>일확천금 드가자~~</DrawText>
      </DrawButton>
    </Container>
  );
};

export default TabsLayout;
