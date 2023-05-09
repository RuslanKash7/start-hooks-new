import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const exercise = useRef();
    const [blockName, setBlockName] = useState("block1");

    const handleClick = () => {
        if (exercise.current.style.height === "40px") {
            exercise.current.style.height = "150px";
            exercise.current.style.width = "80px";
            setBlockName("text");
        } else {
            exercise.current.style.height = "40px";
            exercise.current.style.width = "60px";
            setBlockName("block");
        }
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={exercise}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{blockName}</small>
            </div>
            <button className="btn btn-secondary" onClick={handleClick}>
                Кнопка изменния блока
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
