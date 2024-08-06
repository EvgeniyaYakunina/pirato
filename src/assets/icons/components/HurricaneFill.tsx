import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHurricaneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hurricane-fill_svg__a)"><path fill="#000" d="m9.895 2.835.588-2.206A.5.5 0 0 0 9.895.01C8.595.33 7.357.86 6.229 1.58 3.79 3.148 2.5 5.368 2.5 8a5.51 5.51 0 0 0 3.605 5.166l-.588 2.206a.5.5 0 0 0 .588.618 12.2 12.2 0 0 0 3.666-1.569C12.21 12.853 13.5 10.633 13.5 8a5.51 5.51 0 0 0-3.605-5.165M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" /></g><defs><clipPath id="hurricane-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHurricaneFill);
const Memo = memo(ForwardRef);
export default Memo;