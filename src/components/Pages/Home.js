import React from 'react';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="HomePage" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px" ,padding:"70px"}} >

            <div className="col-md-6 m-auto rounded" style={{display:"flex", justifyContent:"center", width:"30%", backgroundColor:"white",padding:"50px"}}>
                <div className="card"style={{textDecoration:"none"}}>
                <img src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/100/000000/external-books-education-smashingstocks-flat-smashing-stocks-2.png"/>
                   <br />
                   <Link className="link_class" style={{textDecoration:"none", backgroundColor: "cyan", color:"Black", padding:"10px", margin:"10px", borderRadius:"10px"}} to="/booklist"> Book List</Link>
                </div>
                <div className="card" style={{marginLeft:"10%"}}>
                   <img src="https://img.icons8.com/color/100/000000/add-book.png"/>
                   <br />
                   <Link className="link_class" style={{textDecoration:"none", backgroundColor: "cyan", color:"Black", padding:"10px", margin:"10px", borderRadius:"10px"}} to="/addbooks"> Add Book </Link>  
                </div>
            </div>           
        </div>
    );
};

export default Home;
