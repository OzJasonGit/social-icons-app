
import './App.css';
import {Button, message} from "antd";
import {LinkedinFilled, GithubOutlined, MediumOutlined, TwitterOutlined, InstagramFilled} from "@ant-design/icons";
import { useRef, useEffect } from 'react';

function iconMoveUp()
{
  alert();
}

function iconMoveDown()
{
  alert();
}






function App() {
  return (
    <div class="body">
      
        <div class="SOCIAL_ICONS">
          <div class="SOCIAL_ICONS_GRID">


            <div id="LINKEDIN" class="ICON_HOLDER">
            <Button id="LINKEDIN_BUTTON" 
  
            style={{fontSize:"22.5px", color:"#c7fff4"}} 
            type="link" href="#https://www.linkedin.com/in/oz-nwachukwu-arb-riba-aa897121/" size="large">
              <LinkedinFilled id="LINKEDIN_BUTTON_SVG"/>             
            </Button> 
            </div>


            <div id="GITHUB" class="ICON_HOLDER">
            <Button id="GITHUB_BUTTON" 
            style={{fontSize:"22.5px", color:"#c7fff4"}} 
            type="link" href="#https://github.com/OzJasonGit" size="large">
              <GithubOutlined id="GITHUB_BUTTON_SVG"/>             
            </Button> 
            </div>


            <div id="MEDIUM" class="ICON_HOLDER">
            <Button id="MEDIUM_BUTTON" 
            style={{fontSize:"22.5px", color:"#c7fff4"}} 
            type="link" href="#https://medium.com/@oznwachukwu-pfbd" size="large">
              <MediumOutlined id="MEDIUM_BUTTON_SVG"/>            
            </Button> 
            </div>


            <div id="TWITTER" class="ICON_HOLDER">
            <Button id="TWITTER_BUTTON" 
            style={{fontSize:"22.5px", color:"#c7fff4"}} 
            type="link" href="#https://twitter.com/_PFBD_" size="large">
              <TwitterOutlined id="TWITTER_BUTTON_SVG"/>            
            </Button> 
            </div>


            <div id="INSTAGRAM" class="ICON_HOLDER">
            <Button id="INSTAGRAM_BUTTON" 
            style={{fontSize:"22.5px", color:"#c7fff4"}} 
            type="link" href="#https://www.instagram.com/_pfbd_/" size="large">
              <InstagramFilled id="INSTAGRAM_BUTTON_SVG"/>            
            </Button> 
            </div>

          
        </div>
      </div>
    </div>
    
  );
}



export default App;








