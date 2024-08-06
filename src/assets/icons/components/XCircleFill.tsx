import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgXCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    ref={ref}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5_1106)">
      <path
        d="M13 3L8 8M8 8L3.00011 3M8 8L3 13M8 8L12.9999 13"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5_1106">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgXCircleFill)
const Memo = memo(ForwardRef)
export default Memo