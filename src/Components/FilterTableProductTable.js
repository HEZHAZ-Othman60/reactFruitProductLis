import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { products } from "../Data";
import  { Button }  from  'react-bootstrap' ;


function FilterTableProductTable() {

    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);


    return (
        <div style={{ width: "30%", border: "solid red" }}>
            <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}

                inStockOnly={inStockOnly}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
            <Link to={"/products/add"}>add product</Link>
        </div>
    );
}
export default FilterTableProductTable;
