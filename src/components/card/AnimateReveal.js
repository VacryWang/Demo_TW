import { motion } from "framer-motion"

const AnimateReveal = ({ children }) => {
    return (
        <div className="">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default AnimateReveal