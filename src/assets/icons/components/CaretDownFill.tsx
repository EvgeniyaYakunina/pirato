import { type SVGProps, memo } from 'react'
export const CaretDownFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'12'}
    viewBox={'0 0 12 12'}
    width={'12'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_345_11639)'}>
      <path
        d={'M10 4L5.99991 8L1.99991 4'}
        stroke={'black'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_345_11639'}>
        <rect fill={'white'} height={'12'} width={'12'} />
      </clipPath>
    </defs>
  </svg>
)
// const ForwardRef = forwardRef(CaretDownFill)
// const Memo = memo(ForwardRef)
const Memo = memo(CaretDownFill)

export default Memo
