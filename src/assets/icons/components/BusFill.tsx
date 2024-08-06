import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bus-fill_svg__a)"><path fill="#000" d="M15.5 5v1.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0M1 4.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V5a.5.5 0 0 0-.5-.5M13.5 4v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-.5h-5v.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2m-7 5.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m4.5 0a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m1.5-4.75h-9V7h9z" /></g><defs><clipPath id="bus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBusFill);
const Memo = memo(ForwardRef);
export default Memo;