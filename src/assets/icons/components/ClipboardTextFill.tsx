import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClipboardTextFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#clipboard-text-fill_svg__a)"><path fill="#000" d="M12.5 2h-2.266a2.996 2.996 0 0 0-4.468 0H3.5a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M8 2a2 2 0 0 1 2 2H6a2 2 0 0 1 2-2m2 8H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1m0-2H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1" /></g><defs><clipPath id="clipboard-text-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClipboardTextFill);
const Memo = memo(ForwardRef);
export default Memo;