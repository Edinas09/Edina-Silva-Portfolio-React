import React, { Component} from 'react';
import {Grid, Cell, RadioGroup} from 'react-mdl';
import  Education from './education';
import  Experience from './experience';
import Skills from './skills'; 
class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
          <div style={{textAlign: 'center'}}>
          <img className="avatar-img-resume" src="https://avatars3.githubusercontent.com/u/38966838?s=400&u=bed3cbddac22922017a360e93085f741b1d5fd66&v=4" alt="avatar" />

          </div>
          <h2 style={{width: '75%', margin: 'auto',  paddingTop:'2em', textAlign: 'center'}}>Edina Silva</h2>
          <h4 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Full Stack Developer</h4>
          <hr style={{width: '75%', margin: 'auto',  borderTop: '2px dotted gray', width: '50%'}}/>
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', textAlign: 'justify', paddingBottom: '1em'}}>
          Hi, my name is Edina. I was born in São Paulo, Brazil, where I lived most of my life. However, I decided to move to Vancouver and did a web & app development college. As of 2019, I'm living in Seattle.
          </p>
          <hr style={{width: '75%', margin: 'auto',  borderTop: '2px dotted gray', width: '50%', paddingBottom: '1em'}}/>
          
          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Address</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center', paddingBottom: '1em'}} >Bellevue - WA</p>

          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Phone</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center' , paddingBottom: '1em'}} >(206) 960-7245</p>

          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Email</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center' , paddingBottom: '1em'}} >edinas09@gmail.com</p>

          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Web</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center' , paddingBottom: '1em'}} >edinasilva.com</p>
          <hr style={{width: '75%', margin: 'auto',  borderTop: '2px dotted gray', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          <Education 
          startYear={2012}
          endYear ={2015}
          schoolName={"My Scholl"}
          schoolDescription ={"some description here"}
          />
                    <Education 
          startYear={2012}
          endYear ={2015}
          schoolName={"My Scholl"}
          schoolDescription ={"some description here"}
          />
                    <Education 
          startYear={2012}
          endYear ={2015}
          schoolName={"My Scholl"}
          schoolDescription ={"some description here"}
          />
          <hr style={{width: '100%', margin: 'auto',  borderTop: '2px dotted gray'}}/>
          <h2>Experiences</h2>

          <Experience 
          startYear={2012}
          endYear ={2015}
          jobName={"My Scholl"}
          jobDescription ={"some description here"}
          />
          <Experience 
          startYear={2012}
          endYear ={2015}
          jobName={"My Scholl"}
          jobDescription ={"some description here"}
          />
          <Experience 
          startYear={2012}
          endYear ={2015}
          jobName={"My Scholl"}
          jobDescription ={"some description here"}
          />
          <Experience 
          startYear={2012}
          endYear ={2015}
          jobName={"My Scholl"}
          jobDescription ={"some description here"}
          />
          <hr style={{width: '100%', margin: 'auto',  borderTop: '2px dotted gray'}}/>
          <h2>Skills</h2>
          <Skills
          skill={"DataBase"}
          progress={90}
          />
          <Skills
          skill={"JavaScript"}
          progress={60}
          />
          <Skills
          skill={"React"}
          progress={50}
          />
          </Cell>
          
        </Grid>
      </div>
    )
  }
}
export default Resume;