import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMicroscopeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#microscope-fill_svg__a)"><path fill="#000" d="M14.5 13.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h9.328A4.5 4.5 0 0 0 9 5.029V8.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.023A5.503 5.503 0 0 1 12.746 13H14a.5.5 0 0 1 .5.5m-6-2a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z" /></g><defs><clipPath id="microscope-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMicroscopeFill);
const Memo = memo(ForwardRef);
export default Memo;