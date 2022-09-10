import React from "react";
import CollectionItem from "../collection-item/collection-item";

import './showCollection.scss';

const ShowCollection=({title,items})=>{



    return(
        <div className="show-collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="show">
                {
                    items
                    .filter((item,idx)=>idx<4)
                    .map(({id,...otherItemProps})=>(
                        <CollectionItem key={id} {...otherItemProps}/>
                    ))
                }
            </div>

        </div>
    )
}

export default ShowCollection;