import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCirclesThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circles-three-fill_svg__a)"><path fill="#000" d="M8 7.5A2.75 2.75 0 1 1 8 2a2.75 2.75 0 0 1 0 5.5m3.75.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-7.5 0a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" /></g><defs><clipPath id="circles-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCirclesThreeFill);
const Memo = memo(ForwardRef);
export default Memo;