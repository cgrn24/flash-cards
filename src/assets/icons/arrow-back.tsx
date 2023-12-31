import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#fff"
      d="M12.667 7.333H4.76l2.42-2.906a.668.668 0 0 0-1.027-.854l-3.333 4a.794.794 0 0 0-.06.1c0 .034 0 .054-.047.087a.667.667 0 0 0-.046.24c0 .082.016.164.046.24 0 .033 0 .053.047.087a.794.794 0 0 0 .06.1l3.333 4a.666.666 0 0 0 .94.086.667.667 0 0 0 .087-.94L4.76 8.667h7.907a.667.667 0 1 0 0-1.334Z"
    />
  </svg>
)
const Memo = memo(SvgComponent)

export default Memo
