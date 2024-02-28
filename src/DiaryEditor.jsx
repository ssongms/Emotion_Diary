import { useState, useRef } from "react";
import styled from "styled-components";

const DiaryEditor = ({ onCreate }) => {
  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state, // 스프레드 연산자 '...'
      [e.target.name]: e.target.value, //괄호 표기법
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //   alert("작성자는 최소 1글자 이상 입력해주세요.");
      authorInput.current.focus();
      return; // 더이상 진행되지 않도록 막음
    }
    if (state.content.length < 5) {
      //   alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("일기를 저장했습니다.");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <DiaryEditorContainer>
      <h2>오늘의 일기</h2>
      <div>
        <InputAuthor
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <InputContent
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <SelectEmotion
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </SelectEmotion>
      </div>
      <div>
        <SaveButton onClick={handleSubmit}>일기 저장하기</SaveButton>
      </div>
    </DiaryEditorContainer>
  );
};

export default DiaryEditor;

// 객체의 값을 바꾸려면 새로운 객체를 전달해줘야 한다. (author는 바뀌지 않고, content만 바꿔야 함)

const DiaryEditorContainer = styled.div`
  border: 1px solid gray;
  texgt-align: center;
  padding: 20px;
`;

const InputAuthor = styled.input`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
`;

const InputContent = styled.textarea`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
  height: 150px;
`;

const SelectEmotion = styled.select`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
`;

const SaveButton = styled.button`
  width: 500px;
  padding: 10px;
  cursor: pointer;
`;
