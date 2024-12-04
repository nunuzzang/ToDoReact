import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";

interface IForm {
    toDo: string;
}

const INPUT = styled.input`
width: 300px;
height: 30px;
border-radius: 10px;
padding: 10px;
background-color: #3E4B60;
border: none;
outline: none;
color: white;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const BTN = styled.button`
height: 30px;
border-radius: 10px;
margin-left: 10px;
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

