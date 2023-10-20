import React from "react"
import { badgeColors, badgeFontColors } from "../data/badgeColors"

const Badges = () => {

    const squares = badgeColors.map((color, index) => {
        return (
            <div className="square-badge" style={{
                backgroundColor: color,
                color: badgeFontColors[index]
            }}
            ><p className="badge-text">Badge</p>
            </div>
        )
    })

    const pills = badgeColors.map((color, index) => {
        return (
            <div className="pill-badge" style={{
                backgroundColor: color,
                color: badgeFontColors[index]
            }}>
                <p className="badge-text">Badge</p>
            </div>
        )
    })

    return (
        <div>
            <div className="badges-container">
                <h1 className="badges-heading">Badges</h1>

                <h2 className="square-text">Square</h2>
                <div className="square-badges-container">
                    {squares}
                </div>



                <h2 className="pill-text">Pill</h2>
                <div className="pill-badges-container">
                    {pills}
                </div>


            </div>
        </div>
    )
}

export { Badges }