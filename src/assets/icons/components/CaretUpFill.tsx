import type { SVGProps } from 'react'

export const CaretUpFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    viewBox={'0 0 16 16'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_5_1497)'}>
      <path
        d={'M4 10L8.00009 6L12.0001 10'}
        stroke={'black'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_5_1497'}>
        <rect fill={'white'} height={'16'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
