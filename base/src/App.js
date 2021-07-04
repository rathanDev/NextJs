import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    console.log('useEffect', new Date());
    const res = await fetch("https://api.github.com/users/hadley/orgs");
    const jsonRes = await res.json();
    setPosts(jsonRes);
    console.log(`posts ${jsonRes}`);
  }, [])

  return (
    <div className="App">
      {posts.map(p => (
        <li key={p.id}>{p.login}</li>
      ))}
    </div>
  );
}

export default App;
