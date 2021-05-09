import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, CardBody, Card, CardSubtitle, CardText, CardTitle, Button, Row, Col, CardImg } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as categoryActions from '../../redux/actions/categoryActions'

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }


    componentWillMount() {
        this.props.actions.getCategories()
    }

    render() {
        return (
            <Container>                
                {
                    this.props.categories.map(category =>(
                        <Row>
                            <Col style= {{margin: "2%",  textAlign: "center"}}>
                                <Card key={category.id} > 
                                    <CardImg top className="box" style= {{width: "12rem", height: "12rem", margin: "auto"}} src={category.img} />
                                    <CardBody>
                                        <CardTitle tag="h5">{(category.name || '').toUpperCase()}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">POKEMON</CardSubtitle>
                                        <CardText>POWER: { category.weight }</CardText>
                                        <Button onClick={() => this.props.actions.changeCategory(category) }>DETAILS</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    ))
                }
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
