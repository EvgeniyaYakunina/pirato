import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFirstAidFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#first-aid-fill_svg__a)"><path fill="#000" d="M14.5 6.75v2.5a1 1 0 0 1-1 1h-3.25v3.25a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-3.25H2.5a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h3.25V2.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v3.25h3.25a1 1 0 0 1 1 1" /></g><defs><clipPath id="first-aid-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFirstAidFill);
const Memo = memo(ForwardRef);
export default Memo;