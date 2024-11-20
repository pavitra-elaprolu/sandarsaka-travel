import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CustomDropdown from "../CustomDropDown/CustomDropDown";
import {Button} from "react-bootstrap";
import "./AdvancedSearch.css";
import { NavLink } from "react-router-dom";
const AdvancedSearch=()=>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectedLocation =(value)=>{
        console.log("Location", value)
      }
    
      const selectedGuest =(value)=>{
        console.log("Guest ", value)
      }
    return(
        <>
       <section className='box-search-advance'>
        <Container>
            <Row>
            <Col md={12} xs={12}>
               <div className='box-search shadow-sm'>
                <div className='item-search'>
                <CustomDropdown
                label="Location"
                onSelect={selectedLocation}
                options={
                    [
                        "USA, Turkish",
                        "Tokyo, Japan",
                        "Sydney Australia",
                        "Melbourne, Australia",
                        "Paris, France"
                    ]
                }
                
                />
                </div>
                <div className="item-search item-search-2">
                    <label className='item-search-label'>Check in</label>
                    <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd MMMM yyyy"
                    
                    />
                </div>
                <div className="item-search item-search-2">
                    <label className='item-search-label'>Check out</label>
                    <DatePicker 
                     selected={endDate} 
                     onChange={(date) => setEndDate(date)} 
                     selectsEnd
                     startDate={endDate}
                     endDate={startDate}
                     dateFormat="dd MMMM yyyy"
                    
                    />
                </div>
                <div className="item-search bd-none">
                    <CustomDropdown
                     label="Guest"
                     onSelect={selectedGuest}  
                     options={
                         [
                            "2 adults 1 children",
                            "2 adults 2 children",
                             "2 adults, 3 children",
                         ]
                     }
                    />
                </div>
                <div className="item-search bd-none">
                    <Button className="primaryBtn flex-even d-flex justify-content-center">
                    <i className="bi bi-search me-2"></i> <NavLink to="./flightbooking" style={{ textDecoration: "none", color: "inherit" }}
                    >Search</NavLink>
                    </Button>

                </div>

               </div>
            </Col>
            </Row>
        </Container>
       </section>
        </>
    )
}

export default AdvancedSearch;