import React from 'react';
import user from '../img/user.png';

class card extends React.Component {
    render() {
      return (
          <div className="col-md-3 mt-4">
                <div className="card" >
                    <img className="card-img-top" src={user} alt="Card image cap"/>
                <div className="card-body">
                    <div className="card-body__title">
                        {this.props.user}
                    </div>
                    <div className="card-body__description">
                        {this.props.description}
                    </div>
                </div>
                </div>      
          </div>
        
      );
    }
  }
  
export default card;