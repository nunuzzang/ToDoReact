import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
import styled from "styled-components";


const Header = styled.h1`
font-size: 4em;
background-color: #3E4B60;
padding: 15px;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Container = styled.div`
background-color: ${(props) => props.theme.umColor};
border-radius: 30px;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Head = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
margin-bottom: 10px;
`;

const Body = styled.div`
width: 600px;
height: 700px;

`;

const BodyTop = styled.div`
display: flex;
justify-content: center;
margin-bottom: 25px;
`;

const BodyBottom = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 600px;
`;

const Select = styled.select`
height: 30px;
border-radius: 10px;
background-color: #3E4B60;
border: none;
color: white;
margin-right: 10px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Bottom = styled.div`
height: 600px;
width: 400px;
`;

const Option = styled.option`
background-color: #272c35;
border: none;
outline: none;
`;


function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }
    return (
        <Container>
            <Head>
                <Header>To Do List</Header>
            </Head>

            <Body>
                <BodyTop>
                    <Select value={category} onInput={onInput}>
                        <Option value={Categories.TO_DO}>To DO</Option>
                        <Option value={Categories.DOING}>Doing</Option>
                        <Option value={Categories.DONE}>Done</Option>
                    </Select>
                    <CreateToDo />
                </BodyTop>
                <BodyBottom>
                    <Bottom>
                        {toDos?.map((toDo) => (
                            <ToDo key={toDo.id} {...toDo} />
                        ))}
                    </Bottom>
                </BodyBottom>
            </Body>

        </Container>
    );
}

export default ToDoList;