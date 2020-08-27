import React, { Component} from 'react';
import { Tab, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Tabs } from 'react-mdl/lib/Tabs';
import Grid, { Cell } from 'react-mdl/lib/Grid';
import { CardText } from 'react-mdl/lib/Card';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }
  toggleCategoris() {
        if (this.state.activeTab == 0){
          return (
            <div className="projects-grid">
              <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1400/0*7xhsdTCE-ikuWeAX.png) center / cover'}}>React Project #1</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                      <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

              <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1400/0*7xhsdTCE-ikuWeAX.png) center / cover'}}>React Project #2</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                      <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>

              <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1400/0*7xhsdTCE-ikuWeAX.png) center / cover'}}>React Project #3</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>CodePen</Button>
                      <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>
              

            </div>
          )
        }else if (this.state.activeTab == 1){
          return (
            <div>
              <h1>
                This is WordPress
              </h1>
            </div>
          )
        }else if (this.state.activeTab == 2){
          return (
            <div>
              <h1>
                This is FrontEnd
              </h1>
            </div>
          )
        }else if (this.state.activeTab == 3){
          return (
            <div>
              <h1>
                This is BackEnd
              </h1>
            </div>
          )
        }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
        <Tab>React</Tab>
        <Tab>WordPress</Tab>
        <Tab>FrontEnd</Tab>
        <Tab>BackEnd</Tab>
        </Tabs>

        
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategoris()}
              </div>
            </Cell>
          </Grid>
          
        
      </div>
    )
  }
}
export default Projects;