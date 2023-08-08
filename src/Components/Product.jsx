import Images from 'next/image'
import AddToCart from '@/app/Context/AddToCart'


function Product(props) {
    const { prod_name, id, price, prod_image } = props.data   
    const img_style = {
        backgroundBlendMode: 'screen',
        objectFit: 'contain',
    }
    return (
        <>
            <div className="container flex flex-col items-center space-y-2  bg-zinc-100 py-4 border-gray-300 border-2">
                <div className="img items-center ">
                    <Images
                        src={prod_image}
                        alt ='Images'
                        height={200}
                        loading='lazy'
                        style={img_style}
                    />
                    </div>
                    <div className='font-semibold'>{prod_name}</div>
                <div className='font-semibold'>Price: {`${price} $`}</div>
                <AddToCart id={ id} />
                </div>
            </>
  )
}

export default Product