import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgParachuteFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#parachute-fill_svg__a)"><path fill="#000" d="M14.5 7.5A6.507 6.507 0 0 0 8 1a6.507 6.507 0 0 0-6.5 6.5.5.5 0 0 0 .2.4l5.8 4.35v1.25H7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5v-1.25l5.8-4.35a.5.5 0 0 0 .2-.4M13.477 7H10.99c-.096-2.372-.869-3.902-1.569-4.812A5.51 5.51 0 0 1 13.477 7M9.65 8 8 10.97 6.35 8zM5.206 8l1.218 2.193L3.5 8zm5.588 0H12.5l-2.924 2.193zM6.58 2.188c-.7.91-1.473 2.44-1.57 4.812H2.524A5.51 5.51 0 0 1 6.58 2.188" /></g><defs><clipPath id="parachute-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgParachuteFill);
const Memo = memo(ForwardRef);
export default Memo;