import mainLogo from '../../assets/images/logo.png'
import backBtn from '../../assets/images/arrow-left (1) 1.png'
import MainBtn from '../../components/MainBtn/MainBtn'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { headerState } from '../../store/stateReducer';
import {PUBLIC_URL} from '../../App';

export default function Header() {



  const headerClass = useSelector((state: any) => state.state.headerClass);
  const dispatch = useDispatch();












  return (
    <div className={`header ${headerClass}`}>


      <div className="container">
        <div className="headerWrapper">


          <div className="logo">
            <img src={mainLogo} alt="" />
          </div>
          <Link to={`${PUBLIC_URL}`} className="backBtn linkTo" onClick={() => {dispatch(headerState('Home')); }} style={{cursor: 'pointer'}}>
                <img src={backBtn} alt="backBtn" />
                <span>Back</span>
          </Link>
          <MainBtn/>

        </div>


      </div>

    </div>
  )
}
