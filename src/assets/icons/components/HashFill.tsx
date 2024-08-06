import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hash-fill_svg__a)"><path fill="#000" d="M7.266 7h1.968l-.5 2H6.766zM14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-1 3.5a.5.5 0 0 0-.5-.5h-1.984l.469-1.879a.5.5 0 0 0-.97-.242L9.485 6h-1.97l.47-1.879a.5.5 0 0 0-.97-.242L6.485 6H4a.5.5 0 1 0 0 1h2.234l-.5 2H3.5a.5.5 0 1 0 0 1h1.984l-.469 1.879a.5.5 0 0 0 .796.515.5.5 0 0 0 .177-.273L6.516 10h1.968l-.469 1.879a.5.5 0 0 0 .97.242L9.514 10H12a.5.5 0 0 0 0-1H9.766l.5-2H12.5a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="hash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHashFill);
const Memo = memo(ForwardRef);
export default Memo;