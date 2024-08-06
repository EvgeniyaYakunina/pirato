import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#code-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M5.8 9.1a.5.5 0 1 1-.6.8l-2-1.5a.5.5 0 0 1 0-.8l2-1.5a.5.5 0 1 1 .6.8L4.333 8zm3.68-4.462-2 7a.5.5 0 1 1-.96-.275l2-7a.5.5 0 0 1 .96.274M12.8 8.4l-2 1.5a.5.5 0 0 1-.6-.8L11.667 8 10.2 6.9a.5.5 0 1 1 .6-.8l2 1.5a.5.5 0 0 1 0 .8" /></g><defs><clipPath id="code-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCodeFill);
const Memo = memo(ForwardRef);
export default Memo;