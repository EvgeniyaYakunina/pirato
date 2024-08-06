import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgExcludeSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#exclude-square-fill_svg__a)"><path fill="#000" d="M5.5 5.5v5h-3A.5.5 0 0 1 2 10V2.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5v3zm8 0h-3v5h-5v3a.5.5 0 0 0 .5.5h7.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="exclude-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgExcludeSquareFill);
const Memo = memo(ForwardRef);
export default Memo;