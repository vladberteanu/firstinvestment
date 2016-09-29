import React from 'react'
import { Sidebar } from 'app/main/components'


const Sector = React.createClass({

    titleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },

    render() {
        const sectorName = this.titleCase(this.props.params.sector);
        return (
            <Sidebar>
                <p className="section-title">{sectorName} Sector</p>
                <p className="section-subitle">Pick companies</p>
            </Sidebar>
        )
    }
})

export default Sector