import React from 'react'
import Image from 'next/image'
import food0 from '/public/food0.png'
import food1 from '/public/food1.png'
import food2 from '/public/food2.png'

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let 상품이미지 = [food0, food1, food2]
  return (
    <div>
      <h2 className='title'>Products</h2>
      {상품.map((el, idx) => {
        return (<div className='food' key={idx}>
          {/* <img src={`/food${idx}.png`} alt='상품 이미지' className='food-img' /> */}
          <Image src={상품이미지[idx]} alt='상품 이미지' className='food-img' />
          <h4>{el}</h4>
        </div>)
      })}
    </div>
  )
} 
