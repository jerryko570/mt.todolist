import styled from "styled-components";

export const AppContainer = styled.div`
  width: 600px;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const NavContainer = styled.nav`
  background-color: white;
  padding: 20px 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e9ecef;
`;

export const NavContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const NavButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e4e4e7;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: colors 0.15s ease-in-out;
  background-color: ${(props) => (props.active ? "#18181b" : "white")};
  color: ${(props) => (props.active ? "white" : "#71717a")};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.active ? "#18181b" : "#f4f4f5")};
    color: ${(props) => (props.active ? "white" : "#18181b")};
  }
`;

export const TodoContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const TodoCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

export const InputContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  gap: 12px;
`;

export const TodoInput = styled.input`
  flex: 1;
  height: 48px;
  padding: 0 12px;
  border: 1px solid #e4e4e7;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease-in-out;
  background-color: white;
  color: #1f2937;
  caret-color: #18181b;

  &:focus {
    border-color: #18181b;
  }

  &::placeholder {
    color: #a1a1aa;
  }
`;

export const AddButton = styled.button`
  padding: 0 16px;
  height: 48px;
  background-color: #18181b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: colors 0.15s ease-in-out;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;

export const TodoList = styled.div`
  margin-bottom: 24px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  border: 1px dashed #d1d5db;
  border-radius: 6px;
  background-color: #fafafa;
`;

export const EmptyText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #71717a;
  font-weight: 500;
`;

export const EmptySubText = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #a1a1aa;
`;

export const TodoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e4e4e7;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: colors 0.15s ease-in-out;
  background-color: ${(props) => (props.active ? "#18181b" : "white")};
  color: ${(props) => (props.active ? "white" : "#71717a")};
  display: inline-flex;
  align-items: center;
  outline: none;

  &:hover {
    background-color: ${(props) => (props.active ? "#18181b" : "#f4f4f5")};
    color: ${(props) => (props.active ? "white" : "#18181b")};
  }
`;
