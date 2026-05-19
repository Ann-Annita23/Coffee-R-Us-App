import React,{useState} from 'react';
import useFetch from '../Hooks/useFetch.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ProductCard from '../components/ProductCard.jsx';

export default function ProductPage(){
    const{data: coffeeList, loading}=useFetch("http://localhost:4000/coffee");
    const[searchTerm, setSearchTerm]=useState('');
    //this is to show that the network request is being worked on and the data is being fetched
    if(loading){
        return <div className="container text-center my-5 "><h2>Loading coffee selection...</h2></div>
    }

    //If the data fails to return or it is empty, it prevents an application crash by showing a message instead of trying to render the data
    if(!coffeeList || coffeeList.length === 0){
        return <div className="container text-center my-5 "><h2>No coffee available at the moment.</h2></div>
    }

    {/*Filtering the coffee list based on the search term entered by the user. It checks if the coffee name includes the search term (case-insensitive) and returns a new array of filtered coffee items.*/}
    const filteredCoffees=coffeeList.filter((coffee)=>{
        const matchesName=coffee.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesOrigin=coffee.origin.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesName || matchesOrigin;
    })

    return(
        <div className="container my-4">
            <div className="text-center mb-4">
                <h1 className="fw-bold text-dark">Our Coffee selection -Shop</h1>
                <p className="text-muted">Discover our curated selection of premium coffees from around the world. Whether you prefer a bold espresso, a smooth pour-over, or a rich cold brew, we have the perfect coffee for you. Explore our collection and find your new favorite brew today!</p>
            </div>
            
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
           {filteredCoffees.length > 0 ?(
            filteredCoffees.map((coffee)=>(
                <ProductCard key={coffee.id} coffee={coffee}/>
                        ))
              ):(
                <div className="text-center my-5 text-muted">
                    <h4>No coffee matches your search criteria.</h4>
                </div>
           )}
            </div>
        </div>
    )
}