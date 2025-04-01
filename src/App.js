import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼 클릭 시 클릭 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 선택이 된다.
// 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀜(승-초록, 패-빨강, 비김-검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrczNxbDI2AOkXHQLA1fvA3IXFeK32Ns3Cg&s",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.toolnshop.kr/GoodsImg/24726/24726.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://thumbs.dreamstime.com/b/old-paper-scroll-isolated-white-29143669.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" item={userSelect} /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
