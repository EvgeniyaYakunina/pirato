import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBoxArrowUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#box-arrow-up-fill_svg__a)"><path fill="#000" d="m13.948 4.276-1-2A.5.5 0 0 0 12.5 2h-9a.5.5 0 0 0-.447.276l-1 2A.5.5 0 0 0 2 4.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.053-.224m-3.594 4.578a.5.5 0 0 1-.708 0L8.5 7.707V11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708M3.309 4l.5-1h8.382l.5 1z" /></g><defs><clipPath id="box-arrow-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBoxArrowUpFill);
const Memo = memo(ForwardRef);
export default Memo;