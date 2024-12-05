// ToDoList.tsx
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector, categoriesState } from "../atoms";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";
import { Body, BodyBottom, BodyTop, Bottom, Container, Head, Header, Option, Select } from "../component";

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const [categories] = useRecoilState(categoriesState); // 카테고리 상태 가져오기

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };

    return (
        <Container>
            <Head>
                <Header>To Do List</Header>
                <CreateCategory /> {/* 카테고리 추가 입력란 */}
            </Head>

            <Body>
                <BodyTop>
                    <Select value={category} onInput={onInput}>
                        {Object.keys(categories).map((cat) => (
                            <Option key={cat} value={cat}>{cat}</Option>
                        ))}
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
