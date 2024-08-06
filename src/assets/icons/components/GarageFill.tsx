import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGarageFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#garage-fill_svg__a)"><path fill="#000" d="M15 12h-.5V6.167a1 1 0 0 0-.445-.832l-5.5-3.667a1 1 0 0 0-1.11 0l-5.5 3.667a1 1 0 0 0-.445.832V12H1a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1M8.5 8H12v1.5H8.5zm-1 1.5H4V8h3.5zm-3.5 1h3.5V12H4zm4.5 0H12V12H8.5z" /></g><defs><clipPath id="garage-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGarageFill);
const Memo = memo(ForwardRef);
export default Memo;