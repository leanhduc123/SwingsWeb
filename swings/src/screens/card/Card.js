import React from 'react'
import style from '../../css/card.module.css'

export const Card = (props) => {
    const {imgSrc, header, description} = props;
    return (
        <div class="h-100" className={style.card}>
            <div class="h-50">
                <img
                    src="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                    className={style.img} />
            </div>
            <div className={style.span}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className={style.p}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}
