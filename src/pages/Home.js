import { Link } from 'react-router-dom';
import Title from '../components/common/Title'

export default function Home() {
    return (
        <div>
            <Title title="Tailwind"/>
            <div className={"mt-16 text-4xl"}>
                <div className={"text-center font-bold"}>
                    <div className={"mb-16"}><Link to={"/tailwind/card"}>Card</Link></div>
                    <div className={"mb-16"}><Link to={"/tailwind/header"}>Header</Link></div>
                    <div className={"mb-16"}><Link to={"/tailwind/sidebar"}>Sidebar</Link></div>
                    <div className={"mb-16"}><Link to={"/tailwind/footer"}>Footer</Link></div>
                    <div className={"mb-16"}><Link to={"/tailwind/form"}>Form</Link></div>
                    <div className={"mb-16"}><Link to={"/tailwind/table"}>Table</Link></div>
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