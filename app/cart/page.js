import Link from 'next/link'
import React from 'react'

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
  let 장바구니2 = [
    {
      itemName : 'Tomatoes',
      price : '$40',
      count : 2,
    },
    {
      itemName : 'Pasta',
      price : '$10',
      count : 5,
    },
  ]

  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니2.map((el, idx) => {
        return (
          <div key={idx}>
            <CartItem {...el}  />
            <Btn color='red' />
          </div>
        )
      })}

    </div>
  )
} 

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.itemName}</p>
      <p>{props.price}</p>
      <p>{props.count}개</p>
    </div>
  )
}

function Btn({color}) {
  return (
    <button style={{ backgroundColor : color}}>버튼</button>
  )
}