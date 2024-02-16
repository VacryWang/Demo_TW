import { Link } from 'react-router-dom';
import Title from '../components/common/Title'

export default function Home() {
    return (
        <div>
            <Title title="Demo_TW"/>
            <div className={"mt-16 text-4xl"}>
                <div className={"text-center font-bold"}>
                    <div className={"mb-16"}><Link to={"/Demo_TW/card"}>Card</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/header"}>Header</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/sidebar"}>Sidebar</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/footer"}>Footer</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/form"}>Form</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/table"}>Table</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/test_lottie"}>Test Lottie</Link></div>
                </div>
            </div>
            {/*<div className={"mt-20 mb-20 bg-amber-300"}>*/}
            {/*    <div className={"resize-x w-1/4 h-40 bg-green-600 overflow-auto text-white font-bold flex justify-center items-center text-5xl m-auto"}>*/}
            {/*        <div>Resize</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}