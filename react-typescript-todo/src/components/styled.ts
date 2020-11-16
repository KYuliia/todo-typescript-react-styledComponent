import styled from 'styled-components';

export const Navbar = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const TodoForm = styled.div`
    margin-top: 2rem;
`;

export const TodoList = styled.div`
   .todo {
     margin-bottom: 1rem;
    };
   .todo.completed span {
     text-decoration: line-through;
    };
   .todo label {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     cursor: pointer;
     padding: 1rem;
     background: #f3f3f3;
    };
   .todo i {
     z-index: 2;
    }
`;