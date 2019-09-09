import React, { Component } from "react";
import api from '../../services/api';
import './styles.css';
export default class Main extends Component {
    state = {
        usuarios: [],
    };
    componentDidMount() {
        this.loadUsuarios();
    }
    loadUsuarios = async () => {
        const response = await api.get();
        this.setState({ usuarios: response.data.articles });
    };
    render() {
        const { usuarios } = this.state;
        console.log(usuarios);
        return (
            <div class="container">
                <div className="usuario-list" >
                    {usuarios.map(usuario => (
                        <article key={usuario.publishedAt}>
                            <div class="row">
                                <strong>{usuario.title}</strong>
                            </div>
                            <div class="row">
                                <div class="text-break">
                                    <p>{usuario.source.name} {new Date(usuario.publishedAt).toLocaleDateString()} {new Date(usuario.publishedAt).toLocaleTimeString()}</p>
                                </div>
                            </div>
                            <div class="row align-items-start">
                                <div class="col-11"></div>
                                <div class="col-1">
                                    <a href={usuario.url}>
                                        <button type="button" class="btn btn-primary btn-sm">Ver</button>
                                    </a>
                                </div>
                                </div>
                        </article>
                ))}
                </div>
            </div>
        )
    }
}