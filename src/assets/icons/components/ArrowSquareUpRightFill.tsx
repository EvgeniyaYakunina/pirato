import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowSquareUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-square-up-right-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.5 7a.5.5 0 0 1-1 0V7.207l-3.146 3.147a.5.5 0 0 1-.708-.708L8.793 6.5H7a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="arrow-square-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowSquareUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;