export default function Marquee() {

    const items = ['React', "Node.js", 'MongoDB', 'Express', 'Javascript', 'REST APIs', 'Fullstack']


    return (
        <div className="marquee-container">
            <div className="marquee-text">
                {items.map((item, i) => (
                    <span key={i}>{item}<span className="dot">·</span></span>
                ))}
                {items.map((item, i) => (
                    <span key={i + items.length}>{item} <span className='dot'>·</span></span>
                ))}
                {items.map((item, i) => (
                    <span key={i + items.length}>{item} <span className='dot'>·</span></span>
                ))}
            </div>
        </div>
    )
}