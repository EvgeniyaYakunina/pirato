import { Ref, SVGProps, forwardRef, memo } from 'react'
export const CheckFatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 16 16'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_5_1033)'}>
      <path
        d={
          'M15.2069 5.682L7.18186 13.707C6.99434 13.8944 6.74009 13.9997 6.47499 13.9997C6.20988 13.9997 5.95563 13.8944 5.76811 13.707L1.29186 9.207C1.10466 9.01951 0.999512 8.76539 0.999512 8.50044C0.999512 8.23549 1.10466 7.98137 1.29186 7.79387L2.54186 6.54387C2.72928 6.35724 2.98299 6.25246 3.24749 6.25246C3.51198 6.25246 3.7657 6.35724 3.95311 6.54387L6.49999 9.01387L12.5475 3.04075C12.7349 2.85393 12.9888 2.74902 13.2534 2.74902C13.5181 2.74902 13.7719 2.85393 13.9594 3.04075L15.2062 4.262C15.3 4.35492 15.3744 4.46549 15.4253 4.58733C15.4761 4.70916 15.5023 4.83986 15.5023 4.97187C15.5024 5.10388 15.4763 5.2346 15.4256 5.35648C15.3749 5.47836 15.3005 5.589 15.2069 5.682Z'
        }
        fill={'black'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_5_1033'}>
        <rect fill={'white'} height={'16'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(CheckFatFill)
const Memo = memo(ForwardRef)

export default Memo
