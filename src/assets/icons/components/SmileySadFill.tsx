import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSmileySadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#smiley-sad-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M5.75 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m5 5.432a.5.5 0 0 1-.682-.182C9.6 10.443 8.867 10 8 10s-1.6.444-2.067 1.25a.5.5 0 1 1-.865-.5C5.71 9.638 6.779 9 8 9s2.29.637 2.932 1.75a.5.5 0 0 1-.182.682m-.5-3.932a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="smiley-sad-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSmileySadFill);
const Memo = memo(ForwardRef);
export default Memo;