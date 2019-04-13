import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './style.scss'
import api from '../../services/api';

class Main extends Component {
    state = {
        newBox: '',
    };

    handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post('boxes',{
            title: this.state.newBox,
        })

        this.props.history.push(`/box/${response.data._id}`)
    };

    handleInputChange = (e) => {
        this.setState({
            newBox: e.target.value
        })
    }

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="logo rocketseat"/>
                    <input type="text" placeholder="Criar um box" onChange={this.handleInputChange} value={this.state.newBox}/>
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}

export default Main;
