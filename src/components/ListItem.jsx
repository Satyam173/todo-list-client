import React from 'react'

const ListItem = () => {
    const today = new Date();
  return (
    <div className='card'>
      <div className='item-header'>
      <h1>item1</h1>
      <span>{today.getDate()}/{today.getMonth()}/{today.getFullYear()}</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sequi voluptatum cum aliquid, dicta est commodi temporibus magnam laudantium earum facere quo minima voluptate sed perferendis magni provident animi suscipit.</p>
    </div>
  )
}

export default ListItem
