import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "하마",
    content: "좋다",
    emotion: 5,
    created_date: new Date().getTime(), // 시간 객체 생성 (현재 시간을 기준으로 ms로 변환하여 저장)
  },
  {
    id: 2,
    author: "홍길동",
    content: "좋다",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "감자",
    content: "그냥 그래",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "고구마",
    content: "별로야",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "딸기",
    content: "별로야",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default App;
