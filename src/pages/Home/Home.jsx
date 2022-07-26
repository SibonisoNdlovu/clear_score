import React, { Suspense } from 'react'
import Spinner from '../../components/Spinner/Spinner';
import './Home.scss'

const Insights = React.lazy(() => import('../../components/Insights/Insights'));

function Home() {
  return (
    <div>
      <Suspense fallback={Spinner}>
        <Insights/>
      </Suspense>
    </div>
  )
}

export default Home;
