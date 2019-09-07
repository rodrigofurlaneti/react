import React, { Component } from 'react';
import api from '../../services/api';
import "./styles.css";
export default class Usuario extends Component {
    state = {
        usuario: {},
    };
    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/usuarios/${id}`);
        this.setState({ usuario: response.data });
    }
    render() {
        const { usuario } = this.state;
        return (
            <div className="usuario-info">
                <h1>{usuario.email}</h1>
                <p>{usuario.senha}</p>
                <p>{usuario.cpf}</p>
                <p>Url: <a href={usuario.url}>{usuario.url}</a></p>
            </div>
            );
    }
}