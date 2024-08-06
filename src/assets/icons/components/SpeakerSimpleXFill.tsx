import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerSimpleXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#speaker-simple-x-fill_svg__a)"><path d="M10.22 1.55a.5.5 0 0 0-.527.056L5.328 5H2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.828l4.365 3.395a.496.496 0 0 0 .66-.041A.5.5 0 0 0 10.5 14V2a.5.5 0 0 0-.28-.45M14.707 8l1.147-1.146a.5.5 0 0 0-.708-.708L14 7.293l-1.146-1.147a.5.5 0 0 0-.708.708L13.293 8l-1.147 1.146a.5.5 0 0 0 .708.708L14 8.707l1.146 1.147a.5.5 0 0 0 .708-.708z" /></g><defs><clipPath id="speaker-simple-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerSimpleXFill);
const Memo = memo(ForwardRef);
export default Memo;