import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgJoystickFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#joystick-fill_svg__a)"><path fill="#000" d="M14 10v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h4.5V5.95a2.5 2.5 0 1 1 1 0V9H13a1 1 0 0 1 1 1m-4-2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5" /></g><defs><clipPath id="joystick-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgJoystickFill);
const Memo = memo(ForwardRef);
export default Memo;