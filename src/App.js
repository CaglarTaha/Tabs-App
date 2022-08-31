
import './App.css';

import {useState,useEffect} from "react"

import Loading from './Component/Loading';



function App() {

 const url = 'https://course-api.com/react-tabs-project'


const [loading,setLoading] = useState(true);


const [item,setitem] = useState([]);


const [value,setValue]= useState(0);



const  fetchitem  = async () => {

  const response =  await fetch(url);

  const newitem = await response.json();

console.log(newitem)
  setitem(newitem);
  setLoading(false);

} 


useEffect(() => {
  fetchitem();
  
}, []);

if (loading) {
  return (
    <Loading></Loading>
  )
}
   
const {company,dates,duties,title} = item[value]
  return (


    <div className="App">

<div className='container'>
<div className='Tittle'>
  <h2>Experience</h2>
  <div className='underline'></div>
</div>
<div className='center'>
  <div className='Row'> 
  <div className='left'>
  {item.map ((items,index)=>{
    return <div key={items.id}>
      <button onClick={()=>setValue(index)} >{items.company}</button>
    </div>
   })}
  </div>
  <article className='info'>
    <h3>{title}</h3>
    <h4>{company}</h4>
    <h5>{dates}</h5>
   {duties.map ((duty,index)=>{
    return <div key={index}>
      <p>{duty}</p>
    </div>
   })}
  </article>

  
  </div>
</div>
</div>
  
    </div>
  );
}

export default App;
 