import {
  TodoItemContainer,
  TodoCheckbox,
  TodoContent,
  TodoText,
  TodoActions,
  TodoBadge,
  DeleteButton,
} from "./styles";

// TODO: 1. props 구조분해할당으로 받기
const TodoItem = ({ todo, index, onToggle, onDelete }) => {
  return (
    <TodoItemContainer>
      {/* TODO: 2. 체크박스 구현 onChange 함수를 완성해봅시다. */}
      <TodoCheckbox
        type="checkbox"
        checked={todo.state === "완료"}
        onChange={() => {}}
      />

      <TodoContent>
        <TodoText completed={todo.state === "완료"}>
          {/* TODO: 3. 할 일 내용 표시 */}
        </TodoText>
      </TodoContent>

      <TodoActions>
        <TodoBadge completed={todo.state === "완료"}>
          {/* TODO: 5. 삼항 연산자를 이용하여 상태 표시 배지 */}
        </TodoBadge>

        {/* TODO: 6. 삭제 버튼 구현  onClick 함수를 완성해 봅시다.*/}
        <DeleteButton onClick={() => {}}>×</DeleteButton>
      </TodoActions>
    </TodoItemContainer>
  );
};

export default TodoItem;
