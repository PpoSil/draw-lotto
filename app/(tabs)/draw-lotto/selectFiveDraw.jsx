import React, { useState } from 'react';
import { Alert } from 'react-native';

const SelectFiveDraw = () => {
  // 최대 5개 내가 원하는 숫자 입력하는 핸들러
  const selectedSubmitHandler = () => {
    // 내가 고른 숫자 상태
    // textinput
    const [text, setText] = useState('');
    // 최대 5개 내가 원하는 숫자 받은 배열
    const [selectedArr, setSelectedArr] = useState([]);
    // 원하는 숫자 + 랜덤 숫자 받은 배열
    const [selectedDrawArr, setSelectedDrawArr] = useState([]);

    // 최소 7 ~ 최대 15개 사이 숫자 받은 배열
    const [betweenSelectedArr, setBetweenSelectedArr] = useState([]);
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
  return <div>selectDraw</div>;
};

export default SelectFiveDraw;
