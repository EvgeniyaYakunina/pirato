import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClosedCaptioningFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#closed-captioning-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-6.75 7.165a2.5 2.5 0 1 1 0-4.33.5.5 0 1 1-.5.866 1.5 1.5 0 1 0 0 2.598.5.5 0 0 1 .5.866m5 0a2.5 2.5 0 1 1 0-4.33.5.5 0 1 1-.5.866 1.5 1.5 0 1 0 0 2.598.5.5 0 0 1 .5.866" /></g><defs><clipPath id="closed-captioning-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClosedCaptioningFill);
const Memo = memo(ForwardRef);
export default Memo;