import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMicrophoneStageFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#microphone-stage-fill_svg__a)"><path fill="#000" d="M7.191 2.897a.25.25 0 0 0-.382.034 4.47 4.47 0 0 0-.77 3.157l-4.344 5.926a.996.996 0 0 0 .1 1.298l.893.893a.996.996 0 0 0 1.298.1l5.926-4.346q.292.04.588.04c.919.002 1.816-.28 2.568-.807a.25.25 0 0 0 .034-.382zm.163 6.455-1 1a.5.5 0 1 1-.706-.707l1-1a.5.5 0 0 1 .706.707m6.838-1.285a.25.25 0 0 1-.383.034L7.9 2.191a.25.25 0 0 1 .034-.383 4.496 4.496 0 0 1 6.259 6.26" /></g><defs><clipPath id="microphone-stage-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMicrophoneStageFill);
const Memo = memo(ForwardRef);
export default Memo;