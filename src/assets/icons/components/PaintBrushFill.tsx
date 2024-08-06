import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaintBrushFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paint-brush-fill_svg__a)"><path fill="#000" d="M14.5 2a.5.5 0 0 0-.5-.5c-2.755 0-5.582 3.107-7.152 5.164A3.75 3.75 0 0 0 2 10.25C2 12.18.779 13.046.72 13.086A.5.5 0 0 0 1 14h4.75a3.75 3.75 0 0 0 3.586-4.848C11.394 7.582 14.5 4.755 14.5 2M7.776 7.097q.322-.417.63-.785c.506.342.94.776 1.282 1.281a26 26 0 0 1-.785.63 3.8 3.8 0 0 0-1.127-1.126m2.67-.168A5.8 5.8 0 0 0 9.07 5.554c1.986-2.158 3.484-2.812 4.369-2.994-.178.885-.836 2.383-2.994 4.37" /></g><defs><clipPath id="paint-brush-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaintBrushFill);
const Memo = memo(ForwardRef);
export default Memo;