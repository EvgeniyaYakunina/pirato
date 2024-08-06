import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circle-fill_svg__a)"><path fill="#000" d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13" /></g><defs><clipPath id="circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCircleFill);
const Memo = memo(ForwardRef);
export default Memo;