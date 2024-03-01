import { serveData } from './Data';
import RectangleLeft from './Icons/RectangleLeft.svg'
import RectangleRight from './Icons/RectangleRight.svg';
import { StyledWhatWeServe } from './whatWeServe.styles';


const WhatWeServe = () => {
    return (
        <StyledWhatWeServe>
            <span>
                <img src={RectangleLeft} alt={RectangleLeft} />
                <h2>What We Serve</h2>
                <img src={RectangleRight} alt={RectangleLeft} />
            </span>
            <div>
                {serveData.map((data, index) => {
                    return (
                        <div key={index}>
                            <img src={data.img} alt={data.img} />
                            <h2>{data.heading}</h2>
                            <p>{data.text}</p>
                        </div>

                    )
                })}
            </div>
        </StyledWhatWeServe>
    )
}

export default WhatWeServe