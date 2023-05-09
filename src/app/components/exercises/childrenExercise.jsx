import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <MyComponent>
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
            </MyComponent>
        </CollapseWrapper>
    );
};

const Component = ({ childNumber }) => {
    console.log(childNumber);
    return <div>Компонент списка {childNumber}</div>;
};

Component.propTypes = {
    childNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const MyComponent = ({ children }) => {
    const arrChildren = React.Children.toArray(children);
    return React.Children.map(arrChildren, (child) => {
        const config = {
            ...child.props,
            childNumber: +child.key.replace(".", "") + 1
        };
        return React.cloneElement(child, config);
    });
};

MyComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenExercise;
