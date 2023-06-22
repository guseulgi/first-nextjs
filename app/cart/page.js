import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (
    <div>
      <h2 className='title'>장바구니</h2>
      <Link href='/cart/payment' className='title-sub'>결제하기</Link>
    </div>
  )
}
