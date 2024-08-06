import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLifebuoyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lifebuoy-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5.518-4.225L9.737 5.556a2.99 2.99 0 0 0-3.474 0l-1.78-1.781a5.49 5.49 0 0 1 7.035 0m-7.036 8.45 1.781-1.781a2.99 2.99 0 0 0 3.474 0l1.78 1.781a5.49 5.49 0 0 1-7.034 0" /></g><defs><clipPath id="lifebuoy-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLifebuoyFill);
const Memo = memo(ForwardRef);
export default Memo;