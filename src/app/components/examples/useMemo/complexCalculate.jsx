import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);

    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";

    const fact = useMemo(() => runFactorial(value), [value]);

    useEffect(() => {
        console.log("render");
    });

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact : {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    increment
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
