import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={16}
    ref={ref}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#circle-fill_svg__a)'}>
      <path d={'M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13'} fill={'#000'} />
    </g>
    <defs>
      <clipPath id={'circle-fill_svg__a'}>
        <path d={'M0 0h16v16H0z'} fill={'currentcolor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgCircleFill)
const Memo = memo(ForwardRef)

export default Memo
