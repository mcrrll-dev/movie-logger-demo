import React, { useState } from 'react';

import uuid from 'react-uuid';

import FilmLog from "./components/Log/FilmLog";
import NewEntry from "./components/NewEntry/NewEntry";

const INITIAL_LOG = [
  {
    id: uuid(),
    title: 'Jaws',
    rating: '5',
    date: new Date(2023, 1, 1)
  },
  {
    id: uuid(),
    title: 'Alien',
    rating: '5',
    date: new Date(2023, 2, 10)
  },
  {
    id: uuid(),
    title: '2 Fast 2 Furious',
    rating: '2',
    date: new Date(2023, 3, 6)
  },
  {
    id: uuid(),
    title: 'Pulp Fiction',
    rating: '4.5',
    date: new Date(2023, 4, 21)
  },
  {
    id: uuid(),
    title: 'Battlefield Earth',
    rating: '1',
    date: new Date(2023, 4, 26)
  },
  {
    id: uuid(),
    title: 'Happy Gilmore',
    rating: '3',
    date: new Date(2023, 5, 7)
  },
  {
    id: uuid(),
    title: 'Gladiator',
    rating: '4',
    date: new Date(2023, 5, 11)
  },
]

const App = () => {
  const [logList, setLogList] = useState(INITIAL_LOG);


  const addEntryHandler = entry => {
    setLogList(prevLogList => {
      console.log(entry);
      return [entry, ...logList];
    })
  };

  return (
    <div>
      <NewEntry onAddEntry={addEntryHandler} />
      <FilmLog entries={logList} />
    </div>
  );
}

export default App;