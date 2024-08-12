import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 16 16'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_5_1106)'}>
      <path
        d={'M13 3L8 8M8 8L3.00011 3M8 8L3 13M8 8L12.9999 13'}
        stroke={'black'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_5_1106'}>
        <rect fill={'white'} height={'16'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgClose)
const Memo = memo(ForwardRef)

export default Memo
