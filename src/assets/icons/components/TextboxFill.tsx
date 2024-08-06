import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextboxFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#textbox-fill_svg__a)"><path fill="#000" d="M15.5 5v6a1 1 0 0 1-1 1H8.75a.25.25 0 0 1-.25-.25v-7.5A.25.25 0 0 1 8.75 4h5.75a1 1 0 0 1 1 1m-8-2v10a.5.5 0 0 1-1 0v-1h-5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V3a.5.5 0 1 1 1 0m-2 4a.5.5 0 0 0-.5-.5H3a.5.5 0 1 0 0 1h.5V9a.5.5 0 1 0 1 0V7.5H5a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="textbox-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextboxFill);
const Memo = memo(ForwardRef);
export default Memo;