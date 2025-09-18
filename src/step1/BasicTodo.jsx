import { useState } from "react";
import TodoItem from "./TodoItem";
import "./BasicTodo.css";
import "../components/shared/styles.css";

const BasicTodo = () => {
  const [todoList, setTodoList] = useState([
    { job: "장보기", state: "완료" },
    { job: "산책하기", state: "미완료" },
  ]);
  // TODO: 1. 할 일 입력을 위한 state 생성
  const [todo, setTodo] = useState("");
  // TODO: 2. 할 일 추가 함수 구현
  const addTodo = () => {
    if (todo.trim() === "") return;
    const newTodo = { job: todo, state: "미완료" };
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  // TODO: 3. 완료/미완료 토글 함수 구현
  const onToggle = (index) => {
    setTodoList((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, state: item.state === "완료" ? "미완료" : "완료" }
          : item
      )
    );
  };
  // TODO: 4. 할 일 삭제 함수 구현 (여기까지 구현하기!)
  const deleteTodo = (index) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index));
  };

  // TODO: 5. Enter 키 처리 함수 (한국어 입력 고려)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.isComposing) {
      addTodo();
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        {/* TODO: 6. 입력 폼 구현 */}
        <div className="input-container">
          <input
            className="todo-input"
            type="text"
            placeholder="새로운 할 일을 입력하세요..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-button" onClick={addTodo}>
            추가
          </button>
        </div>

        <div className="todo-list">
          {todoList.length === 0 ? (
            <div className="empty-state">
              <p className="empty-text">할 일이 없습니다</p>
              <p className="empty-subtext">새로운 할 일을 추가해보세요</p>
            </div>
          ) : (
            <div className="todo-items">
              {todoList.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicTodo;
