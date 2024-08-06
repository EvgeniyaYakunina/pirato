import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSeatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#seat-fill_svg__a)"><path fill="#000" d="M14 14.5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 .5.5M13 9H8.986L7 5l.887-1.645.007-.014A1 1 0 0 0 7.447 2l-.03-.014-2.105-.888a1 1 0 0 0-1.325.454l-1.382 2.75a1 1 0 0 0 0 .895l3.632 7.25a1 1 0 0 0 .895.553H13a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /></g><defs><clipPath id="seat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSeatFill);
const Memo = memo(ForwardRef);
export default Memo;