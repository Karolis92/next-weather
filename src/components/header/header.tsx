import classNames from "classnames";
import { memo } from "react";
import styles from "./Header.module.css";

function Header(props: { error: any; loading: boolean; lastUpdate?: number; update: () => void }) {
  return (
    <header className={classNames("py-4", "px-5", styles.header, { "has-background-danger": props.error })}>
      <div className="container">
        <div className="columns is-mobile is-vcentered is-flex-wrap-wrap-reverse">
          <div className="column">
            <button
              className={classNames("button", "is-light", { "is-loading": props.loading })}
              onClick={props.update}
            >
              Update
            </button>
          </div>
          <div className="column is-narrow">
            {props.error && <span className="has-text-light">Error occurred while loading data</span>}
            {props.lastUpdate && (
              <span className="has-text-light">
                Last time updated: {new Date(props.lastUpdate * 1000).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
