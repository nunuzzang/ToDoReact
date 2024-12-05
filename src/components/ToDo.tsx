import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import { BTN, LI } from "../component";


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