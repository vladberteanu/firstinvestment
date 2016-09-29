import React from 'react'

const SectorCard = React.createClass({
    render() {
        return (
            <div className="sector-card">
                <div className="header">
                    <span className="glyphicon glyphicon-usd" aria-hidden="true"></span>
                                &nbsp;Financial Sector
                </div>
                <div className="info-section">
                    4 Companies
                </div>
                <div className="info-section">
                    $ 20,000
                </div>
                 <div className="info-section">
                    12%
                </div>
            </div>
        )
    }
})

export default SectorCard