import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWifiNoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wifi-none-fill_svg__a)"><path fill="#000" d="M15.493 5.057a1 1 0 0 0-.386-.676A11.67 11.67 0 0 0 8 2.001 11.67 11.67 0 0 0 .892 4.38a1 1 0 0 0-.351 1.07 1 1 0 0 0 .187.35l6.5 7.839A1 1 0 0 0 8 14a1 1 0 0 0 .77-.36l6.5-7.84a.98.98 0 0 0 .223-.743M8 13 1.506 5.171A10.67 10.67 0 0 1 8 3.001c2.345-.01 4.627.753 6.494 2.17z" /></g><defs><clipPath id="wifi-none-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWifiNoneFill);
const Memo = memo(ForwardRef);
export default Memo;