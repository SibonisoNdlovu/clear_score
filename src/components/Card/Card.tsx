import React, { Suspense } from 'react';
import BackDrop from '../Backdrop/Backdrop';
import './Card.scss';
import Spinner from '../Spinner/Spinner';
import { InsightType } from '../../enums/InsightType';

const Drawer = React.lazy(() => import('../Drawer/Drawer'));

function Card({insight, trackLanguage}:any) {
  const [isOpen, setIsOpen] = React.useState(false);

  function openDrawer() {
    setIsOpen(!isOpen);
  }

  function handleBackdropClick() {
    setIsOpen(false);
  }

  return (
    <div className='card' data-testid="card">
      <div className='tag' style={{backgroundColor : trackLanguage === InsightType.OFF_TRACK ? '#FDEFE2': '#DDF9EA', color: trackLanguage === InsightType.OFF_TRACK ? '#764C25': '#15693B'}}>
        {trackLanguage}
      </div>
      <div className='title'>{insight.Header}</div>
      <div className='description'>
          {insight.Body}
      </div>
      {insight.Header === "Electoral roll" ? <a className='link' onClick={openDrawer}>Learn more</a> : null}
      <div className='insightsFooter'>
        {insight.Impact}
      </div>
      <Suspense fallback={<Spinner/>}> 
        <Drawer show={isOpen} closeDrawer={handleBackdropClick} trackLanguage={trackLanguage}/>
      </Suspense>
      {isOpen && <BackDrop/>}
    </div>
  )
}

export default Card