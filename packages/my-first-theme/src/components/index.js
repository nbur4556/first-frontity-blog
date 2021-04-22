import React from 'react';
import { connect } from 'frontity';
import Link from '@frontity/components/link';

const Root = ({ state }) => {
    return (
        <>
            <h1>Hello Frontity</h1>
            <p>Current URL: {state.router.link}</p>

            <nav>
                <Link link="/">Home</Link>
                <Link link="/destinations">Destinations</Link>
                <Link link="/travel-tips">Travel Tips</Link>
                <Link link="/about">About Me</Link>
            </nav>
        </>
    )
}

export default connect(Root);