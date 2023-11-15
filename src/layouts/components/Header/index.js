import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const cn = classNames.bind(styles);

function Header() {
    return (
        <div className={cn('navigation-bar')}>
            <div className={cn('navigation-element')}>
                <ul className={cn('navigation-functions')}>
                    <li className={cn('navigation-function')}>
                        <a className={cn('navigation-link')} href="#">
                            <FontAwesomeIcon className={cn('navigation-icon')} icon={faRocket} />
                        </a>
                        <span>Apple Store</span>
                    </li>
                </ul>
            </div>
            <div className={cn('navigation-element')}>
                <ul className={cn('navigation-functions')}>
                    <li className={cn('navigation-function')}>
                        <a className={cn('navigation-link')} href="#">
                            Home
                        </a>
                    </li>
                    <li className={cn('navigation-function')}>
                        <a className={cn('navigation-link')} href="#">
                            About us
                        </a>
                    </li>
                    <li className={cn('navigation-function')}>
                        <a className={cn('navigation-link')} href="#">
                            Management
                        </a>
                    </li>
                    <li className={cn('navigation-function')}>
                        <a className={cn('navigation-link')} href="#">
                            Schedule
                        </a>
                    </li>
                    <li className={cn('navigation-function')}>
                        <a className={cn('navigation-link')} href="#">
                            Sign in
                        </a>
                    </li>
                    <li className={cn('navigation-function')}>
                        <a className={cn('navigation-link')} href="#">
                            Sign up
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
