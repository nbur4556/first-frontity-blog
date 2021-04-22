import React from 'react';
import { connect } from 'frontity';

const Page = ({ state }) => {
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    return (
        <section>
            <h2>{page.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </section>
    );
}

export default connect(Page);