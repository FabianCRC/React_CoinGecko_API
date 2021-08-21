//import logo from './logo.svg';
//For requests
import axios from 'axios';
//Executes a function when component loads
import { useEffect, useState } from 'react';
import './App.css';
//Components import
import TableCoins from './components/TableCoins';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    //console.log(res);
    setCoins(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input type='text' placeholder='Search for a Coin' className='form-control bg-dark text-light mt-3 text-center'
          onChange={e => setSearch(e.target.value)}></input>
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
