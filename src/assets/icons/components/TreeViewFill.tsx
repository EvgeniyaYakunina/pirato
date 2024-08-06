import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTreeViewFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tree-view-fill_svg__a)"><path fill="#000" d="M10 8.5V8H5.5v4a.5.5 0 0 0 .5.5h4V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.5H6A1.5 1.5 0 0 1 4.5 12V5H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5v2H10v-.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1" /></g><defs><clipPath id="tree-view-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTreeViewFill);
const Memo = memo(ForwardRef);
export default Memo;