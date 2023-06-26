import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import './MyCellarPage.css'


function MyCellarPage () {

    const dispatch = useDispatch();
    const cellar = useSelector(store => store.myWine);


    useEffect(() => {
        dispatch({ type: 'FETCH_WINE'});
    }, [])

    return (
        <div>
            <table className='center'>
                <thead>
                    <tr>
                        <th>Vineyard</th>
                        <th>Vintage</th>
                        <th>Grape</th>
                        <th>Price</th>
                        <th>Purchased Where?</th>
                        <th>Notes</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {cellar.map(bottle => (
                        <tr key={bottle.id}>
                            <td>{bottle.vineyard}</td>
                            <td>{bottle.vintage}</td>
                            <td>{bottle.name}</td>
                            <td>{bottle.price}</td>
                            <td>{bottle.place_bought}</td>
                            <td>{bottle.notes}</td>
                            <td>{bottle.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyCellarPage