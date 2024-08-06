import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWashingMachineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#washing-machine-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5 9.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7M11.75 5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8.354 6.854l-2 2a.5.5 0 1 1-.708-.708l2-2a.5.5 0 1 1 .708.708m2-.208a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0" /></g><defs><clipPath id="washing-machine-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWashingMachineFill);
const Memo = memo(ForwardRef);
export default Memo;