import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCirclesFourFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circles-four-fill_svg__a)"><path fill="#000" d="M7.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M11 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-6 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m6 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></g><defs><clipPath id="circles-four-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCirclesFourFill);
const Memo = memo(ForwardRef);
export default Memo;