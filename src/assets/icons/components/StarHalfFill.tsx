import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStarHalfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#star-half-fill_svg__a)"><path fill="#000" d="M14.949 6.079a1.02 1.02 0 0 0-.892-.704l-3.687-.298-1.424-3.443a1.022 1.022 0 0 0-1.892 0L5.632 5.077l-3.69.298a1.029 1.029 0 0 0-.585 1.804l2.812 2.427-.856 3.628a1.025 1.025 0 0 0 1.53 1.114L8 12.405l3.158 1.943a1.024 1.024 0 0 0 1.53-1.114l-.86-3.63 2.812-2.426a1.03 1.03 0 0 0 .309-1.1m-.959.342-3.044 2.625a.5.5 0 0 0-.16.494l.93 3.925a.02.02 0 0 1 .001.017.02.02 0 0 1-.011.013c-.012.009-.015.007-.024 0l-3.42-2.103A.5.5 0 0 0 8 11.319v-9.32c.015 0 .017.006.022.017l1.54 3.725a.5.5 0 0 0 .422.308l3.995.322c.01 0 .015 0 .021.018s0 .025-.01.032" /></g><defs><clipPath id="star-half-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStarHalfFill);
const Memo = memo(ForwardRef);
export default Memo;