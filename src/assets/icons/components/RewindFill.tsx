import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRewindFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rewind-fill_svg__a)"><path fill="#000" d="M14.5 4.49v7.02a.996.996 0 0 1-1.53.834L8 9.179v2.33a.995.995 0 0 1-1.53.835L.958 8.834a.987.987 0 0 1 0-1.668l5.512-3.51A.994.994 0 0 1 8 4.49V6.82l4.97-3.165a.994.994 0 0 1 1.53.834" /></g><defs><clipPath id="rewind-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRewindFill);
const Memo = memo(ForwardRef);
export default Memo;