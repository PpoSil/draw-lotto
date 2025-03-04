import React, { useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 50px;

  margin-top: 50px;

  width: 100%;
`;

// 랜덤 숫자 컨테이너
const RandomNumberContainer = styled(View)`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

// 뽑기 + 리셋  버튼 컨테이너
const Buttoncontainer = styled(View)`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 50px;
`;

// 뽑기 버튼
const DrawButton = styled(TouchableOpacity)`
  justify-content: center;

  padding: 0 20px;

  height: 30px;

  border-radius: 10px;

  background-color: skyblue;
`;

// 리셋 버튼
const ResetButton = styled(TouchableOpacity)`
  justify-content: center;

  padding: 0 20px;

  height: 30px;

  border-radius: 10px;

  background-color: #e2a7a7;
`;

// 버튼 텍스트
const ButtonText = styled(Text)`
  text-align: center;
  color: white;
`;

const NumberBox = styled(View)`
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: yellowgreen;
`;

const NumberText = styled(Text)`
  color: white;
`;

const PlusText = styled(Text)`
  margin: 0 5px;
`;

const initGoodLuckText = ['행', '운', '을', '빌', '어', '요'];

const RandomDraw = () => {
  // 랜덤 숫자 6개 상태
  const [randomArr, setRandomArr] = useState(initGoodLuckText);
  // 랜덤 보너스 숫자 상태
  const [bonusNumb, setBonusNumb] = useState('!');

  // 랜덤 숫자 뽑기 핸들러
  const drawHandler = () => {
    const newRandomArr = [];
    let newBonusNumb = Math.floor(Math.random() * 45) + 1;

    while (newRandomArr.length < 6) {
      const randomNumb = Math.floor(Math.random() * 45) + 1;

      if (newRandomArr.includes(randomNumb)) {
        continue;
      } else {
        newRandomArr.push(randomNumb);
      }
    }
    newRandomArr.sort((a, b) => a - b);
    setRandomArr(newRandomArr);

    while (newRandomArr.includes(newBonusNumb)) {
      newBonusNumb = Math.floor(Math.random() * 45) + 1;
    }
    setBonusNumb(newBonusNumb);
  };

  // 랜덤 숫자 리셋 핸들러
  const resetDrawHandler = () => {
    setRandomArr(initGoodLuckText);
    setBonusNumb('!');
  };

  return (
    // 임의의 영역을 누르면 키보드 사라짐
    <Container>
      <RandomNumberContainer>
        {randomArr.map((num, index) => (
          <NumberBox key={index}>
            <NumberText>{num}</NumberText>
          </NumberBox>
        ))}
        <PlusText>+</PlusText>
        <NumberBox>
          <NumberText>{bonusNumb}</NumberText>
        </NumberBox>
      </RandomNumberContainer>

      <Buttoncontainer>
        <DrawButton onPress={drawHandler}>
          <ButtonText>일확천금 드가자~~</ButtonText>
        </DrawButton>
        <ResetButton onPress={resetDrawHandler}>
          <ButtonText>리셋</ButtonText>
        </ResetButton>
      </Buttoncontainer>
    </Container>
  );
};

export default RandomDraw;
