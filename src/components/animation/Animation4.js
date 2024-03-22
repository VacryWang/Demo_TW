import styles from './Animation4.module.css'
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform, motion} from 'framer-motion';
import Picture1 from './AnimationImages/AniImg4/1.jpeg';
import Picture2 from './AnimationImages/AniImg4/2.jpeg';
import Picture3 from './AnimationImages/AniImg4/3.jpg';
import Picture4 from './AnimationImages/AniImg4/4.jpg'
import Picture5 from './AnimationImages/AniImg4/5.jpg'
import Picture6 from './AnimationImages/AniImg4/6.jpg'
import Picture7 from './AnimationImages/AniImg4/7.jpeg'

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]

    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Animation 4 :</div>
            </div>
            <main className={styles.main}>
                <div ref={container} className={styles.container}>
                    <div className={styles.sticky}>
                        {
                            pictures.map( ({src, scale}, index) => {
                                return <motion.div key={index} style={{scale}} className={styles.el}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={src}
                                            alt="img"
                                            placeholder='blur'
                                        />
                                    </div>
                                </motion.div>
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}