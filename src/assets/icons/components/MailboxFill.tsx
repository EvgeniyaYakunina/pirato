import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMailboxFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mailbox-fill_svg__a)"><path fill="#000" d="M6.5 9.5a.5.5 0 0 1-.5.5H3.5a.5.5 0 1 1 0-1H6a.5.5 0 0 1 .5.5m4-7.5H12a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2h1zM15 7.25V11a1 1 0 0 1-1 1H8.5v2a.5.5 0 0 1-1 0v-2H2a1 1 0 0 1-1-1V7.25A3.754 3.754 0 0 1 4.75 3.5H9.5V9a.5.5 0 1 0 1 0V3.5h.75A3.754 3.754 0 0 1 15 7.25m-7.5 0a2.75 2.75 0 1 0-5.5 0V11h5.5z" /></g><defs><clipPath id="mailbox-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMailboxFill);
const Memo = memo(ForwardRef);
export default Memo;