
import { motion } from 'framer-motion'

export default function Skill() {
    return (
        <motion.div
            id='skill'
            className="section skill"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <span className="skill-head">SKILLS</span>
            <div className="tags skill-tag">
                <div className="tag">React.js</div>
                <div className="tag">Node.js</div>
                <div className="tag">Express.js</div>
                <div className="tag">MongoDB</div>
                <div className="tag">Mongoose</div>
                <div className="tag">Tailwind</div>
                <div className="tag">JavaScript(ES6+)</div>
                <div className="tag">REST APIs</div>
                <div className="tag">React Router</div>
                <div className="tag">Git & GitHub</div>
                <div className="tag">HTML & CSS</div>
                <div className="tag">Netlify</div>
                <div className="tag">Render</div>
            </div>
        </motion.div>
    )
}