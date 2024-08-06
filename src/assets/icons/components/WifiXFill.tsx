import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgWifiXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={16}
    ref={ref}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#wifi-x-fill_svg__a)'}>
      <path
        d={
          'M14.354 6.146A.499.499 0 0 1 14 7a.5.5 0 0 1-.354-.146L12.5 5.707l-1.146 1.147a.5.5 0 0 1-.708-.708L11.793 5l-1.147-1.146a.5.5 0 0 1 0-.708.5.5 0 0 1 .708 0L12.5 4.293l1.146-1.147a.5.5 0 0 1 .708.708L13.207 5zm-1.426 2.042a2 2 0 0 1-.26-.197.25.25 0 0 0-.335 0A2 2 0 0 1 9.51 5.168a.25.25 0 0 0 0-.334 2 2 0 0 1-.197-2.402.25.25 0 0 0-.194-.38A12 12 0 0 0 8 2 11.67 11.67 0 0 0 .892 4.381a1 1 0 0 0-.351 1.07 1 1 0 0 0 .187.35l6.5 7.839A1 1 0 0 0 8 14a1 1 0 0 0 .77-.36l4.215-5.082a.25.25 0 0 0 .017-.296.3.3 0 0 0-.074-.074'
        }
        fill={'#000'}
      />
    </g>
    <defs>
      <clipPath id={'wifi-x-fill_svg__a'}>
        <path d={'M0 0h16v16H0z'} fill={'currentcolor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgWifiXFill)
const Memo = memo(ForwardRef)

export default Memo
