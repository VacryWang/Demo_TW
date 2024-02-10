import {Link} from "react-router-dom";

export default function Back() {
    return (
        <div className={"mt-16 mb-16 text-4xl"}>
            <div className={"text-center font-bold"}>
                <Link to={"/tailwind/"}>Back</Link>
            </div>
        </div>
    )
}