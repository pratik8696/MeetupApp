import React,{useState} from 'react'
import {useRouter} from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Spinner from '../../components/ui/Spinner';
function NewMeetup() {
    const [loading,setLoading]=useState(false);
    const router=useRouter();
    async function addmeetuphandler(data)
    {
        setLoading(true);
        const response=await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(data),
        });

        
        const datainresponse=response.json();

        console.log(datainresponse);
        setLoading(false);
        router.replace('/');
    }
    return (
        <div>
            {loading && <Spinner />}
            {!loading && <NewMeetupForm onAddMeetup={addmeetuphandler} />}
            
        </div>
    )
}

export default NewMeetup
