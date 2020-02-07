import React from 'react';
import Card from './card';

const createCard=(obj)=>{

    const listCards = obj.map((content,index) =>
        <Card key={index} user={content.username} description={content.commet}/>
  );
  return (
    <div className="row">{listCards}</div>
  );
}  

class contentCards extends React.Component {
    render() {
      return (
        <div className="card__container">
                <div id="comentarios" className="card__container__tile">
                    Conoce los comentarios de los usuarios
                </div>
            {createCard(this.props.comentaty)}
        </div> 
      );
    }
  }
  
export default contentCards;