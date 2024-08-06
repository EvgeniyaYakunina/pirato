import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHouseLineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#house-line-fill_svg__a)"><path fill="#000" d="M15 13h-1V8.5l.146.146a.5.5 0 0 0 .708-.708L8.707 1.793a1 1 0 0 0-1.414 0L1.146 7.938a.5.5 0 0 0 .708.707L2 8.5V13H1a.5.5 0 1 0 0 1h14a.5.5 0 0 0 0-1m-5.5 0h-3v-3a.25.25 0 0 1 .25-.25h2.5a.25.25 0 0 1 .25.25z" /></g><defs><clipPath id="house-line-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHouseLineFill);
const Memo = memo(ForwardRef);
export default Memo;