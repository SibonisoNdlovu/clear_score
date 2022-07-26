import React from 'react'
import {CircleLoader } from "react-spinners";
import './Spinner.scss'

function Spinner() {
  return (
    <section className="spinner" data-testid="spinner">
      <CircleLoader />
    </section>
  );
}
export default Spinner;