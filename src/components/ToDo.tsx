import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import styled from "styled-components";


const LI = styled.li`
margin-bottom: 10px;
`;

const BTN = styled.button`
height: 30px;
border-radius: 10px;
margin: 0 3px;
background-color: #3E4B60;
border: none;
color: white;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
&:hover{
    animation: rotate 1s infinite;
}
@keyframes rotate {
    from {
        transform: rotate(0deg); /* 시작 각도 */
    }
    to {
        transform: rotate(360deg); /* 끝 각도 */
    }
}
`;


function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
            const newToDo = { text, id, category: name as any };
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1)];
        })
        if (name === "delete") {
            setToDos((oldToDos) => {
                const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
                return [
                    ...oldToDos.slice(0, targetIndex),
                    ...oldToDos.slice(targetIndex + 1)];
            })
        }
    };
    return (
        <LI>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <BTN name={Categories.DOING} onClick={onClick}>
                    Doing
                </BTN>
            )}
            {category !== Categories.TO_DO && (
                <BTN name={Categories.TO_DO} onClick={onClick}>
                    To Do
                </BTN>
            )}
            {category !== Categories.DONE && (
                <BTN name={Categories.DONE} onClick={onClick}>
                    Done
                </BTN>
            )}
            {(
                <BTN name="delete" onClick={onClick}>
                    delete
                </BTN>
            )}
        </LI>
    );
}

export default ToDo;