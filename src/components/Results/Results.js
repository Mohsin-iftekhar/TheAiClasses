import React from 'react';

import Spinner from '../Spinner/Spinner';
import './Results.css';
import { emojies } from '../../emojies';

const Results = ({ results, processing,photomode }) => {
  if (processing && results) {
    return <Spinner />;
  }
  if (!processing && results && results.length > 0) {
   if(!photomode){
    return (
      <div className="results">
        {results.length >1 ? (
          
          <div>
           {alert('Warning!! Multiple Person in the Frame')}
            Warning Multiple Person in the Frame
          </div>
        ) : (
          <div className="results__wrapper">
            
              <p>No Issue</p>
            
          </div>
        )}
      </div>
    );
   }
   else{
    const emoji=emojies[results[0].expressions.asSortedArray()[0].expression] || emojies["neutral"];
    return (
      <div className="results">
          <div className="results__wrapper">
            <div> 
              <p>Expression:{results[0].expressions.asSortedArray()[0].expression}</p>
              <p>Age:{Math.round(results[0].age)} years old</p>
              <p>Gender: {results[0].gender}</p>
            
            </div>
            <div className="results__emoji">
      <h1 className='emoj'>{emoji}
      {emojies[results[0].gender]}
    
      </h1>
             
              
            </div>
          </div>
      </div>
    );
  }} else {
    return (
      <div className="results">
        <Spinner />
      </div>
    );
  }
};

export default Results;
