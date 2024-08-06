import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotepadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#notepad-fill_svg__a)"><path fill="#000" d="M13 2h-1.5v-.5a.5.5 0 0 0-1 0V2h-2v-.5a.5.5 0 1 0-1 0V2h-2v-.5a.5.5 0 1 0-1 0V2H3a.5.5 0 0 0-.5.5v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-10A.5.5 0 0 0 13 2M7.5 3.5a.5.5 0 1 1 1 0V4a.5.5 0 1 1-1 0zM5 4.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 1 1 1 0V4a.5.5 0 0 1-.5.5m5 6H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1m0-2H6a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1M11.5 4a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="notepad-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotepadFill);
const Memo = memo(ForwardRef);
export default Memo;