import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CancelButton from '../CancelButtons/CancelButtons';
import swal from 'sweetalert';
import './AddWineForm.css'
import { Button } from '@mui/material';

function AddWineForm() {

    // adding dispatch and history, importing from dependencies above
    const dispatch = useDispatch();
    const history = useHistory();

    // creating state variables to capture values entered in input fields in form
    const [vineyard, setVineyard] = useState('');
    const [vintage, setVintage] = useState(0);
    const [grape, setGrape] = useState(0);
    const [price, setPrice] = useState(0);
    const [place_bought, setPlace_Bought] = useState('');
    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState(0);

    // submitWine function that runs when form is submitted
    function submitWine(event) {
        event.preventDefault();
        console.log('Values to be submitted are:', vineyard, vintage, grape, price, place_bought, notes, rating);

        // setting input field values to object properties with names matching database table names
        let newWine = {
            vineyard,
            vintage,
            grape,
            price,
            place_bought,
            notes,
            rating
        };
        console.log('newWine being submitted is:', newWine)

        // using sweet alert on submit - user must confirm submit for submit dispatch to run
        swal({
            title: "Are you sure you want to add this wine to your cellar?",
            text: "Click Ok to add your wine, click cancel to change some info",
            icon: "info",
            buttons: true,
            dangerMode: false
        }).then((willAdd) => {
            // if user confirms the submit display confirmation alert
            if (willAdd) {
                // display this message
                swal("Bottle was successfully added to your cellar!", {
                    icon: "success",
                    timer: 1500,
                    buttons: false,
                });
                // dispatch to saga with newWine
                dispatch({ type: 'SUBMIT_WINE', payload: newWine });
                // move user to My Cellar page
                history.push('/cellar');
                // else display cancel message and remain on Add page
            } else {
                swal("Add wine canceled, change some info!", {
                    icon: "info",
                    timer: 1500,
                    buttons: false,
                })
            }
        })
    };


    return (
        <div>
            {/* creating form with 7 input fields - when form is submitted, run submitWine function */}
            <form className="formPanel" onSubmit={(event) => submitWine(event)}>
                <label className='form-label'>Vineyard / Brand *</label>
                <input
                    className='form-control'
                    placeholder='Example: Kendall Jackson'
                    type="text"
                    value={vineyard}
                    onChange={(event) => setVineyard(event.target.value)}
                    required
                />
                <br />
                <label className='form-label'>Vintage *</label>
                {/* input is a dropdown menu with selectable years - value of each option is the year */}
                <select
                    className='form-control'
                    required
                    value={vintage}
                    onChange={(event) => setVintage(event.target.value)}>
                    <option value=""> -- Click to select a Year! </option>
                    <option value={2023}> 2023</option>
                    <option value={2022}> 2022</option>
                    <option value={2021}> 2021</option>
                    <option value={2020}> 2020</option>
                    <option value={2019}> 2019</option>
                    <option value={2018}> 2018</option>
                    <option value={2017}> 2017</option>
                    <option value={2016}> 2016</option>
                    <option value={2015}> 2015</option>
                    <option value={2014}> 2014</option>
                    <option value={2013}> 2013</option>
                    <option value={2012}> 2012</option>
                    <option value={2011}> 2011</option>
                    <option value={2010}> 2010</option>
                    <option value={2009}> 2009</option>
                    <option value={2008}> 2008</option>
                    <option value={2007}> 2007</option>
                    <option value={2006}> 2006</option>
                    <option value={2005}> 2005</option>
                    <option value={2004}> 2004</option>
                    <option value={2003}> 2003</option>
                    <option value={2002}> 2002</option>
                    <option value={2001}> 2001</option>
                    <option value={2000}> 2000</option>
                </select>
                <br />
                <label className='form-label'>Grape Name *</label>
                {/* input is a dropdown menu with selectable grapes - value of each option is a number value
                assigned to each grape name - number value is associated with grape_id on wine table in database */}
                <select
                    className='form-control'
                    required
                    value={grape}
                    onChange={(event) => setGrape(event.target.value)}>
                    <option value=""> -- Click to select a grape! </option>
                    <option value={1}> Cabernet Sauvignon</option>
                    <option value={2}> Merlot</option>
                    <option value={3}> Pinot Noir</option>
                    <option value={4}> Syrah</option>
                    <option value={5}> Malbec</option>
                    <option value={6}> Zinfandel</option>
                    <option value={7}> Chardonnay</option>
                    <option value={8}> Riesling</option>
                    <option value={9}> Pinot Grigio</option>
                    <option value={10}> Sauvignon Blanc</option>
                    <option value={11}> Chenin Blanc</option>
                    <option value={12}> Moscato</option>
                </select>
                <br />
                <label className='form-label'>Price</label>
                <input
                    min="0"
                    className='form-control'
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                <br />
                <label className='form-label'>Location Purchased</label>
                <input
                    placeholder='Example: Total Wine and Spirits'
                    className='form-control'
                    type="text"
                    value={place_bought}
                    onChange={(event) => setPlace_Bought(event.target.value)}
                />
                <br />
                <label className='form-label'>Tasting Notes</label>
                <input
                    placeholder='Example: Delicious - tastes like grapefruit!'
                    className='form-control'
                    type="text"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                />
                <br />
                <label className='form-label'>My Rating (1-10)</label>
                <select
                    className='form-control'
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}>
                    <option value=""> -- Click to select a Rating! </option>
                    <option value={1}> 1</option>
                    <option value={2}> 2</option>
                    <option value={3}> 3</option>
                    <option value={4}> 4</option>
                    <option value={5}> 5</option>
                    <option value={6}> 6</option>
                    <option value={7}> 7</option>
                    <option value={8}> 8</option>
                    <option value={9}> 9</option>
                    <option value={10}> 10</option>
                </select>
                <br />
                {/* submit "button" (submit input) */}
                <div className='add_button_padding'>
                    {/* <input className='btn btn-success' type='submit' value='Add Bottle To Your Cellar!'></input> */}
                    <Button variant='contained' size='large' type='submit'>Add Bottle To Your Cellar!</Button>
                </div>
                <br />
                <CancelButton />
            </form>
        </div>
    )

}

export default AddWineForm