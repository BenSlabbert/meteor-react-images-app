import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import ImageList from './components/ImageList';

const App = () => {
    return (
        <div>
            <h1>List of images</h1>
            <ImageList/>
        </div>
    )
};

Meteor.startup( () => {
    ReactDOM.render( <App/>, document.querySelector( '.container' ) );

    axios.get( 'https://api.imgur.com/3/gallery/hot/viral/0' )
        .then( ( resp ) => console.log( resp ) );
} );
