import { memo } from 'react';
import styles from './header.module.css';

function Header(props: { error: any, loading: boolean, lastUpdate?: number, update: () => void }) {
    return (
        <section className={`${styles.section} py-4 px-5 ${props.error ? 'has-background-danger' : ''}`}>
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <button className={`button is-light ${props.loading && 'is-loading'}`} onClick={props.update}>Update</button>
                    </div>
                    <div className="column is-narrow">
                        {props.error && <span className="has-text-light"> Error occurred while loading data</span>}
                        {props.lastUpdate && <span className="has-text-light"> Last time updated: {new Date(props.lastUpdate * 1000).toLocaleString()}</span>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(Header);