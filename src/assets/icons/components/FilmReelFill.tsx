import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilmReelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#film-reel-fill_svg__a)"><path fill="#000" d="M14.5 13.5h-3.04a6.497 6.497 0 1 0-3.46 1h6.5a.5.5 0 0 0 0-1M5 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m3 3a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M9.75 8a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" /></g><defs><clipPath id="film-reel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFilmReelFill);
const Memo = memo(ForwardRef);
export default Memo;