import React from "react";
import { PiHandWavingFill } from 'react-icons/pi';
import { GoChecklist } from 'react-icons/go';
import { BsDatabaseLock } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineDollar } from 'react-icons/ai';
import '../Styles/Dashboard.css';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryStack, VictoryPie, VictoryLabel } from "victory";


const myDataset = [
    [
        { x: "jan", y: 5 },
        { x: "feb", y: 30 },
        { x: "march", y: 50 },
        { x: "apr", y: 10 },
        { x: "may", y: 100 },
        { x: "june", y: 60 },
        { x: "july ", y: 70 },
        { x: "aug", y: 85 },
        { x: "sept", y: 50 },
        { x: "oct", y: 90 },
        { x: "nov", y: 50 },
        { x: "dec", y: 95 }
    ]
];

const Dashboard = () => {
    return <>
        <div className="content scroll">
            <div className="searchbar">
                <input type="search" class="form-control form-control-sm ml-3 w-75" placeholder="Search"
                    aria-label="Search" />
            </div>
            <h5>Hello Akshata<PiHandWavingFill size={25} /></h5>
            <div className="row  col-12 mt-4">
                <div className=" col category-container" >
                    <div className="row" style={{ textAlign: "center" }}>
                        <span className="çol" style={{ margin: 20, width: 70, height: 70, borderRadius: 34, backgroundColor: 'lightGreen', opacity: 0.8, textAlign: 'çenter' }}><AiOutlineDollar className="icon" size={35} /></span>
                        <span className="col" >
                            Earning<br /><b>$198k</b><p>37.8% this month</p>
                        </span>
                    </div>
                </div>
                <div className=" col category-container" >
                    <div className="row" style={{ textAlign: "center" }}>
                        <span className="çol" style={{ margin: 20, width: 70, height: 70, borderRadius: 34, backgroundColor: 'violet' }}><GoChecklist className="icon" size={35} /></span>
                        <span className="col">
                            Orders<br /><b>$198k</b><p>37.8% this month</p>
                        </span>
                    </div>
                </div>
                <div className=" col category-container" >
                    <div className="row" style={{ textAlign: "center" }}>
                        <span className="çol" style={{ margin: 20, width: 70, height: 70, borderRadius: 34, backgroundColor: 'lightBlue' }}><BsDatabaseLock className="icon" size={35} /></span>
                        <span className="col">
                            Income<br /><b>$198k</b><p>37.8% this month</p>
                        </span>
                    </div>
                </div>
                <div className=" col category-container" >
                    <div className="row" style={{ textAlign: "center" }}>
                        <span className="çol" style={{ margin: 20, width: 70, height: 70, borderRadius: 34, backgroundColor: 'lightPink' }}><RiLockPasswordLine className="icon" size={35} /></span>
                        <span className="col">
                            Total<br /><b>$198k</b><p>37.8% this month</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row  col-12">
                <div className="col-7 graph-content">
                    <h5>Overview</h5>
                    <p className="pb-0 mb-0">That monthly Earning</p>
                    <VictoryChart height={200} width={500}
                        style={{ marginBottom: 30, height: '70%' }}
                        domainPadding={{ x: 20, y: 10 }}
                    >
                        <VictoryStack
                            colorScale={["purple"]}
                        >
                            {myDataset.map((data, i) => {
                                return <VictoryBar data={data} key={i} />;
                            })}
                        </VictoryStack>
                        <VictoryAxis dependentAxis
                            tickFormat={(tick) => `${tick}%`}
                            scale={10}
                            style={{ tickLabels: { fontSize: 10 }, label: { fontSize: 10 }, marginBottom: 30, paddingBottom: 200 }}

                        />
                        <VictoryAxis
                            style={{ tickLabels: { fontSize: 10 }, label: { fontSize: 10 } }}
                        />
                    </VictoryChart>
                </div>
                <div className="col-4 chart-container">
                    <div>
                        <h5>Customers</h5>
                        <p>Customers that buy products</p>
                        <svg viewBox="0 0 400 400">
                            <VictoryPie
                                standalone={false}
                                colorScale={["rgb(216, 36, 126)", "purple", "#b3a1a123"]}
                                width={300} height={280}
                                data={[
                                    { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
                                ]}
                                innerRadius={40} labelRadius={100}
                                style={{ labels: { fontSize: 20, padding: 0, fill: "white" } }}
                            />
                            <VictoryLabel
                                textAnchor="middle"
                                style={{ fontSize: 20 }}
                                x={150} y={150}
                                text="Pie!"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="row col-12">

                <div className=" col table-content">
                    <table>
                        <tr style={{ borderBottom: "1px solid black" }}>
                            <th style={{ width: 600 }}>Product Name</th>
                            <th style={{ width: 150 }}>Stock</th>
                            <th style={{ width: 150 }}>price</th>
                            <th style={{ width: 150 }}>Total Sale</th>

                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><div className="searchbar">
                                <input type="search" class="form-control form-control-sm ml-3 w-75" placeholder="Search"
                                    aria-label="Search"/>
                            </div></td>
                            <td><div className="searchbar">
                                <select name="plan" id="plan">
                                    <option value="free"></option>
                                    <option value="starter" selected>Starter </option>
                                    <option value="professional"></option>
                                    <option value="corporate"></option>
                                </select> </div></td>
                        </tr>

                        <tr className="mt-2">
                            <td style={{ display: 'flex', flexDirection: "row", marginTop: 10 }}>
                                <div style={{ paddingRight: 10 }}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkGYx7K8lvppIvtK1ieahs_PNTT2j-_qZUUZjkeZalRySsW9MQxxCFEuR&usqp=CAU" />
                                </div>
                                <div>
                                    Abstract 3D
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </td>
                            <td> Available</td>
                            <td>300</td>
                            <td>20,000</td>
                        </tr>
                        <tr>
                            <td style={{ display: 'flex', flexDirection: "row", marginTop: 10 }}>
                                <div style={{ paddingRight: 10 }}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqKHrl7fWTZM2hV59Lpud19J85HtSqVbQWVxErfyfTweh7qOD-Gh7Vw4&usqp=CAU" />
                                </div>
                                <div>
                                    Surphence Illustration
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                </div>
                            </td>
                            <td> Available</td>
                            <td>300</td>
                            <td>20,000</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </>

}
export default Dashboard;