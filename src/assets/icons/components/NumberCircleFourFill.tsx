import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberCircleFourFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-circle-four-fill_svg__a)"><path fill="#000" d="M6.523 9 8.5 6.457V9zM14.5 8A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-4 1.5A.5.5 0 0 0 10 9h-.5V5a.5.5 0 0 0-.894-.307l-3.5 4.5A.5.5 0 0 0 5.5 10h3v1a.5.5 0 0 0 1 0v-1h.5a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="number-circle-four-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberCircleFourFill);
const Memo = memo(ForwardRef);
export default Memo;