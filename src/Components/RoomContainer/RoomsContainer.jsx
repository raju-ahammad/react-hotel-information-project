import React from 'react'
import { withRoomConsumer } from '../../context'
import Loading from '../Rooms/Loading'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'



function RoomsContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading/>
    }
    return (
        <>
            Hello from Rooms container
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={ sortedRooms }/>
        </>
    )
}

export default withRoomConsumer(RoomsContainer)
