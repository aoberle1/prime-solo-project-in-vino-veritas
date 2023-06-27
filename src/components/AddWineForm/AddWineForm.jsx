import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddWineForm() {


    return (
        <form onSubmit={(event) => submitWine(event)}>
        <label>Vineyard / Brand *</label>
        <input
            type="text"
            value={vineyard}
            onChange={(event) => setVineyard(event.target.value)}
            required
        />
        <br/>
        <label>Vintage *</label>
        <input
            type="number"
            value={vintage}
            onChange={(event) => setVintage(event.target.value)}
            max="2023"
            maxLength="4"
            required
        />
        <br/>
        <label>Grape Name *</label>
        <select required value={grape} onChange={(event) => setGrape(event.target.value)}>
            <option value={0}> --Select a category </option>
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
        <br/>
        <label>Price</label>
        <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
        />
        <br/>
        <label>Location Purchased</label>
        <input
            type="text"
            value={place_bought}
            onChange={(event) => setPlace_Bought(event.target.value)}
        />
        <br/>
        <label>Tasting Notes</label>
        <input
            type="text"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
        />
        <br/>
        <label>My Rating (1-10)</label>
        <input
            type="number"
            min="0"
            max="10"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
        />
        <br/>
        <input type='submit' value='Add Bottle To Your Cellar!'></input>
    </form>
    )

}

export default AddWineForm