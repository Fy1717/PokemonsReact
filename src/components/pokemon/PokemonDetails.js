import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, CardBody, Card, CardSubtitle, CardText, CardTitle, CardImg } from 'reactstrap'
import alertify from "alertifyjs"
import * as wishlistActions from "../../redux/actions/wishlistActions"
import { bindActionCreators } from "redux"

class PokemonDetails extends Component {
    addToWishlist = (pokemon) => {
        this.props.actions.addToWishlist(pokemon)
        alertify.notify((pokemon.name || '').toUpperCase() + " is added to wishlist!")
    }

    render() {
        return (
            <Container >                
                <Card key= { this.props.currentPokemon.id } style= { {marginTop: "4%", textAlign: "center", position: "fixed", width: "37%" }}> 
                    <CardImg top className="box" style= {{ width: "12rem", textAlign: "center", height: "12rem", margin: "auto"}} src={ this.props.currentPokemon.img || ''} />
                    <CardBody>
                        <CardTitle tag="h5">{(this.props.currentPokemon.name || '').toUpperCase()}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">POKEMON</CardSubtitle>
                        <CardText>POWER: { this.props.currentPokemon.weight }</CardText>
                        <img onClick={() => console.log('AAAAAAAAAAAA') } style={{width:"75px", height:"75px", float: "left", marginLeft: "23%"}} src='https://pngimg.com/uploads/pokemon_logo/small/pokemon_logo_PNG11.png' />
                        <img onClick={() => this.addToWishlist(this.props.currentPokemon) } style={{width:"75px", height:"75px"}} src='https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png' />
                    </CardBody>
                </Card>
            </Container>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentPokemon: state.changePokemonReducer,
        addToWishlist: state.wishlistReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addToWishlist: bindActionCreators(wishlistActions.addToWishlist, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
