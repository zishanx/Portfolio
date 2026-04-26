import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            <div className="hero section">

                <motion.p
                    className="sub"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >AVAILABLE FOR FREELANCE WORK</motion.p>
                <div className="heading">
                    <motion.h1
                        className="header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >Zishan</motion.h1><br /><motion.h2 className="khan"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >Khan.</motion.h2>
                </div>
                <motion.p
                    className="para"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >Fullstack web developer crafting clean, functional experiences--<br></br>from pixel-perfect frontends to robust backends</motion.p>
                <motion.div
                    className="cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}

                >
                    <a href="#project"><button className="view-btn">
                        View my work</button></a>
                    <a href="#footer"><button className="cta-btn">Get in touch</button></a>
                </motion.div>
            </div>
        </>
    )
}