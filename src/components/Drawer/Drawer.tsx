import React, {useEffect} from 'react'
import { ElectoralRollData } from '../../api/models/ElectoralRollData';
import { CloseIcon } from "../../icons/closeIcon";
import { api } from '../../api/api';
import './Drawer.scss'
import Spinner from '../Spinner/Spinner';

const Drawer = ({show, closeDrawer, trackLanguage}:any) => {
  const [electrolRoleData, setElectrolRoleData] = React.useState<ElectoralRollData>();
  let drawerClasses = show ? "side-drawer open" : "side-drawer";

  useEffect(() => {
    const getElectrolRoleData = async () => {
      try {
        var data = await api.getElectrolRole();
        setElectrolRoleData(data);
      } catch ({error}) {
        console.log(error);
      }
    }
    getElectrolRoleData();
  },[]);

  return (
    <div className={drawerClasses} data-testid="drawer">
      {electrolRoleData  ?   <><div>
        <div onClick={closeDrawer}>
          <CloseIcon style={{ float: "right", cursor: "pointer" }} />
        </div>
        <div className='tag'>
          {trackLanguage}
        </div>
      </div><div className='drawer'>
          <header className='header'>{electrolRoleData?.title}</header>
          <p>{electrolRoleData?.onTrackDescription}</p>
          <header className='header'>{electrolRoleData?.details[0].title}</header>
          <p>{electrolRoleData?.details[0].description}</p>
          <header className='header'>{electrolRoleData?.details[1].title}</header>
          <p>{electrolRoleData?.details[1].description}</p>
        </div></>  : <Spinner></Spinner>}
      </div>
  )
}

export default Drawer;