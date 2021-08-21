import React from 'react';
import CoinRow from './CoinRow';

const titles = ['#', 'Name', 'Price', ' Price Change', '24h VolumeF'];
const TableCoins = ({ coins, search }) => {
    // console.log(coins);
    //for filter
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className="table mt-3 table-dark table-over">
            <thead>
                <tr>
                    {titles.map((title, index) => (
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} index={index} />
                ))}
            </tbody>
        </table>
    );
};

export default TableCoins;