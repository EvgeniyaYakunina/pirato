import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLineLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-line-left-fill_svg__a)"><path fill="#000" d="M14.5 8a.5.5 0 0 1-.5.5H9.5v4a.5.5 0 0 1-.854.354l-4.5-4.5a.5.5 0 0 1 0-.708l4.5-4.5A.5.5 0 0 1 9.5 3.5v4H14a.5.5 0 0 1 .5.5m-12-6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="arrow-line-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowLineLeftFill);
const Memo = memo(ForwardRef);
export default Memo;