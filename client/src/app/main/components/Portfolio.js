import React from 'react'
import { Sidebar, SectorCard } from 'app/main/components'
import { Link } from 'react-router'


const Portfolio = React.createClass({
    render() {
        return (
            <Sidebar>
                <p className="section-title">Portfolio</p>
                <p className="section-subitle">Pick an economic sector you like to trade in</p>
                <Link to="/portfolio/resources">
                    <SectorCard on/>
                </Link>

            </Sidebar>
        )
    }
})

export default Portfolio