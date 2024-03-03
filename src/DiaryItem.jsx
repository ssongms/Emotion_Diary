import styled from "styled-components";
import React, { useContext, useState, useRef } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ id, author, content, created_date, emotion }) => {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false); // 수정 중인지, 아닌지를 확인함
  const toggleIsEdit = () => setIsEdit(!isEdit); // 기존의 isEdit 상태를 반전시킴
  const [localContent, setLocalContent] = useState(content);

  const localContentInput = useRef();
  const handleRemove = () => {
    console.log(id);
    if (window.confirm(`${id}번 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id} : 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <DiaryItemContainer>
      <AuthorInfo>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <DateInfo>{new Date(created_date).toLocaleString()}</DateInfo>
      </AuthorInfo>
      <DiaryContent>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => {
                setLocalContent(e.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </DiaryContent>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <DeleteButton onClick={handleRemove}>삭제하기</DeleteButton>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </DiaryItemContainer>
  );
};

export default React.memo(DiaryItem);

const DiaryItemContainer = styled.div`
  background-color: rgb(240, 240, 240);
  margin-bottom: 10px;
  padding: 20px;
`;

const AuthorInfo = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const DateInfo = styled.span`
  color: gray;
`;

const DiaryContent = styled.div`
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const DeleteButton = styled.button``;
