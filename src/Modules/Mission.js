import rocket from '../Images/Others/rocket-launch.svg'

export default function Mission(){
    return(
        <div className='container vh-100 d-flex flex-column align-items-center justify-content-center'>
            <div className='row w-75 text-center text-white'  >
                <img src={rocket} height='50' />
                <h2 className="greenLabel">THE MISSION</h2>
                <span>We are in the posession of the newest 
                    web and app technologies and use them in our 
                    digital conquest. Our heavy artillery like the
                    Winora DealerCenter, Haibike, YourShowroom and 
                    lots more has to be defended against boredom and 
                    lack of innovation. Our newest secret project - 
                    codename: Kabeljau - is waiting for you!
                </span>
            </div>
            <br/>
            <div className='row w-75 text-center text-white'>
                <div className='col'>
                    <h3 className="greenLabel">AREA OF OPERATION</h3>
                    <span>
                        Landshut, Ludwig-Erhart-Straße 13a. 
                        Armed with the best equipment and gadgets.
                        Excellent infrastructure. Shortest access times:
                        Airport 20 min. Munich 45 min. HomeOffice 1 min. 
                    </span>
                </div>
                <div className='col'>
                    <h3 className="greenLabel">YOUR TEAM</h3>
                    <span>
                        We don’t need 300 Spartans. Our head 
                        count is 15 and with you on our side, 
                        we will deal with any task - unharmed. 
                        We’ve got your back at any time. 
                    </span>
                </div>
            </div>
            
        </div>
    )
}