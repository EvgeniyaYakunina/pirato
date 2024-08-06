import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoteBlankFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#note-blank-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.793a1 1 0 0 0 .707-.293l3.207-3.207A1 1 0 0 0 14 9.793V3a1 1 0 0 0-1-1m-3 10.793V10h2.793z" /></g><defs><clipPath id="note-blank-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNoteBlankFill);
const Memo = memo(ForwardRef);
export default Memo;