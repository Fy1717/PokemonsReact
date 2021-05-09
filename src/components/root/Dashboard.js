import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import PokemonList from '../pokemons/PokemonList'
import ProductList from '../products/ProductList'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs='6'>
                        <PokemonList />
                    </Col>
                    <Col xs='6'>
                        <ProductList />
                    </Col>
                </Row>
            </div>
        )
    }
}
