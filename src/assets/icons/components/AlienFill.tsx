import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlienFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#alien-fill_svg__a)"><path fill="#000" d="M8 1a6.007 6.007 0 0 0-6 6c0 1.5.785 3.441 2.1 5.188C5.425 13.947 6.883 15 8 15s2.576-1.05 3.9-2.812C13.214 10.438 14 8.5 14 7a6.006 6.006 0 0 0-6-6M4 7.25a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 7 8.75a.75.75 0 0 1-.75.75A2.25 2.25 0 0 1 4 7.25m5 5.25H7a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1m.75-3A.75.75 0 0 1 9 8.75a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 1 .75.75A2.25 2.25 0 0 1 9.75 9.5" /></g><defs><clipPath id="alien-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAlienFill);
const Memo = memo(ForwardRef);
export default Memo;