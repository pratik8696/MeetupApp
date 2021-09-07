import React from 'react'
import MeetupDetails from '../../components/meetups/MeetupDetails'
function meetups() {
    return (
        <div>
            <MeetupDetails
                img="https://picsum.photos/3840/2160"
                title="A First Meetup"
                address="STreet no 5 block 21B"
                description="Deserunt aute sint laborum quis nisi deserunt voluptate."
            />
        </div>
    )
}

export default meetups
