import { useEffect, useState } from 'react';

const App = ({ posts }) => {

  // const [posts, setPosts] = useState([]);

  // useEffect(async () => {
  //   console.log('useEffect', new Date().toISOString());
  //   const res = await fetch("https://api.github.com/users/hadley/orgs");
  //   const jsonRes = await res.json();
  //   setPosts(jsonRes);
  // }, [])

  return (
    <div className="App">
      {posts.map(p => (
        <li key={p.id}>{p.login}</li>
      ))}
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await fetch("https://api.github.com/users/hadley/orgs");
  const posts = await res.json();
  console.log(`posts ${posts}`);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default App;
