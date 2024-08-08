import { forwardRef, memo } from 'react'
export const SquareHalfFill = () => (
  <svg
    fill={'none'}
    height={'12'}
    viewBox={'0 0 12 12'}
    width={'12'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      d={
        'M1.5 1.46875H1.46875V1.5V10.5V10.5312H1.5H6H6.03125V10.5V1.5V1.46875H6H1.5ZM1.5 0.53125H10.5C10.7569 0.53125 11.0033 0.633314 11.185 0.81499C11.3667 0.996666 11.4688 1.24307 11.4688 1.5V10.5C11.4688 10.7569 11.3667 11.0033 11.185 11.185C11.0033 11.3667 10.7569 11.4688 10.5 11.4688H1.5C1.24307 11.4688 0.996666 11.3667 0.81499 11.185C0.633314 11.0033 0.53125 10.7569 0.53125 10.5V1.5C0.53125 1.24307 0.633314 0.996666 0.81499 0.81499C0.996666 0.633314 1.24307 0.53125 1.5 0.53125Z'
      }
      fill={'black'}
      stroke={'black'}
      strokeWidth={'0.0625'}
    />
  </svg>
)
const ForwardRef = forwardRef(SquareHalfFill)
const Memo = memo(ForwardRef)

export default Memo
