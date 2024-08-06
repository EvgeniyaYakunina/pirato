import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBreadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bread-fill_svg__a)"><path fill="#000" d="M12.5 2.5H3a2.5 2.5 0 0 0-1 4.79v5.21a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1V7.29a2.5 2.5 0 0 0-1-4.79M9 6.5a.5.5 0 0 0 0 1v5H3v-5a.5.5 0 0 0 0-1 1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 1 1 0 3" /></g><defs><clipPath id="bread-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBreadFill);
const Memo = memo(ForwardRef);
export default Memo;