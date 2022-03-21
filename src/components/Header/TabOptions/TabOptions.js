import React, { Component } from 'react';
import './TabOptions.css';
//Importing componenents
import TabOption from './TabOption/TabOption';
export class TabOptions extends Component {
  
  constructor()
  {
      super();
      this.options = [
          {
              name: "Help",
              id: 1,
          },
          {
            name: "Offers",
            id: 2,
          },
          {
            name: "Sign In",
            id: 3,
          },
          {
            name: "Cart",
            id: 4,
          }];

  }  
  render() {
    return <div className='tab_options'>
        {this.options.map((option)=>
        {    
        return <TabOption key={option.id} details={option}/>
        })}
    </div>;
  }
}

export default TabOptions;
