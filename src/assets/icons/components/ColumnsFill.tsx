import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgColumnsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#columns-fill_svg__a)"><path fill="#000" d="M7.5 3v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1M12 2H9.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" /></g><defs><clipPath id="columns-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgColumnsFill);
const Memo = memo(ForwardRef);
export default Memo;