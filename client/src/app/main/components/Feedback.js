import React from 'react'
import { Sidebar } from 'app/main/components'


const Feedback = React.createClass({
    render() {
        return (
            <Sidebar>
                <p className="section-title">Feedback</p>
                <p className="section-subitle">Take a look at your portfolio assesment</p>
            </Sidebar>
        )
    }
})

export default Feedback