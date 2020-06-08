import {useState} from 'react';

const Prices = (props) => {

  //console.log(props.bpi.bpi.USD.description);

  let [currency, setCurrency] = useState('USD');

  let list = '';

  if(currency === 'USD') {
    list = <li className="list-group-item">
    Bitcoin rate for {props.bpi.bpi.USD.description}
    : <span className="badge badge-primary">
      {props.bpi.bpi.USD.code}</span>
      <strong>{props.bpi.bpi.USD.rate}</strong>
    </li>;
  } else if(currency === 'GBP') {
    list = <li className="list-group-item">
    Bitcoin rate for {props.bpi.bpi.GBP.description}
    : <span className="badge badge-primary">
      {props.bpi.bpi.GBP.code}</span>
      <strong>{props.bpi.bpi.GBP.rate}</strong>
    </li>;

  } else if(currency === 'EUR') {
    list = <li className="list-group-item">
    Bitcoin rate for {props.bpi.bpi.EUR.description}
    : <span className="badge badge-primary">
      {props.bpi.bpi.EUR.code}</span>
      <strong>{props.bpi.bpi.EUR.rate}</strong>
    </li>;

  }

  return (
    <div>
      <ul className="list-group">
        {list}
      </ul>
      <br/>
      <select onChange={e => setCurrency(currency = e.target.value)} className="form-control">
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}

export default Prices;

