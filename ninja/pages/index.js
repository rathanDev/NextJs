const App = ({ posts }) => {

    console.log(`Inside Component ${posts}`);

    return (
        <div>
            App
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

export default App;