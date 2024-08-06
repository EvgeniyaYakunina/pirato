import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonSimpleSkiFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#person-simple-ski-fill_svg__a)"><path fill="#000" d="M9 3.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M2.36 5.48l6.937 2.023.351.35A.5.5 0 0 0 10 8h2.5a.5.5 0 1 0 0-1h-2.293l-.295-.295-1.556-1.556a.5.5 0 0 0-.708 0L7 5.792 2.64 4.52a.5.5 0 1 0-.28.96m12.556 6.592a.5.5 0 0 0-.694-.139 3.36 3.36 0 0 1-2.812.431l-3.924-1.142 1.868-1.869a.5.5 0 0 0-.216-.834l-3.5-1a.5.5 0 1 0-.275.962l2.683.769-1.657 1.656-4.75-1.383a.5.5 0 0 0-.28.96l9.77 2.845a4.36 4.36 0 0 0 3.648-.56.5.5 0 0 0 .14-.696" /></g><defs><clipPath id="person-simple-ski-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonSimpleSkiFill);
const Memo = memo(ForwardRef);
export default Memo;