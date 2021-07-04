const ChartComponent = ({ list }) => {

    console.log(`Inside ChartComponent `); // ${list}

    // list.forEach((todos, h) => {
    //     todos.forEach((todo, i) => {
    //         console.log(todo.title, h, i);
    //     })
    // });

    return (
        <div>
            App <br />

            {list.map((subArray, index) => {
                return (
                    <div key={index}>
                        {subArray.map((subitem, i) => {
                            return ((index) && (
                                <ul key={index * i}>
                                    <li>{subitem.title}</li>
                                </ul>
                            ));
                        })}
                    </div>
                );
            })}

        </div>
    );
}

export async function getStaticProps() {

    console.log(`Inside getStaticProps`, new Date().toISOString());

    const url = "https://jsonplaceholder.typicode.com/todos";
    const list = [];
    for (let i = 0; i < 100; i++) {
        const res = await fetch(url);
        const posts = await res.json();
        list.push(posts);
    }
    // console.log(`list ${list}`);

    return {
        props: {
            list,
        },
    }
}

export default ChartComponent;