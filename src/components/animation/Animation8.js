import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

gsap.config({nullTargetWarn: false})

const colors = [
    "#c32d27",
    "#f5c63f",
    "#457ec4",
    "#356fdb",
]

function Cursor({isActive}) {

    const mouse = useRef({x: 0, y: 0});
    const delayedMouse = useRef({x: 0, y: 0});
    const rafIdCursor = useRef(null);
    const circles = useRef([]);
    const size = isActive ? 400 : 30;
    const delay = isActive ? 0.015 : 0.005

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        }

        // window.addEventListener("mousemove", (e) => {
        //     // const { clientX, clientY } = e;
        //
        //     mouse.current = {
        //         x: e.clientX,
        //         y: e.clientY
        //     }
        // })
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }

        moveCircles(delayedMouse.current.x, delayedMouse.current.y);

        rafIdCursor.current = window.requestAnimationFrame(animate);
    }

    const moveCircles = (x, y) => {
        if(circles.current.length < 1) return;
        circles.current.forEach((circle, i) => {
            gsap.set(circle, {x, y, xPercent: -50, yPercent: -50})
        })
    }

    useEffect( () => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafIdCursor.current)
        }
    }, [isActive])

    return (
        <div className='relative h-screen'>
            {
                [...Array(4)].map((_, i) => {
                    return (
                        <div
                            style={{
                                backgroundColor: colors[i],
                                width: size,
                                height: size,
                                filter: `blur(${isActive ? 20 : 2}px)`,
                                transition: `transform ${(4 - i) * delay}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`
                            }}
                            className='top-0 left-0 fixed rounded-full mix-blend-difference'
                            key={i}
                            ref={ref => circles.current[i] = ref}
                        />)
                })
            }
        </div>
    )
}

function Scene2() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-[4.5vw] max-w-[90vw] text-center text-white p-20">The quick brown fox jumps over the lazy dog</h1>
            <Cursor isActive={isActive}/>
        </div>
    )
}

export default function Animation8(){
    return(
        <div>
            <div className={"text-4xl p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"}>
                <div className={"text-center font-bold"}>Animation 8 :</div>
            </div>
            <main className="text-slate-100	bg-slate-800">
                <Scene2 />
            </main>
        </div>
    )
}