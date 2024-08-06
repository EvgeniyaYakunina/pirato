import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThermometerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#thermometer-fill_svg__a)"><path fill="#000" d="M13.25 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0 2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M9.5 9.13V2.5a2 2 0 1 0-4 0v6.63a3.5 3.5 0 1 0 4 0m-1-2.63h-2v-4a1 1 0 0 1 2 0z" /></g><defs><clipPath id="thermometer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgThermometerFill);
const Memo = memo(ForwardRef);
export default Memo;