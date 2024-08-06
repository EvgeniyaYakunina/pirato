import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVideoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#video-fill_svg__a)"><path fill="#000" d="M14.5 13a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5m0-9.5v7a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1M10.25 7a.5.5 0 0 0-.213-.41l-2.5-1.75a.5.5 0 0 0-.787.41v3.5a.5.5 0 0 0 .787.41l2.5-1.75A.5.5 0 0 0 10.25 7" /></g><defs><clipPath id="video-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVideoFill);
const Memo = memo(ForwardRef);
export default Memo;