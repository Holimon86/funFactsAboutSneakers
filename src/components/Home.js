import React from 'react'
import {Link, withRouter } from 'react-router-dom'
import FoamsGloNDark from '../imgs/FoamsGloNDark.jpeg';

const Home = () => {
    return (
        <div id="home-component">
        <div className="container" >
            <div className="heading-container">
                <h1>Facts about Shoes and "Sneakers"</h1>
                <p>Click and learn young padawan's. Click and Learn.</p>
            </div>
            <div className="buttons">
                <Link to='/factOne'><button>1st Fact</button></Link>
                <Link to='/factTwo'><button>2nd Fact</button></Link>
                <Link to='/factThree'><button>3rd Fact</button></Link>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Home)