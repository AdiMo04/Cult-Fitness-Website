import React from 'react'
import "./pricing.css";
import { INFO_ITEMS } from '../../data/infoItems';
import PricingItem from './PricingItem';

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing-heading absolute-center'>
        <span className='heading-gradient'>CREATE AND UPLOAD YOUR VIDEOS</span>
      </div>
      <div className='pricing-items-container'>
        {INFO_ITEMS.map((_pricing)=>
        <PricingItem item={_pricing}/> )}
      </div>
    </div>
  )
}

export default Pricing

