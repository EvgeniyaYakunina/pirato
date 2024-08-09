import { forwardRef, memo } from 'react'
export const CerlesThreeFill = () => (
  <svg
    fill={'none'}
    height={'12'}
    viewBox={'0 0 14 12'}
    width={'14'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      d={
        'M6.99972 4.9C6.57459 4.89995 6.15901 4.77385 5.80553 4.53766C5.45196 4.30142 5.17639 3.96563 5.01366 3.57277C4.85093 3.17991 4.80835 2.74762 4.89131 2.33056C4.97427 1.9135 5.17904 1.5304 5.47972 1.22972C5.7804 0.929039 6.1635 0.724271 6.58056 0.641313C6.99762 0.558355 7.42991 0.600932 7.82277 0.76366C8.21563 0.926389 8.55142 1.20196 8.78766 1.55552C9.0239 1.90909 9.15 2.32477 9.15 2.75C9.14917 3.31995 8.9224 3.86634 8.51937 4.26937C8.11627 4.67246 7.56978 4.89925 6.99972 4.9ZM9.55553 6.96234C9.90901 6.72615 10.3246 6.60006 10.7497 6.6C11.3198 6.60075 11.8663 6.82754 12.2694 7.23064C12.6724 7.63367 12.8992 8.18005 12.9 8.75C12.9 9.17523 12.7739 9.59091 12.5377 9.94448C12.3014 10.298 11.9656 10.5736 11.5728 10.7363C11.1799 10.8991 10.7476 10.9416 10.3306 10.8587C9.9135 10.7757 9.5304 10.571 9.22972 10.2703C8.92904 9.9696 8.72427 9.5865 8.64131 9.16945C8.55836 8.75239 8.60093 8.32009 8.76366 7.92723C8.92639 7.53437 9.20196 7.19859 9.55553 6.96234ZM2.05553 6.96234C2.40901 6.72615 2.82459 6.60006 3.24972 6.6C3.81978 6.60075 4.36627 6.82754 4.76937 7.23064C5.17246 7.63373 5.39925 8.18023 5.4 8.75028C5.39995 9.17541 5.27385 9.59099 5.03766 9.94448C4.80142 10.298 4.46563 10.5736 4.07277 10.7363C3.67991 10.8991 3.24762 10.9416 2.83056 10.8587C2.4135 10.7757 2.0304 10.571 1.72972 10.2703C1.42904 9.9696 1.22427 9.5865 1.14131 9.16945C1.05835 8.75239 1.10093 8.32009 1.26366 7.92723C1.42639 7.53437 1.70196 7.19859 2.05553 6.96234Z'
      }
      fill={'black'}
      stroke={'black'}
      strokeWidth={'1.2'}
    />
  </svg>
)
const ForwardRef = forwardRef(CerlesThreeFill)
const Memo = memo(ForwardRef)

export default Memo
