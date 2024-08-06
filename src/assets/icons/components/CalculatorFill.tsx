import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalculatorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#calculator-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-7 11a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 12.5A.75.75 0 1 1 8 11a.75.75 0 0 1 0 1.5M8 10a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.5 2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m1-3.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="calculator-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCalculatorFill);
const Memo = memo(ForwardRef);
export default Memo;