import { Suspense, lazy } from 'react'

// import Comp1 from './Comp1';
// import Comp2 from './Comp2';
const Comp1 = lazy(() => import('./Comp1'))
const Comp2 = lazy(() => import('./Comp2'))

export default function App() {
  return (
    <>
      <Suspense fallback={<h1>LOADING COMP1...</h1>}>
        <Comp1 />
      </Suspense>
      <Suspense fallback={<h1>LOADING COMP2...</h1>}>
        <Comp2 />
      </Suspense>
    </>
  )
}