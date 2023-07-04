import React, { useState } from "react";

import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
const CarListPage = () => {

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false)

    return (
        <>
            {loading ?
                (<DashSpinner />) : (
                    <>
                        <HandleScroll />
                        <div id="category-container" className="category-container">
                            {/* start your coding from here you can give the div any class name oooo*/}
                            <div className="container-start">
                                <h1> Car Listing Page</h1>
                            </div>
                            {/* and end it here */}
                        </div>
                    </>
                )
            }
        </>
    )
}

export default CarListPage;