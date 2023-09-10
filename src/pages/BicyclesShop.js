import { Input, Slider, Button, Spin } from "antd";
import { React, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayBicycles from "../components/bicycleShopComponents/DisplayBicycles";
import css from "../components/bicycleShopComponents/design/DisplayItems.module.css";
import DisplayAllProducts from "../components/bicycleShopComponents/DisplayAllProducts";
import DisplayAccessories from "../components/bicycleShopComponents/DisplayAccessories";
import { useLocation, useNavigate, Routes, Route, Link, Navigate } from "react-router-dom";
import { getAccessories, getBicycles, getAllProducts, getAllProducts_keyword } from "../actions/fetchActions";

const { Search } = Input;

export default function BicyclesShop() {
   const focusOnLoad = useRef(null);

   useEffect(() => {
      focusOnLoad.current.focus(focusOnLoad);
   }, []);

   const minPrice = 0;
   const maxPrice = 1000;
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const queryParams = new URLSearchParams(location.search);
   const [range, setRange] = useState([queryParams.get("minPrice") || minPrice, queryParams.get("maxPrice") || maxPrice]);
   const [url, setUrl] = useState(window.location.href);
   const [searchValue, setSearchValue] = useState("");

   const displayRange = (element) => {
      setRange([element[0], element[1]]);
   };

   const AssignFilters = (min, max) => {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set("minPrice", min);
      newSearchParams.set("maxPrice", max);
      const newUrl = `${location.pathname}?${newSearchParams.toString()}`;
      navigate(newUrl);
      setUrl(newUrl);
   };

   const handleFilter = (event) => {
      event.preventDefault();
      AssignFilters(range[0], range[1]);
   };

   const handleReset = (event) => {
      event.preventDefault();
      AssignFilters(minPrice, maxPrice);
      setRange([minPrice, maxPrice]);
   };

   const handleSearch = (keyword) => {
      navigate("");
      dispatch(getAllProducts_keyword(keyword));
      setSearchValue("");
   };

   useEffect(() => {
      dispatch(getAllProducts(range));
      dispatch(getBicycles(range));
      dispatch(getAccessories(range));
   }, [url]);

   const all_products = useSelector((state) => {
      return state.productReducer.all_products;
   });

   const bicycles = useSelector((state) => {
      return state.productReducer.bicycles;
   });

   const accessories = useSelector((state) => {
      return state.productReducer.accessories;
   });

   const isLoading = useSelector((state) => {
      return state.loaderReducer.productLoader;
   });

   return (
      <div className={css.outer}>
         <div className={css.itemsandfilters}>
            <Spin size="large" style={{ marginTop: "50%" }} spinning={isLoading} tip="Loading...">
               <Routes path="/">
                  <Route>
                     <Route path="/accessories" element={<DisplayAccessories accessories={accessories} />} />
                     <Route exact path="/bicycles" element={<DisplayBicycles bicycles={bicycles} />} />
                     <Route path="/" element={<DisplayAllProducts products={all_products} />} />
                     <Route path="/*" element={<Navigate to="/ErrorPage" replace />} />
                  </Route>
               </Routes>
            </Spin>
            <div className={css.filters}>
               <div className={css.searchbar}>
                  <div className="group-4">
                     <span>Search</span>
                  </div>
                  <Search
                     ref={focusOnLoad}
                     placeholder="Search Products..."
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                     onSearch={handleSearch}
                     enterButton
                     size="large"
                     style={{ borderRadius: 0 }}
                  />
               </div>

               <div className={css.filterbar}>
                  <div className="group-4">
                     <span>Filter by price</span>
                  </div>
                  <form onSubmit={handleFilter}>
                     <Slider
                        range={{
                           draggableTrack: true,
                        }}
                        defaultValue={[range, maxPrice]}
                        min={minPrice}
                        max={maxPrice}
                        value={[range[0], range[1]]}
                        onChange={displayRange}
                     />
                     <div className={css.filterbaramount}>
                        <div>${range[0]}</div>
                        <div>${range[1]}</div>
                     </div>
                     <div className={css.filterbuttons}>
                        <Button onClick={handleReset} htmlType="reset">
                           RESET
                        </Button>
                        <Button type="primary" htmlType="submit">
                           APPLY
                        </Button>
                     </div>
                  </form>
               </div>

               <div className={css.filtercatagory}>
                  <div className="group-4">
                     <span>Filter by catagories</span>
                  </div>
                  <ul>
                     <li>
                        <Link to="/store/">
                           <span style={{ cursor: "pointer" }}>All</span> ({all_products?.length})
                        </Link>
                     </li>
                     <li>
                        <Link to="/store/bicycles">
                           <span style={{ cursor: "pointer" }}>Bicycle</span> ({bicycles?.length})
                        </Link>
                     </li>
                     <li>
                        <Link to="/store/accessories">
                           <span style={{ cursor: "pointer" }}>Accessory</span> ({accessories?.length})
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
