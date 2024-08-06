import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClubFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#club-fill_svg__a)"><path fill="#000" d="M15 9a3.5 3.5 0 0 1-5.3 3h-.278l.557 1.856a.5.5 0 0 1-.479.644h-3a.5.5 0 0 1-.479-.644L6.578 12h-.277A3.5 3.5 0 1 1 4.5 5.5h.146a3.5 3.5 0 1 1 6.708 0h.146A3.504 3.504 0 0 1 15 9" /></g><defs><clipPath id="club-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClubFill);
const Memo = memo(ForwardRef);
export default Memo;