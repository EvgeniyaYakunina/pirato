import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlowerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flower-fill_svg__a)"><path fill="#000" d="M13.147 8.085A2 2 0 0 0 12.983 8q.087-.04.164-.085a2.5 2.5 0 1 0-2.655-4.23q.008-.094.008-.188a2.5 2.5 0 1 0-4.992.188 2.5 2.5 0 0 0-1.08-.42A2.5 2.5 0 0 0 3.017 8a2.5 2.5 0 1 0 2.491 4.316 2.5 2.5 0 1 0 4.984 0q.078.054.155.1a2.49 2.49 0 0 0 1.897.248 2.5 2.5 0 0 0 .603-4.58zM8 9.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5" /></g><defs><clipPath id="flower-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlowerFill);
const Memo = memo(ForwardRef);
export default Memo;