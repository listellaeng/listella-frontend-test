import { color } from "@/types/colors"
import { useState } from "react"

export const SubHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownItems = [
        {title: "Humans in Space", link: "#"},
        {title: "Moons to Mars", link: "#"},
        {title: "Earth", link: "#"},
        {title: "Space Tech", link: "#"},
        {title: "Solar System & Beyond", link: "#"},
        {title: "STEM Engagement", link: "#"},
        {title: "History", link: "#"},
        {title: "Benefits to You", link: "#"},
    ]
    return (
        <div className="col-12">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: color.White}}>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" style={{ padding: "0rem 2.5rem" }}>
                    <ul className="nav navbar-right justify-right">
                        <li className="nav-item">
                            <button className="btn" type="button" onClick={() => alert("Open search up")}><img src="/assets/search.svg" /></button>
                        </li>
                        <li className="nav-item">
                            <button className="btn" type="button" onClick={() => alert("Share something")}><img src="/assets/share.svg" /></button>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <button className="btn" type="button" onClick={() => setIsOpen(!isOpen)}><img src={`/assets/${isOpen ? "close" : "menu"}.svg`} /></button>
                                { isOpen && <div className="dropdown-menu subheader-dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                    {
                                        dropdownItems.map((item, index) => {
                                            return <a key={index} className="dropdown-item subheader-a" href={item.link}>{item.title}</a>
                                        })
                                    }
                                </div>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
