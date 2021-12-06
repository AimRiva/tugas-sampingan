import React from 'react';

const Item = () => {

    return(
//     <div className="container-md h-75 w-75">
//         <img className="" src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/209/0820948_PE709146_S5.jpg" alt="" width="200" height="350" />
//        <div className="card h-100 border border-2 border-dark">
//             <div className="card-body p-4">
//                 <div className="text-center">
//                     <h5 className="fw-bolder">AAA</h5>
//                 </div>
//             </div>
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                 <div className="text-center">
//                 </div>
//             </div>
//         </div>  
//    </div> 

<div className="container col-lg-9 col-lg-12 w-50">  
    <div className="container overflow-hidden mb-3 mb-sm-4 border hover-shadow">
        
    <div class="row">
    <div class="col-6 col-md-8">
        <span className="badge bg-secondary text-wrap">NEW</span>
    </div>
    <div class="col-6 col-md-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
            </svg>
    </div>
    <div class="col-6 col-md-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
    </div>
    </div>
            
            <div className="container text-center h-75 w-75">
                <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/185/0818569_PE774497_S5.jpg" className="rounded img-fluid lazy loaded" alt="..." />
                <h4>Sofa</h4>
            </div>
        <div className="">
            <div className="d-flex justify-content-between">
                <div className="min-width-0 pe-4">
                    <div className="product-title fw-bold mb-1">
                            ⭐⭐⭐⭐⭐
                    </div>
                </div>
                
                <input class="form-control" type="text" value="Rp 12.000" aria-label="readonly input example" readonly />
                <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </span>
                {/* <span className="price fw-bold text-900 mb-1 text-end">$99</span>  */}
            </div>  
        </div> 
    </div>
</div>

  );
}

export default Item;
