import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgImageBrokenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#image-broken-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a.5.5 0 0 0 .474-.342l.927-2.78 2.287-.914a.5.5 0 0 0 .278-.278L11.38 6.9l2.78-.927a.5.5 0 0 0 .34-.474v-2a1 1 0 0 0-1-1M7.313 9.536a.5.5 0 0 0-.29.306L6.14 12.5H2.5v-2.457l2.896-2.897a.5.5 0 0 1 .708 0L8.156 9.2zM14.5 7.608V12.5a1 1 0 0 1-1 1H8.608a.5.5 0 0 1-.474-.658l.496-1.488a.5.5 0 0 1 .288-.306l2.236-.894.894-2.236a.5.5 0 0 1 .306-.288l1.488-.496a.5.5 0 0 1 .658.474" /></g><defs><clipPath id="image-broken-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgImageBrokenFill);
const Memo = memo(ForwardRef);
export default Memo;