import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBracketsRoundFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#brackets-round-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-7.274 8.554a.5.5 0 1 1-.45.893A4.45 4.45 0 0 1 3.5 8a4.45 4.45 0 0 1 2.276-3.947.5.5 0 1 1 .449.893C6.148 4.986 4.5 5.86 4.5 8s1.655 3.018 1.726 3.054m4 .893a.5.5 0 0 1-.448-.894c.069-.036 1.724-.908 1.724-3.053S9.847 4.983 9.776 4.946a.5.5 0 0 1 .45-.893A4.45 4.45 0 0 1 12.5 8a4.45 4.45 0 0 1-2.276 3.948z" /></g><defs><clipPath id="brackets-round-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBracketsRoundFill);
const Memo = memo(ForwardRef);
export default Memo;