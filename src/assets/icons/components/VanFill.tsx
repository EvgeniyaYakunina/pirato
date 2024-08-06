import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#van-fill_svg__a)"><path fill="#000" d="m15.88 6.674-2.847-3.316A1 1 0 0 0 12.266 3H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.063a2 2 0 0 0 3.875 0h3.125a2 2 0 0 0 3.874 0H15a1 1 0 0 0 1-1V7a.5.5 0 0 0-.12-.326M2 6.5V4h3.5v2.5zm3 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5-6H6.5V4H10zm2 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-1-6V4h1.266l2.146 2.5z" /></g><defs><clipPath id="van-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVanFill);
const Memo = memo(ForwardRef);
export default Memo;