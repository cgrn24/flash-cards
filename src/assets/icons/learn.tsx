import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <g fill="#fff" clipPath="url(#a)">
      <path d="M8 1.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333Zm0 12A5.334 5.334 0 1 1 8 2.666a5.334 5.334 0 0 1 0 10.667Z" />
      <path d="M8.227 4.967a1.133 1.133 0 0 0-1.234-.2 1.067 1.067 0 0 0-.666.986v4.494a1.067 1.067 0 0 0 .666.986c.145.066.302.1.46.1a1.16 1.16 0 0 0 .774-.3l2.44-2.246a1.068 1.068 0 0 0 0-1.574l-2.44-2.246Zm-.56 4.766V6.267L9.54 8 7.667 9.733Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(SvgComponent)

export default Memo
