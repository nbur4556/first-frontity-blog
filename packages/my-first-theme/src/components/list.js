import React from 'react';
import { connect } from 'frontity';
import Link from '@frontity/components/link';

const List = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <section>
            {data.items.map(item => {
                const post = state.source[item.type][item.id]
                return (
                    <Link key={item.id} link={post.link}>
                        {post.title.rendered}
                        <br />
                    </Link>
                );
            })}
        </section>
    );
}

export default connect(List);