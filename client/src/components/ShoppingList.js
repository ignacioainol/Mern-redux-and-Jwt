import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Eggs' },
            { id: uuid(), name: 'Milk' },
            { id: uuid(), name: 'Steak' },
            { id: uuid(), name: 'Water' }
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Item')
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name: name }]
                            }))
                        }
                    }}
                >
                    Add Item
                </Button>

                <ListGroup>
                    {items.map((part, index) =>
                        <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                style={{ marginRight: '1em' }}
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== part.id)
                                    }))
                                }}
                            >&times;</Button>
                            {part.name}
                        </ListGroupItem>
                    )}
                </ListGroup>

                {/* <ListGroup>
                    {items.map(({ id, name }) => (
                        <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                style={{ marginRight: '1em' }}
                                onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }))
                                }}
                            >&times;</Button>
                            {name}
                        </ListGroupItem>
                    ))}
                </ListGroup> */}
            </Container>
        )
    }
}

export default ShoppingList;