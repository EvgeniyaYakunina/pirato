import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCassetteTapeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cassette-tape-fill_svg__a)"><path fill="#000" d="M9.769 6a2 2 0 0 0 0 2H6.23a2 2 0 0 0 0-2zM4.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15 4v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3.375 8-.975-1.3a.5.5 0 0 0-.4-.2h-4.5a.5.5 0 0 0-.4.2L4.375 12zM13.5 7a2 2 0 0 0-2-2h-7a2 2 0 1 0 0 4h7a2 2 0 0 0 2-2m-2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></g><defs><clipPath id="cassette-tape-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCassetteTapeFill);
const Memo = memo(ForwardRef);
export default Memo;