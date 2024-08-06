import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubtitlesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#subtitles-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M3.5 8h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1m6 3h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m3 0h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1m0-2h-6a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="subtitles-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSubtitlesFill);
const Memo = memo(ForwardRef);
export default Memo;