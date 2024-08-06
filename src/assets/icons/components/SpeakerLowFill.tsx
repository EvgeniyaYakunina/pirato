import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerLowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speaker-low-fill_svg__a)"><path fill="#000" d="M10 2.016V13.98a.52.52 0 0 1-.244.449.5.5 0 0 1-.563-.035l-4.098-3.188A.25.25 0 0 1 5 11.01V4.99a.25.25 0 0 1 .097-.197l4.098-3.187a.5.5 0 0 1 .805.41M3.75 5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.75a.25.25 0 0 0 .25-.25v-5.5A.25.25 0 0 0 3.75 5m8.625 1.348a.5.5 0 1 0-.75.66 1.5 1.5 0 0 1 0 1.983.5.5 0 1 0 .75.662 2.5 2.5 0 0 0 0-3.305" /></g><defs><clipPath id="speaker-low-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerLowFill);
const Memo = memo(ForwardRef);
export default Memo;