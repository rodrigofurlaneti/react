import React, { Component } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';
export default class Main extends Component {
    state = {
        usuarios: [],
        usuarioInfo: {},
        page: 1,
    };
    componentDidMount() {
        this.loadUsuarios();
    }
    loadUsuarios = async (page = 1) => {
        const response = await api.get(`/usuarios?page=${page}`);
        const { docs, ...usuarioInfo } = response.data;
        this.setState({ usuarios: docs, usuarioInfo, page });
    };
    prevPage = () => {
        const { page, usuarioInfo } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadUsuarios(pageNumber);
    };
    nextPage = () => {
        const { page, usuarioInfo } = this.state;
        if (page === usuarioInfo.pages) return;
        const pageNumber = page + 1;
        this.loadUsuarios(pageNumber);
    };
    render() {
        const { usuarios } = this.state;
        return (
            <div className="usuario-list">
                {usuarios.map(usuarios => (
                    <article key={usuarios._id}>
                        <label>E-mail:</label><strong>{usuarios.email}</strong>
                        <p><label>Senha:</label>{usuarios.senha}</p>
                        <p><label>Cpf:</label>{usuarios.cpf}</p>
                        <label>Profile:</label><Link to={`/usuarios/${usuarios._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}