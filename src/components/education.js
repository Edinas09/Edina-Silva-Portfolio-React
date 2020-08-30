import React, { Component} from 'react';
import {Grid, Cell} from 'react-mdl';



class Education extends Component {
  render() {
    return(
      <div>
          <Grid>
 
            <Cell col ={12}> 
            <p>{this.props.startYear} - {this.props.endYear} <h7 style={{marginTop: '0px'}}> {this.props.schoolDegree} </h7></p>
            <h5 style={{marginTop: '0px'}}> {this.props.schoolName} </h5>
            
             <p style={{textAlign: 'justify'}}>
             {this.props.schoolDescription}
             </p>
             </Cell>
        
          </Grid>
      </div>
    )
  }
}

export default Education;
