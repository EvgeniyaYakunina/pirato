import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-up-right-fill_svg__a)"><path fill="#000" d="M12.5 4v6.5a.5.5 0 0 1-.854.354L8.75 7.957l-4.396 4.397a.5.5 0 0 1-.708-.708L8.043 7.25 5.146 4.354A.5.5 0 0 1 5.5 3.5H12a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="arrow-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;