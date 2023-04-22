import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';

import 'swiper/css';

export const Banner = () => {
    return(
        <div className={styles.container}>
            <Swiper
                slidesPerView={1}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )
}