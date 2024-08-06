import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPowerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#power-fill_svg__a)"><path fill="#000" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M7.5 4a.5.5 0 1 1 1 0v4a.5.5 0 1 1-1 0zm.5 9a5 5 0 0 1-2.778-9.157.5.5 0 1 1 .556.83 4 4 0 1 0 4.444 0 .499.499 0 0 1 .375-.91.5.5 0 0 1 .181.08A5 5 0 0 1 8 13" /></g><defs><clipPath id="power-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPowerFill);
const Memo = memo(ForwardRef);
export default Memo;