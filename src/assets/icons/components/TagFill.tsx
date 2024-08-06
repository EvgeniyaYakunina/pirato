import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTagFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tag-fill_svg__a)"><path fill="#000" d="M15.207 8.5 9 2.293A1 1 0 0 0 8.293 2H2.5a.5.5 0 0 0-.5.5v5.793A1 1 0 0 0 2.293 9L8.5 15.207a1 1 0 0 0 1.414 0l5.293-5.293a1 1 0 0 0 0-1.414M5.25 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="tag-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTagFill);
const Memo = memo(ForwardRef);
export default Memo;