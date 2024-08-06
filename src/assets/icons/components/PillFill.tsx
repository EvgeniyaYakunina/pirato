import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPillFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pill-fill_svg__a)"><path fill="#000" d="M13.527 2.475a3.33 3.33 0 0 0-4.708 0L2.475 8.818a3.329 3.329 0 0 0 4.708 4.707l6.344-6.343a3.33 3.33 0 0 0 0-4.707m-.708 4L9.648 9.646 6.354 6.354l3.172-3.172a2.329 2.329 0 0 1 3.293 3.293m-.964-1.329a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.707-.708l1.5-1.5a.5.5 0 0 1 .707 0" /></g><defs><clipPath id="pill-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPillFill);
const Memo = memo(ForwardRef);
export default Memo;