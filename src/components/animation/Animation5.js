import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './Animation5.module.css';

const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

function Character({paragraph}) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const words = paragraph.split(" ")
    return (
        <p
            ref={container}
            className={styles.paragraph}
        >
            {
                words.map( (word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word1 key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word1>
                })
            }
        </p>
    )
}

const Word1 = ({children, progress, range}) => {
    const amount = range[1] - range[0]
    const step = amount / children.length
    return (
        <span className={styles.word}>
      {
          children.split("").map((char, i) => {
              const start = range[0] + (i * step);
              const end = range[0] + ((i + 1) * step)
              return <Char1 key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char1>
          })
      }
    </span>
    )
}

const Char1 = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0,1])
    return (
        <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
    )
}

function Paragraph({paragraph}) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.p
            ref={container}
            className={styles.paragraph}
            style={{opacity}}
        >
            {paragraph}
        </motion.p>
    )
}

function Word({paragraph}) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const words = paragraph.split(" ")
    return (
        <p
            ref={container}
            className={styles.paragraph}
        >
            {
                words.map( (word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word2 key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word2>
                })
            }
        </p>
    )
}

const Word2 = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return <span className={styles.word}>
    <span className={styles.shadow}>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
}

export default function Home() {

    const words = paragraph.split(" ")
    return (
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Animation 5 :</div>
            </div>
            <main className="bg-black">
                <div style={{height: "100vh"}}></div>
                <Paragraph paragraph={paragraph}/>
                <div style={{height: "100vh"}}></div>
                <Word paragraph={paragraph}/>
                <div style={{height: "100vh"}}></div>
                <Character paragraph={paragraph} />
                <div style={{height: "100vh"}}></div>
            </main>
        </div>
    )
}