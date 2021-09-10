// api/new-meetup

function handler(req,res)
{
    if(req.method==='POST')
    {
        const data=req.body;
        const {title,address,image,description}=data;
    }
}

export default handler;