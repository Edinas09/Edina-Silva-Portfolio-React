import React, { Component} from 'react';
import { Grid,  Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div  style={{width: '100%',  margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://store.playstation.com/store/api/chihiro/00_09_000/container/BR/pt/999/UP1112-CUSA06917_00-AV00000000000099/1580207151000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
             <h1>Full Stack Developer</h1> 
            <hr />
            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | DataBase</p>
            <div className="social-links">

              <a href="https://www.linkedin.com/in/edinanascimento/" rel="noopener noreferrer"  target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>

              <a href="https://github.com/Edinas09" rel="noopener noreferrer"  target="_blank">
              <i className="fa fa-github-square" aria-hidden="true"/>
              </a>

              <a href="https://app.rocketseat.com.br/me/edina-silva-1594080133" rel="noopener noreferrer"  target="_blank">
              <i className="fa fa-rocket" aria-hidden="true"/>
              </a>

              <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true"/>
              </a>
              
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Landing;