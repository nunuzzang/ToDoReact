import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    }
})

/* export const categoriesState = atom<string[]>({
    key: "categories",
    default: [Categories.TO_DO, Categories.DOING, Categories.DONE], // 기본 카테고리
}); */

export const categoriesState = atom<{ [key: string]: IToDo[] }>({
    key: "categories",
    default: {
        [Categories.TO_DO]: [],
        [Categories.DOING]: [],
        [Categories.DONE]: [],
    },
    effects_UNSTABLE: [persistAtom],
});