import React from "react";
import TextItemList from "./TextItemList";

export const ItemListContainer = ({texto}) => {
    return (
       <TextItemList greeting={texto}/>
    );
}

export default ItemListContainer;