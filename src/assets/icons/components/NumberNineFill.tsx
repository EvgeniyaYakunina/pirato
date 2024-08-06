import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberNineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-nine-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-2.106 6.601-.013.024L8.29 11.75a.5.5 0 1 1-.866-.5l1.032-1.788a2.753 2.753 0 1 1 1.939-1.36M9.75 6.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0" /></g><defs><clipPath id="number-nine-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberNineFill);
const Memo = memo(ForwardRef);
export default Memo;