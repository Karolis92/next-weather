import React from 'react';
import './header.css';

function Header(props) {
    return (
        <section className={`Header ${props.error && 'has-background-danger'}`}>
            <div className="container Header_container">
                <button className={`button is-light ${props.loading && 'is-loading'}`} onClick={props.update}>Update</button>
                {props.error &&
                    <span className="has-text-light"> Error occurred while loading data</span>
                }
                {props.lastUpdate &&
                    <span className="has-text-light"> Last time updated: {new Date(props.lastUpdate * 1000).toLocaleString()}</span>
                }
            </div>
        </section>
    )
}

export default Header;