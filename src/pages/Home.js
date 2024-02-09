import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div className={"flex mt-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40"}>
                <span className={"text-7xl m-auto text-white font-bold"}>
                    Tailwind
                </span>
            </div>
            <div className={"mt-20 text-5xl"}>
                <div className={"text-center font-bold"}>
                    <span className={"mr-20"}><Link to={"/tailwind/aaa"}>AAA</Link></span>
                    <span><Link to={"/tailwind/bbb"}>BBB</Link></span>
                </div>
            </div>
            <div className={"mt-20 mb-20 bg-amber-300"}>
                <div className={"resize w-1/4 h-40 bg-green-600 overflow-auto text-white font-bold flex justify-center items-center text-5xl m-auto"}>
                    <div>Resize</div>
                </div>
            </div>
        </div>
    )
}