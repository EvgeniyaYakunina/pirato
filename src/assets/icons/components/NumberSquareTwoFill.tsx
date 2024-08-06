import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareTwoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-two-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3.5 8.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.4-.8l2.698-3.597a1 1 0 1 0-1.741-.938.5.5 0 0 1-.943-.334 2 2 0 1 1 3.484 1.87L7.5 10.5z" /></g><defs><clipPath id="number-square-two-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareTwoFill);
const Memo = memo(ForwardRef);
export default Memo;