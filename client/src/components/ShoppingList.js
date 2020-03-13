import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                
                <ListGroup>
                    {items.map((part, index) =>
                        <ListGroupItem key={index}>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                style={{ marginRight: '1em' }}
                                onClick={ this.onDeleteClick.bind(this, part.id)}>&times;</Button>
                            {part.name}
                        </ListGroupItem>
                    )}
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});


export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList);