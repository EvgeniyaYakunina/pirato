import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVideoConferenceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#video-conference-fill_svg__a)"><path fill="#000" d="M12.75 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 9.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M6 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8.5-3v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1m-4 4h3v-4h-3zm-2.016 2.875A2.49 2.49 0 0 0 7.41 8.916a2 2 0 1 0-2.82 0 2.5 2.5 0 0 0-1.074 1.459.5.5 0 1 0 .968.25C4.65 9.985 5.301 9.5 6 9.5s1.351.483 1.516 1.125a.5.5 0 1 0 .968-.25M13.5 12.5v-4h-3v4z" /></g><defs><clipPath id="video-conference-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVideoConferenceFill);
const Memo = memo(ForwardRef);
export default Memo;