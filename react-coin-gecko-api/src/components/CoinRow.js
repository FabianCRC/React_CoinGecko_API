import React from 'react';

const CoinRow = ({ coin, index }) => {
    return (
        <tr key={index}>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{ width: '3%' }} className="img-fluid me-4"></img>
                <span>{coin.name}</span>
                <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    );
};

export default CoinRow;