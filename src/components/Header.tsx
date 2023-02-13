import { color } from "@/types/colors"
import Link from "next/link"

const navItems = [
    {title: "Missions", link: "/missions"},
    {title: "Galleries", link: "/galleries"},
    {title: "NASA Audiences", link: "/nasa-audience"},
    {title: "Downloads", link: "/downloads"},
    {title: "NASA TV", link: "/nasa-tv"},
    {title: "About", link: "/about"}
]
export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mx-auto">
                        {
                            navItems?.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item" style={{ marginRight: "2rem" }}>
                                        <Link className=" link-dark underline" href={item.link} style={{ textDecoration: "none", color: color.Black }}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
