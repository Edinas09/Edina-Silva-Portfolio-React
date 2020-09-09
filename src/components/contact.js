import React, { Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <div className="contact-cell">
            <h2>
              Edina do Nascimento Silva
            </h2>
            <img className="avatar-img-contact" src="https://avatars3.githubusercontent.com/u/38966838?s=400&u=bed3cbddac22922017a360e93085f741b1d5fd66&v=4" alt="avatar" />
            
            <p style={{ width: '80%', margin: 'auto', paddingTop: '3em'}}>
              Hi, my name is Edina. I was born in São Paulo, Brazil, where I lived most of my life. However, I decided to move to Vancouver and did a web & app development college. As of 2019, I'm living in Bellevue-WA.
            </p>
          </div>
          </Cell>
 

          <Cell col={6}>
          <div className="contact-cell">
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List >


                <ListItem>
                  <ListItemContent style={{fontsize: '1.2rem', fontFamily: 'Anton',  color: '#fff',   justifyContent: 'center'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                      edinas09@gmail.com
                      </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontsize: '1.2rem', fontFamily: 'Anton' ,  color: '#fff',    justifyContent: 'center'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                      edinas09
                      </ListItemContent>
                </ListItem>
  
              </List>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;