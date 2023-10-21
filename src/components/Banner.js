import React from "react"
import { multiLineBanners } from "../data/bannerData"

const Banner = () => {

    const multiLineData = multiLineBanners.map(item => {
        return (
            <div className="multi-content-container">
                <h1 className="banner-subheading">{item.heading}</h1>
                <div className="multi-content" style={{ backgroundColor: item.backgroundColor }}>
                    <p className="content-title" style={{ color: item.titleColor }}>{item.title}</p>
                    <p className="content-text" style={{ color: item.textColor }}>{item.text}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="banner-container">
            <h1 className="banner-heading">Banners</h1>
            <h2 class="multi-line-heading">Multi Line</h2>
            <div className="multi-subcontainer">
                {multiLineData}
            </div>
        </div>
    )
}

export { Banner }