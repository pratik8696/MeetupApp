import React from 'react'
import MeetupList from '../components/meetups/MeetupList';

const Dummy_meetup=[
    {
        id:1,
        title:"A first meetup",
        image:"https://picsum.photos/3840/2160",
        address:'Some address times square',
        description:"This is a meetup"
    },
    {
        id:2,
        title:"A first meetup",
        image:"https://picsum.photos/1920/1080",
        address:'Some address times square',
        description:"This is a meetup"
    },{
        id:3,
        title:"A first meetup",
        image:"https://picsum.photos/2160/2160",
        address:'Some address times square',
        description:"This is a meetup"
    },
]

function Homepage() {
    return (
        <div>
            <MeetupList meetups={Dummy_meetup} />
        </div>
    )
}

export default Homepage;
