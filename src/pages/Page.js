import Title from "../components/common/Title";
import Back from "../components/common/Back"
import Page1 from "../components/demo_page/Page1";
import Page2 from "../components/demo_page/Page2";
import Page3 from "../components/demo_page/Page3";
import Page4 from "../components/demo_page/Page4";

export default function Page(){
    return (
        <div>
            <Title title="Demo Page"/>
            <Back/>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>

        </div>
    )
}