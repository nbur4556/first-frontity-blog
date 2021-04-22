import React from 'react';
import { connect } from 'frontity';
import Link from '@frontity/components/link';
import Switch from '@frontity/components/switch';

import List from './list';

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);

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

            <main>
                <Switch>
                    <List when={data.isArchive} />
                    <div when={data.isPost}>This is a post</div>
                    <div when={data.isPage}>This is a page</div>
                </Switch>
            </main>
        </>
    )
}

export default connect(Root);