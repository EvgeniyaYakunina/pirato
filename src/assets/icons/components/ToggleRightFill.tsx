import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgToggleRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#toggle-right-fill_svg__a)"><path fill="#000" d="M11 3.5H5a4.5 4.5 0 0 0 0 9h6a4.5 4.5 0 1 0 0-9m0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" /></g><defs><clipPath id="toggle-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgToggleRightFill);
const Memo = memo(ForwardRef);
export default Memo;