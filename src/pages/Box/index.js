import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import { MdInsertDriveFile } from 'react-icons/md';

// import { Container } from './styles';

import '../Box/style.css';
import logo from '../../assets/logo.svg';
export default class Box extends Component {

    state = { box: {} }
    async componentDidMount() {
        const box = this.props.match.params.id;
        const response = await api.get(`boxes/${box}`);

        this.setState( {box: response.data });
    }

    render() {
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt="" />
                    <h1>Box Solutions</h1>
                </header>

                <ul>
                <li>
                    <Link className="fileInfo" href="">
                        <MdInsertDriveFile size={24} color="#5Cfff" />
                        <strong>Desafio.pdf</strong>
                    </Link>

                    <span>há 3 minutos atrás</span>
                </li>
            </ul>
            </div>
        );
    }
}