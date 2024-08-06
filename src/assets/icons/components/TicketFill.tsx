import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTicketFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ticket-fill_svg__a)"><path fill="#000" d="M14.5 6.5A.5.5 0 0 0 15 6V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3M2 10.45a2.5 2.5 0 0 0 0-4.9V4h3.5v8H2z" /></g><defs><clipPath id="ticket-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTicketFill);
const Memo = memo(ForwardRef);
export default Memo;