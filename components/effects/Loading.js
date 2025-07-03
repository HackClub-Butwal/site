import {Box, Text, keyframes} from "theme-ui";
import React, {useEffect} from "react";
import logo from "../../public/bin/logo/rlogo.svg";
import PropTypes from "prop-types";

/** @jsxImportSource theme-ui */

const popUp = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const slideIn = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export default function Loading({onAnimationEnd, duration = 3000}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd(); // End animation after configurable duration
        }, duration);
        return () => clearTimeout(timer);
    }, [onAnimationEnd, duration]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "background",
                animation: `${fadeOut} 1s ease-in-out 2s forwards`,
            }}
        >
            <img
                src={logo}
                alt="HackClub Butwal Logo"
                style={{
                    animation: `${popUp} 1s ease-in-out`,
                    width: "100px",
                    height: "100px",
                }}
            />
            <Text
                sx={{
                    mt: 3,
                    animation: `${slideIn} 1s ease-in-out 0.5s`,
                    color: "text",
                    fontSize: [4, 5, 6],
                }}
            >
                HackClub Butwal
            </Text>
        </Box>
    );
}

Loading.propTypes = {
    onAnimationEnd: PropTypes.func.isRequired,
};

Loading.defaultProps = {
    onAnimationEnd: () => {
    },
};
