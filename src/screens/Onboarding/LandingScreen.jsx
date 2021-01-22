import React from 'react'
import Button from '../../components/Button.jsx';
import './styles.css'
export default function LandingScreen () {

    return (	
    <div className='landingContainer'>
        <div clasName='overlay'>
        <video  className="video" autoPlay loop muted >
            <source src={require('/Users/sean/sites/jozi-active/src/components/video/jozi_Active_Video.mp4')} type="video/mp4"/>
        </video>
        </div>
        <div className="landingContent">
        <div className="landingButtonContainer">
        <Button className='landingButton1' buttonName="LET'S GET ACTIVE!"/>
        <br/>
        <Button className='landingButton2' buttonName="REFER A FRIEND!"/>
        </div>
		</div>
    </div>
    )
}
