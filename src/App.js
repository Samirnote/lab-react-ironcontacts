
import './App.css';
import allContacts from './contacts.json'
import { useState } from 'react'; 

let randContact = "";

function App() {
  
  const [contacts, setContacts] = useState(allContacts.slice(0,5));

  const addClick = () => {
    randContact = allContacts[Math.floor(Math.random() * allContacts.length)]
    const contactsCopy = [...contacts];
    contactsCopy.unshift(randContact)
    
    setContacts(contactsCopy);
  };

  const sortNameClick = () => {
    
    const contactsCopy = [...contacts];

    contactsCopy.sort((a,b)=>{
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    
    setContacts(contactsCopy);
  };

  const sortPopularityClick = () => {
    
    const contactsCopy = [...contacts];
    contactsCopy.sort((a,b)=>{
      return a.popularity -  b.popularity;
    })
    
    setContacts(contactsCopy);
  };

  // const deleteClick = ({c}) => {
    
  //   const contactsCopy = [...contacts];
  //   contactsCopy.filter(contact => word.length > 6);
  //   setContacts(contactsCopy);
   
  // };


  return (
    <div className="App">
      <button onClick={addClick}>Add Random Contact button</button>
      <button onClick={sortNameClick}>Sort by Name</button>
      <button onClick={sortPopularityClick}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {/* <pre>{JSON.stringify(randContacts, null, 2)}</pre> */}
        {contacts.map((cont) => {
          return (
            <tr key={cont.id}>
              <td><img src={cont.pictureUrl} width={100}/></td>
              <td>{cont.name}</td>
              <td>{cont.popularity}</td>
              <td>{cont.wonOscar && `🏆`}</td>
              <td>{cont.wonEmmy && `🏆`}</td>
              {/* <th><button onClick={deleteClick}>delete</button></th> */}
            </tr>
          )
        })}
        
      </table>
    </div>
  );
}

export default App;
