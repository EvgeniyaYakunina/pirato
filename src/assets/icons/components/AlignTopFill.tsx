import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignTopFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#align-top-fill_svg__a)"><path fill="#000" d="M14 2.5a.5.5 0 0 1-.5.5h-11a.5.5 0 1 1 0-1h11a.5.5 0 0 1 .5.5M12 4H9.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M6.5 4H4a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1" /></g><defs><clipPath id="align-top-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlignTopFill);
const Memo = memo(ForwardRef);
export default Memo;