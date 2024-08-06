import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFunctionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#function-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 2.5H9.995a1 1 0 0 0-.983.813L8.602 7.5H10.5a.5.5 0 0 1 0 1H8.415l-.444 2.369A2 2 0 0 1 6.005 12.5H5a.5.5 0 0 1 0-1h1.005a1 1 0 0 0 .983-.812l.41-2.188H5.5a.5.5 0 1 1 0-1h2.085l.444-2.369A2 2 0 0 1 9.995 3.5H11a.5.5 0 0 1 0 1" /></g><defs><clipPath id="function-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFunctionFill);
const Memo = memo(ForwardRef);
export default Memo;