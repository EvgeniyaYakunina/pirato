import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBugBeetleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bug-beetle-fill_svg__a)"><path fill="#000" d="M14 7.5h-1v-1h1a.5.5 0 0 1 0 1m-12-1a.5.5 0 1 0 0 1h1v-1zM13 10q0 .252-.025.5H14a.5.5 0 0 1 0 1h-1.23a5 5 0 0 1-9.54 0H2a.5.5 0 0 1 0-1h1.025A5 5 0 0 1 3 10v-.5H2a.5.5 0 1 1 0-1h1v-1h10v1h1a.5.5 0 0 1 0 1h-1zM8.5 9a.5.5 0 1 0-1 0v4a.5.5 0 1 0 1 0zM4.365 3.572c-.758.8-1.23 1.83-1.34 2.928h9.95a5 5 0 0 0-1.34-2.928l1.219-1.218a.5.5 0 0 0-.708-.708l-1.268 1.269a4.98 4.98 0 0 0-5.756 0L3.854 1.646a.5.5 0 1 0-.708.708z" /></g><defs><clipPath id="bug-beetle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBugBeetleFill);
const Memo = memo(ForwardRef);
export default Memo;