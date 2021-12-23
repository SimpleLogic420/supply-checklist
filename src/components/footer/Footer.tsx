import React,{useContext,useEffect} from 'react';
import Credit from './Credit/Credit';
import '../../assets/styles/footer.scss';
import WorkerContext from '../../contexts/WorkerContext';
import { ADD_WORKER } from '../../state/actions/actions';



function Footer() {
  const {state,dispatch} =useContext(WorkerContext); 
  useEffect(() => {
    dispatch({type:ADD_WORKER,payload:{worker:{name:"shaul",workPlace:"SCALEuP",date:"TODAY"}}});
    
  }, []);
  
  return (
    
    <footer>
      {console.log(state)}
      <div className="footer-container">
        <p className="copyright">
          <span>© Copyright 2021</span>
          <Credit ghLink="https://github.com/shaharkamay" ghName="Shahar Kamay" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;