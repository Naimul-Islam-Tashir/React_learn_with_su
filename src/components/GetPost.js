import { useEffect, useState } from "react";

function GetPost() {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState();
    const [post,setPost]=useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setPost(data);
            setError('');
        })
        .catch(err=>{
            setLoading(false);
            setPost('')
            setError('there is problem')
        })
    },[])
   return(
           <div>
                 {loading?"loading...":post.body}
                 {error?error:null}
           </div>
         );
       }
export default GetPost;