import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHouseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#house-fill_svg__a)"><path fill="#000" d="M14 7.5v6a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5v-3.25a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v3.25a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-6a1 1 0 0 1 .293-.707l5-5a1 1 0 0 1 1.414 0l5 5A1 1 0 0 1 14 7.5" /></g><defs><clipPath id="house-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHouseFill);
const Memo = memo(ForwardRef);
export default Memo;