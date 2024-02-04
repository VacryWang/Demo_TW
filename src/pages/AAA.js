import {Link} from "react-router-dom";

export default function AAA() {
    return (
        <div>
            <div className={"flex mt-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40"}>
                <span className={"text-7xl m-auto text-white font-bold"}>
                    Test AAA
                </span>
            </div>
            <div className={"mt-20 text-5xl"}>
                <div className={"text-center font-bold"}>
                    <Link to={"/tailwind/"}>Home</Link>
                </div>
            </div>
        </div>
    )
}