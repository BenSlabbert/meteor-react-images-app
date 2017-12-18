import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import ImageList from './components/ImageList';

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = { images: [] };
    }

    // called before rendered
    // good place to get data
    // called only once
    // can pass data as props
    // a change to state re-renders the component!
    componentWillMount() {
        axios.get( 'https://api.imgur.com/3/gallery/hot/viral/0' )
            .then( resp => this.setState( { images: resp.data.data } ) );
    }

    render() {
        return (
            <div>
                <h1>List of images</h1>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

Meteor.startup( () => {
    ReactDOM.render( <App/>, document.querySelector( '.container' ) );
} );
