import { forwardRef, memo } from 'react'
export const LegoFill = () => (
  <svg
    fill={'none'}
    height={'16'}
    viewBox={'0 0 16 16'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <g clipPath={'url(#clip0_345_10994)'}>
      <path
        d={
          'M15.5 9V5C15.5002 4.98346 15.4989 4.96694 15.4963 4.95062L15.5 9ZM15.5 9C15.5001 9.09289 15.4743 9.18396 15.4255 9.263M15.5 9L15.4255 9.263M15.4255 9.263C15.3767 9.34205 15.3068 9.40593 15.2238 9.4475L15.4255 9.263ZM14.1502 5.53665L14.9 5.16173V8.93856L5.1 13.8386V13.1912V10.3088V10.0621L5.26834 9.9779L14.1502 5.53665ZM14.9 9.00043C14.9 9.00029 14.9 9.00014 14.9 9L14.9 9.00043Z'
        }
        fill={'black'}
        stroke={'black'}
        strokeWidth={'1.2'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_345_10994'}>
        <rect fill={'white'} height={'16'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(LegoFill)
const Memo = memo(ForwardRef)

export default Memo
