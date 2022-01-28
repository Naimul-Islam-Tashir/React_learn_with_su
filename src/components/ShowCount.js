function ShowCount({count,title}){
    console.log(`rendering ${title}.....`);
    return(
        <div>
            <p>
                {title} is {count}
            </p>
        </div>
    )
   }
   export default ShowCount;