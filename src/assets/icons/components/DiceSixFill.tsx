import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDiceSixFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dice-six-fill_svg__a)"><path fill="#000" d="M12 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6.25 9.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-2.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-2.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m4.5 5.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-2.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-2.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="dice-six-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDiceSixFill);
const Memo = memo(ForwardRef);
export default Memo;