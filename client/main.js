import React from 'react';
import ReactDOM from 'react-dom';

import ImageList from './components/ImageList';

const App = () => {
    return (
        <div>
            React component
            <div>
                <h1>List of images</h1>
                <ImageList/>
            </div>
        </div>
    )
};

Meteor.startup( () => {
    ReactDOM.render( <App/>, document.querySelector( '.container' ) );
} );
