import React from "react";
import ShowCollection from "../../Components/ShowCollection/ShowCollection";
import ShopData from "./shopdata";


class Shop extends React.Component{
    state={
        collections:ShopData
    }

    

    render(){
        const {collections}=this.state;
        return(
            <div className="shop-page">
            {
                collections.map(({id,...otherCollectionProps})=>(
                    <ShowCollection key={id} {...otherCollectionProps}/>
                ))

            }
            </div>
        )
    }

}


export default Shop;