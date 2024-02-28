import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); //원래 데이터에 new 일기를 이어붙임
  };
  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
    console.log(`${targetId}가 삭제되었습니다.`);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList
        diaryList={data}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default App;
