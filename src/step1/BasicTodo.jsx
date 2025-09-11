import { useState } from "react";
import TodoItem from "./TodoItem";
import {
  TodoContainer,
  TodoCard,
  InputContainer,
  TodoInput,
  AddButton,
  TodoList,
  EmptyState,
  EmptyText,
  EmptySubText,
  TodoItems,
} from "../components/shared/styles";

const BasicTodo = () => {
  const [todoList, setTodoList] = useState([
    { job: "장보기", state: "완료" },
    { job: "산책하기", state: "미완료" },
  ]);
  // TODO: 1. 할 일 입력을 위한 state 생성

  // TODO: 2. 할 일 추가 함수 구현
  const addTodo = () => {};

  // TODO: 3. 완료/미완료 토글 함수 구현
  const toggleTodoState = (index) => {};

  // TODO: 4. 할 일 삭제 함수 구현
  const deleteTodo = (index) => {};

  // TODO: 5. Enter 키 처리 함수 (한국어 입력 고려)
  const handleKeyDown = (e) => {};

  return (
    <TodoContainer>
      <TodoCard>
        {/* TODO: 6. 입력 폼 구현 */}
        <InputContainer>
          <TodoInput
            type="text"
            placeholder="새로운 할 일을 입력하세요..."
            value={""} // 1번의 state 적용
            onChange={(e) => {}} // 1번의 setState 적용
            onKeyDown={handleKeyDown}
          />
          <AddButton onClick={addTodo}>추가</AddButton>
        </InputContainer>

        {/* TODO: 7. 할 일 목록 렌더링 */}
        <TodoList>
          {todoList.length === 0 ? (
            <EmptyState>
              <EmptyText>할 일이 없습니다</EmptyText>
              <EmptySubText>새로운 할 일을 추가해보세요</EmptySubText>
            </EmptyState>
          ) : (
            <TodoItems>
              {todoList.map((todo, index) => (
                <TodoItem
                  key={index}
                  todo={todo}
                  index={index}
                  toggleTodoState={toggleTodoState}
                  deleteTodo={deleteTodo}
                />
              ))}
            </TodoItems>
          )}
        </TodoList>
      </TodoCard>
    </TodoContainer>
  );
};

export default BasicTodo;
