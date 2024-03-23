import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import styles from './Animation7.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {

const locomotiveScroll = new LocomotiveScroll();

function Intro() {

    const backgroundImg = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        const demoBgScroll = document.getElementById("demoBg").getBoundingClientRect().top
        console.log(demoBgScroll)
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "18000px",
                end: "+=500px",
                // markers: true
            },
        })

        timeline
            .from(backgroundImg.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "150px"}, 0)
    }, [])

    return (
        <div className={styles.homeHeader}>
            <div id="demoBg" ref={backgroundImg} className={styles.backgroundImage} >
                <img
                    src={require('./AnimationImages/AniImg7/background.jpeg')}
                    alt="img"
                    // className={styles.test}
                />
            </div>
            <div className={styles.intro}>
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                    <img
                        src={require('./AnimationImages/AniImg7/intro.png')}
                        alt="img"
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7">SMOOTH SCROLL</h1>
            </div>
        </div>
    )
}

const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

function Description() {

    return (
        <div className={styles.description} >
            {
                phrases.map( (phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}

const projects = [
    {
        title: "Salar de Atacama",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "Valle de la luna",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "Miscanti Lake",
        src: "miscani_lake.jpeg"
    },
    {
        title: "Miniques Lagoons",
        src: "miniques_lagoon.jpg"
    },
]

function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            // end: document.body.offsetHeight - window.innerHeight - 50,
            end: "+=900px"
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <img
                        src={require(`./AnimationImages/AniImg7/${projects[selectedProject].src}`)}
                        alt="img"
                    />
                </div>
                <div className={styles.column}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={styles.column}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

    useEffect( () => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Animation 7 :</div>
            </div>
            <main className={styles.mainBird}>
                <Intro />
                <Description />
                <Projects />
            </main>
        </div>
    )
}