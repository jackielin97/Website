"use strict";

function Home() {
    return (
        <div>
            <style>
                {`
                    h4 {
                        color: red;
                    }

                    h3 {
                        color: green;
                    }

                    img {
                        width: 25%;
                        height: 25%;
                        /* Remove text-align: center; */
                    }

                    h2 {
                        color: darkblue;
                        text-align: center;
                        margin-top: 1rem;
                        margin-bottom: 0.5rem;
                    }
                `}
            </style>
            <div id='body' style={{ textAlign: 'center' }}> {/* Apply text-align: center to center the content */}
                <h4>
                    What We Are
                </h4>

                <p>
                    We are a computer shop that sells new and old computers for people of all ages. We have existed for 50 years and never once did we have a down year. Customers have always left our business satisfied with what we brought as well as.
                </p>

                <h3>Why us?</h3>

                <p>
                    Our service will make you guaranteed happy with what you got. If not, we will refund 100% of the amount you paid. We have been recommended by most tech companies. We have a 100% customer satisfaction and a 5-star rating since the 2000s.
                </p>

                <h2>
                    Reviews
                </h2>
                
                <p>
                    This was the place that got me into a computer - John 
                </p>
                <p> I will forever come to this place if I ever need to buy a new computer - Jane
                </p>
                <img src="pic/oldComputer.jpg" />
            </div>
        </div>
    );
}
