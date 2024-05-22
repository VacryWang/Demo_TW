import { Link } from 'react-router-dom';
import Title from '../components/common/Title'
import PageTransition from "./PageTransition";

const Home = () => {

    // function changeMode(){
    //     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //         document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }
    //     localStorage.theme === 'dark' ? localStorage.theme = 'light' : localStorage.theme = 'dark'
    // }

    return (
        <div>
            <Title title="Demo_TW"/>

            {/*<input onClick={()=>changeMode()} data-hs-theme-switch className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-slate-700 focus:ring-slate-700 focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" type="checkbox" id="darkSwitch"/>*/}
            {/*<div className="h-40 bg-orange-600 dark:bg-blue-600"></div>*/}

            <div className={"mt-16 text-4xl"}>
                <div className={"text-center font-bold"}>
                    <div className={"mb-16"}><Link to={"/Demo_TW/card"}>Card</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/header"}>Header</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/sidebar"}>Sidebar</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/footer"}>Footer</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/form"}>Form</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/table"}>Table</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/page"}>Demo Page</Link></div>
                    <div className={"mb-16"}><Link to={"/Demo_TW/animation"}>Animation</Link></div>
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

export default PageTransition(Home)