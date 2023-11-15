import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import images from '~/assets/images';
import { Image } from '~/components/Image';
import { Button } from '~/components/Button';

const cn = classNames.bind(styles);

function Home() {
    return (
        <div className={cn('wrapper')}>
            <div class={cn('container')}>
                <h1 className={cn('homepage-instruction')}>Administration Website Of Apple Authorized Retails Store</h1>
                <Button large primary>
                    Sign In To Perform Your Tasks
                </Button>
            </div>
            <div className={cn('container')}>
                <Image className={cn('homepage-logo')} src={images.logo} alt="Homepage Logo" />
            </div>
        </div>
    );
}

export default Home;
