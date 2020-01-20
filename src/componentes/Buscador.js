import React, { Component } from 'react';


class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Toma el valor del input
        const termino = this.busquedaRef.current.value;

        //Envia los datos al componente principal (App.js)
        this.props.datosBusqueda(termino);
    }

    render() { 
        return (  
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imágen"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-danger btn-block btn-lg" value="Buscar..."/>
                    </div>

                </div>
            </form>
        );
    }
}
 
export default Buscador;