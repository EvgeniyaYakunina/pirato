import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerNoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speaker-none-fill_svg__a)"><path fill="#000" d="M4 5.25v5.5a.25.25 0 0 1-.25.25H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.75a.25.25 0 0 1 .25.25m5.822-3.634a.5.5 0 0 0-.625-.01L5.099 4.793A.25.25 0 0 0 5 4.99v6.02a.25.25 0 0 0 .097.197l4.098 3.188a.5.5 0 0 0 .807-.414V2.016a.52.52 0 0 0-.182-.4z" /></g><defs><clipPath id="speaker-none-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerNoneFill);
const Memo = memo(ForwardRef);
export default Memo;