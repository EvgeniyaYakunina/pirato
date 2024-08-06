import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerSimpleLowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speaker-simple-low-fill_svg__a)"><path fill="#000" d="M10.5 2v12a.5.5 0 0 1-.807.395L5.328 11H2.5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.828l4.365-3.394A.5.5 0 0 1 10.5 2m2 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="speaker-simple-low-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerSimpleLowFill);
const Memo = memo(ForwardRef);
export default Memo;