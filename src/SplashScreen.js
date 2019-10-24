import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

import mikePic from './assets/images/mikepic.png'

const SplashSection = styled.section`
        height:100vh;
        text-align:center;
    `;
const SplashDiv = styled.div`
        padding-bottom:10vh;
    `;

const ProfileImg = styled.img`
        border-radius: 50%;
        box-shadow: 0 0 1px 5px #230903;
        max-width: 25%;
        height: auto;
        width: auto\9;
    `;

class SplashScreen extends Component {
    render(){
        return(
        <SplashSection>
            <SplashDiv>
                <h1>Michael Matthew Sy (WIP)</h1>
                <h1>Web Developer - Software Engineer</h1>
            </SplashDiv>
            <ProfileImg className="profile" alt="image" src={mikePic}/>
        </SplashSection>
        )
    }
}

export default SplashScreen