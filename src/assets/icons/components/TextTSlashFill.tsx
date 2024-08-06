import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextTSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-t-slash-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 4.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-.5H8a.5.5 0 1 1 0-1m3.83 7.875a.5.5 0 0 1-.706-.047l-2.625-3V11h.75a.5.5 0 0 1 0 1H6.75a.5.5 0 0 1 0-1h.75V8.188l-2-2.286V6a.5.5 0 1 1-1 0V5q0-.102.04-.196l-.415-.475a.5.5 0 0 1 .75-.658l7 8a.5.5 0 0 1-.046.704" /></g><defs><clipPath id="text-t-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextTSlashFill);
const Memo = memo(ForwardRef);
export default Memo;