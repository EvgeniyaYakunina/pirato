import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArchiveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#archive-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1V12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9.5 9h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1M14 5.5H2V4h12z" /></g><defs><clipPath id="archive-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArchiveFill);
const Memo = memo(ForwardRef);
export default Memo;