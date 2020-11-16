import React, { useRef } from 'react';
import * as Styled from './styled';
interface TodoFormProps {
    onAdd(title: string): void
}
export const TodoForm: React.FC<TodoFormProps> = props => {
    const ref = useRef<HTMLInputElement>(null)
    const onKeyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }
    return (
        <Styled.TodoForm className="input-field">
            <input ref={ref} onKeyPress={onKeyPressHandler} type="text" id="title" />
            <label htmlFor="title" className="active"> Enter.....</label>
        </Styled.TodoForm >
    )
}