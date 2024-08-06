import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaperclipFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paperclip-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.354 3.146a.5.5 0 0 0-.708 0L5.443 8.938a1.5 1.5 0 0 0 2.12 2.124l3.082-3.144a.5.5 0 1 1 .714.7l-3.086 3.148a2.5 2.5 0 1 1-3.539-3.532l4.204-4.29a1.5 1.5 0 1 1 2.124 2.119L6.858 10.35a.5.5 0 1 1-.714-.7l4.207-4.293a.5.5 0 0 0 .004-.71" /></g><defs><clipPath id="paperclip-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaperclipFill);
const Memo = memo(ForwardRef);
export default Memo;