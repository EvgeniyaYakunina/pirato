import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHexagonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hexagon-fill_svg__a)"><path fill="#000" d="M14.5 5.011v5.978a1 1 0 0 1-.52.875l-5.5 3.01a.99.99 0 0 1-.96 0l-5.5-3.01a1 1 0 0 1-.52-.875V5.01a1 1 0 0 1 .52-.875l5.5-3.01a1 1 0 0 1 .96 0l5.5 3.01a1 1 0 0 1 .52.875" /></g><defs><clipPath id="hexagon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHexagonFill);
const Memo = memo(ForwardRef);
export default Memo;