import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFramerLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#framer-logo-fill_svg__a)"><path fill="#000" d="M12.5 7H9.312l3.517 3.125a.5.5 0 0 1-.33.875h-4v4a.5.5 0 0 1-.853.354l-4.5-4.5A.5.5 0 0 1 3 10.5v-4a.5.5 0 0 1 .5-.5h3.187L3.168 2.875A.5.5 0 0 1 3.5 2h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5" /></g><defs><clipPath id="framer-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFramerLogoFill);
const Memo = memo(ForwardRef);
export default Memo;