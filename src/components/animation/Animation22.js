import React from "react";
import styles from "./Animation22.module.css";

const Example = () => {
    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Animation 22 :</div>
            </div>
        <div className="grid h-screen place-content-center bg-black">
            <BubbleText />
        </div>
        </div>
    );
};

const BubbleText = () => {
    return (
        <h2 className="text-center text-9xl font-thin text-indigo-300">
            {"Bubbbbbbbble text".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
          {child}
        </span>
            ))}
        </h2>
    );
};

export default Example;