import {useEffect, useRef} from "react";
import Lenis from '@studio-freight/lenis'
import {useScroll, useTransform, motion} from 'framer-motion';

export default function Home() {

    const container = useRef();
    const paths = useRef([]);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect(() => {
        scrollYProgress.on("change", e => {
            paths.current.forEach((path, i) => {
                path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [])

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Animation 3 :</div>
            </div>
            <main>
                <div className="h-[100vh]"></div>
                <div ref={container}>
                    <svg className="w-full mb-40" viewBox="0 0 250 90">
                        <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                        <text className="text-[6px] uppercase" style={{fill: "red"}}>
                            {
                                [...Array(3)].map((_, i) => {
                                    return <textPath key={i} ref={ref => paths.current[i] = ref}
                                                     startOffset={i * 40 + "%"} href="#curve">Curabitur mattis efficitur
                                        velit</textPath>
                                })
                            }
                        </text>
                    </svg>
                    <Logos scrollProgress={scrollYProgress}/>
                </div>
            </main>
        </div>
    );
}

const Logos = ({scrollProgress}) => {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0])
    return (
        <div className="h-[250px] bg-black overflow-hidden">
            <motion.div style={{y}} className="h-full bg-black flex justify-center gap-10 items-center p-10">
                {
                    [...Array(5)].map((_, i) => {
                        return <img key={`img_${i}`} className="w-[80px] h-[80px]"
                                    src={require(`./AnimationImages/AniImg3/${i + 1}.jpg`)} alt="img"/>
                    })
                }
            </motion.div>
        </div>
    )
}