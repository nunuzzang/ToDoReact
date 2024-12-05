import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";
import { BTN, INPUT } from "../component";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
            { text: toDo, id: Date.now(), category },
            ...oldToDos,
        ]);
        setValue("toDo", "");
    };
    return <form onSubmit={handleSubmit(handleValid)}>
        <INPUT
            {...register("toDo", {
                required: "Please write a To Do",
            })}
            placeholder="Write a to do"
        />
        <BTN>Add</BTN>
    </form>;
}

export default CreateToDo;

