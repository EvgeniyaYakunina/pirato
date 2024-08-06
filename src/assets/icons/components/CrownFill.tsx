import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCrownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#crown-fill_svg__a)"><path fill="#000" d="M15.5 5a1.75 1.75 0 1 0-3.195.986l-1.674 2.062-1.506-3.46a1.75 1.75 0 1 0-2.254 0L5.37 8.045 3.695 5.984a1.75 1.75 0 1 0-1.663.75l.905 5.43a1 1 0 0 0 .987.836h8.152a1 1 0 0 0 .986-.836l.905-5.428A1.75 1.75 0 0 0 15.5 5M8 2.5A.75.75 0 1 1 8 4a.75.75 0 0 1 0-1.5M1.5 5A.75.75 0 1 1 3 5a.75.75 0 0 1-1.5 0m12.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="crown-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCrownFill);
const Memo = memo(ForwardRef);
export default Memo;