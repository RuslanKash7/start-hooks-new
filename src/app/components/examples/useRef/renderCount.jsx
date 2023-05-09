import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++; // может помочь посчитать сколько раз рендерится компонент
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>render count {renderCount.current}</p>
            <p>other state {otherState.toString()}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Toggle other state</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
