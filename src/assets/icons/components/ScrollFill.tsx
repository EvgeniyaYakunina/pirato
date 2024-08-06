import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScrollFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#scroll-fill_svg__a)"><path fill="#000" d="M13.8 10.6a.5.5 0 0 0-.3-.1H13V4a2 2 0 0 0-2-2H2.5a2 2 0 0 0-2 2c0 .85.628 1.346.7 1.4a.49.49 0 0 0 .59.006.5.5 0 0 0 .014-.802C1.802 4.601 1.5 4.36 1.5 4a1 1 0 0 1 2 0v8a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2c0-.85-.625-1.346-.7-1.4M6.5 6h4a.5.5 0 0 1 0 1h-4a.5.5 0 1 1 0-1M6 8.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m6.5 4.5H6.732c.176-.304.268-.649.268-1q0-.256-.076-.5H13.3a.8.8 0 0 1 .202.5 1 1 0 0 1-1.001 1" /></g><defs><clipPath id="scroll-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgScrollFill);
const Memo = memo(ForwardRef);
export default Memo;