import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretLineLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-line-left-fill_svg__a)"><path fill="#000" d="M12.5 3v10a.5.5 0 0 1-.854.354l-5-5a.5.5 0 0 1 0-.708l5-5A.5.5 0 0 1 12.5 3m-8-.5A.5.5 0 0 0 4 3v10a.5.5 0 0 0 1 0V3a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="caret-line-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretLineLeftFill);
const Memo = memo(ForwardRef);
export default Memo;