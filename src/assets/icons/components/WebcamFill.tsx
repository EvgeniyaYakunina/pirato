import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWebcamFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#webcam-fill_svg__a)"><path fill="#000" d="M10 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4.5 6.5a.5.5 0 0 1-.5.5H2a.5.5 0 1 1 0-1h5.5v-1.025a5 5 0 1 1 1 0V12.5H14a.5.5 0 0 1 .5.5M8 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></g><defs><clipPath id="webcam-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWebcamFill);
const Memo = memo(ForwardRef);
export default Memo;