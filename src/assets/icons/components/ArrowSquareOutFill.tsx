import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowSquareOutFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-square-out-fill_svg__a)"><path fill="#000" d="M14 6.5a.5.5 0 0 1-.854.354L11.5 5.207 8.854 7.854a.5.5 0 1 1-.708-.708L10.793 4.5 9.146 2.854A.5.5 0 0 1 9.5 2h4a.5.5 0 0 1 .5.5zM11.5 8a.5.5 0 0 0-.5.5V13H3V5h4.5a.5.5 0 1 0 0-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="arrow-square-out-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowSquareOutFill);
const Memo = memo(ForwardRef);
export default Memo;