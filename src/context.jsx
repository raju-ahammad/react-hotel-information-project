import React, { Component } from 'react';

const RoomContext = React.createContext()

export default class RoomProvider  extends Component {
    state = {
        greeting: "Hello",
        name : "Raju"
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomProvider, RoomConsumer };
