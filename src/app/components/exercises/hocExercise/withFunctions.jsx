import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");

    const handleOnLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const handleOnLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleOnLogin}
                onLogOut={handleOnLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
