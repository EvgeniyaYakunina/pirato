import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretDoubleLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-double-left-fill_svg__a)"><path fill="#000" d="M12.691 2.538a.5.5 0 0 0-.545.108L8 6.793V3a.5.5 0 0 0-.854-.354l-5 5a.5.5 0 0 0 0 .708l5 5A.5.5 0 0 0 8 13V9.207l4.146 4.147A.5.5 0 0 0 13 13V3a.5.5 0 0 0-.309-.462" /></g><defs><clipPath id="caret-double-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretDoubleLeftFill);
const Memo = memo(ForwardRef);
export default Memo;