import React,{useState} from 'react'

 const Search = ({getQuery}) => {
     const [item,setItem]=useState('');
     const onChange=(query)=>{
setItem(query);
getQuery(query);
     }

    return ( 
        <section className='search'>
<form>
    <input type='text' className='form-control' value={item} onChange={(e)=>onChange(e.target.value)} placeholder='search here' autoFocus/>
</form>
        </section>
    )
}
export default Search