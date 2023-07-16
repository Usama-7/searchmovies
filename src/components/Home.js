import React from 'react'
import List from './List';
import Searchbar from './Searchbar';

const Home = () => {
    return ( 
        <>
        
        <div className='container-fluid'>
<img src="./images/webcover.webp" alt="" width={1600} height={450}/>
        </div>
        <List/>
     <Searchbar/>
        </>
     );
}
export default Home;