import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgToiletFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#toilet-fill_svg__a)"><path fill="#000" d="M3.75 5.5h8.5a.25.25 0 0 0 .25-.25V2.5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.75a.25.25 0 0 0 .25.25M5.5 3h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1M14 7a.5.5 0 0 0-.5-.5h-11A.5.5 0 0 0 2 7a6.01 6.01 0 0 0 3.23 5.321l-.22 1.538A1 1 0 0 0 6 15h4a1 1 0 0 0 .99-1.141l-.22-1.538A6 6 0 0 0 14 7m-8 7 .183-1.281a6 6 0 0 0 3.634 0L10 14z" /></g><defs><clipPath id="toilet-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgToiletFill);
const Memo = memo(ForwardRef);
export default Memo;