import React from 'react'
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetup() {
    function addmeetuphandler(data)
    {
        console.log(data);
    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addmeetuphandler} />
        </div>
    )
}

export default NewMeetup
