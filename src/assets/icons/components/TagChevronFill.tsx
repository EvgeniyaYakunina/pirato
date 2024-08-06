import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTagChevronFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tag-chevron-fill_svg__a)"><path fill="#000" d="m15.416 8.278-2.854 4.277a1 1 0 0 1-.83.445H2a.5.5 0 0 1-.416-.777L4.399 8 1.587 3.778A.5.5 0 0 1 2 3h9.732a1 1 0 0 1 .83.445l2.852 4.278a.5.5 0 0 1 .002.555" /></g><defs><clipPath id="tag-chevron-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTagChevronFill);
const Memo = memo(ForwardRef);
export default Memo;