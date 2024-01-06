import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Pricing Title',
 description: 'Pricing Description',
};


const PricingPage = () => {
  return (
    <div>
      <span className='text-7xl'>Pricing Page</span>
    </div>
  )
}

export default PricingPage
