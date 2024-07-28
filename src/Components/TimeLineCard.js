import React from 'react'

function TimeLineCard(props) {
    const time = props.time.slice(11);
  return (
    <>  
        <div className="main min-w-[100px] p-4 rounded ">
        <p></p>
        <img src={`http:${props.icon}`} alt="weather-img" className="w-12 h-12" />
        <p>{time}</p>
        </div>
       

    </>
  )
}

export default TimeLineCard
