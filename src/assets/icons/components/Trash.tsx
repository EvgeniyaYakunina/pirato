import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 16 16'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_5_484)'}>
      <path
        d={
          'M14 3.5C14 3.63261 13.9473 3.75979 13.8536 3.85355C13.7598 3.94732 13.6326 4 13.5 4H13V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V4H2.5C2.36739 4 2.24021 3.94732 2.14645 3.85355C2.05268 3.75979 2 3.63261 2 3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5ZM5.5 2H10.5C10.6326 2 10.7598 1.94732 10.8536 1.85355C10.9473 1.75979 11 1.63261 11 1.5C11 1.36739 10.9473 1.24021 10.8536 1.14645C10.7598 1.05268 10.6326 1 10.5 1H5.5C5.36739 1 5.24021 1.05268 5.14645 1.14645C5.05268 1.24021 5 1.36739 5 1.5C5 1.63261 5.05268 1.75979 5.14645 1.85355C5.24021 1.94732 5.36739 2 5.5 2Z'
        }
        fill={'black'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_5_484'}>
        <rect fill={'white'} height={'16'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTrash)
const Memo = memo(ForwardRef)

export default Memo