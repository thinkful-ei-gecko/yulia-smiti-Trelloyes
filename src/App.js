import React from 'react';
import './App.css';
import List from './List';


function App({store}) {
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {store.lists.map( (item, index) => {
          const cards = item.cardIds.map(cardId => store.allCards[cardId])
          return <List 
          header={item.header} 
          key={index}
          cards={cards}/>
        }
        )}
      </div>
    </main>
  );
}

export default App;
