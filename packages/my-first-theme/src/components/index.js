import React from 'react';
import { connect, Global, css } from 'frontity';
import Link from '@frontity/components/link';
import Switch from '@frontity/components/switch';

import List from './list';
import Page from './page';
import Post from './post';

import globalStyles from '../stylesheets/index.css';

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Global styles={css(globalStyles)} />


            <h1>Hello Frontity</h1>
            <p>Current URL: {state.router.link}</p>

            <nav>
                <Link link="/">Home</Link>
                <Link link="/destinations">Destinations</Link>
                <Link link="/travel-tips">Travel Tips</Link>
                <Link link="/about">About Me</Link>
            </nav>

            <hr />

            <main>
                <Switch>
                    <List when={data.isArchive} />
                    <Page when={data.isPage} />
                    <Post when={data.isPost} />
                </Switch>
            </main>
        </>
    )
}

export default connect(Root);