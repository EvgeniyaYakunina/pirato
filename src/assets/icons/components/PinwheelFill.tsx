import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPinwheelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pinwheel-fill_svg__a)"><path fill="#000" d="m14.354 13.646-3.026-3.025a3.75 3.75 0 0 0 2.446-4.87.5.5 0 0 0-.641-.3L10.37 6.456q.03-.057.058-.117a3.75 3.75 0 0 0-4.678-5.11.5.5 0 0 0-.301.64l1.005 2.764-.118-.063a3.75 3.75 0 0 0-5.108 4.68.5.5 0 0 0 .64.3l2.763-1.006q-.03.059-.058.118a3.75 3.75 0 0 0 4.68 5.108.5.5 0 0 0 .3-.64l-1.005-2.762q.057.03.117.057a3.7 3.7 0 0 0 1.405.349l3.576 3.577a.5.5 0 0 0 .708-.708zm-7.541-.904a2.75 2.75 0 0 1-.234-4.863l1.85 5.083a2.73 2.73 0 0 1-1.616-.22m2.712-6.828c-.234.506-.618.929-1.1 1.211l-1.85-5.086a2.75 2.75 0 0 1 2.947 3.875z" /></g><defs><clipPath id="pinwheel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPinwheelFill);
const Memo = memo(ForwardRef);
export default Memo;