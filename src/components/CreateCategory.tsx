// CreateCategory.tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";
import { BTN, CategoryINPUT, DELETE_BTN, DIV, INPUT, Option, SELECT } from "../component";

interface IForm {
    category: string;
}

function CreateCategory() {
    const setCategories = useSetRecoilState(categoriesState);
    const { register, handleSubmit, reset } = useForm<IForm>();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories] = useRecoilState(categoriesState); // 카테고리 상태 가져오기

    const onValid = ({ category }: IForm) => {
        if (category.trim() === "") {
            alert("카테고리를 입력하세요.");
            return;
        }

        setCategories((oldCategories) => ({
            ...oldCategories,
            [category]: [],
        }));
        reset();
    };

    const onDelete = () => {
        if (!selectedCategory) {
            alert("삭제할 카테고리를 선택하세요.");
            return;
        }

        setCategories((oldCategories) => {
            const { [selectedCategory]: _, ...rest } = oldCategories;
            return rest;
        });
        setSelectedCategory(""); // 삭제 후 선택 초기화
    };

    return (
        <DIV>
            <form onSubmit={handleSubmit(onValid)}>
                <CategoryINPUT
                    {...register("category", { required: true })}
                    placeholder="Add new category"
                />
                <BTN type="submit">Add</BTN>
            </form>
            <SELECT onChange={(e) => setSelectedCategory(e.target.value)}>
                <Option value="">Delete Category</Option>
                {Object.keys(categories).map((cat) => (
                    <Option key={cat} value={cat}>{cat}</Option>
                ))}
            </SELECT>
            <DELETE_BTN onClick={onDelete}>Delete</DELETE_BTN>
        </DIV>
    );
}

export default CreateCategory;
