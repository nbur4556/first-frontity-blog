import React from 'react';
import { connect, styled, Head } from 'frontity';
import dayjs from 'dayjs';

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];

    const formattedDate = dayjs(post.date).format('DD MMMM, YYYY');
    const Html2React = libraries.html2react.Component;

    return (
        <article>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>

            <h2>{post.title.rendered}</h2>
            <PostInfo>
                <h3>Posted: {formattedDate}</h3>
                <h3>Author: {author.name}</h3>
            </PostInfo>
            <Html2React html={post.content.rendered} />
        </article>
    );
}

export default connect(Post);

const PostInfo = styled.section`
    background-image:linear-gradient(to right, #f4f4f4, #fff);
    margin-bottom: 1em;
    padding: 0.5em;
    border-left: 4px solid lightseagreen;
    font-size: 0.8em;

    & > h3 {
        margin: 0;
    }
`;