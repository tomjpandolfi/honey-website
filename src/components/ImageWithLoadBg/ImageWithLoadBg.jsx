import React, { useState } from 'react'
import './ImageWithLoadBg.scss';

const ImageWithLoadBg = props =>{
    const [imageLoaded, setImageLoaded] = useState(false);
    const {src, aspectRatio, alt} = props;
    const onImageLoad = ()=> {
        setImageLoaded(true)
    }
    return(
        <div
            style = {{
                paddingTop: `${(1 / aspectRatio) * 100}%`,
                backgroundColor: imageLoaded ? 'transparent' : '#56565E' 
            }}
            className = "image-with-Bg"
        >
            <div className = "image">
                <img onLoad = {onImageLoad} src = {src} alt = {alt}/>
            </div>
        </div>
    )
}

export default ImageWithLoadBg;