import React from "react";
import MenuItem from "../menu-item/menu-item";


import './directory-menu.scss';


class Directory extends React.Component{
    
    state={
        sections:[
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/xXSnDW3/david-vilches-7-S8-XSGQw0ag-unsplash.jpg',
                id: 1
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/qmhj8qn/jackets.jpg',
                id: 2
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/H7Sb36H/sneakers.jpg',
                id: 3
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/LnpwF9H/womens.jpg',
                size: 'large',
                id: 4
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/drqR1kp/mens.jpg',
                size: 'large',
                id: 5
              }
        ]
    };
    
    render(){
        const renderedMenu=this.state.sections.map(({id,title,imageUrl,size})=>{
            return(
                <MenuItem title={title} imageUrl={imageUrl} size={size}  key={id}/>
            )
        })
        
        return(
            <div className="directory-menu">
               {renderedMenu}
            </div>
        )
    }
}


export default Directory;