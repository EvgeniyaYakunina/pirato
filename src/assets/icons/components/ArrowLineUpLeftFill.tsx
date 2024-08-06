import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLineUpLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-line-up-left-fill_svg__a)"><path fill="#000" d="M14.5 13a.5.5 0 0 1-.5.5H3a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5M4.309 9.462a.5.5 0 0 0 .545-.108L7.5 6.707l3.646 3.647a.501.501 0 0 0 .708-.708L8.207 6l2.647-2.646A.5.5 0 0 0 10.5 2.5h-6A.5.5 0 0 0 4 3v6a.5.5 0 0 0 .309.462" /></g><defs><clipPath id="arrow-line-up-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowLineUpLeftFill);
const Memo = memo(ForwardRef);
export default Memo;