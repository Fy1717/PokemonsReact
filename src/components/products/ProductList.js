import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, CardBody, Card, CardSubtitle, CardText, CardTitle, CardImg } from 'reactstrap'

class ProductList extends Component {
    render() {
        return (
            <Container >                
                <Card style= {{margin: "2%",  textAlign: "center", position: "fixed", width: "40%"}}> 
                    <CardImg top className="box" style= {{width: "12rem", textAlign: "center", height: "12rem", margin: "auto"}} src={ this.props.currentCategory.img } />
                    <CardBody>
                        <CardTitle tag="h5">{(this.props.currentCategory.name || '').toUpperCase()}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">POKEMON</CardSubtitle>
                        <CardText>POWER: { this.props.currentCategory.weight }</CardText>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
    }
}

export default connect(mapStateToProps)(ProductList)
