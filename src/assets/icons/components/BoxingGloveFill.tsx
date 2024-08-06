import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBoxingGloveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#boxing-glove-fill_svg__a)"><path fill="#000" d="M10.5 1h-3A3.5 3.5 0 0 0 4 4.5v1.983A.51.51 0 0 1 3.533 7 .5.5 0 0 1 3 6.5V4.919a.25.25 0 0 0-.352-.228A2 2 0 0 0 1.5 6.5v1.824a1 1 0 0 0 .258.668L4 11.21V13.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2.43l.961-3.365Q14 7.57 14 7.43V4.5A3.5 3.5 0 0 0 10.5 1m.224 10.553a.5.5 0 0 1 .223.67.5.5 0 0 1-.67.224L8.5 11.56l-1.776.889a.5.5 0 0 1-.448-.896L7.382 11l-1.106-.553a.501.501 0 0 1 .448-.894l1.776.888 1.776-.889a.5.5 0 0 1 .448.896L9.618 11z" /></g><defs><clipPath id="boxing-glove-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBoxingGloveFill);
const Memo = memo(ForwardRef);
export default Memo;