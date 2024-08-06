import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextHFourFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-h-four-fill_svg__a)"><path fill="#000" d="M10.279 9 11.5 7.446V9zM14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M8 5a.5.5 0 1 0-1 0v2H4.5V5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V8H7v2a.5.5 0 0 0 1 0zm5.25 4.5a.5.5 0 0 0-.5-.5h-.25V6a.5.5 0 0 0-.893-.309l-2.75 3.5A.5.5 0 0 0 9.25 10h2.25v1a.5.5 0 0 0 1 0v-1h.25a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="text-h-four-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextHFourFill);
const Memo = memo(ForwardRef);
export default Memo;