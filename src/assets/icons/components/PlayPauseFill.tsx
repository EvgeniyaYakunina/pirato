import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlayPauseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#play-pause-fill_svg__a)"><path fill="#000" d="M11.5 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 1 0m2.5-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5M8.542 7.166 3.03 3.656a.994.994 0 0 0-1.53.835v7.018a.99.99 0 0 0 1.027.989 1 1 0 0 0 .503-.156l5.512-3.51a.987.987 0 0 0 0-1.667z" /></g><defs><clipPath id="play-pause-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlayPauseFill);
const Memo = memo(ForwardRef);
export default Memo;