import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSplitHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#split-horizontal-fill_svg__a)"><path fill="#000" d="M7 3v10a.5.5 0 0 1-1 0V8.5H4V10a.5.5 0 0 1-.854.354l-2-2a.5.5 0 0 1 0-.708l2-2A.5.5 0 0 1 4 6v1.5h2V3a.5.5 0 1 1 1 0m7.854 4.646-2-2A.5.5 0 0 0 12 6v1.5h-2V3a.5.5 0 1 0-1 0v10a.5.5 0 0 0 1 0V8.5h2V10a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="split-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSplitHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;