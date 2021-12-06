import React from "react";

const Navbar = () => {
    return (
        <div className="container navbar navbar-dark bg-dark rounded">
            <ul className="nav justify-content-center ">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Popular Product</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Low Price</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">High Price</a>
            </li>
            </ul>
        </div>

        // <nav id="navigation">
		// 	{/* <!-- container --> */}
		// 	<div class="container">
		// 		{/* <!-- responsive-nav --> */}
		// 		<div id="responsive-nav">
		// 			{/* <!-- NAV --> */}
		// 			<ul class="main-nav nav navbar-nav">
		// 				<li class="active"><a href="/">Home</a></li>
		// 				<li><a href="/">Hot Deals</a></li>
		// 				<li><a href="/">Categories</a></li>
		// 				<li><a href="/">Laptops</a></li>
		// 				<li><a href="/">Smartphones</a></li>
		// 				<li><a href="/">Cameras</a></li>
		// 				<li><a href="/">Accessories</a></li>
		// 			</ul>
		// 			{/* <!-- /NAV --> */}
		// 		</div>
		// 		{/* <!-- /responsive-nav --> */}
		// 	</div>
		// 	{/* <!-- /container --> */}
		// </nav>
    );
}

export default Navbar;



