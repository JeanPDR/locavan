import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';

import 'swiper/css';
import { Autoplay } from 'swiper';


export const Banner = () => {
    return(
        <div className={styles.container}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={styles.swiper}

                >
                <SwiperSlide className={styles.slide}><img src='/tmp/banner1.png' alt=''></img></SwiperSlide>
                <SwiperSlide className={styles.slide}><img src='/tmp/banner2.png' alt=''></img></SwiperSlide>
                
            </Swiper>
        </div>
    )
}