import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, CardBody, Card, CardSubtitle, CardText, CardTitle, Button, Row, Col, CardImg } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as pokemonActions from '../../redux/actions/pokemonActions'

class PokemonList extends Component {
    componentDidMount() {
        this.props.actions.getPokemons()
    }


    componentWillMount() {
        this.props.actions.getPokemons()
    }

    render() {
        return (
            <Container>                
                {
                    this.props.pokemons.map(pokemon =>(
                        <Row>
                            <Col style= {{margin: "2%",  textAlign: "center"}}>
                                <Card key={pokemon.id} > 
                                    <CardImg top className="box" style= {{width: "12rem", height: "12rem", margin: "auto"}} src={pokemon.img} />
                                    <CardBody>
                                        <CardTitle tag="h5">{(pokemon.name || '').toUpperCase()}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">POKEMON</CardSubtitle>
                                        <CardText>POWER: { pokemon.weight }</CardText>
                                        <Button onClick={() => this.props.actions.changePokemon(pokemon) }>DETAILS</Button>
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
        currentPokemon: state.changePokemonReducer,
        pokemons: state.pokemonListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getPokemons: bindActionCreators(pokemonActions.getPokemons, dispatch),
            changePokemon: bindActionCreators(pokemonActions.changePokemon, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
