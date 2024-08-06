import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotePencilFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#note-pencil-fill_svg__a)"><path fill="#000" d="M14 8v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5a.5.5 0 1 1 0 1H3v10h10V8a.5.5 0 0 1 1 0m.354-3.646-6 6A.5.5 0 0 1 8 10.5H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708M13.29 4 12 2.707l-.793.793L12.5 4.793z" /></g><defs><clipPath id="note-pencil-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotePencilFill);
const Memo = memo(ForwardRef);
export default Memo;