import image from "../assets/image.png"
import clientdeskImg from "../assets/clientdesk.png"
import shopflow from '../assets/shoplow.png'
import wanderly from '../assets/wanderly.png'
import { motion } from 'framer-motion'

export default function Project() {
    return (
        <div id="project" className="section project">
            <motion.span
                className="pro-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >SELECTED WORK</motion.span>
            <div className="projects">
                <motion.div
                    className="pro-cards featured"
                    initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="details">
                        <h3 className="feat">FEATURED PROJECT</h3>
                        <h4 className="num">01</h4>
                        <h2 className="pro-name">Wanderly</h2>
                        <p className="pro-detail">A full-stack travel booking platform where users can browse packages, make payments via Razorpay, and track bookings — all behind JWT authentication. Admins get a full dashboard to manage packages and orders. Built with React, Express, MongoDB, and GSAP animations.</p>
                        <div className="tags">
                            <span className="tag">REACT</span>
                            <span className="tag">EXPRESS</span>
                            <span className="tag">MONGODB</span>
                            <span className="tag">RAZORPAY</span>
                            <span className="tag">GSAP</span>
                            <span className="tag">JWT</span>
                            <span className="tag">VERCEL</span>
                            <span className="tag">RENDER</span>
                        </div>
                    </div>
                    <img className="feat-img" src={wanderly} alt="Wanderly travel booking app" />
                </motion.div>

                <motion.div
                    className="pro-cards"
                    initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="details">
                        <h4 className="num">02</h4>
                        <h2 className="pro-name">ShopFlow</h2>
                        <p className="pro-detail">A full-stack e-commerce app with product browsing, cart management, Razorpay payments, and an admin dashboard with live stats. Built with React, Express, and MongoDB.</p>
                        <div className="tags">
                            <span className="tag">REACT</span>
                            <span className="tag">EXPRESS</span>
                            <span className="tag">MONGODB</span>
                            <span className="tag">RAZORPAY</span>
                            <span className="tag">JWT</span>
                            <span className="tag">VERCEL</span>
                            <span className="tag">RAILWAY</span>
                        </div>
                    </div>
                    <img className="feat-img" src={shopflow} alt="ShopFlow e-commerce app" />
                </motion.div>

                <motion.div
                    className="pro-cards"
                    initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="details">
                        <h4 className="num">03</h4>
                        <h2 className="pro-name">ClientDesk</h2>
                        <p className="pro-detail">A fullstack client management dashboard where freelancers can store, edit, and delete client info — all behind JWT authentication. Built with React, Express, MongoDB, and Tailwind CSS.</p>
                        <div className="tags">
                            <span className="tag">REACT</span>
                            <span className="tag">EXPRESS</span>
                            <span className="tag">MONGODB</span>
                            <span className="tag">JWT</span>
                            <span className="tag">TAILWIND</span>
                            <span className="tag">NETLIFY</span>
                            <span className="tag">RENDER</span>
                        </div>
                    </div>
                    <img className="feat-img" src={clientdeskImg} alt="ClientDesk dashboard" />
                </motion.div>

                <motion.div
                    className="pro-cards"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <h4 className="num">04</h4>
                    <h2 className="pro-name">Movie Search App</h2>
                    <p className="pro-detail">Search any movie and get instant results powered by the OMDB API. Clean UI and dynamic rendering.</p>
                    <div className="tags">
                        <span className="tag">REACT</span>
                        <span className="tag">API</span>
                        <span className="tag">NETLIFY</span>
                    </div>
                </motion.div>

                <motion.div
                    className="pro-cards"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <h4 className="num">05</h4>
                    <h2 className="pro-name">GitHub User Search</h2>
                    <p className="pro-detail">Look up any GitHub user and see their repos, followers, and profile data in a clean interface.</p>
                    <div className="tags">
                        <span className="tag">REACT</span>
                        <span className="tag">GITHUB</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}