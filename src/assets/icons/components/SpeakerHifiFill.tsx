import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerHifiFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speaker-hifi-fill_svg__a)"><path fill="#000" d="M9.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13 2.5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1M7.25 4.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M10.5 10a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0" /></g><defs><clipPath id="speaker-hifi-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerHifiFill);
const Memo = memo(ForwardRef);
export default Memo;