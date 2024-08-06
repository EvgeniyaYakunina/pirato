import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUniteFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#unite-fill_svg__a)"><path fill="#000" d="M15 10.25a4.75 4.75 0 0 1-9.494.244 4.75 4.75 0 1 1 4.988-4.988A4.756 4.756 0 0 1 15 10.25" /></g><defs><clipPath id="unite-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUniteFill);
const Memo = memo(ForwardRef);
export default Memo;