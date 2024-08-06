import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplaneInFlightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#airplane-in-flight-fill_svg__a)"><path fill="#000" d="M14 13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5M13 6H9.208L6.354 3.146A.5.5 0 0 0 6 3h-.5a1 1 0 0 0-.948 1.316L5.114 6H3.708L2.354 4.646A.5.5 0 0 0 2 4.5h-.5a1 1 0 0 0-.957 1.287l.88 2.931A2.484 2.484 0 0 0 3.817 10.5H15a.5.5 0 0 0 .5-.5V8.5A2.5 2.5 0 0 0 13 6" /></g><defs><clipPath id="airplane-in-flight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAirplaneInFlightFill);
const Memo = memo(ForwardRef);
export default Memo;