import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretCircleRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-circle-right-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m1.854 6.854-2.5 2.5a.5.5 0 0 1-.708-.708L8.793 8 6.646 5.854a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="caret-circle-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretCircleRightFill);
const Memo = memo(ForwardRef);
export default Memo;