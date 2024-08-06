import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandGrabbingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-grabbing-fill_svg__a)"><path fill="#000" d="M13.5 6.5v3a5.5 5.5 0 0 1-11 0v-1a1 1 0 0 1 2 0V9a.5.5 0 1 0 1 0V5.5a1 1 0 0 1 2 0v1a.5.5 0 1 0 1 0v-1a1 1 0 0 1 2 0v1a.5.5 0 0 0 1 0 1 1 0 0 1 2 0" /></g><defs><clipPath id="hand-grabbing-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandGrabbingFill);
const Memo = memo(ForwardRef);
export default Memo;