import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberFourFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-four-fill_svg__a)"><path fill="#000" d="M6.54 9 9 5.926V9zm6.96-6.5v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m-2 7A.5.5 0 0 0 11 9h-1V4.5a.5.5 0 0 0-.89-.312l-4 5A.5.5 0 0 0 5.5 10H9v1.5a.5.5 0 0 0 1 0V10h1a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="number-four-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberFourFill);
const Memo = memo(ForwardRef);
export default Memo;