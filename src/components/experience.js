import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { withStyles } from "@material-ui/core/styles";

  class Experience extends Component {

  render() {
    return(
      <div>
          <Grid>

            <Cell col ={12}> 
            <div style={{  textAlign: 'justify'}}> 
            {this.props.startMonth}/{this.props.startYear} - {this.props.endMonth}/{this.props.endYear} {this.props.jobName}
            <h6 style={{marginTop: '0px'}}> {this.props.jobCompany} </h6>
            </div>

            <div style={{  textAlign: 'justify'}}> 
            {this.props.jobDescriptionL1} 
            </div>
            <div style={{  textAlign: 'justify'}}> 
            {this.props.jobDescriptionL2} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
            {this.props.jobDescriptionL3} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
            {this.props.jobDescriptionL4} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
            {this.props.jobDescriptionL5} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
            {this.props.jobDescriptionL6} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
            {this.props.jobDescriptionL7} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
                {this.props.jobDescriptionL8} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
                {this.props.jobDescriptionL9} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
                {this.props.jobDescriptionL10} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
                {this.props.jobDescriptionL11} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
                {this.props.jobDescriptionL12} 
            </div>
            <div style={{   textAlign: 'justify'}}> 
                <div style={{ paddingLeft: '2em'}}> {this.props.jobDescriptionL13} </div>
            </div>
            <div style={{   textAlign: 'justify'}}> 
            <div style={{ paddingLeft: '2em'}}>  {this.props.jobDescriptionL14} </div>
            </div>
            <div style={{   textAlign: 'justify'}}> 
            <div style={{ paddingLeft: '2em'}}> {this.props.jobDescriptionL15} </div>
            </div>
            <div style={{   textAlign: 'justify'}}> 
            <div style={{ paddingLeft: '2em'}}>  {this.props.jobDescriptionL16} </div>
            </div>
            <div style={{   textAlign: 'justify'}}> 
            <div style={{ paddingLeft: '2em'}}>  {this.props.jobDescriptionL17} </div>
            </div>
            <div style={{   textAlign: 'justify'}}> 
                {this.props.jobDescriptionL18} 
            </div>

             </Cell>
        
          </Grid>
      </div>
    )
  }
}
export default Experience;
