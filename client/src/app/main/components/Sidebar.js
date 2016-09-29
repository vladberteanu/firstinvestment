import React from 'react'
import { Link } from 'react-router'

const Sidebar = React.createClass({

    render() {
        return (
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <img className="logo-dashboard" src={require('img/logo.png')}/>
                        </li>
                        <li>
                            <Link to="/portfolio">
                                <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                                &nbsp;
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/feedback">
                                <span className="glyphicon glyphicon-bullhorn" aria-hidden="true"></span>
                                &nbsp;
                                Feedback
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
})

export default Sidebar