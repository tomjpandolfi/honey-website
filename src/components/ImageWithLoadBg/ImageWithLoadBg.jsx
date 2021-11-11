import React, { useState } from 'react'
import './ImageWithLoadBg.scss';
import PropTypes from 'prop-types';

const ImageWithLoadBg = props =>{
    const [imageLoaded, setImageLoaded] = useState(false);
    const {src, aspectRatio, alt, imageContainerStyle} = props;
    const onImageLoad = ()=> {
        setImageLoaded(true)
    }
    return(
        <div
            style = {{
                ...imageContainerStyle,
                paddingTop: `${(1 / aspectRatio) * 100}%`,
                backgroundColor: imageLoaded ? 'transparent' : '#F2C899'
            }}
            className = "image-with-Bg"
        >
            <div className = "image">
                <img onLoad = {onImageLoad} src = {src} alt = {alt}/>
            </div>
        </div>
    )
}

ImageWithLoadBg.propTypes = {
    src: PropTypes.any,
    aspectRatio: PropTypes.number
}

ImageWithLoadBg.defaultProps = {
    imageContainerStyle: {}
}

export default ImageWithLoadBg;