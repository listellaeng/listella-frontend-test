import { color } from "@/types/colors"

export const Footer = () => {
    const linkItems = [
        { title: "Contact Us", link: ""},
        { title: "About Us", link: ""},
        { title: "Privacy Policy", link: ""},
        { title: "Sitemap", link: ""},
        { title: "Terms & Conditions", link: ""}
    ]

    return (
        <nav className="navbar" style={{ backgroundColor: color.Tekhelet}}>
            <div className="container-fluid">
                <ul className="nav">
                    {
                        linkItems.map((item, index) => {
                            return (
                                <li key={index} className="nav-item">
                                    <a className="nav-link link-light" aria-current="page" href="#">{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <div style={{ display: "flex" }}>
                            <img src="/assets/earth-white.svg" width={33} />
                            <p style={{ fontSize: "24px", fontWeight: 200, color: color.White, marginLeft: "8px", marginRight: "24px", marginBlock: 0 }}>NASA</p>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
