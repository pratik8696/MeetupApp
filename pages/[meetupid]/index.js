import React from 'react'
import MeetupDetails from '../../components/meetups/MeetupDetails'
function meetups(props) {
    return (
        <div>
            <MeetupDetails
                img={props.meetup.img}
                title={props.meetup.title}
                address={props.meetup.address}
                description={props.meetup.description}
            />
        </div>
    )
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupid: '1',
                }
            },
            {

                params: {
                    meetupid: '2',
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    const route = context.params.meetupid;
    console.log(route);

    return {
        props: {
            meetup: {
                id: route,
                img: "https://picsum.photos/3840/2160",
                title: "A First Meetup",
                address: "STreet no 5 block 21B",
                description: "Deserunt aute sint laborum quis nisi deserunt voluptate.",
            }
        }
    }
}

export default meetups
