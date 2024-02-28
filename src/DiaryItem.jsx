import styled from "styled-components";

const DiaryItem = ({ id, author, content, created_date, emotion, onDelete }) => {
  return (
    <DiaryItemContainer>
      <AuthorInfo>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <DateInfo>{new Date(created_date).toLocaleString()}</DateInfo>
      </AuthorInfo>
      <DiaryContent>{content}</DiaryContent>
      <DeleteButton
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </DeleteButton>
    </DiaryItemContainer>
  );
};

export default DiaryItem;

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
