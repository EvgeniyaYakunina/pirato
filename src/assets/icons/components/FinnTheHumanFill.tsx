import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFinnTheHumanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#finn-the-human-fill_svg__a)"><path fill="#000" d="M11 9.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.75 8.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m9.25-4v5a4.505 4.505 0 0 1-4.5 4.5h-5A4.505 4.505 0 0 1 1 9.5v-5A2 2 0 0 1 4.938 4h6.125A2 2 0 0 1 15 4.5M12.5 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v.5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2z" /></g><defs><clipPath id="finn-the-human-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFinnTheHumanFill);
const Memo = memo(ForwardRef);
export default Memo;