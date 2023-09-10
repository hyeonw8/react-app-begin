import { useState } from "react";
import {ColoredMessage} from "./components/ColoredMessage";

export const App = () => {
  console.log('rendering');

  const [num, setNum] = useState(0);

  const onClickButtonP = () => {
    setNum((prev) => prev + 1);
  }
  const onClickButtonM = () => {
    setNum((prev) => prev - 1);
  }


  return (
    <>
      <h1 style={{color: 'pink'}}>안녕하세요</h1>
      <ColoredMessage color='blue'>잘 지내시죠?</ColoredMessage>
      <ColoredMessage color='pink'>잘 지냅니다!</ColoredMessage>
      <button onClick={onClickButtonP}>+ 버튼</button>
      <button onClick={onClickButtonM}>- 버튼</button>
      <p>{num}</p>
    </>
  )
}