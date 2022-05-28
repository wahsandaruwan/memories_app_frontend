// Third-party components & modules
import { useSpring, animated } from "react-spring"

const Logo = () => {
    // Form spring transition
    const springTransition = useSpring({
        from: {
            y: -300,
            opacity: 0,
            scale: 0
        },
        to: {
            y: 0,
            opacity: 1,
            scale: 1
        },
        config: {
            duration: 500
        }
    })

    return (
        <>
            <animated.h1 style={{ ...springTransition, ...basicStyles.logo }} className="logo-custom"><span style={{ ...basicStyles.spanCommon, ...basicStyles.spanOne }}>Me</span><span style={{ ...basicStyles.spanTwo }}>mori</span><span style={{ ...basicStyles.spanCommon, ...basicStyles.spanThree }}>es</span></animated.h1>
        </>
    )
}

// Basic styling
const basicStyles = {
    logo: {
        position: "relative",
        padding: "0 20px",
        fontWeight: "800",
        textAlign: "center",
        textTransform: "uppercase",
        zIndex: 99,
        margin: "-100px 0 30px 0",
        transition: "all 1s ease -in -out"
    },
    spanCommon: {
        fontSize: "4.5rem"
    },
    spanOne: {
        color: "#ffffff"
    },
    spanTwo: {
        fontSize: "7rem",
        color: "#eb832e"
    },
    spanThree: {
        color: "#000000"
    }
}

export default Logo