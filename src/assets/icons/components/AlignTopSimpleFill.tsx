import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignTopSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-top-simple-fill_svg__a)"><path fill="#000" d="M13 2a.5.5 0 0 1-.5.5h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 .5.5m-3 1.5H6a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1" /></g><defs><clipPath id="align-top-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignTopSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;