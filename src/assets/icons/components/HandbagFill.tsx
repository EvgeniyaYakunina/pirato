import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandbagFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#handbag-fill_svg__a)"><path fill="#000" d="m14.993 12.383-.891-7.5a1 1 0 0 0-1-.883H11a3 3 0 1 0-6 0H2.896a1 1 0 0 0-1 .883l-.892 7.5A1 1 0 0 0 2 13.5h11.995a1.01 1.01 0 0 0 .96-.701c.042-.135.055-.277.038-.416M6 6.5a.5.5 0 1 1-1 0v-1a.5.5 0 1 1 1 0zM8 2a2 2 0 0 1 2 2H6a2 2 0 0 1 2-2m3 4.5a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="handbag-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandbagFill);
const Memo = memo(ForwardRef);
export default Memo;