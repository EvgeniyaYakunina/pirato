import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpeakerXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#speaker-x-fill_svg__a)"><path fill="#000" d="M15.354 9.146a.5.5 0 0 1-.708.708L13.5 8.707l-1.146 1.147a.5.5 0 0 1-.708-.708L12.793 8l-1.147-1.146a.5.5 0 0 1 .708-.708L13.5 7.293l1.146-1.147a.5.5 0 0 1 .708.708L14.207 8zM3.75 5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.75a.25.25 0 0 0 .25-.25v-5.5A.25.25 0 0 0 3.75 5m6.072-3.384a.5.5 0 0 0-.625-.01L5.099 4.793A.25.25 0 0 0 5 4.99v6.02a.25.25 0 0 0 .097.197l4.098 3.188a.5.5 0 0 0 .807-.414V2.016a.52.52 0 0 0-.182-.4z" /></g><defs><clipPath id="speaker-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpeakerXFill);
const Memo = memo(ForwardRef);
export default Memo;