import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSeatbeltFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#seatbelt-fill_svg__a)"><path fill="#000" d="M8 7a2.75 2.75 0 1 1 0-5.5A2.75 2.75 0 0 1 8 7m4.5 6.5H4.823l7.508-6.625a.5.5 0 0 0 .17-.392.5.5 0 0 0-.832-.358l-1.533 1.353a5 5 0 0 0-7.073 3.725 1 1 0 0 0-.007.069L3 13.989a.5.5 0 0 0 .5.511h9a.5.5 0 0 0 0-1m-.742-4.562a.5.5 0 0 0-.391.12l-3.9 3.442H12.5a.5.5 0 0 0 .5-.5 4.97 4.97 0 0 0-.892-2.851.5.5 0 0 0-.35-.211" /></g><defs><clipPath id="seatbelt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSeatbeltFill);
const Memo = memo(ForwardRef);
export default Memo;