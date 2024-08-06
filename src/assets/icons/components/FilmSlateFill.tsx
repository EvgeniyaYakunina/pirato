import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilmSlateFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#film-slate-fill_svg__a)"><path fill="#000" d="M13.5 6.5H6.38l6.745-1.78a.5.5 0 0 0 .355-.616l-.51-1.875a.996.996 0 0 0-1.214-.695L2.238 4.046a.984.984 0 0 0-.703 1.213L2 6.972V12.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a.5.5 0 0 0-.5-.5m-1.49-4 .375 1.38-2.1.557L8.528 3.42zM4.847 4.392l1.757 1.015-3.725.983-.375-1.38z" /></g><defs><clipPath id="film-slate-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFilmSlateFill);
const Memo = memo(ForwardRef);
export default Memo;