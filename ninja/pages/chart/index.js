const ChartComponent = ({ posts }) => {

    console.log(`Inside ChartComponent ${posts}`);

    return (
        <div>
            App <br />
            {posts.map(p => (
                <li key={p.id}>{p.login}</li>
            ))}
        </div>
    );
}

export async function getStaticProps() {

    const res = await fetch("https://api.github.com/users/hadley/orgs");
    const posts = await res.json();
    console.log(`posts ${posts}`);

    // localStorage.setItem('posts', posts);

    return {
        props: {
            posts,
        },
    }
}

export default ChartComponent;