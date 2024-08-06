import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerSimpleNoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speaker-simple-none-fill_svg__a)"><path fill="#000" d="M10.22 1.55a.5.5 0 0 0-.527.056L5.328 5H2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.828l4.365 3.395a.496.496 0 0 0 .66-.041A.5.5 0 0 0 10.5 14V2a.5.5 0 0 0-.28-.45" /></g><defs><clipPath id="speaker-simple-none-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerSimpleNoneFill);
const Memo = memo(ForwardRef);
export default Memo;