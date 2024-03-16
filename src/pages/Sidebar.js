import Title from "../components/common/Title";
import Back from "../components/common/Back";
import Sidebar1 from "../components/sidebar/Sidebar1";
import Sidebar2 from "../components/sidebar/Sidebar2";
import Sidebar3 from "../components/sidebar/Sidebar3";

export default function Sidebar() {
    return (
        <div>
            <Title title="Sidebar"/>
            <Back />
            <Sidebar1 />
            <Sidebar2 />
            <Sidebar3 />

        </div>
    )
}