import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navigationbar from './components/navbar/Navigationbar';
import Home from './components/home/Home';
import ShoppingCard from './components/shoppingCard/ShoppingCard';

import { list } from './components/data/data';
import Checkout from './components/checkout/Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { saveToLocalstorage } from './lib/reducer';
import livrason from './components/livraison/livrason';

//console.log(list);

const App = () => {
  const [category, setCategorie] = useState(0);
  const [isfiltered, setIsfiltered] = useState(false);
  const [listfiltered, setListfiltered] = useState(null);
  const [textfiltered, setTextfiltered] = useState("");
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const values = useSelector(state => state.shoppingApp);
  //console.log(itemShop);

  const datas = list[category];

  function filterResult(text) {
    const result = list.flat().filter(item =>
      item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );
    setListfiltered(result);
    //console.log(result);
  }

  useEffect(
    function () { filterResult(textfiltered) },
    [textfiltered, isfiltered]
  );

  useEffect(
    () => {
      dispatch(saveToLocalstorage(values));
    },
    [values]
  )

  return (
    <div>
      <Router>
        <Navigationbar setIsfiltered={setIsfiltered} setTextfiltered={setTextfiltered} active={active} setActive={setActive} />
        <div className="container" id='cont'>
          <Routes>
            <Route path='/' element={
              <Home category={category} setCategorie={setCategorie} isfiltered={isfiltered} listfiltered={listfiltered} datas={datas} />
            } />
            <Route path='/shoppingcart' element={<ShoppingCard />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/livraison' element={<livrason /> } />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
