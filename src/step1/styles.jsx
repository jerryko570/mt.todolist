import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const TodoCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  cursor: pointer;
  accent-color: #18181b;
`;

export const TodoContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TodoText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#9ca3af" : "#1f2937")};
  word-break: break-word;
`;

export const TodoActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TodoBadge = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => (props.completed ? "#f4f4f5" : "#fafafa")};
  color: ${(props) => (props.completed ? "#18181b" : "#71717a")};
  border: 1px solid #e4e4e7;
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  color: #71717a;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: colors 0.15s ease-in-out;
  outline: none;

  &:hover {
    background-color: #f4f4f5;
    color: #18181b;
  }
`;
