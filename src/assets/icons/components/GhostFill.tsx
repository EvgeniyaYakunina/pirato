import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGhostFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ghost-fill_svg__a)"><path fill="#000" d="M8 1.5a6.007 6.007 0 0 0-6 6v6a.5.5 0 0 0 .817.387l1.516-1.24 1.517 1.24a.5.5 0 0 0 .633 0L8 12.647l1.517 1.24a.5.5 0 0 0 .633 0l1.517-1.24 1.516 1.24A.5.5 0 0 0 14 13.5v-6a6.006 6.006 0 0 0-6-6M6.25 8a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3.5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="ghost-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGhostFill);
const Memo = memo(ForwardRef);
export default Memo;