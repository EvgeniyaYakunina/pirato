import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGridNineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#grid-nine-fill_svg__a)"><path fill="#000" d="M5.25 3.25v2.5h-3.5a.25.25 0 0 1-.25-.25V4a1 1 0 0 1 1-1H5a.25.25 0 0 1 .25.25m1 9.5a.25.25 0 0 0 .25.25h3a.25.25 0 0 0 .25-.25v-2.5h-3.5zM1.5 10.5V12a1 1 0 0 0 1 1H5a.25.25 0 0 0 .25-.25v-2.5h-3.5a.25.25 0 0 0-.25.25m0-3.5v2a.25.25 0 0 0 .25.25h3.5v-2.5h-3.5A.25.25 0 0 0 1.5 7m8-4h-3a.25.25 0 0 0-.25.25v2.5h3.5v-2.5A.25.25 0 0 0 9.5 3m4.75 3.75h-3.5v2.5h3.5A.25.25 0 0 0 14.5 9V7a.25.25 0 0 0-.25-.25m-8 2.5h3.5v-2.5h-3.5zM13.5 3H11a.25.25 0 0 0-.25.25v2.5h3.5a.25.25 0 0 0 .25-.25V4a1 1 0 0 0-1-1m.75 7.25h-3.5v2.5A.25.25 0 0 0 11 13h2.5a1 1 0 0 0 1-1v-1.5a.25.25 0 0 0-.25-.25" /></g><defs><clipPath id="grid-nine-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGridNineFill);
const Memo = memo(ForwardRef);
export default Memo;