
import Items from './Items'

export const metadata = {
  title: 'Your Shop - Cart',
  description: 'Your personalized shopping site',
}

function page() {
  
  return (
    <>
      
      <div className="products   mx-4 my-5  flex flex-col gap-4 items-center ">
      <Items/>
        </div>
        </>
  )
}

export default page