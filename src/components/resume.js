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
          I’ve been working as Full Stack Developer at RDC Viagens company where I’ve been challenging myself with amazing splits. I already had opportunity to deliver an e-commerce page that was build in react. I set up the environment in Ubuntu Linux with LAMP, Wordpress with Bedrock and with theme in Sage 9, witch has being developing with Bootstrap and Laravel.
          </p>
          

          <h4 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Technical Skills</h4>
          <hr style={{width: '75%', margin: 'auto',  borderTop: '2px dotted gray', width: '50%', paddingBottom: '1em'}}/>

          <p style={{ width: '75%', margin: 'auto', textAlign: 'justify', paddingBottom: '1em'}} >•	Tools: Wordpress, VSCode, Atom, Canva, PhotoShop, Eclipse, NetBeans, Dreamweaver, ALM, ALER, CVS, GitHub, GitLab, Microsoft PPM, Asana, Jira, Xcode (1 year), Android Suite (1 year).</p>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'justify', paddingBottom: '1em'}} >•	Methodologies: ITIL, SCRUM, TM-Forum Standards (eTOM, TAM, SID), UML, COE, BPM</p>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'justify', paddingBottom: '1em'}} >•	Technologies: JAVA, ASP, PHP, REACTJS, CSS, JavaScript, PL/SQL, SOA, BAM, API, VB6, ORACLE PORTAL, FORMS/REPORTS ORACLE 6i, WEBOGIC, ESB –ORACLE SUITE, CLOUD Remedy, DATAWEREHOUSE, Python, Flask, SWIFT (1 year).</p>
         
          <h4 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Contact</h4>
          <hr style={{width: '75%', margin: 'auto',  borderTop: '2px dotted gray', width: '50%'}}/>
          <p></p>
          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Address</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center', paddingBottom: '1em'}} >Bellevue - WA</p>

          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Skype</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center' , paddingBottom: '1em'}} >edinasilva09</p>

          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Email</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center' , paddingBottom: '1em'}} >edinas09@gmail.com</p>

          <h5 style={{width: '75%', margin: 'auto',  color: 'grey', textAlign: 'center'}}>Web</h5>
          <p style={{ width: '75%', margin: 'auto', textAlign: 'center' , paddingBottom: '1em'}} >edinasilva.com</p>
          
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <p>
          <h3>Education</h3>
          <hr style={{width: '100%', margin: 'auto',  borderTop: '2px dotted gray'}}/>
          </p>
          <div className="resume-box">
          <Education  
          startYear={2018}
          endYear ={2020}
          schoolName={"CICCC - Cornerstone International Community College of Canada"}
          schoolDegree= {"Web & Mobile App Development"}
          schoolDescription ={"The Web and Mobile Application Development Program is comprised of 10 courses designed to prepare learners for a career in Web Application development business sectors as well as with associations that provide different IT products and services to small, medium and large businesses. The program examines all sectors of graphic design and App development with a particular focus on best practices at all levels of employment and ownership. Some of the topics covered are: Mobile technology, Web development, Rich media development, Project and Media Management, AIR, JAVA, C languages. Also details of Android and IOS App development."}
          />
          </div>
          <p></p>
          <div className="resume-box">
          <Education 
          startYear={2003}
          endYear ={2005}
          schoolName={"Grupo Educacional Flamingo"}
          schoolDegree= {"Graduated in Analysis and Systems Development"}
          schoolDescription ={"Graduates from this program will be able to develop, operate and maintain administrative, financial and industrial systems;  To evaluate and design databases; to develop and program systems using web technologies; to carry out technical feasibility studies using criteria based on cost and efficiency to select alternatives; to administer and develop data processing projects; to administer, dimension and maintain computer networks; to work as software engineers; and to work in teaching and research."}
          />
          </div>
          <p></p>
          <div className="resume-box">
          <Education 
          startYear={2000}
          endYear ={2002}
          schoolName={"Colégio Nossa Senhora da Lapa"}
          schoolDegree= {"Technical College data processing"}
          schoolDescription ={""}
          />
          </div>
          <p></p>
          <p>
          <h3>Experiences</h3>
          <hr style={{width: '100%', margin: 'auto',  borderTop: '2px dotted gray'}}/>
          </p>
          <div className="resume-box">
          <Experience 
            startMonth={"Apr"}
            startYear={2020}
            endMonth={""}
            endYear ={""}
            jobName={"Full Stack Developer"}
            jobCompany={"RDC Viagens"}
            jobDescriptionL1={"Development of ecommerce - webpage with React.JS;"}
            jobDescriptionL2={"Development of custom themes with Sage 9 PHP, Laravel, Bootstrap;"}
            jobDescriptionL3={"Development of plugins with PHP;"}
            jobDescriptionL4={"Updating of images with photoshop;"}
            jobDescriptionL5={"Creating of linux ubuntu 20 homolog environment with LAMP (Linux, Apache, MySql and PHP7)"}
            jobDescriptionL6={"All Activities have been delivered with scrum methodology, followed by the four pillars: sprint planning, daily scrums, sprints, and retrospectives."}
            jobDescriptionL7={"https://github.com/RdcViagens"}
          />
          </div>
          <p></p>
           <div className="resume-box">
            <Experience 
            startMonth={"May"}
            startYear={2017}
            endMonth={"Feb"}
            endYear ={"2020"}
            jobName={"WebDeveloper"}
            jobCompany={"FG Brand Manager Strategy & Marketing "}
            jobDescriptionL1={"Development of web sites on Wordpress using plugins (e.g. Elementor Pro, Envato Elements, Google Analytics, facebook, Yoast SEO), underscores theme,  Insert Headers and Footers, Easy Forms for Mailchimp. "}
            jobDescriptionL2={"Development of plugins in PHP, SCSS, NMP, Gulp, MYSQL and launching on AWS (EC2, Route53, Certificate SSL, Load Balancing) "}
            jobDescriptionL3={"Sites Delivered:"}
            jobDescriptionL13={" - http://amr.com.br"}
          />
          </div>
          <p></p>
           <div className="resume-box">
          <Experience 
            startMonth={"Dec"}
            startYear={2018}
            endMonth={"Mar"}
            endYear ={"2019"}
            jobName={"Data Analyst"}
            jobCompany={"Distill Analytics"}
            jobDescriptionL1={"Data cleaning procedure to datasets of parsed quarterly earnings call transcripts. Understood"}
            jobDescriptionL2={"texts and substantiate the logic of his decision making and also, I Worked with GitLab and"}
            jobDescriptionL3={"OpenRefine to handle the process and datasets."}
          />
          </div>
          <p></p>
           <div className="resume-box">
          <Experience 
            startMonth={"Oct"}
            startYear={2011}
            endMonth={"Nov"}
            endYear ={"2017"}
            jobName={"IT Operation Support System (OSS) Coordinator"}
            jobCompany={"Claro Brasil"}
            jobDescriptionL1={"Manage, validate, develop and deliver progress reports, proposals, requirements documentation, and presentations;"}
            jobDescriptionL2={"Designing SOA integration solutions between the BSS and OSS layers focusing in fulfillment and workforce (including: Trouble Ticketing, Equipment Inventory and others);"}
            jobDescriptionL3={"Manage and review documentation from suppliers (Amdocs, Icaro, Spread and others) to guarantee adhesion to the company needs and requirements;"}
            jobDescriptionL4={"Develop and approve interface documents for all the OSS application/projects;"}
            jobDescriptionL5={"Participate status report meetings with stakeholders and follow up on pending issues, actions and items belonging to the OSS projects Team."}
            jobDescriptionL6={"All Activities have been delivered with scrum methodology, followed by the four pillars: sprint planning, daily scrums, sprints, and retrospectives."}
            jobDescriptionL7={"Working with the issues and actions items opened with the team and evaluating gaps in the processes."}
            jobDescriptionL8={"Manage and support the first trouble ticket application for Claro Brazil;"}
            jobDescriptionL9={"Support the whole process of implementation and integration of the first trouble ticket purchased application from Icaro (for small operations) as the OSS/CRM System Analyst ;"}
            jobDescriptionL10={"Coordinate and Support the all phases for the customization, integration, implementation and testing of the inventories systems (address, equipment and network), the trouble ticket management systems and the fault management systems solution purchased by Claro Brazil;"}
            jobDescriptionL11={"Coordinate several OSS/CRM projects, supporting the development and implementation teams on their needs;"}
            jobDescriptionL12={"Coordinate integration projects as the OSS Corporate Solutions Architect on the following projects:"}
            jobDescriptionL13={" - Trouble Ticket Management (BMC – Remedy Solution );"}
            jobDescriptionl14={" - Address Inventory (Owner solution);"}
            jobDescriptionL15={" - Equipment Inventory (Owner Solution) ;"}
            jobDescriptionL16={" - Network Inventory (Owner Solution);"}
            jobDescriptionL17={" - Fault Management (Owner Solution);"}
            jobDescriptionL18={"Coordinating a group of Solutions Analysts for the customization and the integration of the Amdocs Billing Solution integration project as the OSS Corporate Solution Architect Coordinator."}
          />
          </div>
          <p></p>
           <div className="resume-box">
          <Experience 
            startMonth={"Feb"}
            startYear={2008}
            endMonth={"Oct"}
            endYear ={"2011"}
            jobName={"Systems Analyst Developer"}
            jobCompany={"Claro Brasil"}
            jobDescriptionL1={"Leader, validate and support all OSS projects of the company. Guarantee and support all the project phases (gathering, design, development, testing and production)."}
            jobDescriptionL2={"Evaluate and validate the functional and technical software specification for each project, to ensure the process and solution of it;"}
            jobDescriptionL3={"Guarantee that the project is following the technical and functional solution design for it. Guarantee the company's best practice is been used at the projects phases;"}
            jobDescriptionL4={"Develop and support project status report meetings to the board of directors and stakeholders, reporting issues and actions items to address the problems;"}
            jobDescriptionL5={"Guarantee the technical and functional specs of the solution at test phases (Functional, Integration and UAT);"}
            jobDescriptionL6={"Support all project teams in company architecture, processes and best practices knowledge transfer."}
            jobDescriptionL7={"Creation of Scoping documents to support implementation team in your estimation of effort and cost."}
            jobDescriptionL8={"Projects: "}
            jobDescriptionL13={" - New Module of Billing (May/07 - Jan/09);"}
            jobDescriptionL14={" - Provisioning (Dec/07 - Feb/08);"}
            jobDescriptionL15={" - Net Home - Equipment Inventory (Mar/08 - Jul/09);"}
            jobDescriptionL16={" - CPI Pedofilia (Jun/09 - Dez/09);"}
            jobDescriptionL17={" - Arris WorkAssure (Aug/09 – May/11);"}
          />
          </div>
          <p></p>
           <div className="resume-box">
          <Experience 
            startMonth={"Mar"}
            startYear={2007}
            endMonth={"Feb"}
            endYear ={"2008"}
            jobName={"Systems Analyst Developer Billing"}
            jobCompany={"Spread Tecnologia"}
            jobDescriptionL1={"Evaluate and validate the functional and technical software specification for each module, to ensure the process and solution of it;"}
            jobDescriptionL2={"Guarantee that the project is following the technical and functional solution design for it. Guarantee the company's best practice is been used at the projects phases;"}
            jobDescriptionL3={"Develop and support project status report meetings to the board of directors and stakeholders, reporting issues and actions items to address the problems;"}
            jobDescriptionL4={"Guarantee the technical and functional specs of the solution at test phases (Functional, Integration and UAT);"}
            jobDescriptionL5={"Support all project teams in company architecture, processes and best practices knowledge transfer."}
            jobDescriptionL6={"Creation of Scoping documents to support implementation team in your estimation of effort and cost."}
            jobDescriptionL7={"Project: "}
            jobDescriptionL13={" - New Module of Billing (May/07 - Jan/09);"}
            jobDescriptionL18={"Migration of all the module of Billing as mediation, taxation, collection, dispute, charging and Value Challenge that was in language VB to JAVA and SOA;"}

          />
          </div>
          <p></p>

          <div className="resume-box">
          <Experience 
            startMonth={"Feb"}
            startYear={2006}
            endMonth={"Feb"}
            endYear ={"2007"}
            jobName={"Systems Analyst Developer"}
            jobCompany={"Tata Consultancy Services"}
            jobDescriptionL1={"Incident handling, GMUDS and ITIL concept problems, in applications developed in several programming languages such as ASP, VB, PROC, JAVA, PL / SQL, C ++, UNIX with ORACLE database and DB2. Analyze on the TSO and CICS high-rises."}
            jobDescriptionL2={"Scheduling daily, weekly, monthly and occasional DATAWEREHOUSE system. Support the user area in the construction of cubes in the BO."}
            jobDescriptionL3={"Create, evaluate and validate the functional and technical software specification for each project, to ensure the process and solution of it;"}
            jobDescriptionL4={"Project: "}
            jobDescriptionL13={" - The project was focused on implementation, Adaptation and integrate the systems solution between the companies that were being merged Real Bank and Santander Bank."}
          />
          </div>
          <p></p>
           <div className="resume-box">
            <Experience 
            startMonth={"Apr"}
            startYear={2003}
            endMonth={"Oct"}
            endYear ={"2005"}
            jobName={"Junior Developer"}
            jobCompany={"A.C Camargo Cancer Center"}
            jobDescriptionL1={"Development and Maintenance in the owner system , developed in language of programation ASP and PL/SQL ORACLE 10G, using APACHE, such as: surgical scheduling, appointment scheduling, exams, clinical laboratory, dashboards, billing and other ..."}
            jobDescriptionL2={"Create, Evaluate and validate the functional and technical software specification for each project, to ensure the process and solution of it;"}
            jobDescriptionL3={"survey of needs with the user, deployment, training of systems for support."}
            jobDescriptionL4={"Migration of the all pages developed in language programer ASP to Oracle Portal 10G."}
            jobDescriptionL5={"Project: "}
            jobDescriptionL13={" - I was part of the intranet team and the project was focused on implementation, Adaptation and integrate the systems solution."}
          />
          </div>
          
          
          </Cell>
          
        </Grid>
      </div>
    )
  }
}
export default Resume;