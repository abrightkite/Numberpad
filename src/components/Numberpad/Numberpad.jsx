// 1.
// 2. persenter 파일에 hello world 간단한 텍스트 띄우는 컴포넌트 만든다
// 3. container 에서 presenter를 import하기
// 4. 화면에서 돌아가는지 확인
// 5. presenter 수정하면서 형태
// 6. 기능 개발은 container 에서 함수 -> prop으로
import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";

const Numberpad = ({
  onButtonPressed,
  phoneNumber,
  onClearButtonPressed,
  active,
  onRemoveButtonPressed,
}) => {
  return (
    <div className="wrap">
      <div className="container">
        <input className="view-box" type="text" defaultValue={phoneNumber} />
        <div className="pad">
          <button onClick={(e) => onButtonPressed(1)}>1</button>
          <button onClick={(e) => onButtonPressed(2)}>2</button>
          <button onClick={(e) => onButtonPressed(3)}>3</button>
          <button onClick={(e) => onButtonPressed(4)}>4</button>
          <button onClick={(e) => onButtonPressed(5)}>5</button>
          <button onClick={(e) => onButtonPressed(6)}>6</button>
          <button onClick={(e) => onButtonPressed(7)}>7</button>
          <button onClick={(e) => onButtonPressed(8)}>8</button>
          <button onClick={(e) => onButtonPressed(9)}>9</button>
          <button onClick={onClearButtonPressed}>X</button>
          <button onClick={(e) => onButtonPressed(0)}>0</button>
          <button onClick={onRemoveButtonPressed}>◀</button>
        </div>
      </div>
      <Link
        to={{
          pathname: "/result/:phoneNumber",
          state: { phoneNumber },
        }}
      >
        <button
          id="submit-btn"
          className={active ? "active-btn" : "unactive-btn"}
          disabled={!active}
        >
          제출
        </button>
      </Link>
    </div>
  );
};

export default Numberpad;
