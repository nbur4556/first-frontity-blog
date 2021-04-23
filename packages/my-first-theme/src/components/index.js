import React from 'react';
import { connect, Global, css, styled } from 'frontity';
import Link from '@frontity/components/link';
import Switch from '@frontity/components/switch';

import List from './list';
import Page from './page';
import Post from './post';
import Loading from './loading';

import globalStyles from '../stylesheets/index.css';

const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Global styles={css(globalStyles)} />

            <Header isPostType={data.isPostType}>
                <HeaderContent>
                    <h1>Hello Frontity</h1>
                    {state.theme.isUrlVisible
                        ? <p>{state.router.link} <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button></p>
                        : <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>}

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
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <Page when={data.isPage} />
                    <Post when={data.isPost} />
                    <Page when={data.isDestinations} />
                </Switch>
            </Main>
        </>
    )
}

export default connect(Root);

const Header = styled.header`
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: ${props => props.isPostType ? 'lightseagreen' : 'maroon'};

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

const Button = styled.button`
    background: transparent;
    border: none;
    color: #aaa;

    :hover {
        cursor: pointer;
        color: #888;
    }
`;
