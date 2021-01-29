import React from 'react';
import styles from './header.module.css';

function Header(props) {
    return (
        <section className={`${styles.section} section py-4 ${props.error ? 'has-background-danger' : ''}`}>
            <div className={`${styles.container} container`}>
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