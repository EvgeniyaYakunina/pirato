import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodeBlockFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#code-block-fill_svg__a)"><path fill="#000" d="M12.5 2.5h-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h.5v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M6.646 3.854a.5.5 0 1 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.708-.708L7.793 5zm-4 1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 1 1 .708.708L3.707 5l1.147 1.146a.5.5 0 1 1-.708.708zM12.5 12.5h-9v-4h6a1 1 0 0 0 1-1v-4h2z" /></g><defs><clipPath id="code-block-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCodeBlockFill);
const Memo = memo(ForwardRef);
export default Memo;