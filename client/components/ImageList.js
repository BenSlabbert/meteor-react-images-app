import React from 'react';
import ImageDetail from './ImageDetail';

const IMAGES = [
    { title: 'pen', link: 'https://dummyimage.com/600x400' },
    { title: 'guitar', link: 'https://dummyimage.com/600x400' },
    { title: 'hat', link: 'https://dummyimage.com/600x400' }
];

const ImageList = () => {

    const RenderedImages = IMAGES.map( image => <ImageDetail key={image.title} image={image}/> );

    return (
        <ul>
            {RenderedImages}
        </ul>
    );
};

export default ImageList;
