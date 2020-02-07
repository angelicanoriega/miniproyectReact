import React from 'react';

class form extends React.Component {
    render() {
      return (
        <form className="row">
            <div className="col-md-6 mt-2">
                <label className="sr-only" htmlFor="inlineFormInputName">Nombre</label>
                <input type="text" className="form-control" id="inlineFormInputName" placeholder="Jane Doe"/>
            </div>
            <div className="col-md-6 mt-2">
                <label className="sr-only" htmlFor="inlineFormInputName">Apellido</label>
                <input type="text" className="form-control" id="inlineFormInputName" placeholder="Sanchez"/>
            </div>
            <div className="col-md-6 mt-2">
                <label className="sr-only" htmlFor="inlineFormInputName">Correo</label>
                <input type="email" className="form-control" id="inlineFormInputName" placeholder="Jane@usuario.pe"/>
            </div>
            <div className="col-md-6 mt-2">
                <label className="sr-only" htmlFor="inlineFormInputName">DNI</label>
                <input type="text" className="form-control" id="inlineFormInputName" placeholder="12345678"/>
            </div>
        </form>
      );
    }
  }
  
export default form;