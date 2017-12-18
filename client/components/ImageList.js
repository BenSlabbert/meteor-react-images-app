import React from 'react';
import ImageDetail from './ImageDetail';

const ImageList = ( props ) => {

    const filteredImages = props.images.filter( image => !image.is_album );

    const RenderedImages = filteredImages.map( image => <ImageDetail key={image.title} image={image}/> );

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

export default ImageList;
