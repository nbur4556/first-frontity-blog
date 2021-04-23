import React from 'react';
import { connect } from 'frontity';
import dayjs from 'dayjs';

const Post = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];

    const formattedDate = dayjs(post.date).format('DD MMMM, YYYY');

    return (
        <article>
            <h2>{post.title.rendered}</h2>
            <h3>Posted: {formattedDate}</h3>
            <h3>Author: {author.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
    );
}

export default connect(Post);