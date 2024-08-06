import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDotOutlineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dot-outline-fill_svg__a)"><path fill="#000" d="M9.75 8a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0" /></g><defs><clipPath id="dot-outline-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDotOutlineFill);
const Memo = memo(ForwardRef);
export default Memo;