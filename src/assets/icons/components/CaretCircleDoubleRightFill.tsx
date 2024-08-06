import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretCircleDoubleRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-circle-double-right-fill_svg__a)"><path fill="#000" d="M12.598 3.401a6.5 6.5 0 1 0 0 9.197 6.51 6.51 0 0 0 0-9.197M7.854 8.354l-2 2a.5.5 0 0 1-.708-.708L6.792 8 5.145 6.352a.5.5 0 0 1 .707-.707l2 2a.5.5 0 0 1 .002.709m3.5 0-2 2a.5.5 0 0 1-.708-.708L10.294 8 8.647 6.352a.5.5 0 0 1 .707-.707l2 2a.5.5 0 0 1 .001.709z" /></g><defs><clipPath id="caret-circle-double-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretCircleDoubleRightFill);
const Memo = memo(ForwardRef);
export default Memo;