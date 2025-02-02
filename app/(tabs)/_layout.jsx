import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
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

// 숫자 컨테이너
const NumberContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 숫자 박스 컨테이너
const BoxContainer = styled(View)`
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

const Line = styled(View)`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const SelectedNumberContainer = styled(View)`
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  gap: 30px;

  padding: 20px;

  width: 50%;
  height: 130px;

  border: 2px solid #ca4eb6;
  border-radius: 15px;
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

  // 내가 고른 숫자 상태
  // textinput
  const [text, setText] = useState('');
  // 최대 5개 내가 원하는 숫자 받은 배열
  const [selectedArr, setSelectedArr] = useState([]);
  // 원하는 숫자 + 랜덤 숫자 받은 배열
  const [selectedDrawArr, setSelectedDrawArr] = useState([]);

  // 최소 7 ~ 최대 15개 사이 숫자 받은 배열
  const [betweenSelectedArr, setBetweenSelectedArr] = useState([]);

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
    setRandomArr(['행', '운', '을', '빌', '어', '요']);
    setBonusNumb('!');
  };

  // textinput 입력 핸들러
  const onChangeText = (text) => {
    setText(text);
    console.log(text);
  };

  // 최대 5개 내가 원하는 숫자 입력하는 핸들러
  const selectedSubmitHandler = () => {
    // 5개 이상 입력시 예외처리
    if (selectedArr.length >= 5) {
      setText('');
      return Alert.alert('5개를 모두 입력하였습니다.');
    }

    // 중복된 숫자 예외처리
    if (selectedArr.includes(text)) {
      setText('');
      return Alert.alert('중복된 값입니다.');
    }

    // 1~45가 아닌 경우 예외처리
    if (text > 45 || text < 1) {
      setText('');
      return Alert.alert('1~45사이의 숫자를 입력해주세요.');
    }

    // 물어보기!!
    setSelectedArr((prevSelectedNumb) => [...prevSelectedNumb, text]);
    console.log(selectedArr);

    setText('');
  };

  // 내가 고른 숫자로 뽑기 핸들러
  const selectedDrawHandler = () => {
    // 빈 배열이면 예외처리
    if (selectedArr.length === 0) {
      return Alert.alert('숫자가 비었어!! 채워줘~~');
    }

    // 1개라도 있으면
    if (selectedArr.length !== 0) {
      // 새로운 배열에 기존에 고른 숫자들 넣어주기
      const newRandomArr = [...selectedArr];

      while (newRandomArr.length < 6) {
        let newNumber = Math.floor(Math.random() * 45) + 1;

        if (newRandomArr.includes(newNumber)) {
          continue;
        } else {
          newRandomArr.push(newNumber);
        }
      }
      newRandomArr.sort((a, b) => a - b);
      setSelectedDrawArr(newRandomArr);
    }
    console.log(selectedArr);
  };

  // 내가 고른 숫자 뽑기 리셋 핸들러
  const resetSelectedHandler = () => {
    setSelectedArr([]);
    setSelectedDrawArr([]);
  };

  return (
    // 임의의 영역을 누르면 키보드 사라짐
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{ flex: 1 }}>
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

          <Line />

          <SelectedNumberContainer>
            <Text>내가 고른 숫쟈~~</Text>
            <BoxContainer>
              {selectedArr?.length > 0
                ? selectedArr.map((num, index) => (
                    <NumberBox key={index}>
                      <NumberText>{num}</NumberText>
                    </NumberBox>
                  ))
                : null}
            </BoxContainer>
          </SelectedNumberContainer>

          <TextInput
            returnKeyType="send" // '완료'키를 '보내기' 키로 변경
            blurOnSubmit={false} // 키보드 안 사라지게!
            onSubmitEditing={selectedSubmitHandler}
            keyboardType="numeric" // 숫자만 입력 가능하게!!
            onChangeText={onChangeText}
            value={text}
            placeholder="너의 운명을 가를 1~45 사이의 숫자 입력해줘~!"
          />
          {/* <TouchableOpacity onPress={selectedNumbSubmitHandler}>
          <Text>제출하쟈?</Text>
        </TouchableOpacity> */}

          <SelectedNumberContainer>
            <Text>두근두근</Text>
            <BoxContainer>
              {selectedDrawArr?.length > 0
                ? selectedDrawArr.map((num, index) => (
                    <NumberBox key={index}>
                      <NumberText>{num}</NumberText>
                    </NumberBox>
                  ))
                : null}
            </BoxContainer>
          </SelectedNumberContainer>

          <Buttoncontainer>
            <DrawButton onPress={selectedDrawHandler}>
              <ButtonText>나의 운을 확인하자~~~~</ButtonText>
            </DrawButton>
            <ResetButton onPress={resetSelectedHandler}>
              <ButtonText>리셋</ButtonText>
            </ResetButton>
          </Buttoncontainer>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default TabsLayout;
