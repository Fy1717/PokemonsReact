import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import ProductList from '../products/ProductList'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs='6'>
                        <CategoryList />
                    </Col>
                    <Col xs='6'>
                        <ProductList />
                    </Col>
                </Row>
            </div>
        )
    }
}
