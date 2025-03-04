import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 50px;

  margin-top: 50px;

  width: 100%;
`;

// 숫자 박스 컨테이너
const BoxContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 뽑기 + 리셋 버튼 컨테이너
const ButtonContainer = styled(View)`
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

const SelectedNumberContainer = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 30px;

  padding: 20px;

  width: 90%;
  height: 130px;

  border: 2px solid #ca4eb6;
  border-radius: 15px;
`;

// 6개까지
const SelectDraw = () => {
  const [text, setText] = useState('');
  const [selectedArr, setSelectedArr] = useState([]);
  const [selectedDrawArr, setSelectedDrawArr] = useState([]);

  // textinput 입력 핸들러
  const onChangeText = (text) => {
    setText(text);
    console.log(text);
  };

  // 원하는 숫자 제출 핸들러
  const selectedSubmitHandler = () => {
    if (text !== '') {
      const num = parseInt(text);
      if (
        !isNaN(num) &&
        num > 0 &&
        num <= 45 &&
        !selectedArr.includes(num) &&
        !(selectedArr.length === 6)
      ) {
        setSelectedArr([...selectedArr, num]);
        setText('');
      } else if (isNaN(num)) {
        // 숫자 포함 다른 문자 입력시 경고창
        Alert.alert('숫자를 입력해!');
      } else if (selectedArr.length === 6) {
        // 6개 다 채웠을 때
        Alert.alert('다 채웠어~');
      } else {
        Alert.alert('유효한 숫자를 입력해주세요 (1-45 사이)');
      }
    }
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

  const resetSelectedHandler = () => {
    setSelectedArr([]);
    setSelectedDrawArr([]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{ flex: 1 }}>
        <Container>
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
            returnKeyType="send"
            blurOnSubmit={false}
            onSubmitEditing={selectedSubmitHandler}
            keyboardType="numeric"
            onChangeText={onChangeText}
            value={text}
            placeholder={
              selectedArr.length === 6
                ? '다 입력했어~~~'
                : '너의 운명을 가룰 1~45사이의 숫자를 입력해!'
            }
            style={{
              backgroundColor: '#e2a7a7',
              padding: 10,
              borderRadius: 10,
            }}
            editable={selectedArr.length !== 6}
          />

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

          <ButtonContainer>
            <DrawButton onPress={selectedDrawHandler}>
              <ButtonText>나의 운을 확인하자~~~~</ButtonText>
            </DrawButton>
            <ResetButton onPress={resetSelectedHandler}>
              <ButtonText>리셋</ButtonText>
            </ResetButton>
          </ButtonContainer>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SelectDraw;
