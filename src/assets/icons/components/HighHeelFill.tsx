import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHighHeelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#high-heel-fill_svg__a)"><path fill="#000" d="M2 9c.806 0 1.604.163 2.346.48a.25.25 0 0 1 .154.23V12a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9.25A.25.25 0 0 1 1.75 9zm12.438.762-3.188-.718-6.896-6.898a.5.5 0 0 0-.723.017C2.257 3.665 1.5 5.563 1.5 7.5A.5.5 0 0 0 2 8a6.95 6.95 0 0 1 3.959 1.231 7.03 7.03 0 0 1 2.534 3.15.99.99 0 0 0 .927.62H15a1 1 0 0 0 1-1v-.296a1.98 1.98 0 0 0-1.562-1.943" /></g><defs><clipPath id="high-heel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHighHeelFill);
const Memo = memo(ForwardRef);
export default Memo;