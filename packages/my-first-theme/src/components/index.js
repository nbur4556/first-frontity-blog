import React from 'react';
import { connect, Global, css, styled } from 'frontity';
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

            <Header>
                <h1>Hello Frontity</h1>
                <p>Current URL: {state.router.link}</p>

                <nav>
                    <Link link="/">Home</Link>
                    <Link link="/destinations">Destinations</Link>
                    <Link link="/travel-tips">Travel Tips</Link>
                    <Link link="/about">About Me</Link>
                </nav>
            </Header>

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

const Header = styled.header`
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: maroon;

    background-color: #e5edee;

    h1{
        color: #4a4a4a;
    }
`;

