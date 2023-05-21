import React, { useState, useContext, useEffect } from 'react'
import './ViewEvent.css'
import UserContext from '../../utils/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function ViewEvent() {

    let urlArr = window.location.pathname.split('/');
    const id = urlArr[urlArr.length - 1];

    console.log(id);

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [singleEvent, setSingleEvent] = useState([])

    // const [eventDay, setEventDay] = useState(1);
    window.scrollTo(0, 0);

    const getSingleEvent = async () => {
        const res = await axios.get(
            `https://waltz-server.onrender.com/events`,
            {
                headers: {
                    Authorization: user.token,
                },
            }
            
        );
        setSingleEvent(res.data.events.filter(e => e._id === id))
    }

    console.log(singleEvent);

    // const eve = [{ _id: "78676969", title: "halu", startTime: "XX:XX", endTime: "XX:XX", date: 67, description: "lorem10" }];

    useEffect(() => {
        try {
            if (user.token === "")
                navigate("/signin");
            getSingleEvent()
        }
        catch (err) {
            console.log(err)
        }
    }, [1000])

    return (
        
        <>{
            singleEvent.length === 0 ? <>Loading</> : (
                <div className='view-event'>
                        {singleEvent[0].hot ?
                                    <span className='title-span-mobile'></span>
                                    : <></>
                        }
                        <img src = { singleEvent[0].imageUrl } alt="xyz" />
                        <div className="view-event-box">
                            <div className="box-title">
                                {singleEvent[0].hot ?
                                    <span className='title-span'></span>
                                    : <></>
                                }
                                <span>
                                    {singleEvent[0].title}
                                </span>
                            </div>
                            <div className="box-event-child">
                                <span>Date : May {singleEvent[0].date}<sup>th</sup>, 2023 </span>
                                <span>Start Time : {singleEvent[0].startTime}</span>
                                <span>End Time : {singleEvent[0].endTime}</span>
                            </div>
                            <div className="box-event-child">
                                <h5>
                                    About Event:
                                </h5>
                                <p>
                                    {singleEvent[0].description}
                                </p>
                                <Link to = "/detailedEvents">
                                    <button className='view-event-back-button'>&#8676; Back</button>
                                </Link>
                            </div>
                        </div>
                </div>
            )
        }</>
    )
}
