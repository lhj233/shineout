/**
 * cn - 跳转
 * en - Target
 */
import React from 'react'
import { Image } from 'shineout'

export default function () {
  return (
    <Image.Group>
      {
        ([1, 2, 3, 4]).map(i => (
          <Image
            width={80}
            height={80}
            shape="thumbnail"
            src={`/images/${i}_s.jpg`}
            href={`/images/${i}_b.jpg`}
          />
        ))
      }
    </Image.Group>
  )
}
