import React, {useState, useEffect} from 'react';
import { Fade, Slide } from 'react-reveal';
import MyButton from "../utils/MyButton";

function Discount() {
    const [state, setState] = useState({
        discountStart: 0
    });

    const Timer = () => {
        if(state.discountStart < 30){
            setState({
                discountStart: state.discountStart + 1
            })
        }
    }

    useEffect(() => {
        setTimeout(() => {
            Timer()
        }, 10)
    })

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade onReveal={() => Timer()}>
                <div className="discount_porcentage">
                    <span>{state.discountStart}%</span>
                    <span>OFF</span>
                </div>
                </Fade>
                <Slide right>
                <div className="discount_description">
                    <h3>Purhase tickets before 30th June</h3>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    <MyButton text='Purchase Tickets' bgcolor='#ffa800' color='#fff' link='#'/>
                </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount
