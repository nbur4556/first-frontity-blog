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
                <HeaderContent>
                    <h1>Hello Frontity</h1>
                    <p>Current URL: {state.router.link}</p>

                    <Menu>
                        <Link link="/">Home</Link>
                        <Link link="/destinations">Destinations</Link>
                        <Link link="/travel-tips">Travel Tips</Link>
                        <Link link="/about">About Me</Link>
                    </Menu>
                </HeaderContent>
            </Header>

            <Main>
                <Switch>
                    <List when={data.isArchive} />
                    <Page when={data.isPage} />
                    <Post when={data.isPost} />
                </Switch>
            </Main>
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

const HeaderContent = styled.div`
    max-width: 800px;
    padding: 2em 1em;
    margin: auto
`;

const Main = styled.main`
    max-width: 800px;
    padding: 1em;
    margin: auto;

    img {
        max-width: 100%;
    }

    h2{
        margin: 0.5em 0;
    }

    p{
        line-height: 1.25em;
        margin-bottom: 0.75em;
    }

    figcaption {
        color: #828282;
        font-size: 0.8em;
        margin-bottom: 1em;
    }
`;

const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    & > a {
        margin-right: 1em;
        color: steelblue;
        text-decoration: none;
    }
`;
