import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWallFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#wall-fill_svg__a)"><path d="M8.5 5.75h5.75a.25.25 0 0 0 .25-.25v-2A.5.5 0 0 0 14 3H8.75a.25.25 0 0 0-.25.25zM11.5 9.5h2.75a.25.25 0 0 0 .25-.25V7a.25.25 0 0 0-.25-.25H11.5zM10.5 6.75h-5V9.5h5zM4.5 6.75H1.75A.25.25 0 0 0 1.5 7v2.25a.25.25 0 0 0 .25.25H4.5zM8.5 10.5v2.25a.25.25 0 0 0 .25.25H14a.5.5 0 0 0 .5-.5v-1.75a.25.25 0 0 0-.25-.25zM7.5 5.75v-2.5A.25.25 0 0 0 7.25 3H2a.5.5 0 0 0-.5.5v2a.25.25 0 0 0 .25.25zM7.5 10.5H1.75a.25.25 0 0 0-.25.25v1.75a.5.5 0 0 0 .5.5h5.25a.25.25 0 0 0 .25-.25z" /></g><defs><clipPath id="wall-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWallFill);
const Memo = memo(ForwardRef);
export default Memo;