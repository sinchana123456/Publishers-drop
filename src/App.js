import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bookstore from './components/pages/Bookstore';
// import Products from './components/pages/Products';
// import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import SubmitProposal from './components/pages/Submitproposal';
import Calculatepublicationcharge from './components/pages/CalculatePublicationCharge';
import EditedBooks from './components/pages/EditedBooks';
import ConferrenceProceedings from './components/pages/ConferrenceProceedings';
import Journals from './components/pages/Journals';
import Memberships from './components/pages/Memberships';
import Awards from './components/pages/Awards';
import EditorialBoardMembers from './components/pages/EditorialBoardMembers';
import More from './components/pages/More'; 
import PublishedBooks from './components/pages/PublishedBooks';
import AuthorDashboard from './components/pages/AuthorDashboard'; 
import SubmitProposalForEditedBooks from './components/pages/SubmitProposalForEditedBooks';
import ApplyForEditorship from './components/pages/ApplyForEditorship';
import EditorialBoard from './components/pages/EditorialBoard';
import EditorRegistration from './components/pages/EditorRegisation';
import ReviewerRegistration from './components/pages/ReviewerRegistration';
import ProfessionalMembership from './components/pages/ProfessionalMembership';
import SeniorMembership from './components/pages/SeniorMembership';
import FellowMembership from './components/pages/FellowMembership';
import ResearchExcellenceAward from './components/pages/ResearchExcellenceAward';
import YoungAchieverAward from './components/pages/YoungAchieverAward';
import BestProfessorAward from './components/pages/BestProfessorAward';
import BestHODAward from './components/pages/BestHODAward';
import BestPrincipalAward from './components/pages/BestPrincipalAward';
import BestSchoolTeacherAward from './components/pages/BestSchoolTeacherAward';
import StudentOfTheYear from './components/pages/StudentOfTheYear';
import Mechanical from './components/pages/Mechanical';
import Civil from './components/pages/Civil';
import ElectronicsCommunication from './components/pages/ElectronicsCommunication';
import ElectronicsElectricals from './components/pages/ElectronicsElectricals';
import ComputerScienceIS from './components/pages/ComputerScienceIS';
import Medical from './components/pages/Medical';
import Agriculture from './components/pages/Agriculture';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import DirectorBoardMembers from './components/pages/DirectorBoardMembers';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bookstore' component={Bookstore} />
        <Route path='/editedbooks' component={EditedBooks} />
        <Route path='/conferrenceproceedings' component={ConferrenceProceedings} />
        <Route path='/journals' component={Journals} />
        <Route path='/Memberships' component={Memberships} />
        <Route path='/Awards' component={Awards} />
        <Route path='/editorialboardmembers' component={EditorialBoardMembers} />
        <Route path='/more' component={More} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/submitproposal' component={SubmitProposal} />
        <Route path='/calculatepublicationcharge' component={Calculatepublicationcharge} />
        <Route path='/publishedbooks' component={PublishedBooks} />
        <Route path='/submitproposal' component={SubmitProposal} />
        <Route path='/authordashboard' component={AuthorDashboard} />
        <Route path='/submitproposalforeditedbooks' component={SubmitProposalForEditedBooks} />
        <Route path='/applyforeditorship' component={ApplyForEditorship} />
        <Route path='/editorialboard' exact component={EditorialBoard} />
        <Route path='/editorregistration' exact component={EditorRegistration} />
        <Route path='/reviewerregistration' exact component={ReviewerRegistration} />
        <Route path='/profesionalmembership' exact component={ProfessionalMembership} />
        <Route path='/seniormemberszhip' exact component={SeniorMembership} />
        <Route path='/fellowmembersho' exact component={FellowMembership} />
        <Route path='/researchexcellencaward' exact component={ResearchExcellenceAward} />
        <Route path='/youngachieveraward' exact component={YoungAchieverAward} />
        <Route path='/bestprofessoraward' exact component={BestProfessorAward} />
        <Route path='/bestHODaward' exact component={BestHODAward} />
        <Route path='/bestprincipalaward' exact component={BestPrincipalAward} />
        <Route path='/bestschoolteacheraward' exact component={BestSchoolTeacherAward} />
        <Route path='/studentoftheyear' exact component={StudentOfTheYear} />
        <Route path='/mechanical' exact component={Mechanical} />
        <Route path='/civil' exact component={Civil} />
        <Route path='/electronicscommunication' exact component={ElectronicsCommunication} />
        <Route path='/electronicselectricals' exact component={ElectronicsElectricals} />
        <Route path='/computerscienceis' exact component={ComputerScienceIS} />
        <Route path='/medical' exact component={Medical} />
        <Route path='/agriculture' exact component={Agriculture} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/contactus' exact component={ContactUs} />
        <Route path='/directorboardmembers' exact component={DirectorBoardMembers} />
        {/* <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Home} /> */}

      </Switch>
    </Router>
  );
}

export default App;
