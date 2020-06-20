import React from 'react';

function MyApp(){
    const validation = []
    
    for (let i = 0; i < 199; i++ ){
        validation.push(<NewsArticle key={i} />);
    }

    return (
        <div>
        <h1>My First React App</h1>,
        <NewsArticle />
            <p>This is one!</p>
            <p>This is tow!</p>
            <p>this is three!</p>
            <p>this is four! <span>{validation}</span></p>
            
        </div>
    )
}

function App() {
    const result = 23434 * 0.345;
    return (
        <section>
            <h1>The Example App</h1>
            <NewsArticle />
            <p>
                Renders the value of a variable: <span>{result}</span>
            </p>
            <button data-testid="load-more" onClick={() => { console.log('The button was clicked') }}>Load More</button>
        </section>
    );
}

function NewsArticle() {
    return (
        <article>
            <h1>Article</h1>
        </article>
    )
}

export { App };
export {MyApp};