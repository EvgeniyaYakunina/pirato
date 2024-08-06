import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPeaceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#peace-fill_svg__a)"><path fill="#000" d="m8.5 8.96 2.875 2.013a4.5 4.5 0 0 1-2.875 1.5zM3.5 8c0 .753.189 1.494.55 2.155L7.5 7.74V3.529A4.505 4.505 0 0 0 3.5 8m4 4.471v-3.51l-2.875 2.012A4.5 4.5 0 0 0 7.5 12.471m1-8.942V7.74l3.45 2.415A4.5 4.5 0 0 0 8.5 3.529M14.5 8A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-1 0A5.5 5.5 0 1 0 8 13.5 5.506 5.506 0 0 0 13.5 8" /></g><defs><clipPath id="peace-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPeaceFill);
const Memo = memo(ForwardRef);
export default Memo;