import React, { useState } from 'react';
import { BrowserRouter, Routes, Switch, Route, Link } from 'react-router-dom';
import FilterTableProductTable from './Components/FilterTableProductTable';
import ProductCategoryRow from './Components/ProductCategoryRow';
import ProductRow from './Components/ProductRow';
import ProductTable from './Components/ProductTable';
import SearchBar from './Components/SearchBar';
import Test from './test';

function RouterTest() {
	const [logged, setLogged] = useState(false);
	const [user, setUser] = useState('');

	return (
		// Je wrap toute mon app avec ce component
		<BrowserRouter>
			<div className="container">
				<ul>
					<Link to="/">Products</Link>| {''}
					<Link to="/login">Login</Link>|
					<Link to="/cart">Cart</Link>|
				</ul>
				<h1>Liste des produits</h1>
				<Routes>
					<Route path="/routerTest/" element={<RouterTest />} />
					<Route path="/" element={<FilterTableProductTable />} />
					<Route path="/productCategoryRow/" element={<ProductCategoryRow />} />
					<Route path="/productRow/" element={<ProductRow />} />
					<Route path="/productTable/" element={<ProductTable />} />
					<Route path="/searchBar/" element={<SearchBar />} />
					<Route path="/blague/" element={<Test />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default RouterTest;
