import React from 'react';
import { connect } from 'frontity';

const Root = ({ state }) => {
    return (
        <>
            <h1>Hello Frontity</h1>
            <p>Current URL: {state.router.link}</p>
        </>
    )
}

export default connect(Root);