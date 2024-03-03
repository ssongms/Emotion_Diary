import styled from "styled-components";
import DiaryItem from "./DiaryItem";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "./App";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  return (
    <DiaryListContainer>
      <DiaryListHeader>일기 리스트</DiaryListHeader>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem
            key={it.id}
            {...it}
          />
        ))}
      </div>
    </DiaryListContainer>
  );
};

export default DiaryList;

const DiaryListContainer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin-top: 20px;
`;

const DiaryListHeader = styled.h2`
  text-align: center;
`;
