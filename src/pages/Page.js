import Title from "../components/common/Title";
import Back from "../components/common/Back"
import Page1 from "../components/demo_page/Page1";
import Page2 from "../components/demo_page/Page2";

export default function Page(){
    return (
        <div>
            <Title title="Demo Page"/>
            <Back/>
            <Page1/>
            <Page2/>

        </div>
    )
}