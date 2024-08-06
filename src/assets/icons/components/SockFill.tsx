import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSockFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sock-fill_svg__a)"><path fill="#000" d="M12 1H6.5a1 1 0 0 0-1 1v4.793L3.078 9.214a3.683 3.683 0 0 0 5.208 5.208l4.277-4.276A1.5 1.5 0 0 0 13 9.084V2a1 1 0 0 0-1-1m0 1v1.5H6.5V2zm-.146 7.438L9.863 11.43A3 3 0 0 1 12 7.043v2.043a.5.5 0 0 1-.146.351" /></g><defs><clipPath id="sock-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSockFill);
const Memo = memo(ForwardRef);
export default Memo;