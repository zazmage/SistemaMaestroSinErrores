import axios from "axios";
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const url = "https://maestrogeekapp.herokuapp.com/data/";


export default class Estudiantes extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
            modalEliminar: false,
        }
    }

    componentDidMount(){
        //this.peticionGet();
    }

   

    SeleccionarEstudiante = (estudiante) => {

         this.setState({
             form: {
                id: estudiante,
             }
         })
         console.log(estudiante)
    }

    peticionGet=()=>{
        axios.get(url)
        .then(response => {
            this.setState({data response.data})
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    
   
   
    peticionDelete =  () => {
        await axios.delete(url+this.state.form.id)
        .then(response => {
            this.setState({modalEliminar:false});
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    {
        return (
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Celular</th>
                            <th>Dirección</th>
                            <th>Imagen</th>
                            <th>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(est => {
                                return(
                                    <tr key={est.id}>
                                        <td>{est.id}</td>
                                        <td>{est.documento}</td>
                                        <td>{est.nombres}</td>
                                        <td>{est.apellidos}</td>
                                        <td>{est.telefono}</td>
                                        <td>{est.celular}</td>
                                        <td>{est.direccion}</td>
                                        <td><img src={est.imagen} width="50px" height="70px" alt=""/></td>
                                         <button className="btn btn-danger"
                                         onClick={() => {this.SeleccionarEstudiante(est.id); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Está seguro de eliminar el estudiante
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger"
                       onClick={() => this}>Sí</button>
                        <button className="btn btn-secundary"
                       onClick={() => this.setState({modalEliminar:false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
